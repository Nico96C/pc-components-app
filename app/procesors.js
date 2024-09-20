/* eslint-disable prettier/prettier */
import { Link } from "expo-router";
import { Text, ScrollView, StyleSheet } from "react-native";

export default function Procesor() {
  return (
    <ScrollView>
      <Link href="/" style={styles.link}>
        Volver al inicio
      </Link>
      <Text style={styles.title}>PROCESADORES</Text>

      <Text style={styles.p}>
        unos procesadores de gama alta para lo que es esta pagina de buena
        calidad.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontWeight: "bold",
    marginBottom: 32,
    fontSize: 24,
  },
  p: {
    color: "white",
    opacity: 90,
    marginBottom: 16,
  },
  link: {
    color: "blue",
    fontSize: 16,
  },
});
