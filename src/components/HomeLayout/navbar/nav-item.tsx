import { Button, Link as ChakraLink, ListItem } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

type NavItemProps = {
    label: string;
    uri: string;
};

export function NavItem({ label, uri }: NavItemProps) {
    return (
        <ListItem>
            <Button
                colorScheme="teal"
                variant="ghost"
                _hover={{ textDecoration: "none", bg: "teal.50" }}
                _active={{ bg: "teal.100" }}
            >
                <ChakraLink as={ReactRouterLink} to={uri}>
                    {label}
                </ChakraLink>
            </Button>
        </ListItem>
    );
}
