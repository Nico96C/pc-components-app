/* eslint-disable prettier/prettier */
import { useRef } from "react";
import { ScrollView, Text, Dimensions, Image, View, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Carousel from "react-native-snap-carousel";
import { Body } from "./Body";
import { useTheme } from "../context/darkmode";

const { width: screenWidth } = Dimensions.get("window");

export function Main() {
  const carouselRef = useRef(null);
  const activeIndex = useRef(0);

  const dummyData = [
    { id: 1, image: require('../assets/img/Intel.webp'), label: 'Procesadores', route: '/procesors' },
    { id: 2, image: require('../assets/img/mother.png'), label: 'Motherboards', route: '/motherboards' },
    { id: 3, image: require('../assets/img/Placas.webp'), label: 'Tarjetas de Video', route: '/videocards' },
    { id: 4, image: require('../assets/img/Razer.webp'), label: 'Periféricos', route: '/peripherals' },
  ];

  const { isDarkMode } = useTheme();

  const MyCarousel = ({ data }) => {

    const renderItem = ({ item }) => (
      <View style={styles.card}>
        <Image source={item.image} style={styles.image} resizeMode="contain" />
    
        <View style={styles.infoContainer}>
    
          <Pressable
            onPress={() => {
              item.route && router.push(item.route);
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Ir a {item.label}</Text>
          </Pressable>
        </View>
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

          <Text>ARMAR BAR</Text>

          <MyCarousel data={dummyData} />
          <Body isDarkMode={isDarkMode} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#764ABC',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    height: 325,
  },
  image: {
    width: '100%',
    height: 225,
    borderRadius: 10,
  },
  infoContainer: {
    marginTop: 10,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  button: {
    width: '100%',
    paddingVertical: 12,
    backgroundColor: '#5b0888',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});