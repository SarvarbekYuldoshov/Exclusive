import { createBrowserRouter } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import App from "../App"
import String from "../Components/String/String"

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,

    },
    {
        path:"/navbar",
        element: <Navbar />
    },{
        path:"/shopping",
        element: <String/>
    }
])
export default router