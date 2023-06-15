//Contact Component
import {} from "react-icons/ai";
import {} from "react-icons/bi";
import {} from "react-icons/bs";
import {} from "react-icons/cg";
import {} from "react-icons/ci";
import {} from "react-icons/di";
import { FaPhone } from "react-icons/fa";
import {} from "react-icons/fc";
import {} from "react-icons/gi";
import {} from "react-icons/fi";
import {} from "react-icons/go";
import {} from "react-icons/gr";
import { HiOutlineMail } from "react-icons/hi";
import {} from "react-icons/hi2";
import {} from "react-icons/im";
import {} from "react-icons/io";
import {} from "react-icons/io5";
import {} from "react-icons/lu";
import {} from "react-icons/lib";
import {} from "react-icons/md";
import {} from "react-icons/ri";
import {} from "react-icons/rx";
import {} from "react-icons/si";
import {} from "react-icons/sl";
import {} from "react-icons/tb";
import {} from "react-icons/tfi";
import {} from "react-icons/ti";
import {} from "react-icons/vsc";
import React from "react";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <>
      <div className="w-full h-screen py-50px bg-slate-300 font-popp">
        <div className="relative w-full flex items-center justify-center flex-row flex-nowrap pb-80px">
          <span className="text-9xl font-bold text-gray-900/5 font-popp">
            CONTACT
          </span>
          <span className="border-b-2 text-4xl font-popp font-semibold border-sky-500 absolute top-100">
            Get in Touch
          </span>
        </div>
        <div className="grid grid-cols-5 w-full">
          <div className="col-start-1 col-end-2 pl-60px">
            <div className="">
              <h2 className="font-popp text-3xl pb-10px">ADDRESS</h2>
              <div className="">
                <div className="mb-30px">
                  <p className="">
                    4th Floor, Plot No.22, 145 Murphy Canyon Rd. San Diego CA
                    2028
                  </p>
                </div>
                <div className="">
                  <div className="">
                    <FaPhone className="text-sky-500 text-xl" />
                  </div>
                  <div className="">
                    <HiOutlineMail className="text-sky-500 text-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-start-2 col-end-6 pl-150px">
            <div className="">
              <h2 className="font-popp text-3xl pb-20px">SEND US A NOTE</h2>
              <div className="">
                <form action="" className="">
                  <div className="">
                    <div className="">
                      <input type="text" name="contact_name" className="" />
                      <input type="email" name="contact_email" className="" />
                    </div>
                    <div className="">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className=""
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
