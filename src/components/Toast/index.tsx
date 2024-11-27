/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "../Text";
import { IoClose } from "react-icons/io5";
import { BiCheckCircle, BiErrorCircle, BiXCircle } from "react-icons/bi";
import { useEffect, useState } from "react";

interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  message?: string;
  subMessage?: string;
  duration?: number;
  type?: "error" | "success" | "warning";
}

export const Toast: React.FC<ToastProps> = ({
  isOpen,
  onClose,
  message = "",
  subMessage = "",
  duration = 3000,
  type = "error",
}) => {
  const [isAnimating, setIsAnimating] = useState(false); // Controle interno de animação
  const [shouldRender, setShouldRender] = useState(false); // Controle para renderização

  useEffect(() => {
    let autoCloseTimer: NodeJS.Timeout;

    if (isOpen) {
      setShouldRender(true);
      setIsAnimating(true);

      autoCloseTimer = setTimeout(() => {
        handleClose();
      }, duration);
    } else if (!isOpen && shouldRender) {
      handleClose();
    }

    return () => clearTimeout(autoCloseTimer);
  }, [isOpen, duration]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setShouldRender(false);
      onClose();
    }, duration / 10 - 10);
  };

  if (!shouldRender) return null;

  return (
    <Box
      backgroundColor="#fff"
      padding="16px 24px"
      right="16px"
      top="16px"
      position="fixed"
      width="375px"
      borderRadius="12px"
      boxShadow="0px 4px 12px rgba(0, 0, 0, 0.1)"
      animation={
        isAnimating ? "slideIn 0.3s ease-out" : "slideOut 0.3s ease-in"
      }
      zIndex={1000}
    >
      <Flex marginBottom="10px" justifyContent="space-between">
        {type === "error" ? (
          <BiXCircle size={40} color="#DF0707" />
        ) : type === "success" ? (
          <BiCheckCircle size={40} color="#4CAF50" />
        ) : type === "warning" ? (
          <BiErrorCircle size={40} color="#FFA500" />
        ) : null}
        <IoClose
          size="18px"
          color="#1E232C"
          cursor="pointer"
          onClick={handleClose}
        />
      </Flex>
      <Text marginBottom="8px" color="#1E232C" variant="body1">
        {message}
      </Text>
      <Text color="#8A8A8E" variant="body3">
        {subMessage}
      </Text>
    </Box>
  );
};
