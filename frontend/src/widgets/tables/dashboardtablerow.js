/*!

=========================================================
* Vision UI Free Chakra - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-chakra
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-chakra/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import {
  Avatar,
  AvatarGroup,
  Flex,
  Icon,
  Progress,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
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
import medusa from "../../assets/images/bluecover.png";

function DashboardTableRow(props) {
  const { logo, name, members, budget, progression, lastItem } = props;
  const textColor = useColorModeValue("gray.700", "white");
  const { isOpen, onOpen, onClose } = useDisclosure();
  var videoUrl =
    "https://resonancehack.s3.ap-south-1.amazonaws.com/result_voice.mp4";

  return (
    <Tr>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bgImage={medusa}>
          <ModalHeader color="#ffffff">Lecture Video</ModalHeader>
          <ModalCloseButton color="#ffffff" />
          <ModalBody overflowY="scroll">
            <AspectRatio ratio={1.7}>
              <iframe src={videoUrl} title="absolute" height="100%" />
            </AspectRatio>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Td
        minWidth={{ sm: "250px" }}
        ps="0px"
        borderBottomColor="#56577A"
        border={lastItem ? "none" : null}
      >
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Text fontSize="sm" color="#fff" fontWeight="normal" minWidth="100%">
            {name}
          </Text>
        </Flex>
      </Td>

      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <AvatarGroup size="xs" showBorder={false}>
          {members.map((member) => {
            return (
              <Avatar
                name="Ryan Florence"
                src={member}
                showBorder={false}
                border="none"
                _hover={{ zIndex: "3", cursor: "pointer" }}
              />
            );
          })}
        </AvatarGroup>
      </Td>
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
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
      <Td borderBottomColor="#56577A" border={lastItem ? "none" : null}>
        <Flex direction="column">
          <Text
            fontSize="sm"
            color="#fff"
            fontWeight="bold"
            pb=".2rem"
          >{`${progression}%`}</Text>
          <Progress
            colorScheme="brand"
            h="3px"
            bg="#2D2E5F"
            value={progression}
            borderRadius="30px"
          />
        </Flex>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
