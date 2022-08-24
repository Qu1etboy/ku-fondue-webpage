import { useEffect, useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import { Typography } from "@material-tailwind/react";

const Content = ({ title, row, children }) => {
  const animation = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // set animation when in view
  useEffect(() => {
    if (isInView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          type: "easeInOut",
        },
      });
    } else {
      animation.start({
        y: "200px",
        opacity: 0,
      });
    }
  }, [isInView]);

  return (
    <div className={`w-full bg-[${row % 2 === 0 ? "#FFF" : "#F6F6F6"}]`}>
      <motion.div
        animate={animation}
        className="container mx-auto max-w-[1024px] px-5 h-screen grid grid-cols-1 gap-10 lg:gap-0 lg:grid-cols-2 justify-items-center content-center"
      >
        <div
          ref={ref}
          className={`order-2 lg:order-${row % 2 === 0 ? "1" : "2"}`}
        >
          <Typography className="font-bold lg:text-5xl text-xl mb-5">
            {title}
          </Typography>
          <Typography className="text-lg">{children}</Typography>
        </div>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/th/thumb/5/51/Logo_ku_th.svg/1200px-Logo_ku_th.svg.png"
          }
          alt="student"
          height={300}
          width={300}
          className={`order-1 lg:order-${row % 2 === 0 ? "2" : "1"}`}
        />
      </motion.div>
    </div>
  );
};

export default Content;
