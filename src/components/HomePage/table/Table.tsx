import { useMemo } from "react";
import {
    Table as ChakraTable,
    TableContainer,
    Thead,
    Tbody,
    Tr,
    Th,
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
import { useReactTable, getCoreRowModel, flexRender, CellContext } from "@tanstack/react-table";
import DetailedAvatar from "./../../utils/DetailedAvatar";
import { TableDocsData } from "../../../data/docData";
import { IRecipientsStatus, ITableDocsData, IRecipient } from "../../../types/HomePagesTypes";

// Define columns
const columns = [
    {
        accessorKey: "created",
        header: "Created",
        cell: (info: CellContext<ITableDocsData, string>) =>
            new Date(info.getValue()).toLocaleString(),
    },
    {
        accessorKey: "title",
        header: "Title",
    },
    {
        accessorKey: "recipients",
        header: "Recipients",
        cell: (info: CellContext<ITableDocsData, IRecipientsStatus>) => {
            const { completed, waiting } = info.getValue();
            const allRecipients = [...completed, ...waiting];
            return (
                <Popover trigger="hover">
                    <PopoverTrigger>
                        <AvatarGroup cursor="pointer" size="sm" max={3}>
                            {allRecipients.map((recipient: IRecipient) => (
                                <Avatar
                                    key={recipient.id}
                                    name={`${recipient.firstName} ${recipient.lastName}`}
                                />
                            ))}
                        </AvatarGroup>
                    </PopoverTrigger>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverBody maxH={"250px"} overflowY={"auto"}>
                            {completed.length > 0 && (
                                <VStack alignItems={"flex-start"}>
                                    <Heading as="h5" size="sm">
                                        Completed
                                    </Heading>
                                    {completed.map((recipient: IRecipient) => (
                                        <DetailedAvatar
                                            key={recipient.id}
                                            title={recipient.email}
                                            subTitle={recipient.role}
                                            name={`${recipient.firstName[0]}${recipient.lastName[0]}`}
                                        />
                                    ))}
                                </VStack>
                            )}

                            {waiting.length > 0 && (
                                <VStack mt={2} alignItems={"flex-start"}>
                                    <Heading as="h5" size="sm">
                                        Waiting
                                    </Heading>
                                    {waiting.map((recipient: IRecipient) => (
                                        <DetailedAvatar
                                            key={recipient.id}
                                            title={recipient.email}
                                            subTitle={recipient.role}
                                            name={`${recipient.firstName[0]}${recipient.lastName[0]}`}
                                        />
                                    ))}
                                </VStack>
                            )}
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            );
        },
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "id", // Placeholder for any action button, uses row's `id`
        header: "Actions",
        cell: () => (
            <Flex gap={5} align="center">
                <Button leftIcon={<FaRegEdit />}>Edit</Button>
                <Icon as={HiOutlineDotsVertical} />
            </Flex>
        ),
    },
];

const Table = () => {
    const data = useMemo(() => TableDocsData, []);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <>
            <Box as={TableContainer} w="100%" borderWidth={1} overflowX="auto">
                <ChakraTable variant="simple">
                    <Thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <Tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <Th key={header.id}>
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext(),
                                        )}
                                    </Th>
                                ))}
                            </Tr>
                        ))}
                    </Thead>
                    <Tbody>
                        {table.getRowModel().rows.map((row) => (
                            <Tr key={row.id} _hover={{ bgColor: "gray.100" }}>
                                {row.getVisibleCells().map((cell) => (
                                    <Td key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </Td>
                                ))}
                            </Tr>
                        ))}
                    </Tbody>
                </ChakraTable>
            </Box>
        </>
    );
};

export default Table;
