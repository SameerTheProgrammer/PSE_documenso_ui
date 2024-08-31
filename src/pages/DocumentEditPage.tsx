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

const DocumentEdit = () => {
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
        </Flex>
    );
};

export default DocumentEdit;
