import { memo,FC, useState } from "react"
import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { PrimaryButton } from "../atoms/buttons/PrimaryButton";

const Login:FC = memo(()=>{
    const [userId, setUserId] = useState('');
    const onChangeUserId =(e:ChangeEvent<HTMLInputElement>)=>setUserId(e.target.value);

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
                    <PrimaryButton>Login</PrimaryButton>
                </Stack>
            </Box>
        </Flex>

    )
})

export default Login;