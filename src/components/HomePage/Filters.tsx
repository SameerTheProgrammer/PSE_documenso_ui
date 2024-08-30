import { Heading, Button, Select, Flex } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { CiFileOn } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { FaInbox } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { MdArrowDropDown } from "react-icons/md";

const filters = [
    {
        title: "Inbox",
        icon: <FaInbox />,
        value: "inbox",
    },
    {
        title: "Pending",
        icon: <GoClock />,
        value: "pending",
    },
    {
        title: "Completed",
        icon: <FaCheckCircle />,
        value: "completed",
    },
    {
        title: "Draft",
        icon: <CiFileOn />,
        value: "draft",
    },
    {
        title: "All",
        value: "all",
    },
];

const Filters = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [selectedTimeRange, setSelectedTimeRange] = useState("all");

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedTimeRange(event.target.value);
    };

    useEffect(() => {
        console.log(selectedTimeRange);
    }, [selectedTimeRange]);

    return (
        <Flex w="full" justifyContent="space-between" direction={{ base: "column", lg: "row" }}>
            <Heading as="h2" size="lg">
                Documents
            </Heading>
            <Flex
                mt={{ base: 5, lg: 0 }}
                overflowX={{ base: "auto", lg: "hidden" }}
                direction={"row"}
                alignItems="center"
                maxW={{ base: "100%", lg: "none" }}
                flexWrap="nowrap"
            >
                {filters.map((filter, index) => (
                    <Button
                        key={index}
                        name={filter.value}
                        leftIcon={filter.icon || undefined}
                        colorScheme={activeFilter === filter.value ? "gray" : "teal"}
                        variant={activeFilter === filter.value ? "solid" : "ghost"}
                        onClick={() => setActiveFilter(filter.value)}
                        flexShrink={0}
                        mr={2}
                    >
                        {filter.title}
                    </Button>
                ))}
                <Select
                    value={selectedTimeRange}
                    onChange={handleSelectChange}
                    ml={5}
                    icon={<MdArrowDropDown />}
                    minW={"max-content"}
                >
                    <option value="all">All Time</option>
                    <option value="last-7-days">Last 7 Days</option>
                    <option value="last-14-days">Last 14 Days</option>
                    <option value="last-30-days">Last 30 Days</option>
                </Select>
            </Flex>
        </Flex>
    );
};

export default Filters;
