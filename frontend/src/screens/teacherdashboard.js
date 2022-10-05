import {
  Button,
  Flex,
  Grid,
  GridItem,
  Icon,
  Spacer,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
// Styles for the circular progressbar
import medusa from "../assets/images/bluecover.png";
// Custom components
import Card from "../widgets/cards/card";
import CardBody from "../widgets/cards/cardbody";
import CardHeader from "../widgets/cards/cardheader";
import IconBox from "../widgets/icons/iconbox";
// Icons
import TeacherDashboardTableRow from "../widgets/tables/teacherdashboardtablerow";
import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdLocalParking } from "react-icons/md";
import { GiChemicalDrop } from "react-icons/gi";
import { TbMathSymbols } from "react-icons/tb";
import { DiDatabase } from "react-icons/di";
import { Link } from "react-router-dom";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
// Data
import { teacherDashboardTableData } from "../theme/variables/general";

const TeacherDashboard = () => {
  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{
          sm: "1fr ",
          md: "(5, 1fr)",
          "2xl": "2fr 1.2fr 1.5fr",
        }}
        templaterows={{
          sm: "(7, 1fr)",
          md: "(5, 1fr)",
        }}
        my="26px"
        gap="18px"
      >
        {/* Welcome Card */}
        <GridItem
          rowSpan={{ md: 1 }}
          colSpan={5}
          rowStart={1}
          rowEnd={1}
          colStart={1}
          colEnd={5}
        >
          <Card
            p="0px"
            gridArea={{ md: "1 / 1 / 2 / 3", "2xl": "auto" }}
            bgImage={medusa}
            bgSize="cover"
            bgPosition="50%"
          >
            <CardBody w="100%" h="100%">
              <Flex
                flexDirection={{ sm: "column", lg: "row" }}
                w="100%"
                h="100%"
              >
                <Flex
                  flexDirection="column"
                  h="100%"
                  p="22px"
                  minW="60%"
                  lineHeight="1.6"
                >
                  <Text fontSize="sm" color="gray.400" fontWeight="bold">
                    Welcome back,
                  </Text>
                  <Text
                    fontSize="28px"
                    color="#fff"
                    fontWeight="bold"
                    mb="18px"
                  >
                    Professor Mark
                  </Text>
                  <Text
                    fontSize="md"
                    color="gray.400"
                    fontWeight="normal"
                    mb="auto"
                  >
                    Glad to see you again! <br />
                  </Text>
                  <Spacer />
                  {/* <Flex align="center">
                    <Button
                      p="0px"
                      variant="no-hover"
                      bg="transparent"
                      my={{ sm: "1.5rem", lg: "0px" }}
                    >
                      <Text
                        fontSize="sm"
                        color="#fff"
                        fontWeight="bold"
                        cursor="pointer"
                        transition="all .3s ease"
                        my={{ sm: "1.5rem", lg: "0px" }}
                        _hover={{ me: "4px" }}
                      >
                        Tab to record
                      </Text>
                      <Icon
                        as={BsArrowRight}
                        w="20px"
                        h="20px"
                        color="#fff"
                        fontSize="2xl"
                        transition="all .3s ease"
                        mx=".3rem"
                        cursor="pointer"
                        pt="4px"
                        _hover={{ transform: "translateX(20%)" }}
                      />
                    </Button>
                  </Flex> */}
                </Flex>
              </Flex>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem colSpan={{ md: 5 }} colStart={{ md: 1 }} colEnd={{ md: 5 }}>
          <Card>
            <CardHeader mb="20px">
              <Flex direction="column" alignSelf="flex-start">
                <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
                  Past Classes
                </Text>
              </Flex>
            </CardHeader>
            <CardBody>
              <Grid
                columns={{ sm: 1, md: 4, xl: 4 }}
                columnGap={8}
                width={"100%"}
              >
                <GridItem colStart={1} colEnd={1}>
                  <Card minH="90px">
                    <CardBody>
                      <Flex
                        alignItems="flex-start"
                        direction="column"
                        justifyContent="flex-start"
                        gap={5}
                      >
                        <Flex
                          alignItems="flex-start"
                          direction="row"
                          justifyContent="flex-start"
                        >
                          <IconBox
                            bg="brand.200"
                            color="white"
                            h="30px"
                            w="30px"
                            me="12px"
                          >
                            <MdLocalParking color="inherit" />
                          </IconBox>
                          <Text color={"#ffffff"} my="auto" fontSize="lg">
                            Physics
                          </Text>
                        </Flex>
                        <Flex
                          alignItems="flex-start"
                          direction="column"
                          justifyContent="flex-start"
                          gap={5}
                        >
                          <Flex
                            alignItems="center"
                            direction="row"
                            justifyContent="flex-start"
                            gap={5}
                          >
                            <AiOutlineCalendar color="#ffffff" />
                            <Text color={"#ffffff"} my="auto" fontSize="sm">
                              05/10/2022
                            </Text>
                          </Flex>
                          <Flex
                            alignItems="center"
                            direction="row"
                            justifyContent="flex-start"
                            gap={5}
                          >
                            <AiOutlineClockCircle color="#ffffff" />
                            <Text color={"#ffffff"} my="auto" fontSize="sm">
                              12:20PM
                            </Text>
                          </Flex>
                          <Link to="/tables">
                            <Button bg="#4555f3" color="#ffffff">
                              Analysis
                            </Button>
                          </Link>
                        </Flex>
                      </Flex>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem colStart={2} colEnd={2}>
                  <Card minH="90px">
                    <CardBody>
                      <Flex
                        alignItems="flex-start"
                        direction="column"
                        justifyContent="flex-start"
                        gap={5}
                      >
                        <Flex
                          alignItems="flex-start"
                          direction="row"
                          justifyContent="flex-start"
                        >
                          <IconBox
                            bg="brand.200"
                            color="white"
                            h="30px"
                            w="30px"
                            me="12px"
                          >
                            <GiChemicalDrop color="inherit" />
                          </IconBox>
                          <Text color={"#ffffff"} my="auto" fontSize="lg">
                            Chemistry
                          </Text>
                        </Flex>
                        <Flex
                          alignItems="flex-start"
                          direction="column"
                          justifyContent="flex-start"
                          gap={5}
                        >
                          <Flex
                            alignItems="center"
                            direction="row"
                            justifyContent="flex-start"
                            gap={5}
                          >
                            <AiOutlineCalendar color="#ffffff" />
                            <Text color={"#ffffff"} my="auto" fontSize="sm">
                              06/10/2022
                            </Text>
                          </Flex>
                          <Flex
                            alignItems="center"
                            direction="row"
                            justifyContent="flex-start"
                            gap={5}
                          >
                            <AiOutlineClockCircle color="#ffffff" />
                            <Text color={"#ffffff"} my="auto" fontSize="sm">
                              2:00PM
                            </Text>
                          </Flex>
                          <Link to="/tables">
                            <Button bg="#4555f3" color="#ffffff">
                              Analysis
                            </Button>
                          </Link>
                        </Flex>
                      </Flex>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem colStart={3} colEnd={3}>
                  <Card minH="90px">
                    <CardBody>
                      <Flex
                        alignItems="flex-start"
                        direction="column"
                        justifyContent="flex-start"
                        gap={5}
                      >
                        <Flex
                          alignItems="flex-start"
                          direction="row"
                          justifyContent="flex-start"
                        >
                          <IconBox
                            bg="brand.200"
                            color="white"
                            h="30px"
                            w="30px"
                            me="12px"
                          >
                            <TbMathSymbols color="inherit" />
                          </IconBox>
                          <Text color={"#ffffff"} my="auto" fontSize="lg">
                            Math
                          </Text>
                        </Flex>
                        <Flex
                          alignItems="flex-start"
                          direction="column"
                          justifyContent="flex-start"
                          gap={5}
                        >
                          <Flex
                            alignItems="center"
                            direction="row"
                            justifyContent="flex-start"
                            gap={5}
                          >
                            <AiOutlineCalendar color="#ffffff" />
                            <Text color={"#ffffff"} my="auto" fontSize="sm">
                              06/10/2022
                            </Text>
                          </Flex>
                          <Flex
                            alignItems="center"
                            direction="row"
                            justifyContent="flex-start"
                            gap={5}
                          >
                            <AiOutlineClockCircle color="#ffffff" />
                            <Text color={"#ffffff"} my="auto" fontSize="sm">
                              4:00PM
                            </Text>
                          </Flex>
                          <Link to="/tables">
                            <Button bg="#4555f3" color="#ffffff">
                              Analysis
                            </Button>
                          </Link>
                        </Flex>
                      </Flex>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem colStart={4} colEnd={4}>
                  <Card minH="90px">
                    <CardBody>
                      <Flex
                        alignItems="flex-start"
                        direction="column"
                        justifyContent="flex-start"
                        gap={5}
                      >
                        <Flex
                          alignItems="flex-start"
                          direction="row"
                          justifyContent="flex-start"
                        >
                          <IconBox
                            bg="brand.200"
                            color="white"
                            h="30px"
                            w="30px"
                            me="12px"
                          >
                            <DiDatabase color="inherit" />
                          </IconBox>
                          <Text color={"#ffffff"} my="auto" fontSize="lg">
                            Database
                          </Text>
                        </Flex>
                        <Flex
                          alignItems="flex-start"
                          direction="column"
                          justifyContent="flex-start"
                          gap={5}
                        >
                          <Flex
                            alignItems="center"
                            direction="row"
                            justifyContent="flex-start"
                            gap={5}
                          >
                            <AiOutlineCalendar color="#ffffff" />
                            <Text color={"#ffffff"} my="auto" fontSize="sm">
                              06/10/2022
                            </Text>
                          </Flex>
                          <Flex
                            alignItems="center"
                            direction="row"
                            justifyContent="flex-start"
                            gap={5}
                          >
                            <AiOutlineClockCircle color="#ffffff" />
                            <Text color={"#ffffff"} my="auto" fontSize="sm">
                              4:00PM
                            </Text>
                          </Flex>
                          <Link to="/tables">
                            <Button bg="#4555f3" color="#ffffff">
                              Analysis
                            </Button>
                          </Link>
                        </Flex>
                      </Flex>
                    </CardBody>
                  </Card>
                </GridItem>
              </Grid>
            </CardBody>
          </Card>
        </GridItem>

        {/* Satisfaction Rate */}
        {/* <Card gridArea={{ md: "3 / 1 / 4 / 2", "2xl": "auto" }}>
            <CardHeader mb="24px">
              <Flex direction="column">
                <Text color="#fff" fontSize="lg" fontWeight="bold" mb="4px">
                  Satisfaction Rate
                </Text>
                <Text color="gray.400" fontSize="sm">
                  From all projects
                </Text>
              </Flex>
            </CardHeader>
            <Flex direction="column" justify="center" align="center">
              <Box zIndex="-1">
                <CircularProgress
                  size={200}
                  value={80}
                  thickness={6}
                  color="#582CFF"
                  variant="vision"
                  rounded
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
                bottom="5%"
              >
                <Text fontSize="xs" color="gray.400">
                  0%
                </Text>
                <Flex direction="column" align="center" minW="80px">
                  <Text color="#fff" fontSize="28px" fontWeight="bold">
                    95%
                  </Text>
                  <Text fontSize="xs" color="gray.400">
                    Based on likes
                  </Text>
                </Flex>
                <Text fontSize="xs" color="gray.400">
                  100%
                </Text>
              </Stack>
            </Flex>
          </Card> */}
        {/* Referral Tracking */}
        {/* <Card gridArea={{ md: "3 / 2 / 4 / 3", "2xl": "auto" }}>
            <Flex direction="column">
              <Flex justify="space-between" align="center" mb="40px">
                <Text color="#fff" fontSize="lg" fontWeight="bold">
                  Referral Tracking
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
                      Invited
                    </Text>
                    <Text color="#fff" fontSize="lg" fontWeight="bold">
                      145 people
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
                      Bonus
                    </Text>
                    <Text color="#fff" fontSize="lg" fontWeight="bold">
                      1,465
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
                      <Flex direction="column" justify="center" align="center">
                        <Text color="gray.400" fontSize="sm">
                          Safety
                        </Text>
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
          </Card> */}
      </Grid>
      <Grid templateColumns={{ sm: "1fr", md: "1fr", lg: "1fr" }} gap="24px">
        {/* Projects */}
        <Card p="16px" overflowX={{ sm: "scroll", xl: "hidden" }}>
          <CardHeader p="12px 0px 28px 0px">
            <Flex direction="column">
              <Text fontSize="lg" color="#fff" fontWeight="bold" pb="8px">
                Upcoming Classes
              </Text>
              <Flex align="center">
                <Icon
                  as={IoCheckmarkDoneCircleSharp}
                  color="teal.300"
                  w={4}
                  h={4}
                  pe="3px"
                />
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  <Text fontWeight="bold" as="span">
                    7 upcoming
                  </Text>{" "}
                  this month.
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <Table variant="simple" color="#fff">
            <Thead>
              <Tr my=".8rem" ps="0px">
                <Th
                  ps="0px"
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Course Name
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Participants
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Use AI to attend?
                </Th>
                <Th
                  color="gray.400"
                  fontFamily="Plus Jakarta Display"
                  borderBottomColor="#56577A"
                >
                  Person/AI
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {teacherDashboardTableData.map((row, index, arr) => {
                return (
                  <TeacherDashboardTableRow
                    name={row.name}
                    members={row.members}
                    attend={row.attend}
                    checked={row.checked}
                  />
                );
              })}
            </Tbody>
          </Table>
        </Card>
        {/* Orders Overview */}
        {/* <Card>
          <CardHeader mb="32px">
            <Flex direction="column">
              <Text fontSize="lg" color="#fff" fontWeight="bold" mb="6px">
                Orders overview
              </Text>
              <Flex align="center">
                <Icon
                  as={AiFillCheckCircle}
                  color="green.500"
                  w="15px"
                  h="15px"
                  me="5px"
                />
                <Text fontSize="sm" color="gray.400" fontWeight="normal">
                  <Text fontWeight="bold" as="span" color="gray.400">
                    +30%
                  </Text>{" "}
                  this month
                </Text>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Flex direction="column" lineHeight="21px">
              {timelineData.map((row, index, arr) => {
                return (
                  <TimelineRow
                    title={row.title}
                    date={row.date}
                    color={row.color}
                    index={index}
                    arrLength={arr.length}
                  />
                );
              })}
            </Flex>
          </CardBody>
        </Card> */}
      </Grid>
    </Flex>
  );
};

export default TeacherDashboard;
