import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";
import { ThemeProvider } from "./context/darkmode";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar style="auto" />
        <Main />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
