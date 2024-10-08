import { HStack, Switch,Text,useColorMode } from '@chakra-ui/react'
import React from 'react'

export default function ColorModeSwitch() {
    const {colorMode , toggleColorMode} = useColorMode();

  return (
    <HStack>
        <Switch colorScheme='yellow' isChecked={colorMode ==='dark'} onChange = {toggleColorMode}/>
        <Text>Dark Mode</Text>
    </HStack>
  )
}
