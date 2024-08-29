import { Link as ChakraLink, ListItem } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
<ChakraLink as={ReactRouterLink} to="/home">
    Home
</ChakraLink>;

type MobileNavItemProps = {
    label: string;
    uri: string;
};
export function MobileNavItem({ label, uri }: MobileNavItemProps) {
    return (
        <ListItem key={label} w="full">
            <ChakraLink
                as={ReactRouterLink}
                to={uri}
                display="block"
                rounded="lg"
                _hover={{ textDecoration: "none", bg: "teal.50" }}
                _active={{ bg: "teal.100" }}
                px={4}
                py={2}
                fontWeight="semibold"
                color="teal.600"
            >
                {label}
            </ChakraLink>
        </ListItem>
    );
}
