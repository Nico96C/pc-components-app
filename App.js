import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";
import { ThemeProvider } from "./context/darkmode";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          {/* Asegúrate de que todos los componentes tengan acceso al contexto */}
          <StatusBar style="auto" />
          <Main />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
