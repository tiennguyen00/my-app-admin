import * as React from "react";
import {useState} from "react";
import Box from "@mui/material/Box";
import LabelIcon from "@mui/icons-material/Label";

import {
  useTranslate,
  MenuItemLink,
  MenuProps,
  useSidebarState,
} from "react-admin";

// import visitors from "../visitors";
// import orders from "../orders";
// import invoices from "../invoices";
// import products from "../products";
import categories from "../categories";
// import reviews from "../reviews";
import SubMenu from "./SubMenu";

type MenuName =
  | "menuProjectDevProcess"
  | "menuProjected"
  | "menuLibrary"
  | "menuHome"
  | "menuOthers";

const Menu = ({dense = false}: MenuProps) => {
  const [state, setState] = useState({
    menuProjectDevProcess: false,
    menuProjected: true,
    menuLibrary: true,
    menuHome: true,
    menuOthers: true,
  });
  const translate = useTranslate();
  const [open] = useSidebarState();

  const handleToggle = (menu: MenuName) => {
    setState(state => ({...state, [menu]: !state[menu]}));
  };

  return (
    <Box
      sx={{
        width: open ? 200 : 50,
        marginTop: 1,
        marginBottom: 1,
        transition: theme =>
          theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <SubMenu
        handleToggle={() => handleToggle("menuProjected")}
        isOpen={state.menuProjected}
        name="pos.menu.projected"
        icon={<categories.icon />}
        dense={dense}
      >
        <MenuItemLink
          to="/products"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.products.name`, {
            smart_count: 2,
          })}
          leftIcon={<categories.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/categories"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.categories.name`, {
            smart_count: 2,
          })}
          leftIcon={<categories.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/duandalam"
          state={{_scrollToTop: true}}
          primaryText={translate(`resources.duandalam`)}
          leftIcon={<categories.icon />}
          dense={dense}
        />
      </SubMenu>
    </Box>
  );
};

export default Menu;
