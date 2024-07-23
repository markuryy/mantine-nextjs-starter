import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider, createTheme } from "@mantine/core";
import '@mantine/core/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import { AppShellDemo } from '../components/AppShellDemo';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Markury",
  description: "A Markury Project",
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <AppShellDemo>{children}</AppShellDemo>
        </MantineProvider>
      </body>
    </html>
  );
}
