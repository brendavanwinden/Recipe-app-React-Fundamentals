import { useEffect, useState } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export function ColorModeToggle() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ButtonGroup isAttached size="sm" aria-label="Theme toggle">
      <Button onClick={() => setTheme("light")}>Light</Button>
      <Button onClick={() => setTheme("dark")}>Dark</Button>
    </ButtonGroup>
  );
}
