import React from "react";
import pointer from "../../assets/dashboard/pointer.png"; // Adjust the path according to your project structure

const iconMap = {
  "Create Your First Session": pointer,
  "Join a Game as a Participant": pointer,
  "Finish a Game": pointer,
  "Upgrade Your Account Plan": pointer,
  "Add Your Logo and Colors": pointer,
  "Host Multiplayer Games": pointer,
};

const InitialSessions = ({ setShowInititalScreen }) => {
  const data = [
    {
      header: "Create Your First Session",
      points: ["Congratulations! You have created 1 session."],
    },
    {
      header: "Join a Game as a Participant",
      points: [
        "Join one of the games as a participant to get to know the app by playing against the computer.",
      ],
    },
    {
      header: "Finish a Game",
      points: [
        "Finish a game to discover the debriefing page available at the end of a game.",
      ],
    },
    {
      header: "Upgrade Your Account Plan",
      points: [
        "Upgrade your account plan to host multiplayer games.",
        "Discover the different options",
      ],
    },
    {
      header: "Add Your Logo and Colors",
      points: [
        "Boost the immersion by adding your corporate identity to the games.",
        "Customize the branding settings",
      ],
    },
    {
      header: "Host Multiplayer Games",
      points: [
        "Host games with your students and colleagues to fully benefit from the platform.",
        "Check browser and network compatibility",
      ],
    },
  ];

  return (
    <div className="lg:mt-[12vh] md:mt-[8vh] mt-[14vh] w-full flex-1 overflow-auto">
      <div className="w-full h-full px-2">
        <section className="header md:flex-row flex flex-col  px-2 justify-between md:items-center items-start">
          <p className="md:text-[1.4rem] text-[1.0rem] font-semibold">
            Complete your Onboarding Tasks
          </p>
          <p
            onClick={() => setShowInititalScreen(false)}
            className="text-[0.8rem] text-gray-400 underline cursor-pointer"
          >
            Do not show this anymore
          </p>
        </section>
        <section className="border-2 border-gray-300 mt-4 rounded-md p-4">
          {data.map((item, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-center mb-2">
                <img
                  src={iconMap[item.header]}
                  alt={item.header}
                  className="mr-2 w-6 h-6"
                />
                <p className="text-lg font-semibold">{item.header}</p>
              </div>
              <ul className="list-disc pl-10 flex flex-col">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="text-sm text-gray-700">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default InitialSessions;
