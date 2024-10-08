import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./components/layouts/MainLayouts";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Withdraw from "./pages/Withdraw";
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
            },
            {
                path: "task",
                element: <Task/>
            },
            {
                path: "withdraw",
                element: <Withdraw/>
            }
        ]

    }
]);

export default MainRoutes;