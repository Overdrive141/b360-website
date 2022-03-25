import {
    chakra,
    Box,
    Button,
    Checkbox,
    FormLabel,
    FormErrorMessage,
    Grid,
    GridItem,
    Input,
    InputGroup, 
    Flex,
    SimpleGrid,
    Text,
    Stack,
    useColorMode as mode,
    Link,
    MenuItem,
    Select,
} from "@chakra-ui/react";
import React,{useState} from "react";
import { API_URL } from "config/api/index";
import { usePostData } from "hooks/usePostData";
import { createToast } from "utils/createToast";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
const Register = ({completeFormStep, setUserId, ...props}) => {

    const [done, setDone] = useState(false);
    // Selectors

    // Other Hooks
    const {
      handleSubmit,
      register,
      unregister,
      setError,
      formState: { errors, isSubmitting },
    } = useForm();

    const { mutate, isSuccess, isLoading, isError } = useMutation(
        usePostData,
        {}
    );
    
    const URL = `${API_URL.auth}/register`;
    //const dispatch = useDispatch();
  
    const onSubmit = (body) => {
      try {
        console.log(JSON.stringify(body));
        if (body.password !== body.confirmPassword) {
          setError("confirmPassword", {
            type: "validate",
            message: "Passwords do not match",
          });
          return;
        } else {
          unregister("confirmPassword");
        }
        mutate(
            { URL, body },
            {
              onSuccess: (value) => {
                setDone(true);
                console.log("set value",value);
                setUserId(value.data.data._id)
                createToast({ title: "User Created Successfully" });
                completeFormStep()
              },
              onError: (err) => {
                createToast({
                  title: "Unable to Create User",
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
  
    //if (isRegistered) return <Redirect to="/login" />;
  
    return (
        <Box >
            <chakra.form onSubmit={handleSubmit(onSubmit)}>
                <Text  h="116px" color="#000000" fontSize='45px' ml="250px" fontStyle="normal" fontWeight={4} >Sign Up</Text>
                <Grid templateColumns='repeat(7, 1fr)' gap={6} mt={6}>
                    <GridItem colSpan={5}  mr={10} ml="100px">
                        <Grid templateColumns="repeat(2, 1fr)"
                            gap={4}
                            ml={12}
                            m={2}
                        >
                            <GridItem>
                                <FormLabel fontSize="18px">First Name</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="First Name"
                                        w="247px"
                                        h="72px"
                                        border="1px"
                                        borderRadius="3px"
                                        color="#000000" 
                                        mb="25px"
                                        type="text"
                                        {...register("firstName", {
                                        required: "This is required",
                                        })}
                                        autoComplete="name"
                                        focusBorderColor="blue"
                                    />
                                    <FormErrorMessage>
                                        {errors.firstName && errors.firstName.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                            <FormLabel fontSize="18px">Last Name</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="Last Name"
                                        w="247px"
                                        h="72px"
                                        border="1px"
                                        borderRadius="3px"
                                        color="#000000" 
                                        mb="25px"
                                        type="text"
                                        id="lastName"
                                        {...register("lastName", {
                                        required: "This is required",
                                        })}
                                        autoComplete="name"
                                        focusBorderColor="blue"
                                    />
                                    <FormErrorMessage>
                                        {errors.lastName && errors.lastName.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                            <FormLabel fontSize="18px">Email ID</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="Email"
                                        w="247px"
                                        h="72px"
                                        border="1px"
                                        borderRadius="3px"
                                        color="#000000" 
                                        mb="25px"
                                        type="email"
                                        id="email"
                                        {...register("email", {
                                        required: "This is required",
                                        })}
                                        autoComplete="email"
                                        focusBorderColor="blue"
                                    />
                                    <FormErrorMessage>
                                        {errors.email && errors.email.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                            <FormLabel fontSize="18px">Contact Number</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="Contact Number"
                                        w="247px"
                                        h="72px"
                                        border="1px"
                                        borderRadius="3px"
                                        color="#000000" 
                                        mb="25px"
                                        type="text"
                                        id="phoneNumber"
                                        {...register("phoneNumber", {
                                        required: "This is required",
                                        })}
                                        autoComplete="phoneNumber"
                                        focusBorderColor="blue"
                                    />
                                    <FormErrorMessage>
                                        {errors.phoneNumber && errors.phoneNumber.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                                <FormLabel fontSize="18px">Occupation</FormLabel>
                                <Select
                                    title="Select Occupation"
                                    id="role"
                                    w="247px"
                                    h="72px"
                                    border="1px"
                                    borderRadius="3px"
                                    color="#000000" 
                                    mb="25px"
                                    focusBorderColor="blue"
                                    {...register("role", {
                                        required: "This is required",
                                    })}
                                >
                                    <option value="vendorOwner">Business Owner</option>
                                    <option disabled value="vendorEmployee">
                                        Employee (Disabled)
                                    </option>
                                </Select>
                                <FormErrorMessage>
                                    {errors.role && errors.role.message}
                                </FormErrorMessage>
                            </GridItem>
                            <GridItem>
                                <FormLabel fontSize="18px">Gender</FormLabel>
                                <Select
                                    title="Select Gender"
                                    id="gender"
                                    w="247px"
                                    h="72px"
                                    border="1px"
                                    borderRadius="3px"
                                    color="#000000" 
                                    mb="25px"
                                    focusBorderColor="blue"
                                    {...register("gender", {
                                        required: "This is required",
                                    })}
                                >
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </Select>

                                <FormErrorMessage>
                                    {errors.gender && errors.gender.message}
                                </FormErrorMessage>
                            </GridItem>
                            <GridItem>
                            <FormLabel fontSize="18px">Password</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="Password"
                                        w="247px"
                                        h="72px"
                                        border="1px"
                                        borderRadius="3px"
                                        color="#000000" 
                                        mb="25px"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        focusBorderColor="blue"
                                        {...register("password", {
                                            required: "This is required",
                                            minLength: 6,
                                        })}
                                    />
                                    <FormErrorMessage>
                                        {errors.password && errors.password.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </GridItem>
                            <GridItem>
                            <FormLabel fontSize="18px">Confirm Password</FormLabel>
                                <InputGroup>
                                    <Input 
                                        placeholder="Confirm Password"
                                        w="247px"
                                        h="72px"
                                        border="1px"
                                        borderRadius="3px"
                                        color="#000000" 
                                        mb="25px"
                                        type="password"
                                        id="confirmPassword"
                                        focusBorderColor="blue"
                                        {...register("confirmPassword", {
                                            required: "This is required",
                                        })}
                                        autoComplete="new-password"
                                    />
                                    <FormErrorMessage>
                                        {errors.confirmPassword && errors.confirmPassword.message}
                                    </FormErrorMessage>
                                </InputGroup>
                            </GridItem>
                            <GridItem  >
                                <Checkbox defaultIsChecked py={4} >
                                    <Text textAlign="left">
                                        I agree to the <span>&nbsp;</span>
                                        <Link color="#000000" href="#" ml={2}>
                                        Terms and Services
                                        </Link>
                                    </Text>
                                </Checkbox>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem colSpan={1}></GridItem>
                    <GridItem ></GridItem>
                </Grid>
                    <Box d="flex" flexDir="column" justifyContent="flex-end">
                        {/* {error && (
                            <Text textAlign="left" mb={5} ml="460px" color="red">
                                {error}
                            </Text>
                        )} */}
                        <Button
                            borderRadius={40}
                            border="1px"
                            mt={3}
                            ml="100px"
                            type="submit"
                            colorScheme="customBlue"
                            bg="#000000"
                            width="202px"
                            h="72px"
                            isLoading={isSubmitting}
                        >
                            <Text fontSize="20px" textAlign="center" color="#ffffff">Next</Text>
                        </Button>
                    </Box>
            </chakra.form>
        </Box>
    );
  };
  
  export default Register;
  