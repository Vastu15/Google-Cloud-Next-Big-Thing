import { extendTheme } from "@chakra-ui/react";
import { globalStyles } from "./styles";
import { bgAuth } from "./bgauth";
import { breakpoints } from "./foundations/breakpoints";
import { buttonStyles } from "./components/button";
import { badgeStyles } from "./components/badge";
import { linkStyles } from "./components/link";
import { drawerStyles } from "./components/drawer";
import { switchStyles } from "./components/switch";
import { CardComponent } from "./additions/card/card";
import { CardBodyComponent } from "./additions/card/cardbody";
import { CardHeaderComponent } from "./additions/card/cardheader";
import { MainPanelComponent } from "./additions/layout/mainpanel";
import { PanelContentComponent } from "./additions/layout/panelcontent";
import { PanelContainerComponent } from "./additions/layout/panelcontainer";

export default extendTheme(
  { breakpoints }, // Breakpoints
  bgAuth, // Global styles
  globalStyles, // Global styles
  buttonStyles, // Button styles
  badgeStyles, // Badge styles
  linkStyles, // Link styles
  drawerStyles, // Sidebar variant for Chakra's drawer
  switchStyles, // Switch styles
  CardComponent, // Card component
  CardBodyComponent, // Card Body component
  CardHeaderComponent, // Card Header component
  MainPanelComponent, // Main Panel component
  PanelContentComponent, // Panel Content component
  PanelContainerComponent // Panel Container component
);
