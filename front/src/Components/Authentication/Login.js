import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Signup = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState();
  const [confirmpassword, setConfirmpassword] = useState();

  const handleClick = () => setShow(!show);

  const submitHandler = () => {};
  return (
    <VStack spacing="5px" className="">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type={show ? "text" : "password"}
          placeholder="Enter Your Email"
          onChange={(e) => setConfirmpassword(e.target.value)}
        />
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
      >
        Login
      </Button>
      <Button
        variant="solid"
        colorScheme="red"
        width="100%"
        onClick={() => {
          setEmail("guest@example.com");
          setConfirmpassword("123456");
        }}
      >
        Get Guest User Credentials
      </Button>
    </VStack>
  );
};

export default Signup;
