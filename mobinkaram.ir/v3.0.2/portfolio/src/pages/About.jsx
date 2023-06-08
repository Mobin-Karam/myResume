import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

const About = () => {
  const [country, setCountry] = useState([]);
  // const [value, setValue] = useState(state?.username || "");
  // const username = document.getElementById("username");
  // Octokit.js
  // https://github.com/octokit/core.js#readme

  // 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
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get("https://api.github.com/users/Mobin-Karam");
        const res = await axios.get("https://restcountries.com/v3.1/all");
        setCountry(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // avatar_url: "https://avatars.githubusercontent.com/u/124531134?v=4";
  // bio: "This is Mobin Karam from his Setup and his just learn learn and learn about his skills ";
  // blog: "mobinkaram.ir";
  // company: "My StartUp";
  // created_at: "2023-02-05T20:45:31Z";
  // email: null;
  // events_url: "https://api.github.com/users/Mobin-Karam/events{/privacy}";
  // followers: 0;
  // followers_url: "https://api.github.com/users/Mobin-Karam/followers";
  // following: 0;
  // following_url: "https://api.github.com/users/Mobin-Karam/following{/other_user}";
  // gists_url: "https://api.github.com/users/Mobin-Karam/gists{/gist_id}";
  // gravatar_id: "";
  // hireable: null;
  // html_url: "https://github.com/Mobin-Karam";
  // id: 124531134;
  // location: "iran/kermanshah";
  // login: "Mobin-Karam";
  // name: "Mobin Karam";
  // node_id: "U_kgDOB2wxvg";
  // organizations_url: "https://api.github.com/users/Mobin-Karam/orgs";
  // public_gists: 0;
  // public_repos: 8;
  // received_events_url: "https://api.github.com/users/Mobin-Karam/received_events";
  // repos_url: "https://api.github.com/users/Mobin-Karam/repos";
  // site_admin: false;
  // starred_url: "https://api.github.com/users/Mobin-Karam/starred{/owner}{/repo}";
  // subscriptions_url: "https://api.github.com/users/Mobin-Karam/subscriptions";
  // twitter_username: null;
  // type: "User";
  // updated_at: "2023-05-31T05:57:47Z";
  // url: "https://api.github.com/users/Mobin-Karam";

  return (
    <>
      <Helmet>
        <title>Mobin Karam | About</title>
      </Helmet>
      {/* <div className="about" id="about">
        <input
          className="w-500px h-50px p-10px text-white bg-slate-500 mb-10px"
          type="search"
          name="username"
          id="username"
          placeholder="Username"
        />
        <div className="w-500px h-400px p-10px bg-slate-500 flex items-center justify-between flex-col flex-nowrap">
          <div className="w-full flex items-start justify-between flex-row flex-nowrap">
            <div className="w-20% h-100px ">
              <img
                className="w-80px h-80px object-cover "
                src={user.avatar_url}
                alt=""
              />
            </div>
            <div className="">{user.name}</div>
          </div>
          <div className="">{user.bio}</div>
          <div className="">{user.public_repos}</div>
          <div className="flex items-center justify-between flex-row flex-nowrap">
            <div className="bg-slate-800 rounded-full px-16px py-5px text-lg inline-block text-white mr-10px">
              Followers : {user.followers}
            </div>
            <div className="bg-slate-800 rounded-full px-16px py-5px text-lg inline-block text-white ">
              Following : {user.following}
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default About;
