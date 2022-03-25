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
  Select,
  Text
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
// import Map from "components/Map";
import ImageUpload from "components/Others/ImageUpload";
import { API_URL } from "config/api/index";
import Register from "components/forms/Register/NewRegister"
import { usePostData } from "hooks/usePostData";
import { createToast } from "utils/createToast";
import {AiOutlineClose} from "react-icons/ai"
import {MdOutlineArrowBackIosNew} from "react-icons/md"



const NewBusinessForm = ({ buttonText, onClose, children, ...props }) => {
  const [done, setDone] = useState(false);
  const [formStep, setFormStep] = useState(0)
  const [userId, setUserId] = useState()

  const completeFormStep = () =>{
      setFormStep(curr => curr +1)
  }
  const goBack = () =>{
    setFormStep(curr => curr -1)
    }
  const MAX_STEP=4


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
  } = useForm({mode : "all"});

  const { mutate, isSuccess, isLoading, isError } = useMutation(
    usePostData,
    {}
  );

  const URL = `${API_URL.business}/business-webapp`;

  const onSubmit = async (body) => {
      body.userId = userId
    console.log("body----------->",body);
    try {
      mutate(
        { URL, body },
        {
          onSuccess: (value) => {
            setDone(true);
            console.log(value.data);
            createToast({ title: "Business Created Successfully" });
            completeFormStep()
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
          {formStep === 0 &&(
              <Register completeFormStep={completeFormStep} setUserId={setUserId} />
          )}
        <chakra.form onSubmit={handleSubmit(onSubmit)}>
            {formStep === 1 &&(
                <section>
                    <Box h="116px" mt="19px">
                        <Text  color="#000000" fontSize='45px' textAlign="center" fontStyle="normal" fontWeight={4} >Create Your Online Store</Text>
                        <Text  color="rgba(0, 0, 0, 0.7)" fontSize='25px' textAlign="center" fontStyle="normal" fontWeight={4} >Create Your Online Store</Text>
                    </Box>
                    <Box ml="140px" w="447px" mb={20}>
                        <FormLabel  mt={10} fontSize="21px" w="280px">Business Name</FormLabel>
                        <InputGroup>
                            <Input 
                                placeholder="Business Name"
                                w="447px"
                                h="72px"
                                border="1px"
                                borderRadius="3px"
                                color="#000000" 
                                type="text"
                                {...register("businessName", {
                                    required: "This is required",
                                })}
                                autoComplete="name"
                                focusBorderColor="blue"
                            />
                            <FormErrorMessage>
                                {errors.businessName && (<Text color="red" >
                                    {errors.businessName.message}
                                </Text>)}
                            </FormErrorMessage>
                        </InputGroup>
                        <Text mt="13px" color="rgba(0, 0, 0, 0.6)">Sugesstions</Text>
                        <Grid templateColumns='repeat(3, 1fr)' gap={3} mt="4px">
                            <Button w="163px" h="37px" bg='#F5F8FF' borderRadius="60px" rightIcon={<AiOutlineClose />}><Text w="92px" fontSize="14px" textAlign="left">Sugesstion 1</Text></Button>
                            <Button w="163px" h="37px" bg='#F5F8FF' borderRadius="60px" rightIcon={<AiOutlineClose />}><Text w="92px" fontSize="14px" textAlign="left">Sugesstion 1</Text></Button>
                        </Grid>
                        <Button
                            border="1px solid #000000"
                            disabled={!isDirty || !isValid}
                            bg="#000000"
                            mt="45px"
                            w="445px"
                            h="72px"
                            borderRadius="3px"
                            type="button"
                            onClick={completeFormStep}
                        ><Text fontSize="20px" textAlign="center" color="#ffffff">Create Store</Text></Button>
                    </Box>
                </section>
            )}
            {formStep === 2 &&(
                <section>
                    <Box h="116px" mt="19px">
                        <Text  color="rgba(0, 0, 0, 0.7)" fontSize='25px' textAlign="center" fontStyle="normal" fontWeight={4} mr="80px">Step {formStep} of {MAX_STEP}</Text>
                        <Text  color="#000000" fontSize='45px' textAlign="center" fontStyle="normal" fontWeight={4} >Create Your Business Profile</Text>
                    </Box>
                    <Box ml="30px"  mb={20}>
                        <Grid 
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(6, 1fr)'
                            gap={4}
                        >
                            <GridItem rowSpan={2} colSpan={2}>
                            <FormLabel  mt={10} fontSize="16px" w="280px">Business Logo</FormLabel>
                            <Box m={6} w={120} h={120}>
                            <ImageUpload
                                imageCount={1}
                                value="businessLogo"
                                {...{ register, setValue, control }}
                            />
                            </Box>
                            </GridItem>
                            <GridItem colSpan={2} >
                                <FormLabel  mt={10} fontSize="16px" w="280px">Contact Number</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="Contact Number"
                                        w="447px"
                                        h="72px"
                                        border="1px"
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
                                        {errors.businessPhNumber && errors.businessPhNumber.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </GridItem>
                            <GridItem colSpan={2} >
                                <FormLabel  mt={10} fontSize="16px" w="280px">Business Email</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="Business Email"
                                        w="347px"
                                        h="72px"
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
                            <GridItem colSpan={4} >
                                <FormLabel  mt={10} fontSize="16px" w="280px">Tag Line</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="Tag Line"
                                        w="535px"
                                        h="72px"
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
                        <Button mt="45px" bg="transparent" border="none" outline="none" w="102px" h="72px" onClick={goBack}><Text>Back</Text></Button>
                        <Button
                            border="1px solid #000000"
                            disabled={!isDirty || !isValid}
                            bg="#000000"
                            mt="45px"
                            ml="280px"
                            w="202px"
                            h="72px"
                            borderRadius="3px"
                            type="button"
                            onClick={completeFormStep}
                        ><Text fontSize="20px" textAlign="center" color="#ffffff">Next</Text></Button>
                    </Box>
                </section>
            )}
            {formStep === 3 &&(
                <section>
                    <Box h="116px" mt="19px">
                    <Text  color="rgba(0, 0, 0, 0.7)" fontSize='25px' textAlign="center" fontStyle="normal" fontWeight={4} mr="80px">Step {formStep} of {MAX_STEP}</Text>
                        <Text  color="#000000" fontSize='45px' textAlign="center" fontStyle="normal" fontWeight={4} >Add Your Address</Text>
                    </Box>
                    <Box ml="30px"  mb={20}>
                        <Grid 
                            templateRows='repeat(2, 1fr)'
                            templateColumns='repeat(6, 1fr)'
                            gap={4}
                        >
                            <GridItem rowSpan={2} colSpan={2}>
                                <FormLabel  mt={10} fontSize="16px" w="280px">Location</FormLabel>
                                <Box d="flex" flexDir="column" w="250" mt="75px">
                                    {/* <Map
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
                                    /> */}
                                </Box>
                            </GridItem>
                            <GridItem colSpan={4} >
                                <FormLabel  mt={10} fontSize="16px" w="280px">City</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="City"
                                        w="447px"
                                        h="72px"
                                        border="1px"
                                        borderRadius="3px"
                                        color="#000000" 
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
                            {/* <GridItem colSpan={2} >
                                <FormLabel  mt={10} fontSize="16px" w="280px">City</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="City"
                                        w="347px"
                                        h="72px"
                                        border="1px"
                                        borderRadius="3px"
                                        color="#000000" 
                                        type="text"
                                        {...register("businessName", {
                                            required: "This is required",
                                        })}
                                        autoComplete="name"
                                        focusBorderColor="blue"
                                    />
                                    <FormErrorMessage>
                                        {errors.businessName && errors.businessName.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </GridItem> */}
                            <GridItem colSpan={4} >
                                <FormLabel  mt={10} fontSize="16px" w="280px">Postal Code</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="Postal Code"
                                        w="447px"
                                        h="72px"
                                        border="1px"
                                        borderRadius="3px"
                                        color="#000000" 
                                        type="text"
                                        {...register("postalCode", {
                                            required: "This is required",
                                        })}
                                        autoComplete="name"
                                        focusBorderColor="blue"
                                    />
                                    <FormErrorMessage>
                                        {errors.postalCode && errors.postalCode.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </GridItem>
                        </Grid>
                        <Button mt="45px" bg="transparent" border="none" outline="none" w="102px" h="72px" onClick={goBack}><Text>Back</Text></Button>
                        <Button
                            border="1px solid #000000"
                            disabled={!isDirty || !isValid}
                            bg="#000000"
                            mt="45px"
                            ml="280px"
                            w="202px"
                            h="72px"
                            borderRadius="3px"
                            type="button"
                            onClick={completeFormStep}
                        ><Text fontSize="20px" textAlign="center" color="#ffffff">Next</Text></Button>
                    </Box>
                </section>
            )}
            {formStep === 4 &&(
                <section>
                    <Box h="116px" mt="19px">
                        <Text  color="rgba(0, 0, 0, 0.7)" fontSize='25px' textAlign="center" fontStyle="normal" fontWeight={4} mr="80px">Step {formStep} of {MAX_STEP}</Text>
                        <Text  color="#000000" fontSize='45px' textAlign="center" fontStyle="normal" fontWeight={4} >Tell us a little more about yourself</Text>
                    </Box>
                    <Box ml="180px" w="447px" mb={20}>
                        <FormLabel fontSize="18px">Do you have a website?</FormLabel>
                        <Select
                            title="Please Choose One"
                            placeholder="Please choose one"
                            id="DoyouhaveAwebsite"
                            w="447px"
                            h="72px"
                            border="1px"
                            borderRadius="3px"
                            color="#000000" 
                            mb="25px"
                            focusBorderColor="blue"
                            {...register("DoyouhaveAwebsite", {
                                required: "This is required",
                            })}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Select>        
                        <FormErrorMessage>
                            {errors.DoyouhaveAwebsite && errors.DoyouhaveAwebsite.message}
                        </FormErrorMessage>
                        <FormLabel fontSize="18px">Do you have an Online digital store?</FormLabel>
                        <Select
                            title="Please choose one"
                            placeholder="Please choose one"
                            id="DoyouhaveanOnlinedigitalstore"
                            w="447px"
                            h="72px"
                            border="1px"
                            borderRadius="3px"
                            color="#000000" 
                            mb="25px"
                            focusBorderColor="blue"
                            {...register("DoyouhaveanOnlinedigitalstore", {
                                required: "This is required",
                            })}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Select>        
                        <FormErrorMessage>
                            {errors.DoyouhaveanOnlinedigitalstore && errors.DoyouhaveanOnlinedigitalstore.message}
                        </FormErrorMessage>
                        <FormLabel fontSize="18px">What is your current revenue?</FormLabel>
                        <Select
                            title="Please choose one"
                            placeholder="Please choose one"
                            id="q3"
                            w="447px"
                            h="72px"
                            border="1px"
                            borderRadius="3px"
                            color="#000000" 
                            mb="25px"
                            focusBorderColor="blue"
                            {...register("WhatIsYourCurrentRevenue", {
                                required: "This is required",
                            })}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Select>        
                        <FormErrorMessage>
                            {errors.WhatIsYourCurrentRevenue && errors.WhatIsYourCurrentRevenue.message}
                        </FormErrorMessage>
                        <FormLabel fontSize="18px">Which Industry will you be operating?</FormLabel>
                        <Select
                            title="Please choose one"
                            placeholder="Please choose one"
                            id="WhichIndustryWillYouBeOperating"
                            w="447px"
                            h="72px"
                            border="1px"
                            borderRadius="3px"
                            color="#000000" 
                            mb="25px"
                            focusBorderColor="blue"
                            {...register("WhichIndustryWillYouBeOperating", {
                                required: "This is required",
                            })}
                        >
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Select>        
                        <FormErrorMessage>
                            {errors.WhichIndustryWillYouBeOperating && errors.WhichIndustryWillYouBeOperating.message}
                        </FormErrorMessage>
                    </Box>
                    <Button  mt="45px" bg="transparent" border="none" outline="none" w="102px" h="72px" onClick={goBack}><Text>Back</Text></Button>
                        <Button
                            border="1px solid #000000"
                            disabled={!isDirty || !isValid}
                            bg="#000000"
                            mt="45px"
                            ml="280px"
                            w="202px"
                            h="72px"
                            borderRadius="3px"
                            type="submit"
                            isLoading={isLoading}
                        ><Text fontSize="20px" textAlign="center" color="#ffffff">Submit</Text></Button>
                </section>
            )}
        </chakra.form>
            {formStep === 5 &&(
                <section>
                    <Box h="116px" mt="19px">
                        <Text  color="#000000" fontSize='45px' textAlign="center" fontStyle="normal" fontWeight={4} >Your Store is ready to go</Text>
                        <Text  color="rgba(0, 0, 0, 0.7)" fontSize='25px' textAlign="center" fontStyle="normal" fontWeight={4} >Explore Now</Text>
                    </Box>
                    <Box ml="130px" w="447px" mb={20}>
                        <Button
                            border="1px solid #000000"
                            bg="#000000"
                            mt="45px"
                            w="445px"
                            h="72px"
                            borderRadius="3px"
                        ><Text fontSize="20px" textAlign="center" color="#ffffff">Explore</Text></Button>
                    </Box>
                </section>
            )}
      </Box>
    </>
  );
};

export default NewBusinessForm;
