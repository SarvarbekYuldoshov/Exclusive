import { createBrowserRouter } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import App from "../App"
import String from "../Components/String/String"
import Korzinka from "../Components/Korzinka/Korzinka"
import Market from "../Components/Market/Market"

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
    ,{
        path:"/market",
        element:<Market/>
    }
])
export default router