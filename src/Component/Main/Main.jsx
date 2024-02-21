import image2 from "../../assets/image2.jpg";
import Tooltip from "@mui/material/Tooltip";
import { DataSkills } from "./Data";
const Main = ({ isDarkMode }) => {
  return (
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-duration="2000"
        className={`flex justify-center items-center slide  pb-20 ${
          isDarkMode
            ? "bg-gray-900 text-white"
            : "bg-slate-100 bg-opacity-1 text-black"
        }`}
      >
        <div
          className="mt-20 "
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <img
            className="rounded-full w-[350px] h-[350px] object-center justify-center items-center"
            src={image2}
            alt=""
          />
        </div>
        <div
          className="ml-10  rounded-full"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <p className="font-medium">Hello,I'm</p>
          <h1 className="font-bold text-3xl shadow-2xl shadow-slate-600  rounded-full">
            AMRANE ACHRAF
          </h1>
          <h3 className="mt-4 font-semibold">FULL STACK DEVELOPER</h3>
        </div>
      </div>
      <div
        className={` ${
          isDarkMode
            ? "bg-gray-900 text-white border border-white rounded-3xl"
            : "bg-slate-100 bg-opacity-1 text-black"
        }`}
      >
        <div className="flex justify-center items-center text-3xl font-serif  text-red-500 mt-5 ">
          Skills
        </div>
        <div className="flex justify-center items-center text-sm font-serif  text-gray-500 ">
          I can say i’m quite good at
        </div>
        <div
          className={`flex justify-center items-center mt-7  w-full ml-0  rounded-full ${
            isDarkMode
              ? "bg-gray-900 text-white"
              : " bg-slate-100 bg-opacity-50 "
          }`}
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          {DataSkills.map((e) => (
            <Tooltip title={e.title} key={e.id}>
              <div className="flex justify-center items-center m-8 rounded-full border border-slate-300 hover:opacity-40">
                <img
                  className="rounded-md w-[80px] h-[80px]  "
                  src={e.image}
                  alt="achraf amrane"
                />
              </div>
            </Tooltip>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
