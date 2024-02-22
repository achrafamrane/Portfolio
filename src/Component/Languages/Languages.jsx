import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
const Languages = ({ isDarkMode }) => {
  const [t, i18n] = useTranslation();

  return (
    <div className={`mt-1  ${isDarkMode ? "bg-gray-900 " : "  "}`}>
      <div className="flex justify-center items-center text-3xl font-serif  text-red-500 mt-5 mb-3">
        {t("Languages")}
      </div>
      <Box className="flex justify-center items-center space-x-32 ">
        <div dir={i18n.dir()}>
          <Typography component="legend">{t("SecondeLanguage")}</Typography>
          <Rating name="read-only" value="3" readOnly />
        </div>
        <div dir={i18n.dir()}>
          <Typography component="legend">{t("ThirdLanguage")}</Typography>
          <Rating name="read-only" value="3" readOnly />
        </div>
        <div dir={i18n.dir()}>
          <Typography component="legend">{t("FirstLanguage")}</Typography>
          <Rating name="read-only" value="3" readOnly />
        </div>
      </Box>
    </div>
  );
};

export default Languages;
