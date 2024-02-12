import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  HStack,
  Heading,
  ListIcon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
// import { myTasks } from "../../data/db";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const tasksLoader = async () => {
    try {
      const res = await axios.get("http://localhost:3000/tasks");
      setTasks(res.data);
      console.log(res.data);
    } catch (error) {
      console.log("error encountered: ", error);
    }
  };

  useEffect(() => tasksLoader, []);

  return (
    <SimpleGrid spacing={10} minChildWidth="250px">
      {tasks &&
        tasks.map((task) => (
          <Card
            key={task.id}
            borderTop={"8px"}
            borderColor={"purple.400"}
            bg={"white"}
          >
            <CardHeader>
              <Flex gap="5px">
                <Box w="50px" h="50px">
                  AV
                </Box>
                <Box>
                  <Heading as="h3" size="small">
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody>{task.description}</CardBody>
            <Divider borderColor="gray.200" />
            <CardFooter>
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>
                  Watch
                </Button>
                <Button variant="ghost" leftIcon={<EditIcon />}>
                  Comment
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
      {/* <Box bg="white" h="200px" border="1px">
        <Text color={{ base: "black", sm: "orange", md: "green" }}>hello</Text>
      </Box> */}
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
