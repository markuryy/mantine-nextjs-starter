'use client';

import { AppShell, ColorSchemeScript, MantineProvider } from "@mantine/core";
import { NavbarContent } from "./NavbarContent";
import { FooterContent } from "./FooterContent";
import { useColorScheme } from '@mantine/hooks';
import { useState } from 'react';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('dark');

  const toggleColorScheme = (value?: 'light' | 'dark') => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      <ColorSchemeScript />
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <AppShell
          padding="md"
          navbar={{
            width: 80,
            breakpoint: 'sm',
          }}
          footer={{
            height: 60,
          }}
        >
          <AppShell.Navbar>
            <NavbarContent />
          </AppShell.Navbar>

          <AppShell.Main>{children}</AppShell.Main>

          <AppShell.Footer p="md">
            <FooterContent />
          </AppShell.Footer>
        </AppShell>
      </MantineProvider>
    </>
  );
}
