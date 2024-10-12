import React from "react";
import image from "../../../assets/images/leaderboard_profile.png";
const Leaderboard = () => {
  return (
    <div>
      <div className="w-full h-96 rounded-2xl mt-5 relative overflow-hidden">
        <p>LeaderBoard</p>

        <div className="  flex flex-col gap-3 p-2 mt-1">
          <div className="backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden">
            <div className="size-12 p-[2px] rounded-2xl relative">
              <div className="bg-[#27C9FF] w-full h-full blur-md z-0 rounded-2xl absolute"></div>
              <img
                src={image}
                alt=""
                className="rounded-2xl z-10 relative w-full h-full"
              />
            </div>

            <p className="font-roboto text-xs font-bold">. 1</p>
            <div className="">
              <p className="font-roboto text-xs font-bold">J. Joseph Nahid</p>
              <p className="font-roboto text-xs">
                999999 <strong>SBT</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="  flex flex-col gap-3 p-2 mt-1">
          <div className="backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden">
            <div className="size-12 p-[2px] rounded-2xl relative">
              <div className="bg-[#27C9FF] w-full h-full blur-md z-0 rounded-2xl absolute"></div>
              <img
                src={image}
                alt=""
                className="rounded-2xl z-10 relative w-full h-full"
              />
            </div>

            <p className="font-roboto text-xs font-bold">. 1</p>
            <div className="">
              <p className="font-roboto text-xs font-bold">J. Joseph Nahid</p>
              <p className="font-roboto text-xs">
                999999 <strong>SBT</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="  flex flex-col gap-3 p-2 mt-1">
          <div className="backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden">
            <div className="size-12 p-[2px] rounded-2xl relative">
              <div className="bg-[#27C9FF] w-full h-full blur-md z-0 rounded-2xl absolute"></div>
              <img
                src={image}
                alt=""
                className="rounded-2xl z-10 relative w-full h-full"
              />
            </div>

            <p className="font-roboto text-xs font-bold">. 1</p>
            <div className="">
              <p className="font-roboto text-xs font-bold">J. Joseph Nahid</p>
              <p className="font-roboto text-xs">
                999999 <strong>SBT</strong>
              </p>
            </div>
          </div>
        </div>
        <div className="  flex flex-col gap-3 p-2 mt-1">
          <div className="backdrop-blur-sm h-16 mt-0 rounded-2xl flex items-center gap-3 px-3 overflow-hidden">
            <div className="size-12 p-[2px] rounded-2xl relative">
              <div className="bg-[#27C9FF] w-full h-full blur-md z-0 rounded-2xl absolute"></div>
              <img
                src={image}
                alt=""
                className="rounded-2xl z-10 relative w-full h-full"
              />
            </div>

            <p className="font-roboto text-xs font-bold">. 1</p>
            <div className="">
              <p className="font-roboto text-xs font-bold">J. Joseph Nahid</p>
              <p className="font-roboto text-xs">
                999999 <strong>SBT</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
