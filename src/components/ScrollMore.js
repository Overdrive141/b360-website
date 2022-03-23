import React from "react";
import { motion } from "framer-motion";
import { Box } from "theme-ui";

const transition = {
  duration: 2,
  ease: [0.6, 0.01, -0.05, 0.9],
  repeat: Infinity,
  repeatType: "reverse",
  type: "spring",
};

const ScrollMore = () => {
  return (
    <motion.div
      initial={{ y: 20 }}
      animate={{
        y: 0,
        transition: { delay: 1.2, ...transition },
      }}
      style={{
        position: "absolute",
        bottom: "50px",
        left: "0px",
        zIndex: "50",
      }}
    >
      <Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23.539"
          height="29.985"
          viewBox="0 0 23.539 29.985"
          style={{ height: "auto", width: "28px" }}
        >
          <g id="down-arrow" transform="translate(-67.666 0.6)">
            <g id="Group_1" data-name="Group 1" transform="translate(68.266)">
              <path
                id="Path_1"
                data-name="Path 1"
                d="M90.452,18.153l-2.9-2.664a.528.528,0,0,0-.71,0L81.974,20V.48A.5.5,0,0,0,81.466,0H77.4A.5.5,0,0,0,76.9.48V20l-4.872-4.515a.529.529,0,0,0-.709,0l-2.9,2.664a.46.46,0,0,0,0,.687l10.662,9.81a.528.528,0,0,0,.708,0l10.662-9.81a.461.461,0,0,0,0-.687Z"
                transform="translate(-68.266)"
                fill="none"
                stroke="#000"
                stroke-width="1.2"
              />
            </g>
          </g>
        </svg>
      </Box>
    </motion.div>
  );
};

export default ScrollMore;
