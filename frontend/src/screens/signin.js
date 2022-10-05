import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Chakra imports
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  DarkMode,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";

// Assets
import signUpImage from "../assets/images/signUpImage.png";

// Custom Components
import GradientBorder from "../widgets/gradientborder/gradientborder";
import { stateUpdate, authData } from "../redux/auth/authslice";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  let userDetails = useSelector(authData);
  const titleColor = "white";
  const textColor = "gray.400";
  const dispatch = useDispatch();

  const validateForm = () => {
    let formIsValid = true;
    setEmailErr("");
    setPasswordErr("");

    if (email === "" || email === null || email.trim() === "") {
      formIsValid = false;
      setEmailErr("Please enter your email");
      return;
    }

    if (password === "" || password === null || password.trim() === "") {
      formIsValid = false;
      setPasswordErr("Please enter your password");
      return;
    }
    if (
      email.toString() !== "student@gmail.com" &&
      email.toString() !== "teacher@gmail.com"
    ) {
      formIsValid = false;
      setEmailErr("Email id is incorrect");
      return;
    }
    if (password !== "student@123" && password !== "teacher@123") {
      formIsValid = false;
      setPasswordErr("Password is Incorrect");
      return;
    }

    if (formIsValid === true) {
      saveTokenAndNavigate();
      return;
    }
  };

  const saveTokenAndNavigate = (token) => {
    let userData = { ...userDetails };
    userData.email = email;
    userData.logged = true;

    dispatch(stateUpdate(userData));

    if (email === "student@gmail.com") {
      navigate("/dashboard");
    } else if (email === "teacher@gmail.com") {
      navigate("/teacher");
    }
  };

  return (
    <Flex position="relative">
      <Flex
        minH="100vh"
        h={{ base: "120vh", lg: "fit-content" }}
        w="100%"
        maxW="1044px"
        mx="auto"
        pt={{ sm: "100px", md: "0px" }}
        flexDirection="column"
        me={{ base: "auto", lg: "50px", xl: "auto" }}
      >
        <Flex
          alignItems="center"
          justifyContent="start"
          style={{ userSelect: "none" }}
          mx={{ base: "auto", lg: "unset" }}
          ms={{ base: "auto", lg: "auto" }}
          w={{ base: "100%", md: "50%", lg: "450px" }}
          px="50px"
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            mt={{ base: "50px", md: "150px", lg: "160px", xl: "245px" }}
            mb={{ base: "60px", lg: "95px" }}
          >
            <Heading color={titleColor} fontSize="32px" mb="10px">
              Nice to see you!
            </Heading>
            <Text
              mb="36px"
              ms="4px"
              color={textColor}
              fontWeight="bold"
              fontSize="14px"
            >
              Enter your email and password to sign in
            </Text>
            <FormControl>
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="normal"
                color="white"
              >
                Email
              </FormLabel>
              <GradientBorder
                mb="24px"
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius="20px"
              >
                <Input
                  color="white"
                  bg="rgb(19,21,54)"
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  h="46px"
                  placeholder="Your email adress"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </GradientBorder>
              <Text color="red">{emailErr}</Text>
            </FormControl>
            <FormControl>
              <FormLabel
                ms="4px"
                fontSize="sm"
                fontWeight="normal"
                color="white"
              >
                Password
              </FormLabel>
              <GradientBorder
                mb="24px"
                w={{ base: "100%", lg: "fit-content" }}
                borderRadius="20px"
              >
                <Input
                  color="white"
                  bg="rgb(19,21,54)"
                  border="transparent"
                  borderRadius="20px"
                  fontSize="sm"
                  size="lg"
                  w={{ base: "100%", md: "346px" }}
                  maxW="100%"
                  type="password"
                  placeholder="Your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </GradientBorder>
              <Text color="red">{passwordErr}</Text>
            </FormControl>
            <FormControl display="flex" alignItems="center">
              <DarkMode>
                <Switch id="remember-login" colorScheme="brand" me="10px" />
              </DarkMode>
              <FormLabel
                htmlFor="remember-login"
                mb="0"
                ms="1"
                fontWeight="normal"
                color="white"
              >
                Remember me
              </FormLabel>
            </FormControl>
            <Button
              variant="brand"
              fontSize="10px"
              type="submit"
              w="100%"
              maxW="350px"
              h="45"
              mb="20px"
              mt="20px"
              onClick={() => validateForm()}
            >
              SIGN IN
            </Button>

            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              maxW="100%"
              mt="0px"
            >
              <Text color={textColor} fontWeight="medium">
                Don't have an account?
                <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                  Sign Up
                </Link>
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", lg: "block" }}
          overflowX="hidden"
          h="1300px"
          maxW={{ md: "50vw", lg: "48vw" }}
          w="960px"
          position="absolute"
          left="0px"
        >
          <Box
            bgImage={signUpImage}
            w="100%"
            h="1300px"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              textAlign="center"
              color="white"
              letterSpacing="8px"
              fontSize="20px"
              fontWeight="500"
            >
              INSPIRED BY THE FUTURE:
            </Text>
            <Text
              textAlign="center"
              color="transparent"
              letterSpacing="8px"
              fontSize="36px"
              fontWeight="bold"
              bgClip="text !important"
              bg="linear-gradient(94.56deg, #FFFFFF 79.99%, #21242F 102.65%)"
            >
              THE VISION OF VIDYA
            </Text>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SignIn;
