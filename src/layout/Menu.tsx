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

type MenuName = "menuHome";

const Menu = ({dense = false}: MenuProps) => {
  const [state, setState] = useState({
    menuHome: true,
  });
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
        handleToggle={() => handleToggle("menuHome")}
        isOpen={state.menuHome}
        name="Trang chu"
        icon={<categories.icon />}
        dense={dense}
      >
        <MenuItemLink
          to="/banner"
          state={{_scrollToTop: true}}
          primaryText="Banner"
          leftIcon={<categories.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/vechungtoi"
          state={{_scrollToTop: true}}
          primaryText="Về chúng tôi"
          leftIcon={<categories.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/nhagobamien"
          state={{_scrollToTop: true}}
          primaryText="Nhà gỗ ba miền"
          leftIcon={<categories.icon />}
          dense={dense}
        />
        <MenuItemLink
          to="/dichvucungcap"
          state={{_scrollToTop: true}}
          primaryText="Dịch vụ cung cấp"
          leftIcon={<categories.icon />}
          dense={dense}
        />
      </SubMenu>
      <MenuItemLink
        to="/duandalam"
        state={{_scrollToTop: true}}
        primaryText="Dự án đã làm"
        leftIcon={<categories.icon />}
        dense={dense}
      />
      <MenuItemLink
        to="/thuvientulieu"
        state={{_scrollToTop: true}}
        primaryText="Thư viện tư liệu"
        leftIcon={<categories.icon />}
        dense={dense}
      />

      <MenuItemLink
        to="/thongtinkhac"
        state={{_scrollToTop: true}}
        primaryText="Thông tin khác"
        leftIcon={<categories.icon />}
        dense={dense}
      />
    </Box>
  );
};

export default Menu;
