import { useQuery } from "@tanstack/react-query";
import {
  FaFacebookF,
  FaInfoCircle,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  const { data: user = [], refetch } = useQuery({
    queryKey: ["contact"],
    queryFn: async () => {
      const res = await fetch("https://farhans-s-server.onrender.com/profile");
      const data = await res.json();
      console.log(data, "profile");
      return data.user[0];
    },
  });
  console.log(user);

  return (
    <footer className="px-4  bg-gradient-to-r from-[#0C1222] to-[#0B1220]  rounded-t-md md:flex items-center justify-around">
      <div className="py-6 text-sm text-center dark:text-gray-400">
      © {new Date().getFullYear()} All rights reserved. Farhana Yesmin
      </div>
      <div className="flex justify-center items-center pb-4 md:pb-0">
        <div className="flex items-center">
          <Link
            target="_blank"
            to={user?.facebook}
            className="h-[24px] w-[24px] mr-2 bg-blue-600 flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
          >
            <FaFacebookF className="text-white text-sm flex items-center" />
          </Link>
          <Link
            target="_blank"
            to={user?.linkedin}
            className="h-[24px] w-[24px] mr-2 bg-sky-600 flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
          >
            <FaLinkedinIn className="text-white text-sm flex items-center" />
          </Link>
          <Link
            target="_blank"
            to={user?.instagram}
            className="h-[24px] w-[24px] mr-2 bg-pink-600 flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
          >
            <FaInstagram className="text-white text-sm flex items-center" />
          </Link>
          <Link
            target="_blank"
            to={user?.twitter}
            className="h-[24px] w-[24px] mr-2 bg-black flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow"
          >
            <RiTwitterXFill className="text-white text-md flex items-center" />
          </Link>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <div className="h-[24px] w-[24px] bg-black flex justify-center items-center cursor-pointer overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
            {/* <button
            className="btn"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            
          </button> */}
            <FaInfoCircle
              className="text-white text-lg flex items-center"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />
            <dialog id="my_modal_3" className="modal ">
              <div className="modal-box bg-gradient-to-r from-[#232f35] to-[#143545]">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                <div className=" my-5 ">
                  <div className="collapse ">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-center bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content">
                      Click & Vew Info
                    </div>
                    <div className="collapse-content text-left bg-primary text-primary-content peer-checked:bg-accent peer-checked:text-secondary-content flex flex-col justify-center items-start space-y-2">
                      <p>
                        Name: <span className="capitalize">{user?.name}</span>
                      </p>
                      {/* <p>Email: <span className="lowercase text-blue-700">{user?.email}</span></p> */}
                      <p>
                        Email:{" "}
                        <a
                          href={`mailto:${user?.email}`}
                          className="lowercase text-blue-700"
                        >
                          {user?.email}
                        </a>
                      </p>

                      {/* <p>Phone: <span className="capitalize text-blue-700">{user?.phone}</span></p> */}
                      <p>
                        Phone:{" "}
                        <span className=" text-blue-700">
                          <a href={"tel:" + user?.phone}>{user?.phone}</a>
                        </span>
                      </p>
                      <p>
                        Address:{" "}
                        <span className="capitalize">{user?.address}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
