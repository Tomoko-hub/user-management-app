import { memo,FC } from "react"
import { Box, Divider, Flex, Heading, Input, Button, Stack } from "@chakra-ui/react";

const Login:FC = memo(()=>{
    return(
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
                <Heading as="h1" size="lg" textAlign="center">User managiment App</Heading>
                <Divider my={4} />
                <Stack spacing={6} py={4} px={10}>
                    <Input placeholder="User ID" />
                    <Button bg="teal.400" color="white" _hover={{opacity: 0.8}}>Login</Button>
                </Stack>
            </Box>
        </Flex>

    )
})

export default Login;