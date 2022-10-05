import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";

import Tables from "../screens/tables";

// Layout components
import AdminNavbar from "../widgets/navbar/navbar";
import Sidebar from "../widgets/sidebar/sidebar";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import routes from "../routes";
// Custom Chakra theme
import theme from "../theme/themeadmin";
import FixedPlugin from "../widgets/fixedplugin/fixedplugin";
// Custom components
import MainPanel from "../widgets/layouts/mainpanel";
import PanelContainer from "../widgets/layouts/panelcontainer";
import PanelContent from "../widgets/layouts/panelcontent";

export default function TablesLayout(props) {
  const { ...rest } = props;
  // states and functions
  const [sidebarVariant, setSidebarVariant] = useState("transparent");
  const [fixed, setFixed] = useState(false);
  // ref for main panel div
  const mainPanel = React.createRef();
  // functions for changing the states from components
  const getRoute = () => {
    return window.location.pathname !== "/full-screen-maps";
  };

  const getActiveRoute = (routes) => {
    let activeRoute = "Students Log";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].views);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else if (routes[i].category) {
        let categoryActiveRoute = getActiveRoute(routes[i].views);
        if (categoryActiveRoute !== activeRoute) {
          return categoryActiveRoute;
        }
      } else {
        if (window.location.href.indexOf(routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };
  // This changes navbar state(fixed or not)
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].category) {
        let categoryActiveNavbar = getActiveNavbar(routes[i].views);
        if (categoryActiveNavbar !== activeNavbar) {
          return categoryActiveNavbar;
        }
      } else {
        if (window.location.href.indexOf(routes[i].path) !== -1) {
          if (routes[i].secondaryNavbar) {
            return routes[i].secondaryNavbar;
          }
        }
      }
    }
    return activeNavbar;
  };

  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.collapse) {
        return getRoutes(prop.views);
      } else if (prop.category === "account") {
        return getRoutes(prop.views);
      } else if (prop.layout === "/admin") {
        console.log("prop path", prop.path);
        console.log("component", prop.component);
        return (
          <Route exact path={prop.path} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";
  // Chakra Color Mode
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <Sidebar
        routes={routes}
        display="none"
        sidebarVariant={sidebarVariant}
        {...rest}
      />
      <MainPanel
        ref={mainPanel}
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <Portal>
          <AdminNavbar
            onOpen={onOpen}
            brandText={getActiveRoute(routes)}
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            {...rest}
          />
        </Portal>
        {getRoute() ? (
          <PanelContent>
            <PanelContainer>
              <Tables />
            </PanelContainer>
          </PanelContent>
        ) : null}
        <Portal>
          <FixedPlugin
            secondary={getActiveNavbar(routes)}
            fixed={fixed}
            onOpen={onOpen}
          />
        </Portal>
      </MainPanel>
    </ChakraProvider>
  );
}
