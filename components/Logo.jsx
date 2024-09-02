/* eslint-disable prettier/prettier */
import * as React from "react";
import Svg, { Path, Text } from "react-native-svg";

export const Logo = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={160}
    height={50}
    viewBox="0 0 200 50"
    {...props}
  >
    <Path fill="#333" d="M40 4h120v41H40z" />
    <Path d="M45 8h110v33H45z" />
    <Path fill="#001524" d="M95 45h10v5H95z" />
    <Path fill="#001524" d="M75 48h50v3H75z" />
    <Text
      x={49}
      y={21}
      fill="#E5CFF7"
      fontFamily="Arial, sans-serif"
      fontSize={12}
    >
      {"Componentes"}
    </Text>
    <Text
      x={130}
      y={36}
      fill="#E5CFF7"
      fontFamily="Arial, sans-serif"
      fontSize={14}
    >
      {"PC"}
    </Text>
  </Svg>
);
