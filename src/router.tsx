import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HomeLayout from "./layouts/HomeLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);
