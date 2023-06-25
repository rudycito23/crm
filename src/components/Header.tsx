/*
 * Author:          Rudy Lucas
 * filename:        Header.tsx
 * Date:            06.05.2023
 * Description:     This component represents the website's header and its
 *                  functionality.
 */

import "../css/Header.css";
import axios from "axios";import logo from "../images/avoda_logo.png";
import { useState } from "react";
import { MdPermIdentity } from "react-icons/md";
import { Modal } from "./Modal";


export const Header = () => {
  const [openModal, setOpenModal] = useState(false);

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");


  const login_credentials = {
    email: userEmail,
    password: userPassword
  };

  return (
    <>
      <div className="w-screen bg-slate-300">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex justify-center items-center">
            <img className="w-5/12" alt="avoda logo" src={logo}></img>
          </div>
          <div className="col-start-3 m-4 flex justify-end items-center gap-4">
            <button
              className="flex items-center space-x-2 border-solid border-2 border-sky-500 rounded-lg p-2"
              data-modal-target="login-modal"
              data-modal-toggle="login-modal"
              onClick={() => {
                setOpenModal(true);
              }}
            >
              <MdPermIdentity size={20} />
              <span>Login</span>
            </button>
            <button className="flex items-center space-x-2 border-solid border-2 border-sky-500 rounded-lg p-2">
              <span>Try it free</span>
            </button>
          </div>
        </div>
      </div>
      {openModal && <Modal closeModal={setOpenModal}/>}
      {}
    </>
  );
};
