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
    console.log("set value", data);
    setUserId(data.user.id);
    localStorage.setItem("token", JSON.stringify(data.token));
    createToast({ title: "User Created Successfully" });
  };

  const URL = `${API_URL.auth}/register`;
  //const dispatch = useDispatch();

  const onSubmit = (body) => {
    try {
      body.gender = gender;
      body.portal = "landingPage"
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
          sx={styles.title}
        >
          Sign Up
        </Text>
        <Grid templateColumns="repeat(7, 1fr)" gap={6} mt={6}>
          <GridItem colSpan={5} mr={10} sx={styles.container}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} ml={12} m={2} sx={styles.gridDisplay}>
              <GridItem>
                <FormLabel sx={styles.label}>First Name</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="First Name"
                    sx={styles.input}
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
              <GridItem sx={styles.grid}>
                <FormLabel sx={styles.label}>Last Name</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Last Name"
                    sx={styles.input}
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
                <FormLabel sx={styles.label}>Email ID</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Email"
                    sx={styles.input}
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
              <GridItem sx={styles.grid}>
                <FormLabel sx={styles.label}>Contact Number</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Contact Number"
                    sx={styles.input}
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

              <GridItem >
                <FormLabel sx={styles.label}>Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    sx={styles.input}
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
              <GridItem sx={styles.grid}>
                <FormLabel sx={styles.label}>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Confirm Password"
                    sx={styles.input}
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
              <GridItem>
                <FormLabel sx={styles.label}>Gender</FormLabel>
                <Select
                  placeholder="Select Gender"
                  id="gender"
                  onChange={handleChange}
                >
                  <Option value="Male">Male</Option>
                  <Option value="Female">Female</Option>
                </Select>

                <FormErrorMessage>
                  {errors.gender && errors.gender.message}
                </FormErrorMessage>
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
            sx={styles.button}
            type="submit"
            isLoading={isSubmitting}
          >
            <Text sx={styles.buttonText}>
              Next
            </Text>
          </Button>
        </Box>
      </chakra.form>
    </Box>
  );
};

export default Register;

const styles={
  title:{
    height:"116px",
    color:"#000000",
    fontSize:"45px",
    marginLeft:"250px",
    fontStyle:"normal",
    fontWeight:4,
    "@media only screen and (max-width: 500px) ":{
      height:"116px",
      fontSize:"25px",
      marginLeft:"130px",
    },
  },
  grid:{
    marginLeft:50,
    "@media only screen and (max-width: 500px) ":{
      marginLeft:0,
    },
  },
  label:{
    fontSize:"18px",
    "@media only screen and (max-width: 500px) ":{
      fontSize:"14px",
    },
  },
  input:{
    width:"207px",
    height:"42px",
    border:"1px",
    borderRadius:"3px",
    color:"#000000",
    marginBottom:"25px",
    "@media only screen and (max-width: 500px) ":{
      width:"207px",
    },
  },
  container:{
    marginLeft:"100px",
    "@media only screen and (max-width: 500px) ":{
      marginLeft:"10px",
    },
  },
  button:{
    borderRadius:40,
    border:"1px",
    marginTop:10,
    marginLeft:"450px",
    bg:"#000000",
    width:"182px",
    height:"42px",
    "@media only screen and (max-width: 500px) ":{
      width:"86px",
      marginTop:10,
      marginLeft:"240px",
    },
  },
  buttonText:{
    fontSize:"20px", textAlign:"center", color:"#ffffff",
    "@media only screen and (max-width: 500px) ":{
      fontSize:"15px"
    },
  },
  select:{
    width: "207px",
    border: "1px",
    borderRadius: "3px",
    color: "#000000",
    marginBottom: "25px",
    focusBorderColor: "blue",
    "@media only screen and (max-width: 500px) ":{
      width:"86px",
    },
  },
  gridDisplay:{
    "@media only screen and (max-width: 500px) ":{
      display:"block",
    },
  }
}
