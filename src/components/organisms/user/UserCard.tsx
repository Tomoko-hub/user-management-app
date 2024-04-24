import { FC, memo } from "react";
import { Box, Stack, Image, Text } from "@chakra-ui/react";

type Props = {
    imageUrl: string;
    username: string;
    fullName: string;
    onClick: ()=>void;
};

export const UserCard:FC<Props>= memo((props)=>{
    const { imageUrl,username,fullName, onClick } = props;
    return(
        <Box 
            w='260px' 
            h='260px' 
            bg='white' 
            borderRadius='10px' 
            shadow='md'
            padding={4}
            _hover={{ 
                cursor: 'pointer', 
                opacity: 0.8
            }}
            onClick={onClick}
            >
            <Stack textAlign='center'>
                <Image
                    borderRadius='full' 
                    boxSize='160px' 
                    src={imageUrl}
                    alt={username}
                    margin='auto'
                     />
                <Text 
                    fontSize='lg'
                    fontWeight='bold'
                >
                {username}
                </Text>
                <Text
                    fontSize='sm'
                    color='gray'
                >
                {fullName}
                </Text>
            </Stack>
        </Box>
    )
})