import { memo,FC } from "react"
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";

const UserManagement:FC = memo(()=>{
    return(
        <Wrap p={{ base: 4, md:10 }}>
            <WrapItem>
                <UserCard imageUrl={"https://picsum.photos/160"} username='Tomokoman' fullName='tomoko uehara' />
            </WrapItem>
        </Wrap>
    );
});

export default UserManagement;