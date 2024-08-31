import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import DocumentEdit from "./pages/DocumentEditPage";
import DocumentPage from "./pages/DocumentPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <DocumentPage />,
            },
            {
                path: "/document/edit/:id",
                element: <DocumentEdit />,
            },
        ],
    },
]);
