import { createBrowserRouter } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import App from "../App"

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,

    },
    {
        path:"/navbar",
        element: <Navbar />
    }
])
export default router