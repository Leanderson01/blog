"use client";

import { Select } from "@mantine/core";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();
  const localActive = useLocale();
  const [selectedLanguage, setSelectedLanguage] = useState(localActive);
  const pathname = usePathname();

  const handleChange = (value: string | null) => {
    if (value) {
      setSelectedLanguage(value);
      if (value !== localActive) {
        const newPath = pathname.replace(`/${localActive}`, `/${value}`);
        router.replace(newPath);
      }
    } else {
      setSelectedLanguage(localActive);
    }
  };

  return (
    <Select
      value={selectedLanguage}
      onChange={handleChange}
      data={[
        { value: "en", label: "English" },
        { value: "pt-BR", label: "Português" },
      ]}
    />
  );
}
