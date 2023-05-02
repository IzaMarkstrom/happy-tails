import { Box, Icon, Text, Input, Grid, GridItem, useMediaQuery } from '@chakra-ui/react'
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import React from 'react'

export default function DonationDetails(props: { value: number }) {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>                                        
        {isMobile ?  
        <Text mb={2}>Donera {props.value} SEK till Happy Tails</Text>
        :
         <Text mb={7}>Donera {props.value} SEK till Happy Tails</Text>}
        <Box display="flex" flexDir="column" justifyContent="flex-start" alignItems="start">
            <Grid w="100%"   templateRows='repeat(3, 1fr)' templateColumns='repeat(4, 1fr)' gap={2}>
                <GridItem colSpan={4}>
                    <Input placeholder='Fullständigt namn'/>
                </GridItem>
                <GridItem colSpan={4}>
                    <Input placeholder='Kortnummer'/>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input placeholder='MM/ÅÅ'/>
                </GridItem>
                <GridItem colSpan={2}>
                    <Input placeholder='CVC'/>
                </GridItem>
            </Grid>
            <Text mt={6}>
                Vi accepterar: <Icon as={FaCcPaypal} /> <Icon as={FaCcVisa} />{" "}
                <Icon as={FaCcMastercard} />
            </Text>
        </Box>
    </>
  )
}
