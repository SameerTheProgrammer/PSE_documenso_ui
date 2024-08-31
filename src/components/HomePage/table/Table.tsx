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
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

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
                            <Td>SK</Td>
                            <Td>Process</Td>
                            <Td>
                                <Flex gap={5} align="center">
                                    <Button leftIcon={<FaRegEdit />}>Edit</Button>
                                    <Icon as={HiOutlineDotsVertical} />
                                </Flex>
                            </Td>
                        </Tr>
                        <Tr _hover={{ bgColor: "gray.100" }}>
                            <Td>28/8/2024, 2:59 pm</Td>
                            <Td>FEB 2023.pdf</Td>
                            <Td>SK</Td>
                            <Td>Process</Td>
                            <Td>
                                <Flex gap={5} align="center">
                                    <Button leftIcon={<FaRegEdit />}>Edit</Button>
                                    <Icon as={HiOutlineDotsVertical} />
                                </Flex>
                            </Td>
                        </Tr>
                        <Tr _hover={{ bgColor: "gray.100" }}>
                            <Td>28/8/2024, 2:59 pm</Td>
                            <Td>FEB 2023.pdf</Td>
                            <Td>SK</Td>
                            <Td>Process</Td>
                            <Td>
                                <Flex gap={5} align="center">
                                    <Button leftIcon={<FaRegEdit />}>Edit</Button>
                                    <Icon as={HiOutlineDotsVertical} />
                                </Flex>
                            </Td>
                        </Tr>
                        <Tr _hover={{ bgColor: "gray.100" }}>
                            <Td>28/8/2024, 2:59 pm</Td>
                            <Td>FEB 2023.pdf</Td>
                            <Td>SK</Td>
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
