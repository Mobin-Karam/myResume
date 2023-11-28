import React, { useEffect, useState } from "react";
import avatar from "../img/logo.png";
import { FaBeer, FaBlenderPhone } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";
import {
  BsFillFileTextFill,
  BsGithub,
  BsJournalRichtext,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footer = () => {
  const user = {
    name: "Mobin Karam",
    avatar_url: `${avatar}`,
    bio: "This is Mobin Karam from his Setup and his just learn learn and learn about his skills ",
    company: "My StartUp",
    public_repos: 8,
    following: 0,
    followers: 0,
  };

  // const [user, setUser] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.octokit.request("https://api.github.com/users/Mobin-Karam");
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
          className="  m-40px"
          to={"https://github.com/Mobin-Karam"}
          target="_blank"
        >
          <div className="p-20px bg-slate-900/60 hover:bg-slate-950 group text-white  rounded-xl flex items-start justify-start flex-col flex-nowrap transition-all duration-300">
            <div className="w-full flex items-center justify-center font-bold text-xl border-transparent border-b-2  group-hover:border-b-2  group-hover:border-white pb-10px mb-20px transition-all duration-300">
              <BsGithub className="text-3xl" />
              <h1 className="ml-10px"> GitHub</h1>
            </div>
            <div className="w-full flex items-center">
              <div className="m-10px">
                <img
                  src={user.avatar_url}
                  alt=""
                  className="w-100px h-100px rounded-full bg-slate-200 p-4px"
                />
              </div>
              <div className="flex items-start justify-start flex-col flex-nowrap">
                <span className="text-2xl font-bold mb-10px">{user.name}</span>
                <div className="flex items-start justify-start flex-row flex-nowrap">
                  <p className="mr-10px">Followers</p>
                  <span className=""> {user.followers}</span>
                  <p className="mr-10px ml-10px">Following</p>
                  <span className=""> {user.following}</span>
                </div>
                <div className="flex items-center  justify-start flex-row flex-nowrap mt-10px bg-slate-700 p-10px rounded-lg">
                  <p className="">PublicRepositories</p>
                  <RiGitRepositoryLine className="ml-10px mr-10px" />
                  <span className="">{user.public_repos}</span>
                </div>
              </div>
            </div>
            <div className=""></div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Footer;
