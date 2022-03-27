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
} from "@chakra-ui/react";
import { Select } from "antd";
import React, { useState } from "react";
import { API_URL } from "config/api/index";
import { usePostData } from "hooks/usePostData";
import { createToast } from "utils/createToast";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
const Register = ({ completeFormStep, setUserId, ...props }) => {
  const [done, setDone] = useState(false);
  const [gender, setGender] = useState("");
  // Selectors

  // Other Hooks
  const {
    handleSubmit,
    register,
    unregister,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const { Option } = Select;

  const { mutate, isSuccess, isLoading, isError } = useMutation(
    usePostData,
    {}
  );

  const handleChange = (value) => {
    setGender(value);
  };

  const setUserInfoOnRegistration = (value) => {
    const { data } = value;
    console.log("set value", value);
    setUserId(data.user.id);
    localStorage.setItem("token", JSON.stringify(data.token));
    createToast({ title: "User Created Successfully" });
  };

  const URL = `${API_URL.auth}/register`;
  //const dispatch = useDispatch();

  const onSubmit = (body) => {
    try {
      body.gender = gender;
      console.log(body);
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
            setUserInfoOnRegistration(value);
            setDone(true);
            completeFormStep();
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
    <Box>
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <Text
          h="116px"
          color="#000000"
          fontSize="45px"
          ml="250px"
          fontStyle="normal"
          fontWeight={4}
        >
          Sign Up
        </Text>
        <Grid templateColumns="repeat(7, 1fr)" gap={6} mt={6}>
          <GridItem colSpan={5} mr={10} ml="100px">
            <Grid templateColumns="repeat(2, 1fr)" gap={4} ml={12} m={2}>
              <GridItem>
                <FormLabel fontSize="18px">First Name</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="First Name"
                    w="207px"
                    h="42px"
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
              <GridItem ml={50}>
                <FormLabel fontSize="18px">Last Name</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Last Name"
                    w="207px"
                    h="42px"
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
                    w="207px"
                    h="42px"
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
              <GridItem ml={50}>
                <FormLabel fontSize="18px">Contact Number</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Contact Number"
                    w="207px"
                    h="42px"
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
                <FormLabel fontSize="18px">Gender</FormLabel>
                <Select
                  placeholder="Select Gender"
                  id="gender"
                  style={{
                    width: "207px",
                    border: "1px",
                    borderRadius: "3px",
                    color: "#000000",
                    marginBottom: "25px",
                    focusBorderColor: "blue",
                  }}
                  onChange={handleChange}
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>

                <FormErrorMessage>
                  {errors.gender && errors.gender.message}
                </FormErrorMessage>
              </GridItem>
              <GridItem ml={50}>
                <FormLabel fontSize="18px">Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    w="207px"
                    h="42px"
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
                    w="207px"
                    h="42px"
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
              <GridItem></GridItem>
              <GridItem>
                <Checkbox defaultIsChecked py={4}>
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
          <GridItem></GridItem>
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
            mt={10}
            ml="450px"
            type="submit"
            colorScheme="customBlue"
            bg="#000000"
            width="182px"
            h="42px"
            isLoading={isSubmitting}
          >
            <Text fontSize="20px" textAlign="center" color="#ffffff">
              Next
            </Text>
          </Button>
        </Box>
      </chakra.form>
    </Box>
  );
};

export default Register;
