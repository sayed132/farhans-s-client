import { useQuery } from "@tanstack/react-query";
import Education from "../Education/Education";

const AboutMe = () => {
  const { data: user = [], isLoading } = useQuery({
    queryKey: ["about"],
    queryFn: async () => {
      const res = await fetch("https://farhans-s-server.onrender.com/profile");
      const data = await res.json();
      console.log(data, "profile");
      return data.user[0];
    },
  });

  // Define a LoadingPlaceholder component to handle the loading state
  const LoadingPlaceholder = () => (
    <div>
      <div className="lg:text-start lg:px-80 py-5 mx-auto">
        <div className="h-6 w-64 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-48 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-32 bg-gray-300 rounded animate-pulse mb-4"></div>
      </div>
    </div>
  );

  return (
    <div id="about" className="w-full px-8">
      <div className="w-full flex flex-col items-center justify-center my-12 mx-auto">
        <img className="w-80" src="abt.png" alt="INTRODUCE MYSELF" />
        <h2 className="py-5 lg:text-5xl text-3xl text-center font-bold tracking-widest">
          LET ME INTRODUCE MYSELF
        </h2>
      </div>

      {isLoading ? (
        // Display loading placeholders while data is being fetched
        <LoadingPlaceholder />
      ) : (
        // Display user's data when it is available
        <>
          <div>
            <div className="lg:text-start lg:px-80 py-5 mx-auto">
              <h1 className="text-xl font-bold uppercase tracking-widest">
                Hi, my name is {user.name}. I am from Bangladesh.
              </h1>
              <p className="tracking-widest mt-2 font-semibold capitalize">
                {user.aboutMe}.
              </p>
            </div>

            <Education />
          </div>
        </>
      )}
    </div>
  );
};

export default AboutMe;
