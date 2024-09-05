import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/HomeLayout/navbar/index";

const HomeLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Box w={"100%"} mt={{ base: 75, lg: 90 }} px={{ base: "10px", sm: "20px", md: "50px" }}>
                <VStack marginBottom={10} spacing={8} w="full" justify={"flex-start"}>
                    <Outlet />
                </VStack>
            </Box>
        </>
    );
};

export default HomeLayout;
