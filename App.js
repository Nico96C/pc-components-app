import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Main } from "./components/Main";
import { ThemeProvider } from "./context/darkmode";
import { ModalProvider } from "./context/modalContext";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <ModalProvider>
          <StatusBar style="auto" />
          <Main />
        </ModalProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
