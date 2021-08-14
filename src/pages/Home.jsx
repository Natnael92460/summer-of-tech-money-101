import { Box, HStack } from "@chakra-ui/react"


export const Home = () => {
  const boxHeight = 30;
  return (
    <div>
      <h1>Home</h1>
      <HStack spacing="24px">
      <Box bg="tomato" w="100%" p={boxHeight} color="white">
        This is the Box1
      </Box>
      <Box bg="green" w="100%" p={boxHeight} color="white">
        This is the Box2
      </Box>
      <Box bg="blue" w="100%" p={boxHeight} color="white">
        This is the Box3
      </Box>
      </HStack>
    </div>
  );
};
