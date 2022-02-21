import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import '../../App.css';

//import sidebar from react-pro-sidebar
import {
  MenuItem
} from "react-pro-sidebar";

//import icons from react icons
import { FaList } from "react-icons/fa";
import { FiHome, FiLogOut, FiSave } from "react-icons/fi";
import { MdCreate } from "react-icons/md";

//import UON logo
import logo from "../../Image/UON.png"

export default props => {
  return (
    <Menu iconShape="square">
      <img src={ logo } height= '200' />
      <MenuItem icon={<FiHome />}>
        <a href="../Home" className="menu-item">Home</a>
        </MenuItem>
        <MenuItem icon={<FaList />}> View Courses</MenuItem>
        <MenuItem icon={<MdCreate />}>
        <a href="../addcourse" className="menu-item">Create my course plan</a>
        </MenuItem>
        <MenuItem icon={<FiSave />}>
        <a href="../coursefeed" className="menu-item">My saved course plan</a>
          </MenuItem>
    </Menu>
  );
};