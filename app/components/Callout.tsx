import { CalloutIcon, CalloutRoot, CalloutText } from "@radix-ui/themes";
import React, { ReactNode } from "react";

interface CalloutProps {
  variant: "soft" | "surface" | "outline";
  color:
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "brown"
    | "orange"
    | "sky"
    | "mint"
    | "lime"
    | "yellow"
    | "amber"
    | "gold"
    | "bronze"
    | "gray";
  size: "1" | "2" | "3";
  icon?: ReactNode;
  text: string;
}

const Callout = ({
  variant = "soft",
  color = "green",
  icon,
  size = "2",
  text,
}: CalloutProps) => {
  return (
    <CalloutRoot color={color} size={size} variant={variant}>
      {icon && <CalloutIcon>{icon}</CalloutIcon>}
      <CalloutText>{text}</CalloutText>
    </CalloutRoot>
  );
};

export default Callout;
