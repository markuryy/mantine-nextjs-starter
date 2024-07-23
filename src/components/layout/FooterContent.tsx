import { Text } from "@mantine/core";
import Link from "next/link";

export function FooterContent() {
  return (
    <Text style={{ textAlign: 'center' }} size="sm">
      A <Link href="https://markury.dev">Markury</Link> Project 2024
    </Text>
  );
}
