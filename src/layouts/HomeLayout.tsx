import React from "react";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/HomeLayout/navbar/index";

const HomeLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Box w={"100%"} mt={100} px={{ base: "20px", sm: "50px", md: "100px" }}>
                <Outlet />
            </Box>
        </>
    );
};

export default HomeLayout;
