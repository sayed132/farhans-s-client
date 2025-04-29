import emailjs from "@emailjs/browser";
import React, { useEffect, useRef, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Test = () => {
  const form = useRef();

  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://farhans-s-server.onrender.com/profile")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data.data[0]);
        console.log(profile, " loaded profile");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4eoauua",
        "template_cz1d8yv",
        form.current,
        "tqEptLerTk16XvB3J"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="flex h-screen items-center justify-center bg-[#8EA7E9]/20 p-6 md:p-0">
      <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
        {/* register design side  */}
        <div className="relative hidden h-full items-center justify-center bg-[#8EA7E9] md:flex md:w-[60%] lg:w-[40%]">
          <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
          <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#9eb6f8] to-[#6585dd]"></div>
          <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd] transition-all"></div>
          <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#9eb6f8] to-[#6585dd]"></div>
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-medium text-white/80 ">
              Welcome Dear
            </h2>
            <p className="animate-pulse text-sm text-white/60">
              Please Type Your Mail
            </p>
          </div>
        </div>
        {/* input side  */}
        <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
          <h2 className="pb-8 text-center text-3xl font-bold text-[#8EA7E9]">
            Contact Me
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex  w-full flex-col items-center justify-center gap-4"
          >
            <input
              className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              id="name"
              type="text"
              name="user_name"
              placeholder="type your name"
            />
            <input
              className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              id="email"
              type="email"
              name="user_email"
              placeholder="example@example.com"
            />
            <textarea
              className="w-[80%] rounded-lg border border-[#8EA7E9] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              name="message"
              id=""
              placeholder="type here what you want"
              cols="30"
              rows="10"
            ></textarea>

            <input
              className="w-[80%] cursor-pointer rounded-lg bg-[#6b8dec] hover:bg-[#3b559c] shadow-md duration-300 hover:scale-95 hover:shadow px-6 py-2 font-medium text-white md:w-[60%]"
              type="submit"
            />
          </form>
          {/* divider  */}
          <div className="my-8 flex items-center px-8">
            <hr className="flex-1" />
            <div className="mx-4 text-gray-400">Social Network</div>
            <hr className="flex-1" />
          </div>
          {/* sign with google */}
          <div className="mx-auto flex  justify-evenly space-x-1 w-[60%]">
            <Link
              target="_blank"
              to={profile?.facebook}
              className="h-[36px] w-[36px] bg-blue-600 flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
              <FaFacebookF className="text-white text-2xl flex items-center" />
            </Link>
            <Link
              target="_blank"
              to={profile?.linkedin}
              className="h-[36px] w-[36px] bg-sky-600 flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
              <FaLinkedinIn className="text-white text-2xl flex items-center" />
            </Link>
            <Link
              target="_blank"
              to={profile?.instagram}
              className="h-[36px] w-[36px] bg-pink-600 flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
              <FaInstagram className="text-white text-2xl flex items-center" />
            </Link>
            <Link
              target="_blank"
              to={profile?.twitter}
              className="h-[36px] w-[36px] bg-black flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
            >
              <RiTwitterXFill className="text-white text-2xl flex items-center" />
            </Link>
            {/* <div className="flex w-[50%] items-center bg-[#8EA7E9] pl-4 text-sm text-white">
            Sign With
          </div>
          <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#8EA7E9] group-hover:hidden"></span>
          <span className="pr-4 text-4xl font-bold text-[#8EA7E9]">G+</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
