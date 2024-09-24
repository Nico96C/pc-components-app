/* eslint-disable prettier/prettier */
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const CartModal = ({ visible, onClose }) => {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text>Carrito de Compra</Text>
        {/* Aquí puedes mostrar los elementos del carrito */}
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
  },
});

export default CartModal;