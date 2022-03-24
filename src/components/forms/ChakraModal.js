import {
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

const ChakraModal = ({
  title,
  isOpen,
  onOpen,
  onClose,
  children,
  buttonText,
  ...props
}) => {


  return (
    <>
      {/* <Button onClick={onOpen}>{buttonText}</Button> */}

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset='slideInBottom'
        // style={{ marginRight: 8, color: "#bbbbb", border: "5px red solid" }}
        scrollBehavior="inside"
        allowPinchZoom
        preserveScrollBarGap
        {...props}
      >
        <ModalOverlay
        // bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
        />
        <ModalContent>
          <ModalHeader>
            {title && (
              <Heading fontSize="3xl"  >
                {title}
              </Heading>
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody >{children}</ModalBody>
          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChakraModal;
