import {
    Table as ChakraTable,
    TableContainer,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Button,
    Flex,
    Icon,
    Box,
    Avatar,
    AvatarGroup,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
    Heading,
    VStack,
    PopoverArrow,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import DetailedAvatar from "./../../utils/DetailedAvatar";

const Table = () => {
    return (
        <>
            <Box
                as={TableContainer}
                w={"100%"}
                borderWidth={1}
                overflowX={{ base: "auto", lg: "hidden" }}
            >
                <ChakraTable variant="simple">
                    <Thead>
                        <Tr bgColor={"gray.100"}>
                            <Th>Created</Th>
                            <Th>Title</Th>
                            <Th>Recipients</Th>
                            <Th>Status</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr _hover={{ bgColor: "gray.100" }}>
                            <Td>28/8/2024, 2:59 pm</Td>
                            <Td>FEB 2023.pdf</Td>
                            <Td>
                                <Popover isLazy trigger="hover">
                                    <PopoverTrigger>
                                        <AvatarGroup cursor="pointer" size="sm" max={3}>
                                            <Avatar name="Ryan Florence" />
                                            <Avatar name="Segun Adebayo" />
                                            <Avatar name="Kent Dodds" />
                                            <Avatar name="Prosper Otemuyiwa" />
                                            <Avatar name="Christian Nwamba" />
                                        </AvatarGroup>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <PopoverArrow />
                                        <PopoverBody maxH={"250px"} overflowY={"scroll"}>
                                            <VStack alignItems={"flex-start"}>
                                                <Heading as="h5" size="sm" cursor="pointer">
                                                    Completed
                                                </Heading>
                                                <DetailedAvatar
                                                    title="sameer.kumar@example.com"
                                                    subTitle="Signer"
                                                    name="SK"
                                                />
                                                <DetailedAvatar
                                                    title="chirag.kumar@example.com"
                                                    subTitle="Signer"
                                                    name="chirag"
                                                />
                                            </VStack>
                                            <VStack mt={2} alignItems={"flex-start"}>
                                                <Heading as="h5" size="sm" cursor="pointer">
                                                    Waiting
                                                </Heading>
                                                <DetailedAvatar
                                                    title="sameer.kumar@example.com"
                                                    subTitle="Signer"
                                                    name="SK"
                                                />
                                                <DetailedAvatar
                                                    title="chirag.kumar@example.com"
                                                    subTitle="Signer"
                                                    name="chirag"
                                                />
                                                <DetailedAvatar
                                                    title="sameer.kumar@example.com"
                                                    subTitle="Signer"
                                                    name="SK"
                                                />
                                            </VStack>
                                        </PopoverBody>
                                    </PopoverContent>
                                </Popover>
                            </Td>
                            <Td>Process</Td>
                            <Td>
                                <Flex gap={5} align="center">
                                    <Button leftIcon={<FaRegEdit />}>Edit</Button>
                                    <Icon as={HiOutlineDotsVertical} />
                                </Flex>
                            </Td>
                        </Tr>
                    </Tbody>
                </ChakraTable>
            </Box>
        </>
    );
};

export default Table;
