import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";

const route = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
    },
]);

export default route;
