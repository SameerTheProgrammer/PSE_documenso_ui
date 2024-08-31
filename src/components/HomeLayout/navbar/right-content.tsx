import {
    Flex,
    FocusLock,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverTrigger,
} from "@chakra-ui/react";
import { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import DetailedAvatar from "../../utils/DetailedAvatar";

const RightContent: React.FC = () => {
    const firstFieldRef = useRef(null);
    return (
        <Flex alignItems="center" gap={5}>
            <Popover isLazy initialFocusRef={firstFieldRef} placement="bottom-start">
                <PopoverTrigger>
                    <IconButton
                        aria-label="search"
                        icon={<FaSearch />}
                        variant="ghost"
                        colorScheme="teal"
                        rounded="full"
                        size="sm"
                        display={{ base: "flex", lg: "none" }}
                    />
                </PopoverTrigger>
                <PopoverContent p={5}>
                    <FocusLock persistentFocus={false}>
                        <PopoverArrow />
                        <InputGroup size="sm">
                            <Input
                                variant="outline"
                                ref={firstFieldRef}
                                placeholder="Search..."
                                borderRadius={10}
                            />
                            <InputLeftElement pointerEvents="none">
                                <FaSearch color="teal" />
                            </InputLeftElement>
                        </InputGroup>
                    </FocusLock>
                </PopoverContent>
            </Popover>
            <InputGroup size="sm" display={{ base: "none", lg: "flex" }}>
                <Input variant="outline" placeholder="Search..." borderRadius={10} />
                <InputLeftElement pointerEvents="none">
                    <FaSearch color="teal" />
                </InputLeftElement>
            </InputGroup>
            <DetailedAvatar
                title="Sameer Kumar"
                subTitle="Personal Account"
                name="SK"
                flexDisplay={{ base: "none", md: "flex" }}
            />
        </Flex>
    );
};

export default RightContent;
