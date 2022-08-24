import { Typography } from "@material-tailwind/react";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About - KU Compaint";
  }, []);

  return (
    <div className="container mx-auto max-w-[1024px] p-5 mt-5 mb-5">
      <div className="text-3xl font-bold">About</div>
      <Typography className="mt-5">
        โปรแกรมแจ้งเรื่องร้องเรียนภายในมหาวิทยาลัยเกษตรศาสตร์
      </Typography>
    </div>
  );
};

export default About;
