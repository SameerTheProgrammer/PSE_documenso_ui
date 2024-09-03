import {
    Input,
    FormLabel,
    FormControl,
    Select,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Flex,
} from "@chakra-ui/react";

const FirstStepCardBody = () => {
    return (
        <Flex w={"100%"} gap={5} direction={"column"}>
            <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input borderRadius={5} />
            </FormControl>
            <FormControl>
                <FormLabel>Document access</FormLabel>
                <Select borderRadius={5}>
                    <option value={"requiredAccount"}>Required account</option>
                    <option value={"noRestrictions"}>No restrictions</option>
                </Select>
            </FormControl>
            <Accordion allowToggle mt={2}>
                <AccordionItem border={"none"}>
                    <h2>
                        <AccordionButton borderWidth={1} borderRadius={5}>
                            <Box as="span" flex="1" textAlign="left">
                                Advanced Options
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel display={"flex"} flexDirection={"column"} gap={5} p={0} pt={4}>
                        <FormControl>
                            <FormLabel>External ID</FormLabel>
                            <Input borderRadius="lg" />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Date Format</FormLabel>
                            <Select>
                                <option value={"yyyy-MM-dd hh:mm a"}>YYYY-MM-DD HH:mm a</option>
                                <option value={"yyyy-MM-dd"}>YYYY-MM-DD</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Time Zone</FormLabel>
                            <Select>
                                <option value={"etc/utc"}>Etc/UTC</option>
                                <option value={"africa/accra"}>Africa/Accra</option>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <FormLabel>Redirect URL</FormLabel>
                            <Input borderRadius="lg" />
                        </FormControl>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Flex>
    );
};

export default FirstStepCardBody;
