import {
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Heading,
    Link as ChakraLink,
    List,
} from "@chakra-ui/react";
import { MenuProps } from "..";
import { MobileNavItem } from "./mobile-nav-item";
import { Link as ReactRouterLink } from "react-router-dom";

type MobileNavProps = {
    isOpen: boolean;
    items: MenuProps;
    onClose: () => void;
};

export function MobileNav({ items, isOpen, onClose }: MobileNavProps) {
    return (
        <>
            <Drawer placement={"left"} size={"xs"} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        <ChakraLink as={ReactRouterLink} to="/" _hover={{ textDecoration: "none" }}>
                            <Heading
                                as="h3"
                                size="lg"
                                color="teal"
                                fontWeight="black"
                                cursor="pointer"
                            >
                                Documenso
                            </Heading>
                        </ChakraLink>
                    </DrawerHeader>
                    <DrawerBody px={2}>
                        <List gap={2} spacing={2} width="100%" fontSize={"large"}>
                            {items.map((item) => (
                                <MobileNavItem key={item.label} {...item} />
                            ))}
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
        // <Collapse in={isOpen} animateOpacity style={{ width: "100%" }}>

        // </Collapse>
    );
}
