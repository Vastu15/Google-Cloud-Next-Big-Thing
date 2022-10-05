import {
  Avatar,
  Badge,
  Button,
  Flex,
  Icon,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Stack,
  CircularProgress,
  CircularProgressLabel,
  Box,
} from "@chakra-ui/react";
import Card from "../../widgets/cards/card";
import CardBody from "../../widgets/cards/cardbody";
import CardHeader from "../../widgets/cards/cardheader";
import { BiHappy } from "react-icons/bi";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import {
  IoCheckmarkDoneCircleSharp,
  IoEllipsisHorizontal,
} from "react-icons/io5";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  AspectRatio,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import IconBox from "../../widgets/icons/iconbox";
import medusa from "../../assets/images/bluecover.png";

function TablesTableRow(props) {
  const { logo, name, email, subdomain, domain, status, date, lastItem } =
    props;
  const textColor = useColorModeValue("gray.700", "white");
  const bgStatus = useColorModeValue("gray.400", "#1a202c");
  const colorStatus = useColorModeValue("white", "gray.400");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Tr>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" bg={"#000"}>
        <ModalOverlay />
        <ModalContent bgImage={medusa}>
          <ModalHeader color="#fff">Student Report</ModalHeader>
          <ModalCloseButton color="#fff" />
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
      <Td
        minWidth={{ sm: "250px" }}
        ps="0px"
        border={lastItem ? "none" : null}
        borderBottomColor="#56577A"
      >
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar
            src={logo}
            w="50px"
            borderRadius="12px"
            me="18px"
            border="none"
          />
          <Flex direction="column">
            <Text
              fontSize="sm"
              color="#fff"
              fontWeight="normal"
              minWidth="100%"
            >
              {name}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {email}
            </Text>
          </Flex>
        </Flex>
      </Td>

      {/* <Td
        border={lastItem ? "none" : null}
        borderBottomColor="#56577A"
        minW="150px"
      >
        <Flex direction="column">
          <Text fontSize="sm" color="#fff" fontWeight="normal">
            {domain}
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {subdomain}
          </Text>
        </Flex>
      </Td> */}
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Badge
          bg={status === "Online" ? "green.400" : "transparent"}
          color={status === "Online" ? "white" : colorStatus}
          fontSize="sm"
          p="3px 10px"
          borderRadius="8px"
          border={status === "Online" ? "none" : "1px solid #fff"}
          fontWeight="normal"
        >
          {status}
        </Badge>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Text fontSize="sm" color="#fff" fontWeight="bold" pb=".5rem">
          <Icon
            as={AiOutlineEye}
            color="green.500"
            w="35px"
            h="35px"
            me="5px"
            onClick={onOpen}
            cursor="pointer"
          />
        </Text>
      </Td>
      <Td border={lastItem ? "none" : null} borderBottomColor="#56577A">
        <Button p="0px" bg="transparent" variant="no-hover">
          <Text
            fontSize="sm"
            color="gray.400"
            fontWeight="bold"
            cursor="pointer"
          >
            Edit
          </Text>
        </Button>
      </Td>
    </Tr>
  );
}

export default TablesTableRow;
