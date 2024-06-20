"use client";

import "../styles/globals.css";
import Header from "../components/Header";
import "@mantine/core/styles.css";
import { MantineProvider, createTheme } from "@mantine/core";

type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string;
  };
};

const theme = createTheme({
  fontFamily: "Inter, sans-serif",
});

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>
      <body>
        <MantineProvider theme={theme}>
          <Header />
          {children}
          <footer className="flex justify-center p-4 bg-gray-800 text-white">
            <p>© {new Date().getFullYear()} My App</p>
          </footer>
        </MantineProvider>
      </body>
    </html>
  );
}
