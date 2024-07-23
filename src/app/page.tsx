import { Title, Text, Stack } from "@mantine/core";

export default function Home() {
  return (
    <Stack align="center" justify="center" h="100%">
      <Title order={1}>Welcome to Markury</Title>
      <Text>This is the home page of your Markury project.</Text>
    </Stack>
  );
}
