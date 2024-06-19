import { FC, memo, useEffect, useState } from "react";
import { FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack } from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";

type Props = {
    user: User | null;
    isOpen: boolean;
    isAdmin?: boolean;
    onClose: () => void;
};

export const UserDetailModal:FC<Props>= memo((props)=>{
    const { user, isOpen, isAdmin = true, onClose} = props;

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(()=>{
        setUsername(user?.username ?? '')
        setName(user?.name ?? '')
        setEmail(user?.email ?? '')
        setPhone(user?.phone ?? '')
    },[user])

    const onChangeUserName = (e:React.ChangeEvent<HTMLInputElement>)=>setUsername(e.target.value);
    const onChangeName = (e:React.ChangeEvent<HTMLInputElement>)=>setName(e.target.value);
    const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>setEmail(e.target.value);
    const onChangePhone = (e:React.ChangeEvent<HTMLInputElement>)=>setPhone(e.target.value);

    const onClickUpdate = ()=>alert();

    return(
        <Modal 
        isOpen={isOpen} 
        onClose={onClose} 
        autoFocus={false}
        motionPreset="slideInBottom">
            <ModalOverlay />
            <ModalContent pb={2}>
                <ModalHeader>User Details</ModalHeader>
                    <ModalCloseButton />
                        <ModalBody mx={4}>
                            <Stack spacing={4}>
                                <FormControl>
                                    <FormLabel>
                                        nimi: 
                                    </FormLabel>
                                    <Input value={username} onChange={onChangeUserName} isReadOnly={!isAdmin} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        <p>Fullname</p>
                                    </FormLabel>
                                    <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        Email
                                    </FormLabel>
                                    <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>
                                        tel
                                    </FormLabel>
                                    <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
                                </FormControl>
                            </Stack>
                        </ModalBody>
                        {isAdmin && (
                        <ModalFooter>
                            <PrimaryButton
                                onClick={onClickUpdate}
                            >Edit
                            </PrimaryButton>
                        </ModalFooter>
                        )}
            </ModalContent>
        </Modal>
    )
})