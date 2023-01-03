import { Box, BoxProps } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const MotionBox = motion(Box);

export const BounceBox = ({ children, ...props }: BoxProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        type: "spring",
        bounce: 0.6,
        duration: 0.75,
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export const FadeBox = ({ children, ...props }: BoxProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        type: "fade",
        duration: 0.25,
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export const LeftBox = ({ children, ...props }: BoxProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: -350 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        type: "spring",
        bounce: 0.35,
        duration: 0.75,
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export const RightBox = ({ children, ...props }: BoxProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: 350 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        type: "spring",
        bounce: 0.35,
        duration: 0.75,
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

export const UpBox = ({ children, ...props }: BoxProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 350 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        type: "spring",
        bounce: 0.3,
        duration: 0.75,
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};
