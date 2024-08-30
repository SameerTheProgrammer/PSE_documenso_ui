import { VStack } from "@chakra-ui/react";
import FileUpload from "./../components/HomePage/FileUpload";
import Filters from "../components/HomePage/Filters";

const HomePage = () => {
    return (
        <>
            <VStack mt={8} spacing={8} w="full">
                <FileUpload />
                <Filters />
            </VStack>
        </>
    );
};

export default HomePage;
