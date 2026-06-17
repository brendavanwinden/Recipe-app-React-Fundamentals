import { RecipeListPage } from "./pages/RecipeListPage";
import { Box } from "@chakra-ui/react";
import {
  ColorModeProvider,
  ColorModeButton,
  useColorModeValue,
} from "./components/ui/color-mode";

const AppContent = () => {
  const bg = useColorModeValue("#fdf6f0", "#38182F");
const colorModeHover = useColorModeValue("#38182F", "#fdf6f0");


  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DynaPuff:wght@400..700&display=swap');
      `}</style>
      <ColorModeButton
        position="fixed"
        top="20px"
        right="20px"
        zIndex={999}
        _hover={{
          background: "transparent",
          boxShadow: `0px 0px 10px ${colorModeHover}`,
          borderRadius: "50%",
        }}
      />
      <Box fontFamily="'DynaPuff', sans-serif" background={bg}>
        <RecipeListPage />
      </Box>
    </>
  );
};

export const App = () => {
  return (
    <ColorModeProvider>
      <AppContent />
    </ColorModeProvider>
  );
};
