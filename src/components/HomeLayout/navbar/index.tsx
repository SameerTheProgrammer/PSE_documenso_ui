import { HStack, VStack, useDisclosure } from "@chakra-ui/react";
import { LeftContent } from "./left-content";
import { MobileNav } from "./mobile-nav";
import RightContent from "./right-content";

export type MenuProps = Array<{
    label: string;
    uri: string;
}>;

const menuItems: MenuProps = [
    {
        label: "Documents",
        uri: "/",
    },
    {
        label: "Temeplates",
        uri: "/",
    },
];

export function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <VStack
            w="full"
            spacing={0}
            px={{ base: "20px", sm: "50px", md: "100px" }}
            mb={5}
            border={0}
        >
            <HStack w="full" alignItems="center" py={2} justifyContent="space-between">
                {/* left content */}
                <LeftContent items={menuItems} onToggle={onToggle} />
                {/* right content */}
                <RightContent />
            </HStack>
            {/* mobile content */}
            <MobileNav items={menuItems} isOpen={isOpen} />
        </VStack>
    );
}
