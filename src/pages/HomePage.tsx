import FileUpload from "./../components/HomePage/FileUpload";
import Filters from "../components/HomePage/Filters";
import Table from "./../components/HomePage/table/Table";

const HomePage = () => {
    return (
        <>
            <FileUpload />
            <Filters />
            <Table />
        </>
    );
};

export default HomePage;
