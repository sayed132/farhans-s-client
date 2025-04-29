import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import "./portfolio.css";

const PortfolioDetail = () => {
  const { id } = useParams();
  const { data: portfolio = [], refetch } = useQuery({
    queryKey: ["single-portfolio"],
    queryFn: async () => {
      const res = await fetch(
        `https://farhans-s-server.onrender.com/portfolio/${id}`
      );
      const data = await res.json();
      console.log(data.singlePortfolio, "portfolio");
      return data.singlePortfolio;
    },
  });

  return (
    <div className=" px-8 shadow-lg bg-gradient-to-r from-[rgba(17, 20, 29, 0.5)] to-[#0e1627] m-5  rounded-md flex  items-center">
      <div className="grid grid-cols-7 gap-5 lg:mx-8 p-5 items-center">
        <div className="col-span-full lg:col-span-2 text-justify">
          <div className="mb-3">
            <h2 className="font-bold text-xl">Project Name</h2>
            <h3 className="font-bold text-xl text-blue-600">
              {portfolio?.name}
            </h3>
            <h2>numbers of users {""}</h2>
          </div>
          <div>
            <h2 className="font-bold text-lg">Description</h2>
            <p className="font-bold text-sm mb-3 mt-1">{portfolio?.desc}</p>
            <h2 className="font-bold text-lg">Technologies Used</h2>
            <p className="font-bold text-sm mb-3 mt-1">{portfolio?.tech}</p>
            <h2 className="font-bold text-lg">Time Period</h2>
            <p className="font-bold text-sm mb-3 mt-1 text-green-600">
              {portfolio?.time}
            </p>
            <h2 className="font-bold text-lg">Links</h2>
            <p className="font-bold text-sm mb-3 mt-1">
              <Link
                to={portfolio?.liveLink}
                target="_blank"
                className="pr-3 cursor-pointer hover:text-blue-700 duration-700"
              >
                Live Link
              </Link>
              <Link
                className="cursor-pointer hover:text-blue-700 duration-700 pr-3"
                to={portfolio?.WorkLink}
                target="_blank"
              >
                Github 1
              </Link>
              <Link
                className="cursor-pointer hover:text-blue-700 duration-700"
                to={portfolio?.WorkLink2}
                target="_blank"
              >
                GitHub 2
              </Link>
            </p>
          </div>
        </div>

        <div className="col-span-full lg:col-span-5">
          <div className="flex flex-row-reverse justify-between">
            {/* slider container */}
            {/* <div className="flex flex-col justify-center items-center gap-3 p-2">
           
              {item?.images.map((slide, inx) => (
                <img
                  onClick={() => setCurrentSlider(inx)}
                  key={inx}
                  src={slide.url}
                  className={`w-10 md:w-20 h-6 sm:h-8 md:h-12  ${
                    currentSlider === inx ? " p-px" : ""
                  } rounded-md md:rounded-lg box-content cursor-pointer`}
                  alt=""
                />
              ))}
            </div> */}
            <div
              className="w-full lg:w-4/5 sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 rounded-lg transform duration-1000 ease-linear scroll-item"
              style={{ backgroundImage: `url(${portfolio?.image})` }}
            >
              {/* Content inside the div if necessary */}
            </div>
            {/* <div
              className="w-full lg:w-4/5  sm:h-96 md:h-[540px] flex flex-col items-center justify-center gap-5 lg:gap-10 rounded-lg  transform duration-1000 ease-linear"
              // style={{ backgroundImage: `url(${item.images[currentSlider].url})`}}
            >
              <img
                className="transform duration-1000 ease-linear w-full md:h-full overflow-hidden  rounded-md"
                src={portfolio?.image}
                // src={item.images[currentSlider].url}
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioDetail;
