import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useTranslation } from "react-i18next";
const Experience = ({ isDarkMode }) => {
  const [t, i18n] = useTranslation();
  return (
    <div
      className={`m-5 ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-slate-100 bg-opacity-1 text-black"
      }`}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="flex justify-center items-center text-3xl font-serif  text-red-500 mb-10">
        {t("WorkExperience")}
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work "
          contentStyle={{
            background: isDarkMode ? "rgba(17, 24, 39)" : "rgba(255, 255, 255)",
            color: isDarkMode ? "white" : "black",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2012-2015"
          iconStyle={{ background: "rgb(1 153 0)", color: "#fff" }}
          icon={<AdjustIcon />}
        >
          <div dir={i18n.dir()}>
            <h3 className="font-serif text-2xl ">{t("titleLicense")}</h3>
            <p className="font-serif">{t("descriptionLicense")}</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: isDarkMode ? "rgba(17, 24, 39)" : "rgba(255, 255, 255)",
            color: isDarkMode ? "white" : "black",
          }}
          className="vertical-timeline-element--work"
          date="2015 - 2017 "
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<AdjustIcon />}
        >
          <div dir={i18n.dir()}>
            {" "}
            <h3 className="font-serif text-2xl">{t("titleMaster")}</h3>
            <p className="font-serif">{t("descriptionMaster")}</p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: isDarkMode ? "rgba(17, 24, 39)" : "rgba(255, 255, 255)",
            color: isDarkMode ? "white" : "black",
          }}
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: "rgb(78 78 78)", color: "#fff" }}
          icon={<AdjustIcon />}
        >
          <div dir={i18n.dir()}>
            {" "}
            <h3 className="font-serif text-2xl">{t("Major")}</h3>
            <h4 className="font-serif text-blue-800">{t("FirstJob")}</h4>
            <p className="font-serif">
              Java | MySQL | Javascript | Angular | ReactJS | PrimeFaces |
              PrimeNg | JavaEE
            </p>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: isDarkMode ? "rgba(17, 24, 39)" : "rgba(255, 255, 255)",
            color: isDarkMode ? "white" : "black",
          }}
          className="vertical-timeline-element--work"
          date="2022 - 2024"
          iconStyle={{ background: "rgb(243 33 33)", color: "#fff" }}
          icon={<AdjustIcon />}
        >
          <div dir={i18n.dir()}>
            <h3 className="font-serif text-2xl">{t("Major")}</h3>
            <h4 className="font-serif text-blue-800 ">{t("SecondeJob")}</h4>
            <p className="font-serif">
              Java | MySQL | Javascript | Angular | ReactJS | PrimeFaces |
              PrimeNg | JavaEE | Oracle | Liferay 7 | Spring Boot | Spring
              Security | Docker
            </p>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
