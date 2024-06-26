/* eslint-disabled react-hooks/exhaustive-deps */
import { memo,FC, useEffect, useCallback } from "react"
import { Center,  Spinner, Wrap, WrapItem, useDisclosure } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useAllUsers } from "../../hooks/useAllUsers";
import { useSelectUser } from "../../hooks/useSelectUser";
import { useLoginUser } from "../../hooks/useLoginUser";

const UserManagement:FC = memo(()=>{

    const { getUsers, users, loading} = useAllUsers();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { selectedUser, onSelectUser} = useSelectUser();
    const { loginUser } = useLoginUser();
    console.log('loginUser',loginUser);

    useEffect(()=>getUsers(),[]);

    const onClickUser = useCallback((id:number) =>{
        onSelectUser({id, users, onOpen });
    },[users, onSelectUser, onOpen]);

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
                        id={user.id}
                        imageUrl={"https://picsum.photos/160"} 
                        username={user.username}
                        fullName={user.name}
                        onClick={onClickUser}
                         />
                    </WrapItem>
                ))}
            </Wrap>
        )}
        <UserDetailModal user={selectedUser} isAdmin={loginUser?.isAdmin} isOpen={isOpen} onClose={onClose} />
        </>
    );
});

export default UserManagement;