import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
const Languages = ({ isDarkMode }) => {
  return (
    <div
      data-aos="zoom-up"
      data-aos-duration="3000"
      className={`mt-1 mb-20 ${isDarkMode ? "bg-gray-900 " : "  "}`}
    >
      <div className="flex justify-center items-center text-3xl font-serif  text-red-500 mt-2 mb-10">
        Languages
      </div>
      <Box className="flex justify-center items-center space-x-20">
        <div>
          <Typography component="legend">ENGLISH</Typography>
          <Rating name="read-only" value="3" readOnly />
        </div>
        <div>
          <Typography component="legend">FRENCH</Typography>
          <Rating name="read-only" value="2" readOnly />
        </div>
        <div>
          <Typography component="legend">ARAB</Typography>
          <Rating name="read-only" value="3" readOnly />
        </div>
      </Box>
    </div>
  );
};

export default Languages;
