/* eslint-disable prettier/prettier */
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const LoginModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        {/* Aquí puedes agregar tu formulario de inicio de sesión */}
        <Button title="Cerrar" onPress={onClose} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Añadido para un fondo más agradable
  },
  title: {
    fontSize: 24, // Estilo para el texto del título
    marginBottom: 20, // Espacio debajo del título
  },
});

export default LoginModal;