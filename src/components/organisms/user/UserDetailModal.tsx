import { FC, memo } from "react";
import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";

type Props = {
    isOpen: boolean;
    onClose: () => void;
};

export const UserDetailModal:FC<Props>= memo((props)=>{
    const { isOpen, onClose} = props;

    return(
        <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        autoFocus={false}
        motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent pb={6}>
                <ModalHeader>User Details</ModalHeader>
                    <ModalCloseButton />
                        <ModalBody mx={4}>
                            <Stack spacing={4}>
                                <FormControl>
                                    <FormLabel>
                                        nimi
                                    </FormLabel>
                                    <Input value="Tomoko" isReadOnly />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        Fullname
                                    </FormLabel>
                                    <Input value="Tomoko Uehara" isReadOnly />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <Input value="Email" isReadOnly />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        tel
                                    </FormLabel>
                                    <Input value="123456" isReadOnly />
                                </FormControl>
                            </Stack>
                        </ModalBody>
            </ModalContent>
        </Modal>
    )
})