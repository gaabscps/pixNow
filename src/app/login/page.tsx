import { Text } from "@/components/Text";
import { Box, Flex, Image } from "@chakra-ui/react";
import { LoginForm } from "./components/Form";

const Login: React.FC = () => {
  return (
    <Box
      as="main"
      backgroundImage='url("/background.png")'
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundPosition="center"
      height="100vh"
      width="100%"
      position="relative"
    >
      <Flex
        as="section"
        width="100%"
        height="100%"
        color="white"
        fontSize="2xl"
        padding={{ mdDown: "35px 24px" }}
        justifyContent={{ md: "space-around", mdDown: "center" }}
        alignItems={{ md: "center", mdDown: "flex-start" }}
      >
        <Box className="login-container">
          <Flex marginBottom="2rem" justifyContent="center">
            <Image
              src="/pixNow.svg"
              alt="pix now logo"
              width={{ md: "231px", mdDown: "148px" }}
            />
          </Flex>
          <Box>
            <Text marginBottom="0.5rem" variant="title">
              Welcome to pix now!
            </Text>
            <Text letterSpacing="0.5px" variant="subtitle">
              Best payment method for your Brazilian customers.
            </Text>
          </Box>

          <LoginForm />
        </Box>

        <Flex></Flex>
      </Flex>
    </Box>
  );
};

export default Login;
