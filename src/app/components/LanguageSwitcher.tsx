"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";

export default function LanguageSwitcher() {
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = event.target.value;

    router.replace(`/${nextLocale}`);
  };

  const localActive = useLocale();

  return (
    <select onChange={handleChange} defaultValue={localActive}>
      <option value="en">English</option>
      <option value="pt-BR">Português</option>
    </select>
  );
}
