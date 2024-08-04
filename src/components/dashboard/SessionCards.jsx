import React, { useState, useRef, useEffect } from "react";
import user from "../../assets/dashboard/sessionUser.png";
import inviterUser from "../../assets/dashboard/inviteUser.svg";
import settings from "../../assets/dashboard/sessionSettings.svg";
import edit from "../../assets/dashboard/edit.svg";
import { MdOutlineArchive } from "react-icons/md";
import { IoDuplicateOutline } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SessionCards = () => {
  const [popup, setPopup] = useState({
    visible: false,
    position: { top: 0, left: 0 },
  });
  const [selectedClient, setSelectedClient] = useState(null);
  const popupRef = useRef(null);

  const clients = [
    { name: "Richard Doe", status: "active" },
    { name: "John Doe", status: "offline" },
    { name: "Mary Smith", status: "offline" },
    { name: "Test User", status: "active" },
    { name: "Super Admin", status: "offline" },
  ];

  const statusColors = {
    active: "bg-green-500",
    offline: "bg-yellow-500",
  };

  const handleEditClick = (event, client) => {
    const rect = event.target.getBoundingClientRect();
    if (!popup.visible) {
      setPopup({
        visible: true,
        position: { top: rect.bottom, left: rect.left },
      });
      setSelectedClient(client);
    } else {
      handleClosePopup();
    }
  };

  const handleClosePopup = () => {
    setPopup({ visible: false, position: { top: 0, left: 0 } });
    setSelectedClient(null);
  };

  useEffect(() => {
    if (popup.visible && popupRef.current) {
      const popupWidth = popupRef.current.offsetWidth;
      setPopup((prevPopup) => ({
        ...prevPopup,
        position: {
          top: prevPopup.position.top,
          left: prevPopup.position.left - popupWidth + 30,
        },
      }));
    }
  }, [popup.visible]);

  useEffect(() => {
    if (popup.visible) {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          handleClosePopup();
        }
      };

      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [popup.visible]);

  return (
    <div className="mt-8 w-full flex-1 overflow-auto px-4">
      {clients.map((client, index) => (
        <Link
        to='/session'
          key={index}
          className="h-[10rem] flex flex-col mb-6 justify-start items-start rounded-xl border-2 border-gray-300"
        >
          <div className="h-[65%] flex justify-between items-center w-full">
            <div className="md:w-[40%] h-full flex justify-start items-start">
              <div className="md:w-[20%] h-full flex justify-center items-center">
                <div
                  style={{ borderRadius: "50%" }}
                  className="md:w-20 md:h-20 p-2"
                >
                  <img src={user} className="w-full h-full" alt="" />
                </div>
              </div>
              <div className="w-[80%] ps-2 h-full flex-col justify-between items-center">
                <div className="h-[50%] flex justify-start items-center">
                  <p className="font-semibold underline">{client.name}</p>
                </div>
                <div className="h-[50%] flex justify-start items-center">
                  <p>Status : </p>
                  <p
                    className={`w-4 h-4 ml-2 rounded-full ${
                      statusColors[client.status]
                    }`}
                  ></p>
                </div>
              </div>
            </div>
            <div className="w-[40%] h-full flex justify-start items-start">
              <div className="w-[100%] h-full flex-col justify-between items-center">
                <div className="md:h-[50%] h-[100%] flex md:flex-row flex-col md:justify-end justify-evenly items-start md:items-end gap-x-6">
                  <div className="flex items-center cursor-pointer">
                    <img
                      src={inviterUser}
                      className="w-6 h-6 mr-2"
                      alt="Invite User"
                    />
                    <p>Invite</p>
                  </div>
                  <div className="flex items-center cursor-pointer">
                    <img
                      src={settings}
                      className="w-6 h-6 mr-2"
                      alt="Settings"
                    />
                    <p>Settings</p>
                  </div>
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={(e) => handleEditClick(e, client)}
                  >
                    <img src={edit} className="w-6 h-6 mr-2" alt="Edit" />
                    <p className="md:hidden block">Edit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[35%] border-t-2 border-gray-200 flex justify-evenly items-center w-full">
            <p>Teams: 1</p>
            <p>Players: 1/4</p>
            <p>Rounds: 2</p>
          </div>
        </Link>
      ))}

      {popup.visible && (
        <div
          ref={popupRef}
          className="absolute bg-white shadow-md border rounded-md p-2"
          style={{ top: popup.position.top, left: popup.position.left }}
        >
          <div className="flex flex-col justify-start gap-y-2 items-start">
            <div className="flex justify-start items-center gap-x-2">
              <MdOutlineArchive />

              <button onClick={handleClosePopup}>Archive</button>
            </div>
            <div className="flex justify-start items-center gap-x-2">
              <IoDuplicateOutline />

              <button onClick={handleClosePopup}>Duplicate</button>
            </div>
            <div className="flex justify-start items-center gap-x-2">
              <RiDeleteBinFill />

              <button onClick={handleClosePopup}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SessionCards;
