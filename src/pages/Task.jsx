import React from "react";

const task = () => {
  return (
    <div className="min-h-screen bg-black p-5 relative ">
        <div className="fixed top-0 bg-black backdrop-blur-xl z-20">
            <p>Tasks</p>

            <div className="mt-5">
            <p>SFT Socials - <span>14</span></p>
            <p>Join SFT community, be aware, be aware of new and following updates,
                claim your reward in rSPD with SFT fan!</p>
            </div>
        </div>

        <div className="mt-[20vh] relative">
            <div className="flex flex-col gap-5 mt-5 h-[200vh] ">
            <div className="relative">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_Twitter.png"
                    alt="Social Logo"
                    className="size-6"
                  />

                  <div className="">
                    <p>Follow SFT Protocol on X</p>
                    <p>+10 SP</p>
                  </div>
                </div>

                <button className="bg-yellow-500 px-3 py-1 rounded-full font-roboto text-black font-bold ">
                  Claim
                </button>
              </div>
              <div className="w-[80%] h-[1px] bg-white absolute bottom-0 right-0"></div>
            </div>
            <div className="relative">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_Twitter.png"
                    alt="Social Logo"
                    className="size-6"
                  />

                  <div className="">
                    <p>Follow SFT Protocol on X</p>
                    <p>+10 SP</p>
                  </div>
                </div>

                <button className="bg-yellow-500 px-3 py-1 rounded-full font-roboto text-black font-bold ">
                  Claim
                </button>
              </div>
              <div className="w-[80%] h-[1px] bg-white absolute bottom-0 right-0"></div>
            </div>
            <div className="relative">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Logo_Twitter.png"
                    alt="Social Logo"
                    className="size-6"
                  />

                  <div className="">
                    <p>Follow SFT Protocol on X</p>
                    <p>+10 SP</p>
                  </div>
                </div>

                <button className="bg-yellow-500 px-3 py-1 rounded-full font-roboto text-black font-bold ">
                  Claim
                </button>
              </div>
              <div className="w-[80%] h-[1px] bg-white absolute bottom-0 right-0"></div>
            </div>
            </div>
        </div>
      
    </div>
  );
};

export default task;
