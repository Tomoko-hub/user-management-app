import { useCallback, useState } from "react";
import { User } from '../types/api/user';

type Props = {
    id: number;
    users: Array<User>
    onOpen:() => void;
};

// custom hook:display selected user and open modal
export const useSelectUser = ()=>{
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    const onSelectUser = useCallback((props:Props) => {
        const { id, users, onOpen } = props;
        const targetUser = users.find((user)=>user.id === id);
        setSelectedUser(targetUser ?? null);
        onOpen()
    },[]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return { onSelectUser, selectedUser }
}