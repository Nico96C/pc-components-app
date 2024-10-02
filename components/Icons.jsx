/* eslint-disable prettier/prettier */
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from '@expo/vector-icons/AntDesign';

export const CircleInfoIcon = (props) => (
  <FontAwesome6 name="circle-info" size={24} color="white" {...props} />
);

export const HomeIcon = (props) => (
  <FontAwesome name="home" size={24} color="white" {...props} />
);

export const InfoIcon = (props) => (
  <FontAwesome name="info" size={24} color="white" {...props} />
);

export const CartIcon = (props) => (
  <FontAwesome name="shopping-cart" size={24} color="white" {...props} />
);

export const SearchIcon = (props) => (
  <FontAwesome name="search" size={24} color="black" {...props} />
)

export const SettingIcon = (props) => (
  <AntDesign name="setting" size={24} color="black" {...props} />
)
