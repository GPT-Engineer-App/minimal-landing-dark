import React from "react";
import { Box, Button, Flex, Link, Text, VStack, useColorMode, IconButton, useColorModeValue, Image } from "@chakra-ui/react";
import { FaMoon, FaSun, FaArrowLeft, FaBookOpen, FaShieldAlt } from "react-icons/fa";

const Index = () => {
  const { toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "whiteAlpha.900");

  return (
    <Box bg={bgColor} color={textColor} minHeight="100vh">
      <Flex justifyContent="space-between" alignItems="center" p={4}>
        <Image src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsb2dvfGVufDB8fHx8MTcwODkwNTQwMXww&ixlib=rb-4.0.3&q=80&w=1080" height="50px" />
        <IconButton icon={useColorModeValue(<FaMoon />, <FaSun />)} isRound size="md" alignSelf="flex-end" onClick={toggleColorMode} variant="ghost" />
      </Flex>
      <VStack spacing={4} mt={10} textAlign="center">
        <Text fontSize="lg">You have been redirected here from Paddle</Text>
        <Text fontSize="lg">Click here to return to Brewfather or contact support if you have any problems or questions.</Text>
        <Button leftIcon={<FaArrowLeft />} colorScheme="blue">
          Return to Brewfather
        </Button>
        <Flex direction="column" alignItems="center">
          <Link href="#" isExternal color="teal.500">
            <FaBookOpen /> Help & Documentation
          </Link>
          <Link href="#" isExternal color="teal.500">
            <FaShieldAlt /> Our Privacy Policy
          </Link>
          <Link href="#" isExternal color="teal.500">
            <FaShieldAlt /> Our Terms of Service
          </Link>
        </Flex>
      </VStack>
    </Box>
  );
};

export default Index;
