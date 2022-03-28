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
import React from "react";
import { FaUserAlt } from "react-icons/fa";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { register as registerAction } from "actions/auth";

const Register = () => {
  // Other Hooks
  const {
    handleSubmit,
    register,
    unregister,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    try {
      console.log(JSON.stringify(values));
      if (values.password !== values.confirmPassword) {
        setError("confirmPassword", {
          type: "validate",
          message: "Passwords do not match",
        });
        return;
      } else {
        unregister("confirmPassword");
      }
      return dispatch(registerAction(values));
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <Box>
      <chakra.form onSubmit={handleSubmit(onSubmit)}>
        <Text
          h="116px"
          mt="209px"
          color="#000000"
          fontSize="45px"
          textAlign="center"
          fontStyle="normal"
          fontWeight={4}
        >
          Sign Up
        </Text>
        <Grid templateColumns="repeat(7, 1fr)" gap={6} mt={6}>
          <GridItem></GridItem>
          <GridItem colSpan={5} ml="200px" mr={10}>
            <Grid templateColumns="repeat(2, 1fr)" gap={4} ml={12} m={2}>
              <GridItem>
                <FormLabel fontSize="18px">First Name</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="First Name"
                    w="447px"
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
                    w="447px"
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
                    w="447px"
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
                    w="447px"
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
                  w="447px"
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
                  w="447px"
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
                    w="447px"
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
                    w="447px"
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
              <GridItem mr="220px">
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
          <Button
            borderRadius={40}
            border="1px"
            mt={1}
            ml="460px"
            type="submit"
            colorScheme="customBlue"
            bg="#000000"
            width="202px"
            h="72px"
            isLoading={isSubmitting}
          >
            Sign In
          </Button>
        </Box>
      </chakra.form>
    </Box>
  );
};

export default Register;
