import React from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text } from '@chakra-ui/react'
import DonationDetails from '../components/DonationDetails'


export default function DonationPage() {
  return (
    <>
    <Box  bgColor="brand.primary" w="100%" h="100vh" p={4} color="white" display="flex" justifyContent="center">
        <Box w="70%" pt={10}>
            <Tabs isFitted variant='enclosed' align="center">
                <TabList>
                    <Tab _selected={{ color: 'brand.dark', bg: 'white' }} fontSize="2xl">Single</Tab>
                    <Tab _selected={{ color: 'brand.dark', bg: 'white' }} fontSize="2xl">Monthly</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Box mt={10}>
                            <Text fontSize="2xl" fontWeight="bold" pb={10}>
                                Donera en gång och hjälp vår organisation. <br /> 
                                Hur mycket skulle du vilja donera till vår organisation?
                            </Text>
                        <Tabs isFitted variant='enclosed' align="center">
                            <TabList>
                                <Tab _selected={{ color: 'brand.dark', bg: 'white' }}>50 SEK</Tab>
                                <Tab _selected={{ color: 'brand.dark', bg: 'white' }}>100 SEK</Tab>
                                <Tab _selected={{ color: 'brand.dark', bg: 'white' }}>500 SEK</Tab>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Box bg="white" color="black" p={4} borderRadius="10px">
                                        <DonationDetails value={50} />
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box bg="white" color="black" p={4} borderRadius="10px">
                                        <DonationDetails value={100} />
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box bg="white" color="black" p={4} borderRadius="10px">
                                        <DonationDetails value={500} />
                                    </Box>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                        </Box>
                    </TabPanel>

                    <TabPanel>
                        <Box mt={10}>
                            <Text fontSize="2xl" fontWeight="bold" pb={10}>
                                Bli månadsgivare och hjälp vår organisation. <br /> 
                                Hur mycket skulle du vilja donera till vår organisation?
                            </Text>
                            <Tabs isFitted variant='enclosed' align="center">
                                <TabList>
                                    <Tab _selected={{ color: 'brand.dark', bg: 'white' }}>50 SEK</Tab>
                                    <Tab _selected={{ color: 'brand.dark', bg: 'white' }}>100 SEK</Tab>
                                    <Tab _selected={{ color: 'brand.dark', bg: 'white' }}>500 SEK</Tab>
                                </TabList>

                                <TabPanels>
                                <TabPanel>
                                    <Box bg="white" color="black" p={4} borderRadius="10px">
                                        <DonationDetails value={50} />
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box bg="white" color="black" p={4} borderRadius="10px">
                                        <DonationDetails value={100} />
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box bg="white" color="black" p={4} borderRadius="10px">
                                        <DonationDetails value={500} />
                                    </Box>
                                </TabPanel>
                                </TabPanels>
                            </Tabs>
                        </Box>
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </Box>
    </Box>
    </>
  )
}
