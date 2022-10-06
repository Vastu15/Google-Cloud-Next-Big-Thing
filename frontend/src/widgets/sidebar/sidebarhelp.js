import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import SidebarHelpImage from "../../assets/images/sidebarhelp.png";
import IconBox from "../icons/iconbox";
import React, { useState } from "react";
import axios from "axios";
import qs from "qs";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import medusa from "../../assets/images/bluecover.png";

export function SidebarHelp(props) {
  // Pass the computed styles into the `__css` prop
  const { children, ...rest } = props;
  const [helpType, setHelpType] = useState("");
  const [querytext, setQueryText] = useState("");
  const [responseText, setResponseText] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitQuery = () => {
    var data = qs.stringify({
      text: querytext.toString(),
    });

    var config = {
      method: "POST",
      url:
        helpType === "textsummarizer"
          ? "http://35.224.123.197/openai/v1/text_summarizer"
          : helpType === "explaincode"
          ? "http://35.224.123.197/openai/v1/explain_code"
          : "http://35.224.123.197/openai/v1/sql_translate",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    axios(config)
      .then(function (result) {
        console.log("resultdat", result.data);
        setResponseText(
          helpType === "textsummarizer"
            ? result.data["summary"]
            : helpType === "explaincode"
            ? result.data["explanation"]
            : result.data["translation"]
        );
      })
      .catch(function (error) {
        console.log("error first", error.response.status);
      });
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="xl" bg={"#000"}>
        <ModalOverlay />
        <ModalContent bgImage={medusa}>
          <ModalHeader color="#fff">Need Help?</ModalHeader>
          <ModalCloseButton color="#fff" />
          <ModalBody overflowY="scroll">
            <Select
              placeholder="Select Help"
              color="#fff"
              mb={10}
              onChange={(e) => setHelpType(e.target.value)}
            >
              <option value="textsummarizer">Text Summarizer</option>
              <option value="explaincode">Explain Code</option>
              <option value="sqltranslate">Sql Translate</option>
            </Select>
            <Textarea
              placeholder="Enter your query"
              mb={10}
              onChange={(e) => setQueryText(e.target.value)}
              color="#fff"
            />
            <Flex alignItems="flex-start" justifyContent="flex-start" gap={10}>
              <Button
                bg="#4555f3"
                color="#ffffff"
                onClick={() => submitQuery()}
              >
                Submit
              </Button>
              <Button
                bg="#4555f3"
                color="#ffffff"
                onClick={() => {
                  setHelpType("");
                  setQueryText("");
                  setResponseText("");
                }}
              >
                Clear
              </Button>
            </Flex>

            <Text color="#ffffff" size="sm" mt={10}>
              {responseText}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        borderRadius="15px"
        flexDirection="column"
        bgImage={SidebarHelpImage}
        bgSize="cover"
        bgPosition="center"
        justifyContent="flex-start"
        alignItems="start"
        p="16px"
        minH="170px"
        minW="218px"
      >
        <IconBox width="35px" h="35px" bg="white" mb="auto">
          <QuestionIcon color="brand.200" h="18px" w="18px" />
        </IconBox>
        <Text fontSize="sm" color="white" fontWeight="bold">
          Need help?
        </Text>
        <Text fontSize="xs" color="white" mb="10px">
          We are here to solve any of your problems!
        </Text>
        <Button
          fontSize="10px"
          fontWeight="bold"
          w="100%"
          bg="linear-gradient(126.97deg, rgba(6, 11, 40, 0.74) 28.26%, rgba(10, 14, 35, 0.71) 91.2%)"
          _hover="none"
          _active={{
            bg: "white",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
          color="white"
          onClick={onOpen}
        >
          SOLVE
        </Button>
      </Flex>
    </>
  );
}
