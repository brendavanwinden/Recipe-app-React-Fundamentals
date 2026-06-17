import { useEffect } from "react";
import { Badge, Box, Text, Heading, Button, Image } from "@chakra-ui/react";
import { useColorModeValue } from "../components/ui/color-mode";

const RecipePage = ({ recipe, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const cardBg = useColorModeValue("#fffef8", "#fdf6f0");
  const textColor = useColorModeValue("#424242", "#000000");
  const buttonHoverBg = useColorModeValue("#38182F", "#fdf6f0");
  const buttonHoverColor = useColorModeValue("#fdf6f0", "#38182F");
  const bg = useColorModeValue("#fdf6f0", "#38182F");

  return (
    <Box
      background={bg}
      minHeight="100vh"
      paddingTop="20px"
      paddingBottom="40px"
    >
      <Box>
        <Button
          onClick={onBack}
          background={cardBg}
          color={textColor}
          border={`2px solid ${textColor}`}
          marginLeft="20px"
          _hover={{
            background: buttonHoverBg,
            color: buttonHoverColor,
          }}
        >
          🡸 Back
        </Button>
      </Box>
      <Box
        background={cardBg}
        border={`1px solid ${textColor}`}
        borderRadius="4px"
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        width={{ base: "80vw", md: "40vw", lg: "40vw" }}
        margin="auto"
        marginBottom="40px"
        marginTop="40px"
        boxShadow="0px 0px 30px rgba(253, 246, 240, 0.6)"
      >
        <Image
          src={recipe.image}
          alt={recipe.label}
          width="100%"
          height="300px"
          objectFit="cover"
        />

        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row", lg: "row" }}
        >
          {/* LEFT COLUMN */}
          <Box flex="1" padding="24px">
            <Text fontSize="12px" color={textColor}>
              {recipe.mealType.join(", ").toUpperCase()}
            </Text>
            <Text fontSize="8px" color={textColor}>
              {recipe.dishType.join(", ").toUpperCase()}
            </Text>
            <Heading
              as="h1"
              fontSize="28px"
              fontWeight="600"
              marginBottom="12px"
              fontFamily="'Dynapuff', cursive"
              marginTop="10px"
              color={textColor}
            >
              {recipe.label}
            </Heading>
            {recipe.totalTime > 0 && (
              <Text color={textColor}>
                Total cooking time: {recipe.totalTime} minutes
              </Text>
            )}
            <Text color={textColor}>Servings: {recipe.yield}</Text>
            <Heading
              fontWeight="500"
              marginTop="16px"
              fontFamily="'Dynapuff', cursive"
              color={textColor}
            >
              Ingredients:
            </Heading>
            <Box
              as="ul"
              listStyleType="'-  '"
              paddingLeft="20px"
              color={textColor}
              fontSize={{ base: "10px", md: "14px", lg: "14px" }}
            >
              {recipe.ingredientLines.map((ingredient) => (
                <Box as="li" key={ingredient}>
                  {ingredient}
                </Box>
              ))}
            </Box>
          </Box>

          {/* RIGHT COLUMN */}
          <Box flex="1" padding="24px">
            <Text
              fontWeight="500"
              fontFamily="'Dynapuff', cursive"
              color={textColor}
            >
              Health labels:
            </Text>
            <Box
              display="flex"
              flexWrap="wrap"
              gap="4px"
              justifyContent="flex-start"
              color={textColor}
            >
              {recipe.healthLabels.map((healthLabels) => (
                <Badge key={healthLabels} colorPalette="yellow">
                  {healthLabels}
                </Badge>
              ))}
            </Box>

            <Text
              fontWeight="500"
              fontFamily="'Dynapuff', cursive"
              marginTop="16px"
              color={textColor}
            >
              Diet:
            </Text>
            <Box
              display="flex"
              flexWrap="wrap"
              gap="4px"
              justifyContent="left"
              color={textColor}
            >
              {recipe.dietLabels.map((dietLabels) => (
                <Badge key={dietLabels} colorPalette="green">
                  {dietLabels}
                </Badge>
              ))}
            </Box>

            <Text
              marginTop="16px"
              fontWeight="500"
              fontFamily="'Dynapuff', cursive"
              color={textColor}
            >
              Cautions:
            </Text>
            <Box
              display="flex"
              flexWrap="wrap"
              gap="4px"
              justifyContent="left"
              marginTop="8"
              color={textColor}
            >
              {recipe.cautions.map((caution) => (
                <Badge key={caution} colorPalette="red">
                  {caution}
                </Badge>
              ))}
            </Box>

            <Heading
              marginTop="16px"
              textAlign="center"
              fontWeight="500"
              fontFamily="'Dynapuff', cursive"
              color={textColor}
            >
              Total nutrients:
            </Heading>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              gap="16px"
              justifyContent="center"
              fontSize={{ base: "10px", md: "14px", lg: "14px" }}
              color={textColor}
            >
              <Box textAlign="center">
                <Text>
                  {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
                </Text>
                <Text>CALORIES</Text>
              </Box>
              <Box textAlign="center">
                <Text>{Math.round(recipe.totalNutrients.CHOCDF.quantity)}</Text>
                <Text>CARBS</Text>
              </Box>
              <Box textAlign="center">
                <Text>{Math.round(recipe.totalNutrients.PROCNT.quantity)}</Text>
                <Text>PROTEIN</Text>
              </Box>
              <Box textAlign="center">
                <Text>{Math.round(recipe.totalNutrients.FAT.quantity)}</Text>
                <Text>FAT</Text>
              </Box>
              <Box textAlign="center">
                <Text>{Math.round(recipe.totalNutrients.CHOLE.quantity)}</Text>
                <Text>CHOLESTEROL</Text>
              </Box>
              <Box textAlign="center">
                <Text>{Math.round(recipe.totalNutrients.NA.quantity)}</Text>
                <Text>SODIUM</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RecipePage;
