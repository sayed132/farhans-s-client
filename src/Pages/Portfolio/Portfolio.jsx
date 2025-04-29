import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import "./portfolio.css";

const Portfolio = () => {
  const {
    data: portfolio = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["all-portfolio"],
    queryFn: async () => {
      const res = await fetch(
        "https://farhans-s-server.onrender.com/portfolio/all"
      );
      const data = await res.json();
      return data.portfolio;
    },
  });

  // Define the number of loading placeholders to display
  const loadingPlaceholders = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div id="portfolio" className="w-full px-8 my-5">
      <div className="w-full flex flex-col items-center justify-center lg:my-28 my-12 mx-auto">
        <img className="w-80 " src="work.png" alt="" />
        <h2 className="py-5 lg:text-5xl text-3xl font-bold tracking-widest">
          Here Is My Work Sample
        </h2>
      </div>

      <div className="grid gap-4 grid-cols-12 cursor-pointer">
        {isLoading
          ? // Display loading placeholders while data is being fetched
            loadingPlaceholders.map((_, index) => (
              <div
                key={index}
                className="p-4 col-span-full sm:col-span-6 lg:col-span-4 shadow-2xl bg-gradient-to-r from-[#0C1222] to-[#0B1220]  font-sans rounded-xl transition-transform hover:scale-105"
              >
                <div className="flex justify-center w-full h-56 object-center sm:h-48 bg-gray-300 animate-pulse rounded-lg"></div>
                <div className="text-start mx-auto lg:font-semibold mt-2">
                  <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                </div>
                <div className="mt-5">
                  <div className="bg-gray-300 w-24 h-8 rounded-md animate-pulse"></div>
                </div>
              </div>
            ))
          : // Display portfolio items when data is available
            portfolio.map((item) => (
              <Link
                to={`/portfolio/${item._id}`}
                key={item._id}
                className="p-4 col-span-full sm:col-span-6 lg:col-span-4 shadow-2xl bg-gradient-to-r from-[rgba(17, 20, 29, 0.5)] to-[#0e1627] font-sans rounded-xl transition-transform hover:scale-105"
              >
                {/* <div className="flex justify-center w-full h-56 object-center sm:h-48 ">
                  <img
                    className="rounded-lg bg-black/40 w-full h-full"
                    src={item.image}
                    alt="img"
                  />
                </div> */}
                <div className="flex justify-center w-full h-56 object-center sm:h-48">
                  <div
                    className="scroll-item rounded-lg bg-black/40 w-full h-full"
                    style={{ backgroundImage: `url(${item.image})` }}
                  >
                    {/* You can add additional content inside this div if necessary */}
                  </div>
                </div>
                {/* <div
                  className="scroll-item flex justify-center w-full h-56 object-center sm:h-48 rounded-lg bg-black/40"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div> */}

                <div className="text-start mx-auto lg:font-semibold mt-2">
                  <h6 className="text-md md:text-lg text-wrap">{item.name}</h6>
                  <p className="text-xs md:text-md text-wrap">
                    {item.desc.slice(0, 100)}
                    {item.desc.length > 100 && "..."}
                  </p>
                </div>
                {/* <div className="mt-5">
                  <Link className="uppercase" to={`/portfolio/${item._id}`}>
                    <button className="bg-orange-500 uppercase font-semibold px-3 py-1.5 rounded-md">
                      See Details
                    </button>
                  </Link>
                </div> */}
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Portfolio;
