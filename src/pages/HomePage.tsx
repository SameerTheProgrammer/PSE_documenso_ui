import { VStack } from "@chakra-ui/react";
import FileUpload from "./../components/HomePage/FileUpload";

const HomePage = () => {
    return (
        <>
            <VStack spacing={8} p={8} w="full">
                <FileUpload />
                <div>Hello from home page of route path "/"</div>
            </VStack>
        </>
    );
};

export default HomePage;
