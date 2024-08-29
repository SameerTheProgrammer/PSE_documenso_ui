import { Flex, Heading, IconButton, List } from "@chakra-ui/react";
import { MenuProps } from ".";
import { FaBurger } from "react-icons/fa6";
import { NavItem } from "./nav-item";
import { Link } from "react-router-dom";

type LeftContentProps = {
    items: MenuProps;
    onToggle(): void;
};
export function LeftContent({ items, onToggle }: LeftContentProps) {
    return (
        <Flex alignItems="center" justifyContent="space-between" gap={4}>
            <IconButton
                aria-label="menu"
                colorScheme="teal"
                variant="ghost"
                icon={<FaBurger />}
                rounded="full"
                display={{ base: "flex", md: "none" }}
                onClick={onToggle}
            />

            <Link to="/">
                <Heading as="h3" size="lg" color="teal" fontWeight="black" cursor="pointer">
                    Documenso
                </Heading>
            </Link>

            <List gap={2} display={{ base: "none", md: "flex" }}>
                {items.map((item) => (
                    <NavItem key={item.label} {...item} />
                ))}
            </List>
        </Flex>
    );
}
