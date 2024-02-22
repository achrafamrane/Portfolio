import { useTranslation } from "react-i18next";
import { DataTools } from "./DataTools";
const Tools = ({ isDarkMode }) => {
  const [t, i18n] = useTranslation();

  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="2000"
      className={` ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-slate-100 bg-opacity-1 text-black"
      }`}
    >
      <div className="flex justify-center items-center text-3xl font-serif  text-red-500 ">
        {t("Tools")}
      </div>
      <div className="flex justify-center items-center text-sm font-serif  text-gray-500 ">
        {t("descriptionTools")}
      </div>

      <div className=" rounded-md">
        <div className=" w-full px-1 py-1 sm:px-1 sm:py-1 lg:max-w-8xl lg:px-8 ">
          {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2> */}

          <div className=" grid grid-cols-1 gap-x-1 gap-y-5 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-4 ">
            {DataTools.map((e) => (
              <div
                key={e.id}
                className="group relative border-2  rounded-3xl p-2 hover:bg-gray-100"
              >
                <div className=" w-full overflow-hidden   group-hover:opacity-50 group-hover:border-3 group-hover:h-40 ">
                  <img
                    src={e.image}
                    alt={e.title}
                    className="w-full h-40 rounded-2xl  shadow-md object-scale-down"
                  />
                </div>
                <div className="mt-2 flex justify-between">
                  <div>
                    <h3
                      className={` ${
                        isDarkMode
                          ? "bg-gray-900 text-white"
                          : "bg-slate-100 bg-opacity-1 text-sm text-gray-700"
                      }`}
                    >
                      <a href="#">{e.title}</a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
