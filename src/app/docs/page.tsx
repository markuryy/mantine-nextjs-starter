import { Title, Text, Stack, Container } from "@mantine/core";
import docsData from '../../data/docs.json';

export default function DocsPage() {
  return (
    <Container size="md">
      <Stack>
        <Title order={1}>{docsData.title}</Title>
        {docsData.content.map((paragraph, index) => (
          <Text key={index}>{paragraph}</Text>
        ))}
      </Stack>
    </Container>
  );
}
