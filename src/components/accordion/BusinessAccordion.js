import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import useOnScreen from "hooks/useOnScreen";
import { useEffect, useRef } from "react";
import { Box, Divider, Image } from "theme-ui";

const BusinessAccordion = ({
  title,
  description,
  index,
  updateActiveFeature,
}) => {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) {
      console.log(index);
      updateActiveFeature(index);
    }
  }, [onScreen, index]);

  return (
    <Box
      // sx={{ height: "100vh"}}
      sx={{ opacity: 0 }}
      className="feature-parent"
      ref={ref}
    >
      <AccordionItem
        // w="50%"
        borderWidth="5"
        // style={{ opacity: title1Opacity }}
        // style={{
        //   height: "100vh",
        //   display: "flex",
        //   flexDirection: "column",
        //   justifyContent: "center",
        //   //   width: "60%",
        // }}
      >
        <h2>
          <AccordionButton justifyContent="space-between">
            <Box
              flex="1"
              textAlign="left"
              sx={{ fontSize: "26px", color: "#ffffff" }}
              className="feature-title"
            >
              {title}
            </Box>
            <AccordionIcon color="#ffffff" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} color="#ffffff" className="feature-description">
          {description}
        </AccordionPanel>
      </AccordionItem>
      {/* <Divider
        sx={{
          width: "600px",
          mt: "24px",
          border: "0.5px solid #6C6C6C",
        }}
      /> */}
    </Box>
  );
};

export { BusinessAccordion };
