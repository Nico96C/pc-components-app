import { StatusBar } from "expo-status-bar";
import { Dimensions, Image, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";
import { useRef, useState } from "react";
import Carousel from "react-native-snap-carousel";
import { Body } from "./components/Body";
const { width: screenWidth } = Dimensions.get("window");

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const carouselRef = useRef(null);
  const activeIndex = useRef(0);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const dummyData = [
    { id: 1, image: require("./assets/img/Intel.webp") },
    { id: 2, image: require("./assets/img/mother.png") },
    { id: 3, image: require("./assets/img/Placas.webp") },
    { id: 4, image: require("./assets/img/Razer.webp") },
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
    <SafeAreaProvider>
      <View
        style={[
          styles.container,
          { backgroundColor: isDarkMode ? "#212121" : "#ffffff" },
        ]}
      >
        <StatusBar style="auto" />
        <Main isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <MyCarousel data={dummyData} />
        <Body isDarkMode={isDarkMode} />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
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
