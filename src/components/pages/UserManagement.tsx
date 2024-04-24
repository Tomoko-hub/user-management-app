/* eslint-disabled react-hooks/exhaustive-deps */
import { memo,FC, useEffect, useCallback } from "react"
import { Center,  Spinner, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";

const UserManagement:FC = memo(()=>{

    const { getUsers, users, loading} = useAllUsers();
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(()=>getUsers(),[]);

    const onClickUser = useCallback(() =>onOpen(),[]);

    return(
        <>
        {loading ? (
            <Center h="100vh">
                <Spinner />
            </Center>
        ):(
            <Wrap p={{ base: 4, md:10 }}>
                {users.map((user)=>(
                    <WrapItem key={user.id} mx="auto">
                        <UserCard 
                        imageUrl={"https://picsum.photos/160"} 
                        username={user.username}
                        fullName={user.name}
                        onClick={onClickUser}
                         />
                    </WrapItem>
                ))}
            </Wrap>
        )}
        <UserDetailModal isOpen={isOpen} onClose={onClose} />
        {/* <Modal 
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
        </Modal> */}
        </>
    );
});

export default UserManagement;