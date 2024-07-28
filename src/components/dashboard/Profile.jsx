import React from "react";

const Profile = () => {
  return (
    <div className="w-full h-fit  p-4">
      <p className="text-[1.2rem] md:text-left text-center font-semibold">Credentials</p>
      <div className="flex md:flex-row  flex-col w-full   justify-start items-start md:items-center gap-x-6 my-4">
        <div className="flex  justify-start items-center  gap-x-2 ">
          <p className="font-semibold">Email:</p>
          <p className="text-gray-500">test@hotmail.com</p>
        </div>
        <div className="flex justify-start items-center  gap-x-2  ">
          <p className="font-semibold">Password :</p>
          <p className="text-gray-500">123****</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
