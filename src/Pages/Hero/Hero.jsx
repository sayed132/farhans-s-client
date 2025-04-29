import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const Hero = () => {
  const { data: user = [], isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await fetch("https://farhans-s-server.onrender.com/profile");
      const data = await res.json();
      console.log(data, "profile");
      return data.user[0];
    },
  });

  console.log(user, "profile");

  // Loading placeholder content
  const LoadingPlaceholder = () => (
    <div className="flex flex-col w-full max-w-6xl gap-10 lg:flex-row  items-center justify-between">
      <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
        <div className="h-8 w-48 bg-gray-300 rounded animate-pulse mb-4"></div>
        <div className="h-6 w-64 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-6 w-48 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-32 bg-gray-300 rounded animate-pulse mb-4"></div>
        <div className="h-4 w-40 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-48 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-10 w-48 bg-gray-300 rounded animate-pulse mb-4"></div>
      </div>
      <div className="h-96 w-80 bg-gray-300 rounded animate-pulse"></div>
    </div>
  );

  return (
    <section className="bg-gradient-to-r text-white flex min-h-[700px] w-full items-center justify-center px-8">
      <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
        {isLoading ? (
          // Display the loading placeholder when data is being fetched
          <LoadingPlaceholder />
        ) : (
          // Display user's data when it is available
          <>
            <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
              <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-lightgray">
                Hey. <span className="text-blue-700">Welcome</span>
              </h2>
              <p className="lg:text-5xl lg:pb-2 sm:text-4xl text-3xl font-bold leading-tight text-lightgray">
                {`I'm`}{" "}
                <span className="text-purple-600 capitalize">{user.name}</span>
              </p>
              <span className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-lightgray capitalize">
                {user.workTitle}.
              </span>
              <p className="lg:text-lg sm:text-base text-sm ">
                Be a good human and create your great future.
              </p>
              <div className="flex space-x-4 items-center">
                <Link to={"/portfolios"}>
                  <button className="flex items-center relative w-48 border-2 hover:border-purple-600 duration-300 border-sky-500 text-lightgray p-3 rounded-lg group">
                    <span className="text-sm ">See The Latest Work</span>
                    <span className="absolute w-1/12 right-3 group-hover:w-11/12 box-content duration-300 flex justify-center bg-[#0F172A] rounded-sm">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-10"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M4 12H20M20 12L14 6M20 12L14 18"
                            stroke="#0ea5e9"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </button>
                </Link>

                <Link target="_blank" to={user.resume}>
                  <button className="bg-sky-700 rounded-md text-white before:bg-purple-600 before:content-['Download'] before:absolute before:inset-0 before:translate-y-full hover:before:translate-y-0 before:duration-300 before:flex before:justify-center before:items-center overflow-hidden after:content-['Resume'] after:absolute after:inset-0 after:translate-y-0 hover:after:-translate-y-full after:duration-300 after:flex after:justify-center after:items-center px-6 w-36 h-12 relative group"></button>
                </Link>
              </div>
              <p className="text-sm text-lightgray">
                Trusted by{" "}
                <span className="text-cyan-700 font-bold">{user.client}+</span>{" "}
                Clients
              </p>
            </div>
            <div className="relative">
              <img
                src={user.image}
                className="relative md:h-[600px] sm:h-[500px] h-[300px] w-[350px] bg-gray-400 rounded-b-full object-cover"
                alt="User"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
