"use client";

import {
  Box,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

export function ToggleTheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const handleToggleScheme = () => {
    if (computedColorScheme === "dark") return setColorScheme("light");

    return setColorScheme("dark");
  };

  return (
    <Box
      className="text-mtn-primary-filled dark:text-mtn-primary-0 group relative flex size-[30px] cursor-pointer items-center justify-center"
      onClick={handleToggleScheme}
    >
      <IconSun
        data-active={computedColorScheme === "light"}
        className={`data-active:block absolute inset-0 mx-auto my-auto  size-[28px] transition-all group-hover:animate-pulse Z-50 text-white ${
          computedColorScheme === "dark" ? "hidden" : ""
        }`}
      />
      <IconMoon
        data-active={computedColorScheme === "dark"}
        className={`data-active:block absolute inset-0 mx-auto my-auto  size-[28px] transition-all group-hover:animate-pulse Z-50 ${
          computedColorScheme === "light" ? "hidden" : ""
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Box>
  );
}
