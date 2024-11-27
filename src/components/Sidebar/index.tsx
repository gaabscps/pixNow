"use client";

import { Box, Flex } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { Text } from "@/components/Text";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const Sidebar = () => {
  const pathname = usePathname();
  const isLogin = pathname === "/login" || pathname === "/";
  const [isOpen, setIsOpen] = useState(true);

  const items = [
    {
      name: "Button",
      path: "/storybook/button",
    },
    {
      name: "Input",
      path: "/storybook/input",
    },
  ];

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
      <Box display={isOpen ? "block" : "none"}>
        <Flex
          className="sidebar-header"
          alignItems="center"
          flexDirection="column"
          marginBottom="64px"
        >
          <Text variant="title" paddingTop="32px">
            pixNow
          </Text>
          <Text variant="subtitle"> Components</Text>
        </Flex>
        <Flex
          as="ul"
          className="sidebar-list"
          overflow="auto"
          flexDirection="column"
          padding="0 16px"
        >
          {items?.map((item) => (
            <Link
              key={item?.name}
              href={`/storybook/${item?.name?.toLowerCase()}`}
            >
              <Flex
                as="li"
                className="sidebar-item"
                borderRadius="8px"
                _hover={{ backgroundColor: "#282E38" }}
                cursor="pointer"
              >
                <Text width="100%" padding="8px 32px" variant="body1">
                  {item?.name}
                </Text>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Box>
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
        <GiHamburgerMenu />
      </Box>
    </Box>
  );
};
