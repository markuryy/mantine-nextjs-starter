import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MantineProvider, createTheme, AppShell, Tooltip, UnstyledButton, Stack, Text } from "@mantine/core";
import '@mantine/core/styles.css';
import { LuSparkles, LuHome, LuApple, LuSettings, LuFileText, LuActivity } from "react-icons/lu";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Markury",
  description: "A Markury Project",
};

const theme = createTheme({
  /** Put your mantine theme override here */
});

const SidebarButton = ({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) => (
  <Tooltip label={label} position="right" withArrow>
    <UnstyledButton component={Link} href={href} p="xs">
      <Icon size={24} />
    </UnstyledButton>
  </Tooltip>
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <MantineProvider theme={theme}>
        <body className={inter.className}>
          <AppShell
            padding="md"
            navbar={{ width: 80, breakpoint: 'sm' }}
            footer={{ height: 60 }}
          >
            <AppShell.Navbar p="md">
              <Stack justify="space-between" h="100%">
                <Stack align="center" gap="xl">
                  <Tooltip label="Markury" position="right" withArrow>
                    <UnstyledButton component={Link} href="/">
                      <LuSparkles size={32} />
                    </UnstyledButton>
                  </Tooltip>
                  <Stack gap="lg">
                    <SidebarButton icon={LuHome} label="Home" href="/" />
                    <SidebarButton icon={LuActivity} label="App" href="/app" />
                    <SidebarButton icon={LuSettings} label="Settings" href="/settings" />
                    <SidebarButton icon={LuFileText} label="Docs" href="/docs" />
                  </Stack>
                </Stack>
              </Stack>
            </AppShell.Navbar>

            <AppShell.Main>{children}</AppShell.Main>

            <AppShell.Footer p="md">
              <Text ta="center" size="sm">
                A Markury Project 2024 | <Link href="https://markury.dev">markury.dev</Link>
              </Text>
            </AppShell.Footer>
          </AppShell>
        </body>
      </MantineProvider>
    </html>
  );
}
