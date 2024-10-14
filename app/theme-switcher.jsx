"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <Switch
        isSelected={theme === "dark"} // Syncs with current theme
        size="lg"
        color="success"
        onChange={handleTheme} // Trigger change on toggle
        startContent={<FontAwesomeIcon icon={faToggleOn} />} // Sun icon for light mode
        endContent={<FontAwesomeIcon icon={faToggleOff} />} // Moon icon for dark mode
      />
    </div>
  );
};

export default ThemeSwitcher;
