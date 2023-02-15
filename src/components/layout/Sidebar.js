import React from "react";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-left w-[15%] fixed bg-white">
        <img className=" mb-6" src="/asset/img/logo-header.png" alt="" />
        <div className="flex gap-2 mb-3 ml-8">
          <img src="https://img.icons8.com/ios-filled/24/novel.png" alt="" />
          <div>Romance</div>
        </div>
        <div className="flex gap-2 mb-3 ml-8">
          <img src="https://img.icons8.com/ios-filled/24/comedy2.png" alt="" />
          <div className="text-center">Comedy</div>
        </div>
        <div className="flex gap-2 mb-3 ml-8">
          <img
            src="https://img.icons8.com/ios-filled/24/musical-notes.png"
            alt=""
          />
          <div>Music</div>
        </div>
        <div className="flex gap-2 mb-3 ml-8">
          <img src="https://img.icons8.com/ios-filled/24/bat.png" alt="" />
          <div className="text-center">Horror</div>
        </div>
        <div className="flex gap-2 mb-3 ml-8 ">
          <img src="https://img.icons8.com/ios-filled/24/battle.png" alt="" />
          <div>War</div>
        </div>
        <div className="flex gap-2 mb-3 ml-8">
          <img src="https://img.icons8.com/ios-filled/24/family.png" alt="" />
          <div>Family</div>
        </div>
        <div className="footer mt-[180px]">
          <ul className="flex flex-wrap gap-2 text-sm">
            <li>
              <a href="/" className=" hover:underline">
                Privacy
              </a>
              <span> &#8226;</span>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Terms
              </a>
              <span>&#8226;</span>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Cookies
              </a>
              <span> &#8226;</span>
            </li>
            <li>
              <a href="/" className=" hover:underline">
                Advertising
              </a>
              <span> &#8226;</span>
            </li>
            <li>Mota &#169; 2023</li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
