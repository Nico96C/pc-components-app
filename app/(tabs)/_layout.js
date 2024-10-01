/* eslint-disable prettier/prettier */
import { Tabs } from "expo-router";
import { CartIcon, HomeIcon } from "../../components/Icons";
import { useModal } from "../../context/modalContext";

export default function TabsLayout() {
  const { openModal } = useModal();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#212121" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="cartModal"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => <CartIcon color={color} />,
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            openModal();
          },
        }}
      />
    </Tabs>
  );
}
