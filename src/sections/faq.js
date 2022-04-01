/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container} from "theme-ui";
import { Box,Button,chakra,Text, SimpleGrid,Input,InputGroup, Textarea } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { rgba } from "polished";
import Image from "components/bgImage";
import { keyframes } from "@emotion/react";
import { usePostData } from "hooks/usePostData";
import { API_URL } from "config/api/index";
import { createToast } from "utils/createToast";
import { useMutation } from "react-query";

export default function FAQ() {

    const {
        handleSubmit,
        register,
        getValues,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const { mutate, isSuccess, isLoading, isError } = useMutation(
        usePostData,
        {}
      );
    
    const URL = `${API_URL.notifications}/send-FAQ-mail`;
    const onSubmit = async (body) => {
        console.log(body)
        try {
            mutate(
              { URL, body },
              {
                onSuccess: (value) => {
                  console.log(value.data);
                  createToast({ title: "Query send Successfully" });
                },
                onError: (err) => {
                  createToast({
                    title: "Unable to send query",
                    msg: err.stack,
                    type: "error",
                  });
                },
              }
            );
        } catch (err) {
            alert(err.message);
        }
    };
    
    return (
        <Box as="section" id="faq" sx={styles.section}>
            <Container sx={styles.container}>
                <SimpleGrid columns={2} spacing={100} sx={styles.grid}>
                    <Box  mt="106px" textAlign="left">
                        <Text color="#FFFFFF" fontSize="40px" fontWeight={400} lineHeight="60px">Questions?<br/> We're here to help.</Text>
                        <Text color="#FFFFFF" fontSize="16px" fontWeight={400} opacity="0.5" lineHeight="24px" mt={20}>Our advisors are here to help you chart a course to success. They can answer <br/>all your Business360-related questions, including topics like:</Text>
                        <Box mt="15px">
                            <ul>
                                <li
                                    sx={styles.list}
                                >Our entire product portfolio</li>
                                <li
                                    sx={styles.list}
                                >Pricing information</li>
                                <li
                                    sx={styles.list}
                                >Implementation and adoption planning</li>
                            </ul>
                        </Box>
                    </Box>
                    <Box  mt="106px">
                        <chakra.form onSubmit={handleSubmit(onSubmit)}>
                            <InputGroup>
                                <Input 
                                    placeholder="Full Name"
                                    variant='outline'   
                                    w="547px"
                                    h="52px"
                                    //bg="#1B1C1E"
                                    color="#fffff"
                                    border="1px solid #FFFFFF"
                                    boxSizing= "border-box"
                                    borderRadius="3px" 
                                    mb="36px"
                                    type="text"
                                    id="name"
                                    {...register("name", {
                                    required: "This is required",
                                    })}
                                    focusBorderColor="blue"
                                />
                            </InputGroup>   
                            <InputGroup>
                                <Input 
                                    placeholder="Email"
                                    variant='outline'   
                                    w="547px"
                                    h="52px"
                                    //bg="#1B1C1E"
                                    border="1px solid #FFFFFF"
                                    boxSizing= "border-box"
                                    borderRadius="3px" 
                                    mb="36px"
                                    type="email"
                                    id="email"
                                    {...register("email", {
                                    required: "This is required",
                                    })}
                                    focusBorderColor="blue"
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input 
                                    placeholder="Phone"
                                    variant='outline'   
                                    w="547px"
                                    h="52px"
                                    color="#1B1C1E" 
                                    //bg="#1B1C1E"
                                    border="1px solid #FFFFFF"
                                    boxSizing= "border-box"
                                    borderRadius="3px"
                                    mb="36px"
                                    type="text"
                                    id="phone"
                                    {...register("phone", {
                                    required: "This is required",
                                    })}
                                    focusBorderColor="blue"
                                />
                            </InputGroup>
                            <InputGroup>
                                <Textarea 
                                    placeholder="Message"
                                    variant='outline'   
                                    w="547px"
                                    h="88px"
                                    color="#1B1C1E" 
                                    //bg="#1B1C1E"
                                    border="1px solid #FFFFFF"
                                    boxSizing= "border-box"
                                    borderRadius="3px"
                                    mb="36px"
                                    type="text"
                                    id="message"
                                    {...register("message", {
                                    required: "This is required",
                                    })}
                                    focusBorderColor="blue"
                                />
                            </InputGroup>
                            <Button
                            type="submit"
                            isLoading={isSubmitting}
                                sx={styles.button}
                                
                            >
                                Submit
                            </Button>
                        </chakra.form>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
}

const styles = {
  section: {
    overflow: "hidden",
    backgroundColor: "#1B1C1E",
    textAlign: "center",
    h2: {
      fontSize: ["28px", null, null, "32px", "38px", "48px", "64px"],
      lineHeight: 1.25,
      color: "#02073E",
      fontWeight: 700,
      width: "100%",
      maxWidth: ["100%", null, null, "55%", "500px", "640px", "851px"],
      mx: "auto",
      mt: "30px",
      mb: ["40px", null, null, "65px"],
    },
  },
  container: {
    position: "relative",
    background: "#1B1C1E",
    width:"100%",
    mb:"101px",
    ".imageBackground":{
        width: "1270px",
        height: "1079px",
        left: "1009px",
        top: "1px",
    }  
  },
  box:{
    mt:"61px",
    display:"flex",
  },
  grid:{
    "@media only screen and (max-width: 768px) ":{
        display:"block"      
    },
    "@media only screen and (max-width: 500px) ":{
        display:"block"      
    }
  },
  button:{
    mt:10,
    ml:"250px",
    width:"161px",
    height:"53px",
    backgroundColor: "#FFFFFF",
    border:"2px solid #FFFFFF",
    boxSizing:"border-box",
    borderRadius:"30px",
    "@media only screen and (max-width: 500px) ":{
        ml:"150px",
    }
  },
  number:{
    fontWeight:400,
    fontSize:"60px",
    letterSpacing: "0.15em",
    //lineHeight:"375px",
    color:"#ffffff"
  },
  title:{
    fontSize:"16px",
    letterSpacing: "0.15em",
    color:"#ffffff"
  },
  list:{
    textAlign:"left",
    opacity:"0.5",
    color: "#ffffff",
    fontSize:"16px",
    ml:"40px",

  },  
};
