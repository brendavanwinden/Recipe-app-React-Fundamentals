import { useState } from "react";
import { data } from "../utils/data";
import {
  Center,
  Badge,
  Box,
  Text,
  Heading,
  Image,
  Input,
} from "@chakra-ui/react";
import RecipePage from "./RecipePage";
import { useColorModeValue } from "../components/ui/color-mode";

const RecipeCard = ({ recipe, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const cardBg = useColorModeValue("#fffef8", "#fdf6f0");
  const textColor = useColorModeValue("#424242", "#000000");
  const shadowHover = useColorModeValue(
    "0px 8px 16px rgba(0, 0, 0, 0.2)",
    "0px 8px 16px rgba(253, 246, 240, 0.6)",
  );
  const shadowRest = useColorModeValue(
    "0px 2px 8px rgba(0, 0, 0, 0.08)",
    "0px 2px 8px rgba(253, 246, 240, 0.2)",
  );

  return (
    <Box
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      cursor="pointer"
      border="1px solid #ddd"
      borderRadius="12px"
      width="320px"
      margin="12px"
      height="500px"
      overflow="hidden"
      boxShadow={hovered ? shadowHover : shadowRest}
      transition="box-shadow 0.3s ease"
      background={cardBg}
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        width="100%"
        height="200px"
        objectFit="cover"
      />
      <Text
        textAlign="center"
        fontSize="11.5px"
        marginTop="15px"
        fontWeight={400}
        color={textColor}
      >
        {recipe.mealType.join(", ").toUpperCase()}
      </Text>
      <Text textAlign="center" fontSize="8px" color={textColor}>
        {recipe.dishType.join(", ").toUpperCase()}
      </Text>

      <Box
        padding="16px"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        gap="8px"
      >
        <Heading
          as="h2"
          fontSize="19px"
          fontWeight={400}
          fontFamily="'DynaPuff', cursive"
          marginBottom="15px"
          textAlign="center"
          color={textColor}
        >
          {recipe.label}
        </Heading>

        <Box display="flex" flexWrap="wrap" gap="4px" justifyContent="center">
          {recipe.dietLabels.map((dietLabels) => (
            <Badge key={dietLabels} colorPalette="green">
              {dietLabels}
            </Badge>
          ))}
        </Box>

        <Box display="flex" flexDirection="row" justifyContent="space-around">
          {recipe.healthLabels.includes("Vegan") && (
            <Text marginTop={8} textAlign="center" color={textColor}>
              🌱 Vegan
            </Text>
          )}
          {recipe.healthLabels.includes("Vegetarian") && (
            <Text marginTop={8} textAlign="center" color={textColor}>
              🥦 Vegetarian
            </Text>
          )}
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          gap="4px"
          justifyContent="center"
          marginTop={8}
        >
          {recipe.cautions.map((caution) => (
            <Badge key={caution} colorPalette="red">
              {caution}
            </Badge>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export const RecipeListPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [clicked, setClicked] = useState();
  const [hovered, setHovered] = useState(false);

  const textColor = useColorModeValue("#424242", "#fdf6f0");
  const searchBg = useColorModeValue("#fffef8", "#fdf6f0");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = (recipe) => {
    setClicked(recipe);
  };

  if (clicked) {
    return <RecipePage recipe={clicked} onBack={() => setClicked()} />;
  }

  const filteredRecipes = data.hits.filter((hit) => {
    return (
      hit.recipe.label
        .toLowerCase()
        .replace(/[-\s]/g, "")
        .includes(searchInput.toLowerCase().replace(/[-\s]/g, "")) ||
      hit.recipe.healthLabels.some((label) =>
        label
          .toLowerCase()
          .replace(/[-\s]/g, "")
          .includes(searchInput.toLowerCase().replace(/[-\s]/g, "")),
      )
    );
  });

  return (
    <Center flexDirection="column">
      <Heading
        as="h1"
        fontSize={{ base: "30px", md: "45px", lg: "60px" }}
        fontWeight={600}
        textAlign="center"
        mt={{ base: "30px", md: "60px" }}
        mb="20px"
        fontFamily="'DynaPuff', cursive"
        color={textColor}
        textShadow="0px 0px 5px rgba(253, 246, 240, 0.8)"
        mb= "50px"
      >
        Your recipes
      </Heading>

      <Input
        type="search"
        value={searchInput}
        onChange={handleChange}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        placeholder="Search for your recipe"
        _placeholder={{ color: "gray.500", textAlign: "center" }}
        fontSize={{ base: "10px", md: "14px", lg: "16px" }}
        border="1px solid black"
        borderRadius="4px"
        padding="8px"
        width="40vw"
        marginBottom="40px"
        textAlign="center"
        background={searchBg}
        boxShadow={
          hovered
            ? "0px 8px 10px rgba(253, 246, 240, 0.6)"
            : "0px 2px 8px rgba(253, 246, 240, 0.2)"
        }
      />
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {filteredRecipes.map((hit) => (
          <RecipeCard
            key={hit.recipe.label}
            recipe={hit.recipe}
            onClick={() => handleClick(hit.recipe)}
          />
        ))}
      </Box>
    </Center>
  );
};
