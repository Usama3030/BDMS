import React from "react";
//import styled from 'styled-components';
import { Link } from "react-router-dom";
//import * as FaIcons from 'react-icons/fa';
//import * as AiIcons from 'react-icons/ai';
//import { IconContext } from 'react-icons/lib';
import {
  FcReading,
  FcBookmark,
  FcHome,
  FcClapperboard,
  FcAdvertising,
} from "react-icons/fc";
import "./style.css";
function Sidebar() {
  return (
    <>
      <div className="sidebar bg-white p-2">
        <div>
          {/*<i className='bi bi-bootstrap-fill my-2'></i>*/}
          <span className="brand-name fs-4">CS & IT</span>
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
         
          <Link
            className="list-group-item py-2 my-1"
            style={{ textDecoration: "none", color: "black" }}
            to="/"
          >
            <FcHome className=" fs-4 me-2"></FcHome>
            <span className="fs-5">Home</span>
          </Link>{" "}
          <Link
            className="list-group-item py-2 my-1"
            style={{ textDecoration: "none", color: "black" }}
            to="/Attendance"
          >
            <FcBookmark className=" fs-4 me-2"></FcBookmark>
            <span className="fs-5">Attendance</span>
          </Link>
          <Link
            className="list-group-item py-2 my-1"
            style={{ textDecoration: "none", color: "black" }}
            to="/Schedule"
          >
            <FcReading className=" fs-4 me-2"></FcReading>
            <span className="fs-5">Schedule</span>
          </Link>
          <Link
            className="list-group-item py-2 my-1"
            style={{ textDecoration: "none", color: "black" }}
            to="/NoticeBoard"
          >
            <FcClapperboard className=" fs-4 me-2"></FcClapperboard>
            <span className="fs-5">NoticeBoard</span>
          </Link>
          <Link
            className="list-group-item py-2 my-1"
            style={{ textDecoration: "none", color: "black" }}
            to="/Notices"
          >
            <FcAdvertising className=" fs-4 me-2"></FcAdvertising>
            <span className="fs-5">Notices</span>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
