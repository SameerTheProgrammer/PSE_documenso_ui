import React, { useMemo } from "react";
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
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useReactTable, getCoreRowModel, flexRender, CellContext } from "@tanstack/react-table";
import { TableDocsData } from "../../../data/docData";
import { ITableDocsData } from "../../../types/HomePagesTypes";
import renderRecipientsPopover from "./RecipientsPopover";

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
        cell: renderRecipientsPopover,
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

const Table: React.FC = () => {
    const data = useMemo(() => TableDocsData, []);

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
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
    );
};

export default Table;
