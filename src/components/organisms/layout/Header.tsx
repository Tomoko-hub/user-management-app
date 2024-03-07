import { FC, memo } from "react"

import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import MenuIconButton from "../../atoms/buttons/MenuIconButton";
import MenuDrawer from "../../molecules/MenuDrawer";


export const Header:FC = memo(() => {

    const { onOpen, onClose, isOpen } = useDisclosure();

    return (
        <>
        <Flex 
            as="nav" 
            bg="teal.500" 
            color="gray.50" 
            align="center" 
            justify="space-between"
            padding={{base:3, md:5}}
        >
            <Flex 
                align='center' 
                as='a'
                mr={8}
                _hover={{cursor:'pointer'}} 
            >
                <Heading
                    as="h1"
                    fontSize={{base:"md", md:"lg"}}
                >
                    UserManagement App
                </Heading>
            </Flex>
            <Flex align='center' fontSize='sm' flexGrow={2} display={{base:'none', md: 'flex'}}>
                <Box>
                    <Link pr={4}>All users</Link>
                </Box>
                    <Link>Setting</Link>
            </Flex>
            <MenuIconButton onOpen={onOpen} />
        </Flex>
        <MenuDrawer onClose={onClose} isOpen={isOpen} />
        </>
    )
}); 