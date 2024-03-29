import { memo, FC } from 'react';

import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

type Props = {
    onOpen: ()=> void;
}

const MenuIconButton:FC<Props> = memo((props)=>{
    const {onOpen} = props;

    return(
        <>
        <IconButton 
                aria-label='menu_button' 
                icon={<HamburgerIcon />}
                size='sm'
                variant='unstyled'
                display={{base: 'block', md:'none'}} 
                onClick={onOpen} 
            />
        </>
    )
})

export default MenuIconButton;