import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

export default function GameCardSkeleton() {
  return (
   <Card >
    <Skeleton height='300px'/>
    <CardBody>
        <SkeletonText/>
    </CardBody>
   </Card>
  )
}
