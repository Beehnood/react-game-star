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

    <Card borderRadius={15} overflow={'hidden'}>
        <Image src={game.background_image}/>
        <CardBody>
            <Heading fontSize='2x1'>{game.name}</Heading>
            <HStack justifyContent={"space-between"}>
                <PlatformIconList platforms={game.parent_platforms.map(p=> p.platform)}/>
                <CritiScore score={game.metacritic}/>

            </HStack>
            
        </CardBody>
    </Card>
  )
    
}
