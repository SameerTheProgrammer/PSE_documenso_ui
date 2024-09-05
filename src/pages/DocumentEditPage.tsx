import {
    Flex,
    Box,
    Button,
    Heading,
    Link as ChakraLink,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    useSteps,
} from "@chakra-ui/react";
import { GoClock, GoPeople } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { Link as ReactRouterLink } from "react-router-dom";
import { IRecipientsStatus } from "../types/DocumentPagesTypes";
import RecipientList from "../components/utils/RecipientList";
import FirstStepCard from "../components/DocumentEditPage/FirstStepCard";
import ForthStepCard from "../components/DocumentEditPage/ForthStepCard";
import SecondStepCard from "../components/DocumentEditPage/SecondStepCard";
import ThirdStepCard from "../components/DocumentEditPage/ThirdStepCard";

const recipientsList: IRecipientsStatus = {
    completed: [
        {
            id: "r41",
            firstName: "Scott",
            lastName: "Lang",
            email: "scott.lang@example.com",
            role: "SIGNER",
        },
        {
            id: "r42",
            firstName: "Hope",
            lastName: "Van Dyne",
            email: "hope.van.dyne@example.com",
            role: "VIEWER",
        },
        {
            id: "r43",
            firstName: "Nick",
            lastName: "Fury",
            email: "nick.fury@example.com",
            role: "SIGNER",
        },
    ],
    waiting: [
        {
            id: "r44",
            firstName: "Maria",
            lastName: "Hill",
            email: "maria.hill@example.com",
            role: "VIEWER",
        },
    ],
};

const steps = [
    { heading: "General", description: "Configure general settings for the document." },
    { heading: "Add Signers", description: "Add the people who will sign the document." },
    { heading: "Add Fields", description: "Add all relevant fields for each recipient." },
    {
        heading: "Add Subject",
        description: "Add the subject and message you wish to send to signers.",
    },
];

const DocumentEdit = () => {
    const { activeStep, goToPrevious, goToNext } = useSteps({
        count: steps.length - 1,
    });
    const ActiveStep = activeStep + 1;
    const progressPercent = (ActiveStep / steps.length) * 100;

    return (
        <Flex w={"100%"} direction={"column"}>
            <Box mb={5}>
                <Button
                    p={0}
                    leftIcon={<IoIosArrowBack />}
                    colorScheme="teal"
                    variant="ghost"
                    _hover={{ bg: "none" }}
                >
                    <ChakraLink as={ReactRouterLink} to="/">
                        Documents
                    </ChakraLink>
                </Button>

                <Heading as="h3" size="lg" color="teal" fontWeight="black" cursor="pointer">
                    FEB 2023.pdf
                </Heading>

                <Flex align={"center"} gap={5}>
                    <Button
                        leftIcon={<GoClock />}
                        colorScheme="teal"
                        variant="ghost"
                        p={0}
                        _hover={{ bg: "none" }}
                    >
                        Pending
                    </Button>
                    <Popover trigger="hover">
                        <PopoverTrigger>
                            <Button
                                leftIcon={<GoPeople />}
                                colorScheme="teal"
                                variant="ghost"
                                p={0}
                                _hover={{ bg: "none" }}
                            >
                                {Number(recipientsList.completed.length) +
                                    Number(recipientsList.waiting.length)}{" "}
                                Recipients
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <PopoverArrow />
                            <PopoverBody maxH="250px" overflowY="auto">
                                {Object.keys(recipientsList).map((key) => {
                                    const recipients =
                                        recipientsList[key as keyof IRecipientsStatus];
                                    return recipients.length > 0 ? (
                                        <RecipientList
                                            key={key}
                                            recipients={recipients}
                                            status={key}
                                        />
                                    ) : null;
                                })}
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                </Flex>
            </Box>

            <Flex height="100vh" gap={4} direction={"column"}>
                {/* Left Side: PDF Viewer */}
                <Box flex="4" borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4">
                    {/* Replace with actual PDF viewer component */}
                    <Box height="100%" backgroundColor="gray.100">
                        PDF Viewer Placeholder
                    </Box>
                </Box>

                {/* Right Side: Configuration Panel */}
                {ActiveStep === 1 ? (
                    <FirstStepCard
                        ActiveStep={ActiveStep}
                        steps={steps}
                        progressPercent={progressPercent}
                        goToPrevious={goToPrevious}
                        goToNext={goToNext}
                    />
                ) : ActiveStep === 2 ? (
                    <SecondStepCard
                        ActiveStep={ActiveStep}
                        steps={steps}
                        progressPercent={progressPercent}
                        goToPrevious={goToPrevious}
                        goToNext={goToNext}
                    />
                ) : ActiveStep === 3 ? (
                    <ThirdStepCard
                        ActiveStep={ActiveStep}
                        steps={steps}
                        progressPercent={progressPercent}
                        goToPrevious={goToPrevious}
                        goToNext={goToNext}
                    />
                ) : (
                    <ForthStepCard
                        ActiveStep={ActiveStep}
                        steps={steps}
                        progressPercent={progressPercent}
                        goToPrevious={goToPrevious}
                    />
                )}
            </Flex>
        </Flex>
    );
};

export default DocumentEdit;
