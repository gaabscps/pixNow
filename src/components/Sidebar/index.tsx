"use client";

import { Box, Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { Text } from "@/components/Text";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "../Button";

export const Sidebar = () => {
  const pathname = usePathname();
  const isLogin = pathname === "/login" || pathname === "/";
  const [isOpen, setIsOpen] = useState(true);

  const items = [
    {
      name: "Text",
      path: "/storybook/text",
    },
    {
      name: "Input",
      path: "/storybook/input",
    },
    {
      name: "Button",
      path: "/storybook/button",
    },
    {
      name: "Toast",
      path: "/storybook/toast",
    },
  ];

  const isMobile = typeof window !== "undefined" && window?.innerWidth < 480;

  useEffect(() => {
    if (isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return isLogin ? null : (
    <Box
      position="fixed"
      as="nav"
      backgroundColor="#1E232C"
      width={
        isOpen
          ? { lg: "320px", md: "200px", sm: "200px", smDown: "100%" }
          : "50px"
      }
      height="100vh"
      className="sidebar"
      zIndex={100}
    >
      <Box
        display={{
          lg: "none",
          md: "none",
          sm: "none",
          smDown: "block",
        }}
        position="fixed"
        top="8px"
        padding="8px 16px"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GiHamburgerMenu color="#fff" />
      </Box>
      <Flex
        display={isOpen ? "flex" : "none"}
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
        padding="0 16px"
      >
        <Box>
          <Flex
            className="sidebar-header"
            alignItems="center"
            flexDirection="column"
            marginBottom="64px"
          >
            <Link href={"/storybook"}>
              <Box padding="32px 0 8px">
                <Image width={100} height={50} alt="logo" src={"/pixNow.svg"} />
              </Box>
            </Link>

            <Text variant="subtitle"> Components</Text>
          </Flex>
          <Flex
            as="ul"
            className="sidebar-list"
            overflow="auto"
            flexDirection="column"
          >
            {items?.map((item) => (
              <Link
                key={item?.name}
                href={`/storybook/${item?.name?.toLowerCase()}`}
                onClick={() => isMobile && setIsOpen(false)}
              >
                <Flex
                  as="li"
                  className="sidebar-item"
                  borderRadius="8px"
                  margin="4px 0"
                  backgroundColor={
                    pathname === `/storybook/${item?.name?.toLowerCase()}`
                      ? "#EFC532"
                      : "transparent"
                  }
                  _hover={{ backgroundColor: "#EBB700" }}
                  cursor="pointer"
                >
                  <Text
                    color={
                      pathname === `/storybook/${item?.name?.toLowerCase()}`
                        ? "#1E232C"
                        : "#fff"
                    }
                    _hover={{ color: "#1E232C" }}
                    width="100%"
                    padding="8px 32px"
                    variant="body1"
                    fontWeight="600"
                  >
                    {item?.name}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Flex>
        </Box>
        <Flex justifyContent="flex-end">
          <Link href="/">
            <Button marginBottom="16px" variant="plain">
              <Text variant="body1.bold" _hover={{ color: "#dc3545" }}>
                Logout
              </Text>
            </Button>
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};
