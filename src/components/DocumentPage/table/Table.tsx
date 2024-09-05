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
    NumberInput,
    NumberInputField,
    Text,
    Select,
    Stack,
    Link as ChakraLink,
} from "@chakra-ui/react";
import { FaRegEdit } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    CellContext,
    getPaginationRowModel,
} from "@tanstack/react-table";
import { TableDocsData } from "../../../data/docData";
import { ITableDocsData } from "../../../types/DocumentPagesTypes";
import renderRecipientsPopover from "./RecipientsPopover";
import { Link as ReactRouterLink } from "react-router-dom";

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
        accessorKey: "id",
        header: "Actions",
        cell: (info: CellContext<ITableDocsData, string>) => (
            <Flex gap={5} align="center">
                <ChakraLink as={ReactRouterLink} to={`document/edit/${info.getValue()}`}>
                    <Button leftIcon={<FaRegEdit />}>Edit</Button>
                </ChakraLink>

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
        getPaginationRowModel: getPaginationRowModel(),
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
            <Flex w={"100%"} justify={"space-between"} align={"center"} flexWrap={"wrap"}>
                <Text w={"40%"}>Showing {table.getRowCount()} Results.</Text>
                <Flex align={"center"} gap={2}>
                    <Text minW={"max-content"}>Rows per page</Text>
                    <Select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                        }}
                        minW={"max-content"}
                    >
                        {[5, 10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize}
                            </option>
                        ))}
                    </Select>
                </Flex>
                <Flex
                    justify={"space-between"}
                    align={"center"}
                    w={"100%"}
                    mt={5}
                    flexWrap={"wrap"}
                >
                    <Flex align={"center"} gap={3}>
                        Go to page:
                        <NumberInput
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={(value) => {
                                value =
                                    table.getPageCount() < Number(value) ||
                                    table.getPageCount() > Number(value)
                                        ? "1"
                                        : value;
                                const page = value ? Number(value) - 1 : 0;
                                table.setPageIndex(page);
                            }}
                            min={1}
                            max={table.getPageCount()}
                            w={"30%"}
                        >
                            <NumberInputField />
                        </NumberInput>
                    </Flex>
                    <Flex gap={1} minW={"max-content"} align={"center"}>
                        <Text>Page</Text>
                        <Text fontWeight={"bold"}>
                            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                        </Text>
                        <Stack direction="row" spacing={1} align="center">
                            <Button
                                size={"sm"}
                                colorScheme="teal"
                                variant="solid"
                                onClick={() => table.setPageIndex(0)}
                                isDisabled={!table.getCanPreviousPage()}
                            >
                                {"<<"}
                            </Button>
                            <Button
                                size={"sm"}
                                colorScheme="teal"
                                variant="solid"
                                onClick={() => table.previousPage()}
                                isDisabled={!table.getCanPreviousPage()}
                            >
                                {"<"}
                            </Button>
                            <Button
                                size={"sm"}
                                colorScheme="teal"
                                variant="solid"
                                isDisabled={!table.getCanNextPage()}
                                onClick={() => table.nextPage()}
                            >
                                {">"}
                            </Button>
                            <Button
                                size={"sm"}
                                colorScheme="teal"
                                variant="solid"
                                onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                                isDisabled={!table.getCanNextPage()}
                            >
                                {">>"}
                            </Button>
                        </Stack>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
};

export default Table;
