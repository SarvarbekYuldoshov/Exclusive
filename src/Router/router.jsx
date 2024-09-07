import { createBrowserRouter } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import App from "../App"
import String from "../Components/String/String"
import Korzinka from "../Components/Korzinka/Korzinka"

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,

    },
    {
        path:"/navbar",
        element: <Navbar />
    },
    {
        path:"/shopping",
        element: <String/>
    },
    {
        path:"/korzinka/:id",
        element: <Korzinka/>
    }
])
export default router