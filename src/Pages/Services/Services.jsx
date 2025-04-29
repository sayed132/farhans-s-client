import { useQuery } from "@tanstack/react-query";

const Services = () => {
  const { data: service = [], isLoading } = useQuery({
    queryKey: ["all-service"],
    queryFn: async () => {
      const res = await fetch(
        "https://farhans-s-server.onrender.com/service/all"
      );
      const data = await res.json();
      return data.service; // Assuming the data structure contains the service array at the top level
    },
  });

  // Define the number of loading placeholders you want to display
  const loadingPlaceholders = Array.from({ length: 10 }, (_, index) => index);

  return (
    <div id="services" className="w-full px-8 my-5">
      <div className="w-full flex flex-col items-center justify-center my-12 mx-auto">
        <img className="w-80 " src="what-can-ido.png" alt="What I Do" />
        <h2 className="py-5 lg:text-5xl text-3xl font-bold tracking-widest">
          What Can I Do?
        </h2>
      </div>

      <div className="grid gap-4 cursor-pointer grid-cols-12">
        {isLoading
          ? // Display loading placeholders while data is being fetched
            loadingPlaceholders.map((_, index) => (
              <div
                key={index}
                className="p-4 col-span-full sm:col-span-6 lg:col-span-4 shadow-2xl bg-gradient-to-r from-[#232f35] to-[#143545] font-sans rounded-xl transition-transform hover:scale-105"
              >
                <div className="flex justify-center w-full h-56 object-center sm:h-48 bg-gray-300 animate-pulse rounded-lg">
                  {/* Placeholder for image */}
                </div>
                <div className="text-start mx-auto lg:font-semibold mt-2">
                  <div className="h-4 bg-gray-300 rounded mb-2 animate-pulse"></div>
                </div>
              </div>
            ))
          : // Display service items once data is loaded
            service?.map((item) => (
              <div
                key={item._id}
                className="col-span-full sm:col-span-6 lg:col-span-4 p-4 shadow-2xl bg-gradient-to-r from-[rgba(17, 20, 29, 0.5)] to-[#0e1627] font-sans rounded-xl transition-transform hover:scale-105"
              >
                <div className="flex justify-center w-full h-56 object-center sm:h-48">
                  <img
                    className="rounded-lg bg-black/40 w-full h-full"
                    src={item?.image}
                    alt="Service Image"
                  />
                </div>
                <div className="text-start mx-auto lg:font-semibold mt-2">
                  <h6 className="text-xs md:text-lg text-wrap">{item?.name}</h6>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Services;
