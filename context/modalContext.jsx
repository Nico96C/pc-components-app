/* eslint-disable prettier/prettier */
import { createContext, useContext, useState } from "react";

// Crear el contexto
const ModalContext = createContext();

// Proveedor del contexto
export const ModalProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  return (
    <ModalContext.Provider value={{ modalVisible, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook para usar el contexto
export const useModal = () => useContext(ModalContext);
