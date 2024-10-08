import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./components/layouts/MainLayouts";
import Home from "./pages/Home";
import ErrorElement from "./components/ui/ErrorElement";

const MainRoutes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts/>,
        errorElement: <ErrorElement/>,
        children: [
            {

                index: true,
                element: <Home/>
            }
        ]

    }
]);

export default MainRoutes;