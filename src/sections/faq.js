/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Container} from "theme-ui";
import { Box,Button,chakra,Text, SimpleGrid,Input,InputGroup, Textarea } from '@chakra-ui/react'
import { useForm } from "react-hook-form";
import { rgba } from "polished";
import Image from "components/bgImage";
import { keyframes } from "@emotion/react";

export default function FAQ() {

    const {
        handleSubmit,
        register,
        getValues,
        setError,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (values) => {
        try {
            console.log(values)
        } catch (err) {
          alert(err.message);
        }
    };
    
    return (
        <Box as="section" id="home" sx={styles.section}>
            <Container sx={styles.container}>
                <SimpleGrid columns={2} spacing={100}>
                    <Box  mt="106px" textAlign="left">
                        <Text color="#FFFFFF" fontSize="60px" fontWeight={400} lineHeight="90px">Questions?<br/> We're here to <br/>help.</Text>
                        <Text color="#FFFFFF" fontSize="16px" fontWeight={400} opacity="0.5" lineHeight="24px" mt={20}>Our advisors are here to help you chart a course to success. They can answer <br/>all your Business360-related questions, including topics like:</Text>
                        <Box mt="15px">
                            <ul>
                                <li
                                    sx={styles.list}
                                >Data Discovery</li>
                                <li
                                    sx={styles.list}
                                >Data Silos and Insights</li>
                                <li
                                    sx={styles.list}
                                >Data Vulnerability</li>
                            </ul>
                        </Box>
                    </Box>
                    <Box  mt="106px">
                        <chakra.form onSubmit={handleSubmit(onSubmit)}>
                            
                        <InputGroup>
                                <Input 
                                    placeholder="First Name"
                                    variant='outline'   
                                    w="547px"
                                    h="72px"
                                    bg="#1B1C1E"
                                    border="1px solid #FFFFFF"
                                    boxSizing= "border-box"
                                    borderRadius="3px" 
                                    mb="36px"
                                    type="text"
                                    id="firstName"
                                    {...register("firstName", {
                                    required: "This is required",
                                    })}
                                    focusBorderColor="blue"
                                />
                            </InputGroup>
                            <InputGroup>
                                <Input 
                                    placeholder="Last Name"
                                    variant='outline'   
                                    w="547px"
                                    h="72px"
                                    bg="#1B1C1E"
                                    border="1px solid #FFFFFF"
                                    boxSizing= "border-box"
                                    borderRadius="3px" 
                                    mb="36px"
                                    type="text"
                                    id="lastName"
                                    {...register("lastName", {
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
                                    h="72px"
                                    bg="#1B1C1E"
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
                                    h="72px"
                                    color="#1B1C1E" 
                                    bg="#1B1C1E"
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
                                    h="188px"
                                    color="#1B1C1E" 
                                    bg="#1B1C1E"
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
                                mt={10}
                                ml="290px"
                                type="submit"
                                w="191px"
                                h="63px"
                                bg= "#FFFFFF"
                                border= "2px solid #FFFFFF"
                                boxSizing="border-box"
                                borderRadius= "30px"
                                isLoading={isSubmitting}
                            >
                                Sign In 
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
    mb:"251px",
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
