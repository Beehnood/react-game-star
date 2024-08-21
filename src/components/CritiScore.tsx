import { Badge } from '@chakra-ui/react'
import React from 'react'
interface Props {
    score : number
}

export default function CritiScore({score}: Props) {
    let color = score > 75 ? 'green' : score < 60 ? 'yellow' : ''
  return (
    <Badge colorScheme={color} fontSize='15px' paddingX={2} borderRadius={'4px'}>{score}</Badge>
    )
}
