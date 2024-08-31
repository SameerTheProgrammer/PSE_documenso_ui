import FileUpload from "../components/DocumentPage/FileUpload";
import Filters from "../components/DocumentPage/Filters";
import Table from "../components/DocumentPage/table/Table";

const DocumentPage = () => {
    return (
        <>
            <FileUpload />
            <Filters />
            <Table />
        </>
    );
};

export default DocumentPage;
