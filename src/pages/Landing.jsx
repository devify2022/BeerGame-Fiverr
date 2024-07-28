import { useState, useEffect } from "react";
import hero from "../assets/hero/hero.png";
import icon1 from "../assets/landing/icon1.png";
import icon2 from "../assets/landing/icon2.png";
import icon3 from "../assets/landing/icon3.png";
import icon4 from "../assets/landing/icon4.png";
import benifit from "../assets/landing/benifit.png";
import checkIcon from "../assets/landing/checkIcon.png";
import tracks from "../assets/landing/tracks.png";
import game from "../assets/landing/game.png";
import step1 from "../assets/landing/step1.png";
import step2 from "../assets/landing/step2.png";
import stepBack from "../assets/landing/step2back.png";
import icon8 from "../assets/landing/icon8.png";
import icon9 from "../assets/landing/icon9.png";
import icon10 from "../assets/landing/icon10.png";
import icon11 from "../assets/landing/icon11.png";
import icon12 from "../assets/landing/icon12.png";
import icon13 from "../assets/landing/icon13.png";
import icon14 from "../assets/landing/icon14.png";
import icon15 from "../assets/landing/icon15.png";
import icon16 from "../assets/landing/icon16.png";
import pointer1 from "../assets/landing/pointer1.png";
import pointer2 from "../assets/landing/pointers2.png";
import pointDown from "../assets/landing/pointDown.png";
import graph from "../assets/landing/graph.png";
import gaming from "../assets/landing/gaming.png";
import avatar1 from "../assets/landing/avatar1.png";
import avatar2 from "../assets/landing/avatar2.png";
import avatar3 from "../assets/landing/avatar3.png";
import rating from "../assets/landing/rating.png";
import pagination from "../assets/landing/pagination.png";
import right from "../assets/landing/right.png";
import left from "../assets/landing/left.png";
import Icon1 from "../assets/landing/Icon1.jsx";
import Icon2 from "../assets/landing/Icon2.jsx";
import Icon3 from "../assets/landing/Icon3.jsx";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState(null); // 'left' or 'right'
  const [itemsPerView, setItemsPerView] = useState(3);

  const reviews = [
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      avatar: avatar1,
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      avatar: avatar2,
      review:
        "I like it because I like to travel far and still can connect with high speed.",
    },
    {
      name: "Kim  Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      avatar: avatar1,
      review:
        "This is very unusual for my business that currently requires a virtual private network that has high security.",
    },
    {
      name: "Viezh doe",
      location: "Warsaw, Poland",
      rating: 4.5,
      avatar: avatar1,
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    },
    {
      name: "Yessica rob",
      location: "Shanxi, China",
      rating: 4.5,
      avatar: avatar2,
      review:
        "I like it because I like to travel far and still can connect with high speed.",
    },
    {
      name: "Kim  Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      avatar: avatar1,
      review:
        "This is very unusual for my business that currently requires a virtual private network that has high security.",
    },
    {
      name: "Viezh Robert",
      location: "Warsaw, Poland",
      rating: 4.5,
      avatar: avatar1,
      review:
        "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best.",
    },
    {
      name: "Yessica Christy",
      location: "Shanxi, China",
      rating: 4.5,
      avatar: avatar2,
      review:
        "I like it because I like to travel far and still can connect with high speed.",
    },
    {
      name: "Kim  Jou",
      location: "Seoul, South Korea",
      rating: 4.5,
      avatar: avatar1,
      review:
        "This is very unusual for my business that currently requires a virtual private network that has high security.",
    },

    // Add more reviews here
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex + itemsPerView < reviews.length) {
      setSlideDirection("right");
      setCurrentIndex(currentIndex + itemsPerView);
    }
  };

  const handlePrev = () => {
    if (currentIndex - itemsPerView >= 0) {
      setSlideDirection("left");
      setCurrentIndex(currentIndex - itemsPerView);
    }
  };

  const displayReviews = reviews.slice(
    currentIndex,
    currentIndex + itemsPerView
  );

  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero flex flex-col-reverse md:flex lg:flex-row justify-center items-center gap-5 mt-20 lg:px-14">
        <div className="w-full md:w-full lg:w-[50%] px-5 md:px-10 mt-10 md:mt-10">
          <h1 className="text-2xl md:text-5xl lg:text-5xl font-semibold">
            Easily host <span className="text-[#F15412]">remote or live</span>{" "}
          </h1>
          <h1 className="text-2xl md:text-5xl lg:text-5xl mt-2 font-semibold">
            Beer Game sessions
          </h1>
          <p className="my-10 text-base md:text-lg lg:text-lg">
            Engage participants through immersive{" "}
            <strong>supply chain simulations</strong> to boost individual skills
            development, teamwork and promote continuous{" "}
            <strong>improvement</strong>.
          </p>
          <div className="flex flex-col md:flex-row lg:flex-row gap-5 text-base md:text-lg lg:text-lg">
            <button className="bg-[#34B3F1] hover:bg[#16aefa] text-white font-semibold py-3 px-12 rounded-xl">
              Play Demo
            </button>
            <button className="border border-black text-black font-semibold hover:border hover:border-[#F15412] hover:text-[#F15412] py-3 px-10">
              Sign Up As Instructor
            </button>
          </div>
          <p className="mt-8 text-lg">
            Larger team or looking for support?{" "}
            <span className="text-blue-600">Book a meeting with us →</span>
          </p>
        </div>
        <div className="w-60%">
          <img src={hero} className="h-full w-full" alt="" />
        </div>
      </section>

      {/* SMALL BREWERIES */}
      <section className="breweries my-20 md:px-8 lg:px-14">
        <div className="border-2 flex flex-col lg:flex-row p-5 md:p-8 lg:p-10 justify-center items-center gap-10">
          <div className="lg:w-[40%]">
            <h1 className="text-2xl md:text-3xl lg:text-4xl">
              Helping <span className="text-[#F15412]">small breweries</span>{" "}
              elevate their distribution game.
            </h1>
            <p className="mt-5 text-base font-semibold lg:mt-8">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            <div className="flex items-center gap-5 p-10 lg:p-5 shadow-md md:shadow-md lg:shadow-none">
              <img src={icon1} alt="" />
              <div>
                <h2 className="text-2xl font-bold">2,245,341</h2>
                <p>Members</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-10 lg:p-5 shadow-md md:shadow-md lg:shadow-none">
              <img src={icon2} alt="" />
              <div>
                <h2 className="text-2xl font-bold">2,245,341</h2>
                <p>Members</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-10 lg:p-5 shadow-md md:shadow-md lg:shadow-none">
              <img src={icon3} alt="" />
              <div>
                <h2 className="text-2xl font-bold">2,245,341</h2>
                <p>Members</p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-10 lg:p-5 shadow-md md:shadow-md lg:shadow-none">
              <img src={icon4} alt="" />
              <div>
                <h2 className="text-2xl font-bold">2,245,341</h2>
                <p>Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="whyChoose my-20 px-5 md:px-8 lg:px-14">
        <h1 className="text-4xl text-gray-800 font-semibold text-center">
          Why Choose Us?
        </h1>
        <p className="text-base text-center text-gray-500 mt-3">
          We are the preferred choice for many reasons.
        </p>
        <div className="flex items-center justify-center gap-20 md:gap-10 lg:gap-10  px-4">
  <div className="w-full  mt-20 md:mt-10 lg:mt-20 flex justify-center items-center">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 md:gap-10 lg:gap-10">
      <div
        onMouseEnter={() => setIsHovered(1)}
        onMouseLeave={() => setIsHovered(0)}
        className="text-center border-2 border-gray-200 hover:border-[#34B3F1] p-10 rounded-lg md:h-[370px] md:w-[350px] lg:h-[370px] lg:w-[400px] transition-colors duration-300 group"
      >
        <div className="w-full flex justify-center items-center">
          <div className="p-4 border-2 border-gray-200 rounded-full bg-white transition-colors duration-300 group-hover:border-[#34B3F1] group-hover:text-[#34B3F1] mt-[-40%] md:mt-[-35%] lg:mt-[-30%]">
            <Icon1 color={isHovered === 1 ? "#34B3F1" : "#4F5665"} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-10 text-3xl text-gray-700 group-hover:text-[#34B3F1] font-semibold">
            Effortless Setup
          </h2>
          <p className="mt-3 text-xl text-gray-700">
            Our intuitive platform enables instructors to set up their games
            in a flash. Enjoy a hassle-free start with minimal effort.
          </p>
        </div>
      </div>

      <div
        onMouseEnter={() => setIsHovered(2)}
        onMouseLeave={() => setIsHovered(0)}
        className="text-center border-2 border-gray-200 hover:border-[#34B3F1] p-10 rounded-lg md:h-[370px] md:w-[350px] lg:h-[370px] lg:w-[400px] transition-colors duration-300 group"
      >
        <div className="w-full flex justify-center items-center">
          <div className="p-4 border-2 border-gray-200 rounded-full bg-white transition-colors duration-300 group-hover:border-[#34B3F1] group-hover:text-[#34B3F1] mt-[-40%] md:mt-[-35%] lg:mt-[-30%]">
            <Icon2 color={isHovered === 2 ? "#34B3F1" : "#4F5665"} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-10 text-3xl text-gray-700 group-hover:text-[#34B3F1] font-semibold">
            Effortless Setup
          </h2>
          <p className="mt-3 text-xl text-gray-700">
            Our intuitive platform enables instructors to set up their games
            in a flash. Enjoy a hassle-free start with minimal effort.
          </p>
        </div>
      </div>

      <div
        onMouseEnter={() => setIsHovered(3)}
        onMouseLeave={() => setIsHovered(0)}
        className="text-center border-2 border-gray-200 hover:border-[#34B3F1] p-10 rounded-lg md:h-[370px] md:w-[350px] lg:h-[370px] lg:w-[400px] transition-colors duration-300 group"
      >
        <div className="w-full flex justify-center items-center">
          <div className="p-4 border-2 border-gray-200 rounded-full bg-white transition-colors duration-300 group-hover:border-[#34B3F1] group-hover:text-[#34B3F1] mt-[-40%] md:mt-[-35%] lg:mt-[-30%]">
            <Icon3 color={isHovered === 3 ? "#34B3F1" : "#4F5665"} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="mt-10 text-3xl text-gray-700 group-hover:text-[#34B3F1] font-semibold">
            Effortless Setup
          </h2>
          <p className="mt-3 text-xl text-gray-700">
            Our intuitive platform enables instructors to set up their games
            in a flash. Enjoy a hassle-free start with minimal effort.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      </section>

      {/* BENIFITS */}
      <section className="benifits my-20 flex flex-col md:flex-col lg:flex-row justify-center items-center gap-5 mt-20 lg:px-14">
        <div className="w-60%">
          <img src={benifit} className="h-full w-full" alt="" />
        </div>

        <div className="w-full md:w-full lg:w-[50%] px-5 md:px-10 mt-10 md:mt-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Explore our array of features, each offering unique functions
            designed for both practicality and enjoyment.
          </h1>

          <p className="mt-8 text-base">
            Dive into a world where functionality meets fun!
          </p>

          <div className="mt-10">
            <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg">
              <img src={checkIcon} className="h-8 w-8" alt="" />
              <p className="text-base">
                Benefit from comprehensive post-game reports and analytics to
                enhance learning.
              </p>
            </div>
            <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg mt-5">
              <img src={checkIcon} className="h-8 w-8" alt="" />
              <p className="text-base">
                Receive dedicated support to ensure a smooth gaming experience.
              </p>
            </div>
            <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg mt-5">
              <img src={checkIcon} className="h-8 w-8" alt="" />
              <p className="text-base">
                Integrate our games seamlessly with your existing systems.
              </p>
            </div>
            <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg mt-5">
              <img src={checkIcon} className="h-8 w-8" alt="" />
              <p className="text-base">
                Play and manage games on the go with our mobile-friendly
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BENIFITS 2 */}
      <section className="benifits my-20 flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-center items-center gap-5 mt-20 lg:px-14">
        <div className="w-full md:w-full lg:w-[50%] px-5 md:px-10 mt-10 md:mt-10">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            This {`isn't`} a drinking game, so why is it called the{" "}
            <span className="text-[#F15412]">Beer Game</span>?
          </h1>

          <p className="mt-6 text-lg text-[#4F5665] font-semibold">
            The name originates from a{" "}
            <span className="text-[#34B3F1]">classic role-playing game</span>{" "}
            created at MIT in the 1960s.
          </p>

          <p className="mt-6 text-lg text-[#4F5665] font-semibold">
            Back then, professors discovered they could engage university
            students more effectively by naming it{" "}
            <span className="text-[#F15412]">The Beer Distribution Game</span>.
          </p>

          <p className="mt-6 text-lg text-[#4F5665] font-semibold">
            Our beer games can be{" "}
            <span className="text-[#34B3F1]">white-labeled</span>, allowing you
            to tailor The Beergame App to your specific product, industry, and
            audience, whether you deal in aircraft parts or smartphones.
          </p>
        </div>

        <div className="w-60%">
          <img src={tracks} className="h-full w-full" alt="" />
        </div>
      </section>

      {/* BENIFITS 3 */}
      <section className="benifits my-20 flex flex-col md:flex-col lg:flex-row justify-center items-center gap-5 mt-20 lg:px-14">
        <div className="w-60%">
          <img src={game} className="h-full w-full" alt="" />
        </div>

        <div className="w-full md:w-full lg:w-[50%] px-5 md:px-10 mt-10 md:mt-10">
          <h1 className="text-xl md:text-3xl lg:text-4xl font-bold">
            The Objective of the Beer{" "}
            <span className="text-[#34B3F1]">Game</span>{" "}
          </h1>

          <p className="mt-6 text-base text-[#4F5665] font-semibold">
            The <span className="text-[#34B3F1]">aim</span> of the game is to
            fulfill requests at each stage of the supply chain in order to meet
            the overall demand of end customers
          </p>

          <p className="mt-6 text-base text-[#4F5665] font-semibold">
            Players are assigned to a role in their specific industry. For
            example, in a beer supply chain simulation, participants play as
            either Manufacturer, Distributor, Wholesaler, or Retailer.
          </p>

          <p className="mt-6 text-base text-[#4F5665] font-semibold">
            Each role responds to order requests from the stage below and places
            orders for the stage above.
          </p>
        </div>
      </section>

      {/* GAMING */}
      <section className="px-5 lg:px-24">
        <div className="flex items-center font-bold">
          <h1 className="text-3xl uppercase">
            Check <span className="text-[#F53838]">how it looks</span>:
          </h1>
          <img src={pointDown} alt="Point Down Icon" />
        </div>
        <div>
          <img
            src={gaming}
            className="h-full w-full mx-auto"
            alt="Point Down Icon"
          />
        </div>
      </section>

      {/* STEP 1 */}
      <section className="step my-20 lg:px-14 ">
        <div className="flex justify-between items-center px-5 md:px-10 lg:px-24">
          <h1 className="text-[#34B3F1] text-4xl lg:text-6xl font-semibold underline">
            STEP 1
          </h1>
          <img
            src={pointer1}
            className="h-[50px] w-[70px]  md:h-[100px] md:w-[170px] lg:h-[100px] lg:w-[170px]"
            alt=""
          />
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center lg:gap-28">
          <div className="w-full md:w-full lg:w-[50%] px-5 md:px-10 mt-10 md:mt-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Setting Up Game
            </h1>

            <p className="mt-6 text-lg font-semibold">
              Instructors have an extensive set of features and options for
              creating a custom Beer Game.
            </p>

            <div className="mt-10">
              <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg">
                <img src={icon8} className="h-6 w-6" alt="" />
                <p className="text-base">
                  Customize the layout and scenario to fit your industry and
                  lesson goals
                </p>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg my-10">
                <img src={icon9} className="h-6 w-6" alt="" />
                <p className="text-base">
                  Create copies and manage templates of your game for future
                  events.
                </p>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg">
                <img src={icon10} className="h-6 w-6" alt="" />
                <p className="text-base">
                  Integrate our games seamlessly with your existing systems.
                </p>
              </div>
            </div>
          </div>

          <div className="w-60% mt-0 md:mt-16 lg:mt-0">
            <img src={step1} className="h-full w-full" alt="" />
          </div>
        </div>
      </section>

      {/* STEP 2 */}
      <section className="step my-20 flex lg:flex-row lg:px-14 ">
        <div className="w-full flex flex-col justify-between items-center ">
        <div className="flex h-[30%] w-full justify-between items-center px-5 md:px-10 lg:px-24">
          <img
            src={pointer2}
            className="h-[50px] w-[70px]  md:h-[100px] md:w-[170px] lg:h-[100px] lg:w-[170px]"
            alt=""
          />
          <h1 className="text-[#F15412] text-4xl lg:mr-[25%] lg:text-6xl font-semibold underline">
            STEP 2
          </h1>
        </div>

        <div className="flex  flex-col-reverse md:flex-col-reverse lg:flex-row justify-center  border-black items-center lg:gap-10">
          <div className="step2  h-[60%] relative mt-0 md:mt-16 lg:mt-0 p-8">
            <img
              src={stepBack}
              className="h-full w-[80%] absolute top-0 left-0 z-0"
              alt="Background Image"
            />
            <img
              src={step2}
              className="h-full w-full relative z-10"
              alt="Foreground Image"
            />
          </div>

          <div className="w-full md:w-full lg:w-[50%] px-5 md:px-10 mt-10 md:mt-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Hosting and Gamplay
            </h1>

            <p className="mt-6 text-lg font-semibold">
              Once your game is set up, you can send player invites and launch
              your game in a matter of seconds!
            </p>

            <div className="mt-10">
              <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg">
                <img src={icon11} className="h-6 w-6" alt="" />
                <p className="text-base">
                  Invite as many as several hundred players with a simple click
                  of the “Share Away!” button.
                </p>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg my-10">
                <img src={icon12} className="h-6 w-6" alt="" />
                <p className="text-base">
                  All onboarding and instructions automatically await players
                  entering the game.
                </p>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg">
                <img src={icon13} className="h-6 w-6" alt="" />
                <p className="text-base">
                  Announce surprise events, like a seasonal promotion,
                  encouraging players to cooperate and adapt to common supply
                  chain challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* STEP 3 */}
      <section className="step my-20 lg:px-14">
        <div className="flex justify-between items-center px-5 md:px-10 lg:px-24">
          <h1 className="text-[#34B3F1] text-4xl lg:text-6xl font-semibold underline">
            STEP 3
          </h1>
          <img
            src={pointer1}
            className="h-[50px] w-[70px]  md:h-[100px] md:w-[170px] lg:h-[100px] lg:w-[170px]"
            alt=""
          />
        </div>

        <div className="flex flex-col md:flex-col lg:flex-row justify-center items-center lg:gap-28">
          <div className="w-full md:w-full lg:w-[50%] px-5 md:px-10 mt-10 md:mt-10">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              Setting Up Game
            </h1>

            <p className="mt-6 text-lg font-semibold">
              Instructors have an extensive set of features and options for
              creating a custom Beer Game.
            </p>

            <div className="mt-10">
              <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg">
                <img src={icon14} className="h-6 w-6" alt="" />
                <p className="text-base">
                  Customize the layout and scenario to fit your industry and
                  lesson goals
                </p>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg my-10">
                <img src={icon15} className="h-6 w-6" alt="" />
                <p className="text-base">
                  Create copies and manage templates of your game for future
                  events.
                </p>
              </div>
              <div className="flex items-center gap-3 text-base md:text-lg lg:text-lg">
                <img src={icon16} className="h-6 w-6" alt="" />
                <p className="text-base">
                  Integrate our games seamlessly with your existing systems.
                </p>
              </div>
            </div>
          </div>

          <div className="w-60% mt-0 md:mt-16 lg:mt-0">
            <img src={graph} className="h-full w-full" alt="" />
          </div>
        </div>
      </section>

      {/* REVIEW */}
      <section className="review my-20 px-5 md:px-8 lg:px-14">
        <div className="w-[90%] md:w-[60%] lg:w-[35%] mx-auto">
          <h1 className="text-4xl text-gray-800 font-semibold text-center">
            Trusted by Thousands of Happy Customers
          </h1>
          <p className="text-base text-center text-gray-500 mt-10">
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 gap-5 md:gap-5 lg:gap-10 transition-all duration-500 ${
            slideDirection === "left"
              ? "slide-left"
              : slideDirection === "right"
              ? "slide-right"
              : ""
          }`}
        >
          {displayReviews.map((review, index) => (
            <div
              key={index}
              className="border-2 hover:border-[#34B3F1] p-5 rounded-lg cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src={review.avatar}
                    className="h-14 w-14 mx-auto border-0 rounded-full bg-white"
                    alt=""
                  />
                  <div>
                    <h2 className="font-bold">{review.name}</h2>
                    <p className="text-sm">{review.location}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p>{review.rating}</p>
                  <img src={rating} className="" alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mt-5">
                <p className="mt-3 text-base font-semibold">{review.review}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-10">
          <div className="flex gap-2">
            {Array.from({
              length: Math.ceil(reviews.length / itemsPerView),
            }).map((_, index) => (
              <div
                key={index}
                className={`${
                  currentIndex / itemsPerView === index ? "w-10" : "w-4"
                } h-4 rounded-full ${
                  currentIndex / itemsPerView === index
                    ? "bg-[#16aefa]"
                    : "bg-gray-300"
                } transition-colors duration-300`}
              />
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`custom-button ${
                currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              <GoArrowLeft className="custom-icon" />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + itemsPerView >= reviews.length}
              className={`custom-button ${
                currentIndex + itemsPerView >= reviews.length
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              <GoArrowRight className="custom-icon" />
            </button>
          </div>
        </div>
      </section>
      {/* LAST SECTION */}
      <section className="my-10 px-5 md:px-10 lg:px-14">
        <div className="text-center">
          <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
            Sign up and create your first Zensimu game in minutes!
          </h1>
          <button className="bg-[#F15412] md:w-[25%] lg:w-[15%] mx-auto hover:bg[#F15412] text-white font-semibold py-3 px-12 roundedmd mt-10">
            Play Demo
          </button>
        </div>
      </section>
    </main>
  );
};

export default Landing;
