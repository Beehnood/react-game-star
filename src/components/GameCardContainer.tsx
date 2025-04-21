import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

interface Props{
    children : ReactNode;
}
export default function GameCardContainer({children}:Props) {
  return (
    <Box height='300px' width='300px' borderRadius={15} overflow={'hidden'}>
        {children}
    </Box>
  )
}
