import { useState } from 'react';
import PetsList from '../PetsList';
import ModalAddsPet from '../ModalAddsPet';
import ModalUser from '../ModalUser';
import styles from './PetsData.styled';
const { ContainerWrapp, Title, UserPetAddButton, PetAddIcon } = styles;

const PetsData = () => {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(true);
  };

  return (
    <>
      <ContainerWrapp>
        <Title>My pets:</Title>
        <UserPetAddButton type="button" onClick={onClose}>
          Add pet <PetAddIcon />
        </UserPetAddButton>
      </ContainerWrapp>
      <PetsList />
      {showModal && (
        <ModalUser setShowModal={setShowModal}>
          <ModalAddsPet setShowModal={setShowModal} />
        </ModalUser>
      )}
    </>
  );
};

export default PetsData;
