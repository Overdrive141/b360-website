import React, { useState } from "react";
import {
  Box,
  Button,
  chakra,
  Flex,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  Text,
} from "@chakra-ui/react";
import { Select } from "antd";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Map from "components/Map";
import ImageUpload from "components/Others/ImageUpload";
import { API_URL } from "config/api/index";
import Register from "components/forms/Register/NewRegister";
import { usePostData } from "hooks/usePostData";
import { createToast } from "utils/createToast";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const NewBusinessForm = ({ buttonText, onClose, children, ...props }) => {
  const [done, setDone] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const [hasWebsite, setHasWebsite] = useState();
  const [hasOnlineStore, setHasOnlineStore] = useState();
  const [currentRevenue, setCurrentRevenue] = useState();
  const [industry, setIndustry] = useState();
  const [userId, setUserId] = useState();
  const { Option } = Select;

  const completeFormStep = () => {
    setFormStep((curr) => curr + 1);
  };

  const onWebsite = (value) => {
    setHasWebsite(value);
  };
  const onOnlineStore = (value) => {
    setHasOnlineStore(value);
  };

  const onCurrentRevenue = (value) => {
    setCurrentRevenue(value);
  };
  const onIndustry = (value) => {
    setIndustry(value);
  };
  const goBack = () => {
    setFormStep((curr) => curr - 1);
  };
  const MAX_STEP = 4;

  const {
    handleSubmit,
    watch,
    register,
    setValue,
    getValues,
    setError,
    clearErrors,
    control,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm({ mode: "all" });

  const { mutate, isSuccess, isLoading, isError } = useMutation(
    usePostData,
    {}
  );

  const URL = `${API_URL.business}/business-webapp`;

  const onSubmit = async (body) => {
    body.userId = userId;
    body.hasWebsite = hasWebsite;
    body.hasOnlineStore = hasOnlineStore;
    body.currentRevenue = currentRevenue;
    body.industry = industry;
    body.type = "regBiz"; // To Make Authenticated Request
    console.log("body----------->", body);
    try {
      mutate(
        { URL, body },
        {
          onSuccess: (value) => {
            setDone(true);
            console.log(value.data);
            createToast({ title: "Business Created Successfully" });
            completeFormStep();
          },
          onError: (err) => {
            createToast({
              title: "Unable to Create Business",
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
  if (isLoading) {
  }
  if (isError) {
  }
  if (isSuccess) {
  }
  return (
    <>
      <Box d="flex" flexDir="column" {...props} justifyContent="center">
        {formStep === 0 && (
          <Register completeFormStep={completeFormStep} setUserId={setUserId} />
        )}
        <chakra.form onSubmit={handleSubmit(onSubmit)}>
          {formStep === 1 && (
            <section>
              <Box h="116px" mt="19px">
                <Text
                  sx={styles.title}
                >
                  Create Your Online Store
                </Text>
                <Text
                  sx={styles.subTitle}
                >
                  Create Your Online Store
                </Text>
              </Box>
              <Box sx={styles.container}>
                <FormLabel sx={styles.label}>
                  Business Name
                </FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Business Name"
                    sx={styles.input}
                    type="text"
                    {...register("businessName", {
                      required: "This is required",
                    })}
                    autoComplete="name"
                    focusBorderColor="blue"
                  />
                  <FormErrorMessage>
                    {errors.businessName && (
                      <Text color="red">{errors.businessName.message}</Text>
                    )}
                  </FormErrorMessage>
                </InputGroup>
                
                <Button
                  sx={styles.button}
                  disabled={!isDirty || !isValid}
                  type="button"
                  onClick={completeFormStep}
                >
                  <Text sx={styles.buttonText}>
                    Create Store
                  </Text>
                </Button>
              </Box>
            </section>
          )}
          {formStep === 2 && (
            <section>
              <Box h="116px" mt="19px">
                <Text
                  sx={styles.stepHeading}
                >
                  Step {formStep} of {MAX_STEP}
                </Text>
                <Text
                  sx={styles.title}
                >
                  Create Your Business Profile
                </Text>
              </Box>
              <Box ml="30px" mb={20}>
                <Grid
                  templateRows="repeat(2, 1fr)"
                  templateColumns="repeat(6, 1fr)"
                  gap={4}
                  sx={styles.grid}
                >
                  <GridItem rowSpan={2} colSpan={2}>
                    <FormLabel sx={styles.labelForm2}>
                      Business Logo
                    </FormLabel>
                    <Box sx={styles.imageContainer}>
                      <ImageUpload
                        imageCount={1}
                        value="businessLogo"
                        {...{ register, setValue, control }}
                      />
                    </Box>
                  </GridItem>
                  <GridItem colSpan={2} sx={styles.box}>
                    <FormLabel sx={styles.labelForm2}>
                      Contact Number
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="Contact Number"
                        w="157px"
                        h="42px"
                        border="100px"
                        bo
                        borderRadius="3px"
                        color="#000000"
                        type="text"
                        {...register("businessPhNumber", {
                          required: "This is required",
                        })}
                        autoComplete="name"
                        focusBorderColor="blue"
                      />
                      <FormErrorMessage>
                        {errors.businessPhNumber &&
                          errors.businessPhNumber.message}
                      </FormErrorMessage>
                    </InputGroup>
                  </GridItem>
                  <GridItem colSpan={2}>
                    <FormLabel sx={styles.labelForm2}>
                      Business Email
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="Business Email"
                        w="157px"
                        h="42px"
                        border="1px"
                        borderRadius="3px"
                        color="#000000"
                        type="text"
                        {...register("businessEmail", {
                          required: "This is required",
                        })}
                        autoComplete="name"
                        focusBorderColor="blue"
                      />
                      <FormErrorMessage>
                        {errors.businessEmail && errors.businessEmail.message}
                      </FormErrorMessage>
                    </InputGroup>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <FormLabel sx={styles.labelForm2}>
                      Tag Line
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="Tag Line"
                        w="535px"
                        h="42px"
                        border="1px"
                        borderRadius="3px"
                        color="#000000"
                        type="text"
                        {...register("tagLine", {
                          required: "This is required",
                        })}
                        autoComplete="tagLine"
                        focusBorderColor="blue"
                      />
                      <FormErrorMessage>
                        {errors.tagLine && errors.tagLine.message}
                      </FormErrorMessage>
                    </InputGroup>
                  </GridItem>
                </Grid>
                <Button
                  sx={styles.backButton}
                  onClick={goBack}
                >
                  <Text>Back</Text>
                </Button>
                <Button
                  disabled={!isDirty || !isValid}
                  sx={styles.formButton2}
                  type="button"
                  onClick={completeFormStep}
                >
                  <Text sx={styles.buttonText}>
                    Next
                  </Text>
                </Button>
              </Box>
            </section>
          )}
          {formStep === 3 && (
            <section>
              <Box h="116px" mt="19px">
                <Text
                  sx={styles.stepHeading}
                >
                  Step {formStep} of {MAX_STEP}
                </Text>
                <Text
                  sx={styles.title}
                >
                  Add Your Address
                </Text>
              </Box>
              <Box ml="30px" mb={20}>
                <Grid
                  templateRows="repeat(2, 1fr)"
                  templateColumns="repeat(6, 1fr)"
                  gap={4}
                  sx={styles.grid}
                >
                  <GridItem rowSpan={2} colSpan={2}>
                    <Box d="flex" flexDir="column" w="250" mt="15px">
                      <Map
                        width={250}
                        height={250}
                        value="businessLocation"
                        {...{
                          register,
                          setValue,
                          getValues,
                          errors,
                          setError,
                          clearErrors,
                        }}
                      />
                    </Box>
                  </GridItem>
                  <GridItem colSpan={4}>
                    <FormLabel sx={styles.cityLabel}>
                      City
                    </FormLabel>
                    <InputGroup>
                      <Input
                        placeholder="City"
                        sx={styles.cityInput}
                        type="text"
                        {...register("city", {
                          required: "This is required",
                        })}
                        autoComplete="name"
                        focusBorderColor="blue"
                      />
                      <FormErrorMessage>
                        {errors.city && errors.city.message}
                      </FormErrorMessage>
                    </InputGroup>
                  </GridItem>
                </Grid>
                <Button
                  sx={styles.backButton}
                  onClick={goBack}
                >
                  <Text>Back</Text>
                </Button>
                <Button
                  sx={styles.formButton2}
                  disabled={!isDirty || !isValid}
                  type="button"
                  onClick={completeFormStep}
                >
                  <Text sx={styles.buttonText}>
                    Next
                  </Text>
                </Button>
              </Box>
            </section>
          )}
          {formStep === 4 && (
            <section>
              <Box h="116px" mt="19px">
                <Text
                  sx={styles.stepHeading}
                >
                  Step {formStep} of {MAX_STEP}
                </Text>
                <Text
                  sx={styles.title}
                >
                  Tell us a little more about yourself
                </Text>
              </Box>
              <Box sx={styles.formContainer4}>
                <FormLabel fontSize="18px" mb="20px" mt="20px">
                  Do you have a website?
                </FormLabel>
                <Select
                  title="Please Choose One"
                  placeholder="Please choose one"
                  id="DoyouhaveAwebsite"
                  style={{
                    width: "247px",
                    border: "1px",
                    borderRadius: "3px",
                    color: "#000000",
                    focusBorderColor: "blue",
                  }}
                  onChange={onWebsite}
                >
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
                <FormLabel fontSize="18px" mb="20px" mt="20px">
                  Do you have an Online digital store?
                </FormLabel>
                <Select
                  title="Please choose one"
                  placeholder="Please choose one"
                  id="DoyouhaveanOnlinedigitalstore"
                  style={{
                    width: "247px",
                    border: "1px",
                    borderRadius: "3px",
                    color: "#000000",
                    mb: "25px",
                    focusBorderColor: "blue",
                  }}
                  onChange={onOnlineStore}
                >
                  <Option value="Yes">Yes</Option>
                  <Option value="No">No</Option>
                </Select>
                <FormLabel fontSize="18px" mb="20px" mt="20px">
                  What is your current revenue?
                </FormLabel>
                <Select
                  placeholder="Please choose one"
                  id="q3"
                  style={{
                    width: "247px",
                    border: "1px",
                    borderRadius: "3px",
                    color: "#000000",
                    mb: "25px",
                    focusBorderColor: "blue",
                  }}
                  onChange={onCurrentRevenue}
                >
                  <Option value="Rs.50000-Rs.100000">Rs.50000-Rs.100000</Option>
                  <Option value="Rs.100000-Rs.500000">
                    Rs.100000-Rs.500000
                  </Option>
                  <Option value="Rs.500000-Rs.1000000">
                    Rs.500000-Rs.1000000
                  </Option>
                  <Option value="Rs.1000000-Rs.2000000">
                    Rs.1000000-Rs.2000000
                  </Option>
                </Select>
                <FormLabel fontSize="18px" mb="20px" mt="20px">
                  Which Industry will you be operating?
                </FormLabel>
                <Select
                  title="Please choose one"
                  placeholder="Please choose one"
                  id="WhichIndustryWillYouBeOperating"
                  style={{
                    width: "247px",
                    border: "1px",
                    borderRadius: "3px",
                    color: "#000000",
                    mb: "25px",
                    focusBorderColor: "blue",
                  }}
                  onChange={onIndustry}
                >
                  <Option value="Food">Food</Option>
                  <Option value="FMCG">FMCG</Option>
                  <Option value="Petroleum">Petroleum</Option>
                  <Option value="IT">IT</Option>
                </Select>
              </Box>
              <Button
                sx={styles.backButton}
                onClick={goBack}
              >
                <Text>Back</Text>
              </Button>
              <Button
                sx={styles.formButton2}
                disabled={!isDirty || !isValid}
                type="submit"
                isLoading={isLoading}
              >
                <Text sx={styles.buttonText}>
                  Submit
                </Text>
              </Button>
            </section>
          )}
        </chakra.form>
        {formStep === 5 && (
          <section>
            <Box h="116px" mt="19px">
              <Text
                sx={styles.title}
              >
                Your Store is ready to go
              </Text>
              <Text
                sx={styles.subTitle}
              >
                Check your Email to verify your Email
              </Text>
            </Box>
            
          </section>
        )}
      </Box>
    </>
  );
};

export default NewBusinessForm;

const styles={
  //form 1

  title:{
    color:"#000000",
    fontSize:"45px",
    textAlign:"center",
    fontStyle:"normal",
    fontWeight:4,
    "@media only screen and (max-width: 500px) ":{
      fontSize:"25px"
    },
  },
  subTitle:{
    color:"rgba(0, 0, 0, 0.7)",
    fontSize:"25px",
    textAlign:"center",
    fontStyle:"normal",
    fontWeight:4,
    "@media only screen and (max-width: 500px) ":{
      fontSize:"20px"
    },
  },
  container:{
    marginLeft:"140px", width:"547px", marginBottom:20,
    "@media only screen and (max-width: 500px) ":{
      marginLeft:"40px",
    },
  },
  label:{
    marginTop:10, fontSize:"21px", width:"280px",
    "@media only screen and (max-width: 500px) ":{
      fontSize:"16px"
    },
  },
  input:{
    width:"347px",
    height:"72px",
    border:"1px",
    borderRadius:"3px",
    color:"#000000",
    marginBottom:"25px",
    "@media only screen and (max-width: 500px) ":{
      width:"316px",
      height:"42px",
    },
    "@media only screen and (max-width: 400px) ":{
      width:"246px",
      height:"42px",
    },
  },
  button:{
    border:"1px solid #000000",
    bg:"#000000",
    mt:"45px",
    width:"345px",
    height:"72px",
    borderRadius:"3px",
    "@media only screen and (max-width: 500px) ":{
      width:"316px",
      height:"42px",
      mt:"25px",
    },
    "@media only screen and (max-width: 400px) ":{
      width:"246px",
      height:"42px",
      mt:"25px",
    },
  },
  buttonText:{
    fontSize:"20px", textAlign:"center", color:"#ffffff",
    "@media only screen and (max-width: 500px) ":{
      fontSize:"15px",
    },
  },

  //form 2
  stepHeading:{
    color:"rgba(0, 0, 0, 0.7)",
    fontSize:"25px",
    textAlign:"center",
    fontStyle:"normal",
    fontWeight:4,
    mr:"80px",
    "@media only screen and (max-width: 500px) ":{
      fontSize:"20px",
    },
  },
  labelForm2:{
    marginTop:10, fontSize:"21px", width:"280px",
    "@media only screen and (max-width: 500px) ":{
      fontSize:"12px"
    },
  },
  imageContainer:{
    m:6, width:120, height:120,
    "@media only screen and (max-width: 500px) ":{
      width:"10px", height:"10px",m:1,
    },
  },
  grid:{
    "@media only screen and (max-width: 500px) ":{
      display:"block"
    },
  },
  box:{
    "@media only screen and (max-width: 500px) ":{
      marginTop:"100px"
    },
  },
  formButton2:{
    border:"1px solid #000000",
    bg:"#000000",
    mt:"45px",
    ml:"220px",
    w:"202px",
    h:"72px",
    borderRadius:"3px",
    "@media only screen and (max-width: 500px) ":{
      mt:"1px",
      ml:"120px",
      w:"102px",
      h:"42px",
    },
    "@media only screen and (max-width: 400px) ":{
      mt:"10px",
      ml:"60px",
      w:"102px",
      h:"42px",
    },
    "@media only screen and (max-width: 358px) ":{
      mt:"10px",
      ml:"40px",
      w:"102px",
      h:"42px",
    },
    "@media only screen and (max-width: 335px) ":{
      mt:"10px",
      ml:"20px",
      w:"102px",
      h:"42px",
    },
  },
  backButton:{
    mt:"45px",
    bg:"transparent",
    border:"none",
    outline:"none",
    w:"102px",
    h:"72px",
    "@media only screen and (max-width: 500px) ":{
      mt:"1px",
      w:"102px",
      h:"42px",
    },
  },
  cityLabel:{
    mt:10, ml:70, fontSize:"16px", w:"280px",
    "@media only screen and (max-width: 500px) ":{
      mt:30,ml:1, fontSize:"12px",
    },
  },
  cityInput:{
    ml:70,
    w:"247px",
    h:"42px",
    border:"1px",
    borderRadius:"3px",
    color:"#000000",
    "@media only screen and (max-width: 500px) ":{
      ml:1,
      mb:20,
      w:"300px",
      h:"32px",
    },
  },
  formContainer4:{
    ml:"30px", mb:20,
    "@media only screen and (max-width: 500px) ":{
      ml:"30px",
      mb:20,
    },
  }
  
}
