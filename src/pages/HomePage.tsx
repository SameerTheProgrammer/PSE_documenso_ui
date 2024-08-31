import { VStack } from "@chakra-ui/react";
import FileUpload from "./../components/HomePage/FileUpload";
import Filters from "../components/HomePage/Filters";
import Table from "./../components/HomePage/table/Table";

const HomePage = () => {
    return (
        <>
            <VStack mt={8} spacing={8} w="full">
                <FileUpload />
                <Filters />
                <Table />
                <div>heele</div>
                <div>heele</div>
                <div>heele</div>
                <div>heele</div>
                <div>heele</div>
            </VStack>
        </>
    );
};

export default HomePage;
