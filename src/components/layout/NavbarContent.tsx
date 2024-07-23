import { Tooltip, UnstyledButton, Stack } from "@mantine/core";
import { LuSparkles, LuSettings, LuCroissant, LuHelpCircle } from "react-icons/lu";
import Link from "next/link";

const SidebarButton = ({ icon: Icon, label, href }: { icon: React.ElementType; label: string; href: string }) => (
  <Tooltip label={label} position="right" withArrow>
    <UnstyledButton component={Link} href={href} p="xs">
      <Icon size={24} />
    </UnstyledButton>
  </Tooltip>
);

export function NavbarContent() {
  return (
    <Stack justify="space-between" h="100%" p="md">
      <Stack align="center" gap="xl">
        <Tooltip label="Home" position="right" withArrow>
          <UnstyledButton component={Link} href="/">
            <LuSparkles size={32} />
          </UnstyledButton>
        </Tooltip>
        <Stack gap="lg">
          <SidebarButton icon={LuCroissant} label="App" href="/" />
          <SidebarButton icon={LuSettings} label="Settings" href="/settings" />
          <SidebarButton icon={LuHelpCircle} label="Docs" href="/docs" />
        </Stack>
      </Stack>
    </Stack>
  );
}
