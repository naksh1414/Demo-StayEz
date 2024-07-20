import { useState } from "react";
import { Button, Drawer } from "antd";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import "./style.css";
const NavDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        <IoMenu />
      </Button>
      <Drawer
        className="text-[1.4rem]"
        title="StayEz"
        onClose={onClose}
        open={open}
      >
        <NavLink to={"/"}>
          {" "}
          <h1>Home</h1>
        </NavLink>
        <NavLink to={"/"}>
          <h1>Know More</h1>
        </NavLink>
        <NavLink to={"/flats"}>
          <h1>Flats</h1>
        </NavLink>
        <NavLink to={"/login"}>
          <h1 className="text-[#03A9F4]">Log In</h1>
        </NavLink>
      </Drawer>
    </>
  );
};
export default NavDrawer;
