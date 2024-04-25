import { FC, memo } from "react";
import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { User } from "../../../types/api/user";

type Props = {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
};

export const UserDetailModal:FC<Props>= memo((props)=>{
    const { user, isOpen, onClose} = props;

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
                                        nimi: 
                                    </FormLabel>
                                    <Input value={user?.name} isReadOnly />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        <p>Fullname</p>
                                    </FormLabel>
                                    <Input value={user?.username} isReadOnly />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <Input value={user?.email} isReadOnly />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        tel
                                    </FormLabel>
                                    <Input value={user?.phone} isReadOnly />
                                </FormControl>
                            </Stack>
                        </ModalBody>
            </ModalContent>
        </Modal>
    )
})