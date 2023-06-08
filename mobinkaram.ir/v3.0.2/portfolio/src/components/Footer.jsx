import React, { useEffect, useState } from "react";
import avatar from "../img/logo.png";
import { FaBeer, FaBlenderPhone } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  // const [user, setUser] = useState([]);

  const user = {
    name: "Mobin Karam",
    avatar_url: `${avatar}`,
    bio: "This is Mobin Karam from his Setup and his just learn learn and learn about his skills ",
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       // const res = await axios.get("https://api.github.com/users/Mobin-Karam");
  //       setUser(res.data);
  //       console.log(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <div className="w-full bg-slate-500 flex items-start justify-start flex-row flex-nowrap ">
        <Link
          className="w-400px  m-40px"
          to={"https://github.com/Mobin-Karam"}
          target="_blank"
        >
          <div className="w-400px h-200px p-10px bg-slate-400  rounded-xl flex items-start justify-start flex-col flex-nowrap ">
            <div className="w-full flex items-center justify-center font-bold text-xl">
              <BsGithub className="text-3xl" />
              <h1 className="ml-10px"> GitHub</h1>
            </div>
            <div className="w-full flex items-center">
              <img
                src={user.avatar_url}
                alt=""
                className="w-60px h-60px rounded-full bg-slate-200 p-4px"
              />
              <span className="">{user.name}</span>
            </div>
            <div className=""></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
