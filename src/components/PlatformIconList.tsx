import React from 'react'
import { Platform } from '../hook/useGame'
import { HStack, Icon, Text } from '@chakra-ui/react'
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa'
import {MdPhoneIphone} from 'react-icons/md'
import {SiNintendo} from 'react-icons/si'
import {BsGlobe} from 'react-icons/bs'
import { IconType } from 'react-icons'
interface Props{
    platforms : Platform[]
}

export default function PlatformIconList({platforms}: Props) {
    const iconMap : {[key : string]: IconType} = {
        pc : FaWindows,
        playstation : FaPlaystation,
        xbox : FaXbox,
        nintendo : SiNintendo,
        mac : FaApple,
        linux : FaLinux,
        andrioid : FaAndroid,
        ios : MdPhoneIphone,
        web : BsGlobe,
    }
  return (
    <HStack marginY = {'10px'}>
        {platforms.map(platform => <Icon as = {iconMap[platform.slug]} color='gray.500'/>)}
    </HStack>
  )
}
