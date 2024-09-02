/* eslint-disable prettier/prettier */
import { Text, View } from "react-native";

export function Main(isDarkMode) {
  return (
      <View>
        <Text style={[{ color: isDarkMode ? "#ffffff" : "#212121" }]}>
          MAS
        </Text>
      </View>
  );
}
