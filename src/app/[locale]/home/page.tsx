import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>{t("title")}</p>
    </main>
  );
}
