/* eslint-disable prettier/prettier */
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export function Body({ isDarkMode }) {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView>
          <View>
            <Text
              style={[
                { color: isDarkMode ? "#ffffff" : "#212121", marginTop: 10 },
              ]}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A
              excepturi magnam impedit incidunt modi, labore temporibus nam
              asperiores qui minima.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
