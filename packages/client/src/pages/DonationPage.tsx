import React from 'react'
import { Box, Tabs, TabList, TabPanels, Tab, TabPanel, Text, useMediaQuery } from '@chakra-ui/react'
import DonationDetails from '../components/DonationDetails'


export default function DonationPage() {
    const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <>
    <Box  bgColor="brand.primary" w="100%" h="100vh" p={4} color="white" display="flex" justifyContent="center">
        <Box w={isMobile ? "100%" : "70%"} pt={isMobile ? 2 : 10}>
            <Tabs isFitted variant='enclosed' align="center">
                <TabList>
                    <Tab _selected={{ color: 'brand.dark', bg: 'white' }} fontSize={isMobile ? "l" : "2xl"}>Single</Tab>
                    <Tab _selected={{ color: 'brand.dark', bg: 'white' }} fontSize={isMobile ? "l" : "2xl"}>Monthly</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <Box mt={1}>
                        { isMobile ? <Text fontSize="l" fontWeight="bold" pb={5}>
                                Hur mycket skulle du vilja donera till Happy Tails?
                            </Text> : <Text fontSize="2xl" fontWeight="bold" pb={10}>
                                Hur mycket skulle du vilja donera till Happy Tails?
                                </Text>}
                        <Tabs isFitted variant='enclosed' align="center">
                            <TabList>
                                <Tab _selected={{ color: 'brand.dark', bg: 'white' }} fontSize={isMobile ? "sm" : "l"}>50 SEK</Tab>
                                <Tab _selected={{ color: 'brand.dark', bg: 'white' }} fontSize={isMobile ? "sm" : "l"}>100 SEK</Tab>
                                <Tab _selected={{ color: 'brand.dark', bg: 'white' }} fontSize={isMobile ? "sm" : "l"}>500 SEK</Tab>
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
                        <Box mt={1}>
                            { isMobile ? <Text fontSize="l" fontWeight="bold" pb={5}>
                                Hur mycket skulle du vilja donera varje månad till Happy Tails?
                            </Text> : <Text fontSize="2xl" fontWeight="bold" pb={10}>
                                Hur mycket skulle du vilja donera varje månad till Happy Tails?
                            </Text>}
                            <Tabs isFitted variant='enclosed' align="center">
                                <TabList>
                                    <Tab _selected={{ color: 'brand.dark', bg: 'white' }} fontSize={isMobile ? "sm" : "l"}>50 SEK</Tab>
                                    <Tab _selected={{ color: 'brand.dark', bg: 'white' }} fontSize={isMobile ? "sm" : "l"}>100 SEK</Tab>
                                    <Tab _selected={{ color: 'brand.dark', bg: 'white' }} fontSize={isMobile ? "sm" : "l"}>500 SEK</Tab>
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
