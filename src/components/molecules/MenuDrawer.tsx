import { FC, memo } from "react";

import { Drawer, DrawerContent, DrawerBody, DrawerOverlay, Button } from "@chakra-ui/react";

type Props = {
    onClose:()=>void,
    isOpen:boolean,
    onClickHome:()=>void,
    onClickUserManagement:()=>void,
    onClickSetting:()=>void,
}

const MenuDrawer:FC<Props> =memo((props)=>{
    const {
        onClose, 
        isOpen, 
        onClickHome, 
        onClickSetting, 
        onClickUserManagement
    } = props;
    
    return(
        <>
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody padding={0} bg='gray.100'>
                        <Button w='100%' onClick={onClickHome} >Top</Button>
                        <Button w='100%' onClick={onClickUserManagement}>All users</Button>
                        <Button w='100%' onClick={onClickSetting}>Setting</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
        </>
    )

})

export default MenuDrawer;