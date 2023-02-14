import React from "react";

const InfoRight = () => {
  return (
    <>
      <div className="info-right w-[18%] fixed ml-[80%] mt-6">
        <div className="flex justify-center gap-x-6">
          <button className="flex w-[88px] h-10 rounded-2xl bg-slate-50 shadow gap-2">
            <img
              className=" w-[24px] h-[24px] my-auto"
              src="/asset/img/usermanual.png"
              alt=""
            />
            <p className=" my-auto">SignUp</p>
          </button>
          <button className="flex w-[88px] h-10 rounded-2xl bg-slate-50 shadow gap-2">
            <img
              className=" w-[24px] h-[24px] my-auto"
              src="/asset/img/login.png"
              alt=""
            />
            <p className=" my-auto">Login</p>
          </button>
        </div>
        <h1 className=" mt-6 text-xl ml-6">Stats today</h1>
        <div className="statistic w-[180px]  h-[120px] ml-6 grid grid-cols-2 grid-rows-2 gap-y-3 mt-3 shadow-md rounded-md text-center">
          <div>
            <h3 className=" font-extrabold text-xl">1236</h3>
            <h4 className=" text-slate-500 opacity-50 font-thin">Watch time</h4>
          </div>
          <div>
            <h3 className=" font-extrabold text-xl">150</h3>
            <h4 className=" text-slate-500 opacity-50 font-thin">Wish list</h4>
          </div>
          <div>
            <h3 className=" font-extrabold text-xl">Pro</h3>
            <h4 className=" text-slate-500 opacity-50 font-thin">
              Subscription
            </h4>
          </div>
          <div>
            <h3 className=" font-extrabold text-xl">123</h3>
            <h4 className=" text-slate-500 opacity-50 font-thin">Comment</h4>
          </div>
        </div>
        <h2 className=" mt-6 ml-6 text-xl">New Users</h2>
        <div className="list-users flex mt-2 gap-x-2 justify-center">
          <span>
            <img
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhbmRzb21lJTIwbWVuJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
              alt=""
              className=" rounded-lg h-10 w-10 object-cover"
            />
          </span>
          <span>
            <img
              src="https://images.unsplash.com/photo-1611166819965-87dc032ed901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhdXRpZnVsJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
              alt=""
              className=" rounded-lg h-10 w-10 object-cover"
            />
          </span>
          <span>
            <img
              src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGhhbmRzb21lJTIwZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60"
              alt=""
              className=" rounded-lg h-10 w-10 object-cover"
            />
          </span>
          <span>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXV0aWZ1bCUyMGZhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60"
              alt=""
              className=" rounded-lg h-10 w-10 object-cover"
            />
          </span>
        </div>
        <div className="continue mt-6 ml-6">
          <p className="mt-2 text-xl">Continue Watching</p>
          <img
            src="https://i-giaitri.vnecdn.net/2016/05/19/toppp-7410-1463639344.jpg"
            alt=""
            className=" rounded-xl mt-2 h-24 w-40"
          />
          <p>X-Men: Apocalypse</p>
          <p className=" text-gray-300">2016</p>
        </div>
      </div>
    </>
  );
};

export default InfoRight;
