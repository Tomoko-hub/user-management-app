import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

export const useAuth =()=>{
    const history =useHistory();
    const { showMessage} = useMessage();
    const { setLoginUser } = useLoginUser();

    const [loading, setLoading] = useState(false);
    
    const login =useCallback(
        (id:string)=> {
            setLoading(true);

        axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).
            then((res)=>{
                if(res.data){
                    const isAdmin = res.data.id === 10 ? true : false;
                    setLoginUser({...res.data, isAdmin});
                    showMessage({ title: 'Login Success', status:'success' });
                    history.push('/home')
                } else {
                    showMessage({title: 'User does not exist', status: 'error'})
                    setLoading(false);
                }
            }).catch(()=>showMessage({title: 'Login Failed', status: 'error'}))
            .finally(()=>setLoading(false));
    },[history, showMessage, setLoginUser]); 
    return {login, loading}
}