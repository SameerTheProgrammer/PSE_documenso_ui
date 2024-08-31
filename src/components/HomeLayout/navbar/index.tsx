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
            position="fixed"
            top={0}
            left={0}
            right={0}
            spacing={0}
            px={{ base: "20px", sm: "50px", md: "100px" }}
            border={0}
            bg="white"
            zIndex={999}
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
