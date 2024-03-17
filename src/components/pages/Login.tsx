import { memo,FC, useState, ChangeEvent } from "react"
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";

const Login:FC = memo(()=>{
    const {login, loading}=useAuth();
    const [userId, setUserId] = useState('');

    const onChangeUserId =(event:ChangeEvent<HTMLInputElement>)=>setUserId(event.target.value);
    const onClickLogin = ()=> login(userId);

    return(
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">User managiment App</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10}>
                    <Input 
                    placeholder="User ID"
                    value={userId}
                    onChange={onChangeUserId}
                     />
                    <PrimaryButton
                    disabled={userId === '' || loading}
                    loading={loading} 
                    onClick={onClickLogin}>
                        Login
                    </PrimaryButton>
                </Stack>
            </Box>
        </Flex>

    )
})

export default Login;