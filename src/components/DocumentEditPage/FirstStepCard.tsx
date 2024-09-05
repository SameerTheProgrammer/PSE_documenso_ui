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
    CardBody,
    Card,
} from "@chakra-ui/react";
import DocumentEditCardFooter from "./CardFooter";
import DocumentEditCardHeading from "./CardHeading";

interface IFirstStepCard {
    ActiveStep: number;
    steps: {
        heading: string;
        description: string;
    }[];
    progressPercent: number;
    goToPrevious: () => void;
    goToNext: () => void;
}

const FirstStepCard: React.FC<IFirstStepCard> = ({
    ActiveStep,
    steps,
    progressPercent,
    goToPrevious,
    goToNext,
}) => {
    return (
        <>
            <Card
                flex="3"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow={"none"}
                borderColor={"none"}
                minH={650}
            >
                <DocumentEditCardHeading ActiveStep={ActiveStep} steps={steps} />

                <CardBody overflowY="auto">
                    <Flex h={350} w={"100%"} gap={5} direction={"column"}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input name="title" borderRadius={5} />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Document access</FormLabel>
                            <Select name="documentAccess" borderRadius={5}>
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
                                <AccordionPanel
                                    display={"flex"}
                                    flexDirection={"column"}
                                    gap={5}
                                    p={0}
                                    pt={4}
                                >
                                    <FormControl>
                                        <FormLabel>External ID</FormLabel>
                                        <Input name="externalId" borderRadius="lg" />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Date Format</FormLabel>
                                        <Select name="dateFormat">
                                            <option value={"yyyy-MM-dd hh:mm a"}>
                                                YYYY-MM-DD HH:mm a
                                            </option>
                                            <option value={"yyyy-MM-dd"}>YYYY-MM-DD</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Time Zone</FormLabel>
                                        <Select name="timeZone">
                                            <option value={"etc/utc"}>Etc/UTC</option>
                                            <option value={"africa/accra"}>Africa/Accra</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel>Redirect URL</FormLabel>
                                        <Input name="redirectUrl" borderRadius="lg" />
                                    </FormControl>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Flex>
                </CardBody>

                <DocumentEditCardFooter
                    ActiveStep={ActiveStep}
                    steps={steps}
                    progressPercent={progressPercent}
                    goToPrevious={goToPrevious}
                    onBtnClick={() => {
                        goToNext();
                    }}
                />
            </Card>
        </>
    );
};

export default FirstStepCard;
