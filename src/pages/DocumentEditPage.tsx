import {
    Flex,
    Box,
    Stack,
    Input,
    Select,
    Button,
    Heading,
    Link as ChakraLink,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Card,
    CardBody,
    CardHeader,
    Text,
    CardFooter,
    ButtonGroup,
    useSteps,
    Progress,
} from "@chakra-ui/react";
import { GoClock, GoPeople } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import { Link as ReactRouterLink } from "react-router-dom";
import { IRecipientsStatus } from "../types/DocumentPagesTypes";
import RecipientList from "../components/utils/RecipientList";

const recipientsList: IRecipientsStatus = {
    completed: [
        {
            id: "r41",
            firstName: "Scott",
            lastName: "Lang",
            email: "scott.lang@example.com",
            role: "signer",
        },
        {
            id: "r42",
            firstName: "Hope",
            lastName: "Van Dyne",
            email: "hope.van.dyne@example.com",
            role: "viewer",
        },
        {
            id: "r43",
            firstName: "Nick",
            lastName: "Fury",
            email: "nick.fury@example.com",
            role: "signer",
        },
    ],
    waiting: [
        {
            id: "r44",
            firstName: "Maria",
            lastName: "Hill",
            email: "maria.hill@example.com",
            role: "viewer",
        },
    ],
};

const steps = [
    { title: "First", description: "Contact Info" },
    { title: "Second", description: "Date & Time" },
    { title: "Third", description: "Select Rooms" },
    { title: "Forth", description: "Select Rooms" },
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

            <Flex height="100vh" gap={6}>
                {/* Left Side: PDF Viewer */}
                <Box flex="4" borderWidth="1px" borderRadius="lg" overflow="hidden" padding="4">
                    {/* Replace with actual PDF viewer component */}
                    <Box height="100%" backgroundColor="gray.100">
                        PDF Viewer Placeholder
                    </Box>
                </Box>

                {/* Right Side: Configuration Panel */}
                <Card
                    flex="3"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    shadow={"none"}
                    borderColor={"none"}
                >
                    <CardHeader borderBottomWidth="1px">
                        <Heading size="lg">General</Heading>
                        <Text>Configure general settings for the document.</Text>
                    </CardHeader>

                    <CardBody overflow="auto">
                        <Stack spacing="4">
                            <Input
                                placeholder="Title"
                                defaultValue="Junior_Backend_Developer.pdf"
                            />
                            <Select>
                                <option value="no_restrictions">No restrictions</option>
                                <option value="required_account">Required account</option>
                            </Select>
                        </Stack>
                    </CardBody>
                    <CardFooter display={"flex"} flexDirection={"column"} rowGap={2}>
                        <Box mb={3}>
                            <Text mb={1}>
                                Step {ActiveStep} of {steps.length}
                            </Text>
                            <Progress value={progressPercent} size="xs" colorScheme="pink" />
                        </Box>
                        <ButtonGroup
                            w={"100%"}
                            display={"flex"}
                            justifyContent={"space-between"}
                            spacing="5"
                        >
                            <Button
                                w={"100%"}
                                colorScheme="blue"
                                onClick={() => {
                                    goToPrevious();
                                }}
                                isDisabled={ActiveStep == 1}
                            >
                                Go Back
                            </Button>
                            {ActiveStep === steps.length ? (
                                <Button w={"100%"} colorScheme="teal">
                                    Submit
                                </Button>
                            ) : (
                                <Button
                                    w={"100%"}
                                    onClick={() => {
                                        goToNext();
                                    }}
                                    colorScheme="teal"
                                    isDisabled={ActiveStep == steps.length}
                                >
                                    Continue
                                </Button>
                            )}
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Flex>
        </Flex>
    );
};

export default DocumentEdit;
