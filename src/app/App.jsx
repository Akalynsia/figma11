import React from "react";

const App = () => {
  return (
    <div className="relative w-screen h-screen bg-[rgba(222,48,63,1)] flex justify-center items-center">
      <main className="w-[1000px] h-[580px] bg-[rgba(255,255,255,1)] rounded-2xl shadow-xl shadow-[rgba(0,0,0,0.2)] flex flex-col justify-center items-center gap-6">
        <h1 className="font-sans font-[700] text-[40px]">Delete User</h1>
        <p className="font-sans font-[500] text-[33px]">
          Are you sure you want to delete <strong>your account</strong>?
        </p>
        <div className="w-[850px] h-[139px] flex bg-[rgba(255,233,217,1)]">
          <div className="w-[10px] h-[139px] bg-[rgba(250,112,63,1)]"></div>
          <div className="flex flex-col justify-center">
            <div className="flex ml-8">
              <svg height="30.25" width="40" viewBox="0 0 30 26.25">
                <polygon
                  points="15,0 30,26.25 0,26.25"
                  fill="rgba(119, 21, 5, 1)"
                />
                <text
                  x="50%"
                  y="85%"
                  text-anchor="middle"
                  fill="white"
                  font-size="20px"
                  font-weight="600"
                >
                  !
                </text>
              </svg>
              <h4 className="font-[700] text-[30px] text-[rgba(119,21,5,1)]">
                Warning
              </h4>
            </div>
            <div>
              <p className="w-[689px] font-[500] text-[25px] text-[rgba(188,76,46,1)] ml-8">
                By Deleting this account, you wont be able to access the system.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[850px] h-[88px] flex justify-between">
          <button className="w-[219px] h-[86px] bg-[rgba(16,31,32,1)] text-white font-[500] text-[33px]">
            No, Cancel
          </button>
          <button className="w-[217px] h-[84px] bg-[rgba(255,255,255,1)] text-black font-[500] text-[33px] border-2 border-solid border-black">
            Yes, Delete
          </button>
        </div>
      </main>
    </div>
  );
};

export default App;
