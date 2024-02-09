import { Box, SimpleGrid, Text } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <SimpleGrid spacing={10} minChildWidth="250px">
      <Box bg="white" h="200px" border="1px">
        <Text color={{ base: "black", sm: "orange", md: "green" }}>hello</Text>
      </Box>
      <Box bg="white" h="200px" border="1px"></Box>
      <Box bg="white" h="200px" border="1px"></Box>
      <Box bg="white" h="200px" border="1px"></Box>

      <Box bg="white" h="200px" border="1px"></Box>
      <Box bg="white" h="200px" border="1px"></Box>
      <Box bg="white" h="200px" border="1px"></Box>
      <Box bg="white" h="200px" border="1px"></Box>

      <Box bg="white" h="200px" border="1px"></Box>
      <Box bg="white" h="200px" border="1px"></Box>
      <Box bg="white" h="200px" border="1px"></Box>
      <Box bg="white" h="200px" border="1px"></Box>
    </SimpleGrid>

    // {*Lesson 2*}
    // <Container as="section" maxWidth="4xl" py="20px">
    //   <Heading my="30px" p="10px">
    //     Chakra UI Components
    //   </Heading>
    //   <Text ml="30px">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, a!
    //   </Text>
    //   <Text ml="30px" color="blue">
    //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, a!
    //   </Text>

    //   <Box my="30px" p="20px" bg="orange">
    //     <Text color="white">This is a box</Text>
    //   </Box>

    //   <Box sx={boxStyles}>Hello ninjas</Box>
    // </Container>
  );
}
