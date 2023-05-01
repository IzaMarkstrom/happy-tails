import { Box, Icon, Text } from '@chakra-ui/react'
import { FaCcMastercard, FaCcPaypal, FaCcVisa } from "react-icons/fa";
import React from 'react'

export default function DonationDetails(props: { value: number }) {
  return (
    <>                                        
        <Text>Donera {props.value} SEK till Happy Tails</Text>
        <Box>
            Vi accepterar: <Icon as={FaCcPaypal} /> <Icon as={FaCcVisa} />{" "}
            <Icon as={FaCcMastercard} />
        </Box>
    </>
  )
}
