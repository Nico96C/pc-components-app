/* eslint-disable prettier/prettier */
import { useRef } from "react";
import { Button, ScrollView, Text, Dimensions, Image, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { Body } from "./Body";
const { width: screenWidth } = Dimensions.get("window");

export function Main({ isDarkMode, toggleDarkMode }) {
  const carouselRef = useRef(null);
  const activeIndex = useRef(0);

  const dummyData = [
    { id: 1, image: require("../assets/img/Intel.webp") },
    { id: 2, image: require("../assets/img/mother.png") },
    { id: 3, image: require("../assets/img/Placas.webp") },
    { id: 4, image: require("../assets/img/Razer.webp") },
  ];

  const MyCarousel = ({ data }) => {
    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
      </View>
    );
    return (
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={"default"}
        firstItem={activeIndex.current}
        onSnapToItem={(index) => {
          activeIndex.current = index;
        }}
      />
    );
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 12,
          }}
        >
          <Button title="Dark Mode" onPress={toggleDarkMode} />
          <Text
            style={[
              { color: isDarkMode ? "#ffffff" : "#212121", marginTop: 10 },
            ]}
          >
            {isDarkMode ? "Modo Oscuro Activado" : "Modo Claro Activado"}
          </Text>
          <MyCarousel data={dummyData} />
          <Body isDarkMode={isDarkMode} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#764ABC",
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    width: "auto",
    marginHorizontal: 20,
    height: 400,
    overflow: "hidden",
    resizeMode: "cover",
  },
});