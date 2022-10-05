// chakra imports
import { Box, ChakraProvider, Portal } from "@chakra-ui/react";
// core components
import React from "react";
import { Route } from "react-router-dom";
import theme from "../theme/themeauth";
import SignIn from "../screens/signin";

export default function Pages(props) {
  const { ...rest } = props;
  // ref for the wrapper div
  const wrapper = React.createRef();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });
  const navRef = React.useRef();
  document.documentElement.dir = "ltr";
  return (
    <ChakraProvider theme={theme} resetCss={false} w="100%">
      <Box ref={navRef} w="100%">
        <Portal containerRef={navRef}>
          {/* <AuthNavbar
            secondary={getActiveNavbar(routes)}
            logoText="VISION UI FREE"
          /> */}
        </Portal>
        <Box w="100%">
          <Box ref={wrapper} w="100%">
            <SignIn />
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
