import {
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Image,
  Icon,
  Stack,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
// Styles for the circular progressbar
// Custom components
import Card from "../widgets/cards/card";
import CardHeader from "../widgets/cards/cardheader";
import IconBox from "../widgets/icons/iconbox";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import AvatarOne from "../assets/images/avatartwo.jpg";
import AvatartTwo from "../assets/images/avatarthree.jpg";
import { BiHappy } from "react-icons/bi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import medusa from "../assets/images/bluecover.png";
import { IoEllipsisHorizontal } from "react-icons/io5";
// Data
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import CameraOff from "../assets/images/meetingcontrols/cameraOff.png";
import Chat from "../assets/images/meetingcontrols/chat.png";
import Exit from "../assets/images/meetingcontrols/exit.png";
import Hand from "../assets/images/meetingcontrols/hand.png";
import Mic from "../assets/images/meetingcontrols/mic.png";
import ScreenShare from "../assets/images/meetingcontrols/screenShare.png";
import { useNavigate } from "react-router-dom";

const LiveClass = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  var videoUrl =
    "https://resonancehack.s3.ap-south-1.amazonaws.com/result_voice.mp4";
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" bg={"#000"}>
        <ModalOverlay />
        <ModalContent bgImage={medusa}>
          <ModalHeader color="#fff">Student Report</ModalHeader>
          <ModalCloseButton
            color="#fff"
            onClick={() => navigate("/dashboard")}
          />
          <ModalBody overflowY="scroll">
            <Flex
              alingItems="flex-start"
              justifyContent="space-between"
              gap={10}
              direction="column"
            >
              <Card gridArea={{ md: "3 / 1 / 4 / 2", "2xl": "auto" }}>
                <CardHeader mb="24px">
                  <Flex direction="column">
                    <Text color="#fff" fontSize="lg" fontWeight="bold" mb="4px">
                      Emotion Analysis
                    </Text>
                    <Text color="gray.400" fontSize="sm">
                      From Student Face Expression
                    </Text>
                  </Flex>
                </CardHeader>
                <Flex direction="column" justify="center" align="center">
                  <Box zIndex="100">
                    <CircularProgress
                      size={200}
                      value={80}
                      thickness={6}
                      color="#582CFF"
                      variant="vision"
                      rounded
                      zIndex={100}
                    >
                      <CircularProgressLabel>
                        <IconBox
                          mb="20px"
                          mx="auto"
                          bg="brand.200"
                          borderRadius="50%"
                          w="48px"
                          h="48px"
                        >
                          <Icon as={BiHappy} color="#fff" w="30px" h="30px" />
                        </IconBox>
                      </CircularProgressLabel>
                    </CircularProgress>
                  </Box>
                  <Stack
                    direction="row"
                    spacing={{ sm: "42px", md: "68px" }}
                    justify="center"
                    maxW={{ sm: "270px", md: "300px", lg: "100%" }}
                    mx={{ sm: "auto", md: "0px" }}
                    p="18px 22px"
                    bg="linear-gradient(126.97deg, rgb(6, 11, 40) 28.26%, rgba(10, 14, 35) 91.2%)"
                    borderRadius="20px"
                    position="absolute"
                    bottom="10%"
                    left="22%"
                  >
                    <Text fontSize="xs" color="gray.400">
                      0%
                    </Text>
                    <Flex direction="column" align="center" minW="80px">
                      <Text color="#fff" fontSize="28px" fontWeight="bold">
                        85%
                      </Text>
                    </Flex>
                    <Text fontSize="xs" color="gray.400">
                      100%
                    </Text>
                  </Stack>
                </Flex>
              </Card>
              <Card gridArea={{ md: "3 / 2 / 4 / 3", "2xl": "auto" }}>
                <Flex direction="column">
                  <Flex justify="space-between" align="center" mb="40px">
                    <Text color="#fff" fontSize="lg" fontWeight="bold">
                      Focus Rate
                    </Text>
                    <Button
                      borderRadius="12px"
                      w="38px"
                      h="38px"
                      bg="#22234B"
                      _hover="none"
                      _active="none"
                    >
                      <Icon as={IoEllipsisHorizontal} color="#7551FF" />
                    </Button>
                  </Flex>
                  <Flex direction={{ sm: "column", md: "row" }}>
                    <Flex
                      direction="column"
                      me={{ md: "6px", lg: "52px" }}
                      mb={{ sm: "16px", md: "0px" }}
                    >
                      <Flex
                        direction="column"
                        p="22px"
                        pe={{ sm: "22e", md: "8px", lg: "22px" }}
                        minW={{ sm: "220px", md: "140px", lg: "220px" }}
                        bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                        borderRadius="20px"
                        mb="20px"
                      >
                        <Text color="gray.400" fontSize="sm" mb="4px">
                          Distracted
                        </Text>
                        <Text color="#fff" fontSize="lg" fontWeight="bold">
                          17 times
                        </Text>
                      </Flex>
                      <Flex
                        direction="column"
                        p="22px"
                        pe={{ sm: "22px", md: "8px", lg: "22px" }}
                        minW={{ sm: "170px", md: "140px", lg: "170px" }}
                        bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
                        borderRadius="20px"
                      >
                        <Text color="gray.400" fontSize="sm" mb="4px">
                          Talking
                        </Text>
                        <Text color="#fff" fontSize="lg" fontWeight="bold">
                          5 times
                        </Text>
                      </Flex>
                    </Flex>
                    <Box mx={{ sm: "auto", md: "0px" }}>
                      <CircularProgress
                        size={
                          window.innerWidth >= 1024
                            ? 200
                            : window.innerWidth >= 768
                            ? 170
                            : 200
                        }
                        value={70}
                        thickness={6}
                        color="#05CD99"
                        variant="vision"
                      >
                        <CircularProgressLabel>
                          <Flex
                            direction="column"
                            justify="center"
                            align="center"
                          >
                            <Text
                              color="#fff"
                              fontSize={{ md: "36px", lg: "50px" }}
                              fontWeight="bold"
                              mb="4px"
                            >
                              9.3
                            </Text>
                            <Text color="gray.400" fontSize="sm">
                              Total Score
                            </Text>
                          </Flex>
                        </CircularProgressLabel>
                      </CircularProgress>
                    </Box>
                  </Flex>
                </Flex>
              </Card>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        gap={5}
      >
        <Flex flex={3}>
          <Card>
            <AspectRatio ratio={1.7}>
              <iframe title="naruto" src={videoUrl} allowFullScreen />
            </AspectRatio>
          </Card>
        </Flex>
        <Flex flex={1}>
          <Stack direction="column" gap={2}>
            <Box
              bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
              borderRadius="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="18vw"
              height="18vh"
            >
              <Image
                boxSize="60px"
                objectFit="cover"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
                borderRadius="full"
              />
            </Box>
            <Box
              bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
              borderRadius="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              width="18vw"
              height="18vh"
            >
              <Image
                boxSize="60px"
                objectFit="cover"
                src={AvatarOne}
                alt="Dan Abramov"
                borderRadius="full"
              />
            </Box>
            <Box
              bg="linear-gradient(126.97deg, #060C29 28.26%, rgba(4, 12, 48, 0.5) 91.2%)"
              borderRadius="20px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              minWidth="18vw"
              minHeight="18vh"
            >
              <Image
                boxSize="60px"
                objectFit="cover"
                src={AvatartTwo}
                alt="Dan Abramov"
                borderRadius="full"
              />
            </Box>
          </Stack>
        </Flex>
      </Flex>
      <Card mt={5} bg="#181818">
        <Flex justifyContent="space-between" alingItems="center">
          <Flex></Flex>
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={5}
          >
            <Image
              boxSize="20px"
              objectFit="cover"
              src={Mic}
              alt="Dan Abramov"
              border={1}
              borderColor={"#fff"}
            />
            <Image
              boxSize="20px"
              src={CameraOff}
              alt="Dan Abramov"
              border={2}
              borderColor={"#ffffff"}
            />
            <Image
              boxSize="20px"
              objectFit="cover"
              src={Hand}
              alt="Dan Abramov"
              border={1}
              borderColor={"#fff"}
            />
            <Image
              boxSize="20px"
              objectFit="cover"
              src={ScreenShare}
              alt="Dan Abramov"
              border={1}
              borderColor={"#fff"}
            />
            <Image
              onClick={onOpen}
              boxSize="20px"
              objectFit="cover"
              src={Exit}
              alt="Dan Abramov"
              border={1}
              borderColor={"#fff"}
              cursor="pointer"
            />
          </Flex>
          <Flex
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            gap={5}
          >
            <IconBox
              bg="transparent"
              color="white"
              h="20px"
              w="20px"
              onClick={onOpen}
            >
              <AiOutlineInfoCircle width="20px" height="20px" color="white" />
            </IconBox>

            <Image
              boxSize="20px"
              objectFit="cover"
              src={Chat}
              alt="Dan Abramov"
              border={1}
              borderColor={"#fff"}
            />
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
};

export default LiveClass;
