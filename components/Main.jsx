/* eslint-disable prettier/prettier */
import { useRef } from "react";
import { ScrollView, Text, Dimensions, Image, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { Body } from "./Body";
import { useTheme } from "../context/darkmode";
const { width: screenWidth } = Dimensions.get("window");

export function Main() {
  const carouselRef = useRef(null);
  const activeIndex = useRef(0);

  const dummyData = [
    { id: 1, image: require("../assets/img/Intel.webp") },
    { id: 2, image: require("../assets/img/mother.png") },
    { id: 3, image: require("../assets/img/Placas.webp") },
    { id: 4, image: require("../assets/img/Razer.webp") },
  ];
  const { isDarkMode, toggleDarkMode } = useTheme();

  console.log('isDarkMode in Main:', isDarkMode);

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
      <SafeAreaView style={[
        { flex: 1, backgroundColor: isDarkMode ? "#212121" : "#ffffff" },
      ]}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "center",
            padding: 12,
          }}
        >
          <Pressable
            onPress={toggleDarkMode}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? '#666' : isDarkMode ? '#444' : '#ddd',
                padding: 10,
                borderRadius: 5,
                marginBottom: 20,
              }
            ]}
          >
            <Text style={{ color: isDarkMode ? "#ffffff" : "#000000" }}>
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Text>
          </Pressable>

          <Link href="/procesors" style={styles.link}>IR A PROCESADORES</Link>

          <Text
            style={[
              { color: isDarkMode ? "#ffffff" : "#000000", marginTop: 10 },
            ]}
          >
            PC - COMPONENTES
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
  link: {
    color: "blue",
    fontSize: 16,
  }
});