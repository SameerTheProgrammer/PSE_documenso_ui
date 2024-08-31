import React from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/HomeLayout/navbar/index";

const HomeLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Box w={"100%"} mt={100} px={{ base: "20px", sm: "50px", md: "100px" }}>
                <VStack marginY={8} spacing={8} w="full" justify={"flex-start"}>
                    <Outlet />
                </VStack>
            </Box>
        </>
    );
};

export default HomeLayout;
