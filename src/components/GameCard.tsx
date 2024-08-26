import React from 'react'
import { Game } from '../hook/useGame'
import { Card, CardBody, HStack, Heading, Image,Text } from '@chakra-ui/react'
import PlatformIconList from './PlatformIconList'
import CritiScore from './CritiScore'
interface Props{
    game : Game
}
export default function GameCard({game}: Props) {
  return (

    <Card >
        <Image  height='200px' src={game.background_image}/>
        <CardBody>
            <Heading overflow={'hidden'} fontSize='2x1'>{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
                <PlatformIconList platforms={game.parent_platforms.map(p=> p.platform)}/>
                <CritiScore score={game.metacritic}/>

            </HStack>
            
        </CardBody>
    </Card>
  )
    
}
