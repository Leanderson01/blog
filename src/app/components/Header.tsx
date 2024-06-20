"use client";

import { Group } from "@mantine/core";
import LanguageSwitcher from "./LanguageSwitcher";
import { ToggleTheme } from "./ToggleTheme";

export default function Header() {
  return (
    <header className="w-full">
      <Group className="p-4 bg-black w-full" justify="end">
        <LanguageSwitcher />
        <ToggleTheme />
      </Group>
    </header>
  );
}
