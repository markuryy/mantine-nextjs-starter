'use client';

import { AppShell, Tooltip, UnstyledButton, Stack, Text } from "@mantine/core";
import { LuSparkles, LuSettings, LuCroissant, LuHelpCircle } from "react-icons/lu";
import Link from "next/link";
import { NavbarContent } from "./NavbarContent";
import { FooterContent } from "./FooterContent";

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
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
  );
}
