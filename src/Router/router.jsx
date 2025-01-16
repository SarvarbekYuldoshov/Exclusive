import { createBrowserRouter } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import App from "../App"
import String from "../Components/String/String"
import Korzinka from "../Components/Korzinka/Korzinka"
import Market from "../Components/Market/Market"
import Hover from "../Components/Hover/Hover"
import Phones from "../Components/Folow/Phones"
import Computers from "../Components/Folow/Computers"
import SmartWatch from "../Components/Folow/SmartWatch"
import Camera from "../Components/Folow/Camera"
import HeadPhones from "../Components/Folow/HeadPhones"
import Gaming from "../Components/Folow/Gaming"

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children:[
            // --------------------Pastgi qism -----------------------------------------
            {
                path:"/",
                element:<Navbar/>
            },
            // -------------------------2------------------------------------------------
            {
                path:"/phones",
                element:<Phones/>
            },
            // --------------------3------------------------------------------------------
            {
                path:"/computers",
                element:<Computers/>
            },
            {
                path:"/smartWatch",
                element:<SmartWatch/>
            },
            {
                path:"/camera",
                element:<Camera/>
            },
            {
                path:"/headPhones",
                element:<HeadPhones/>
            },
            {
                path:"/gaming",
                element:<Gaming/>
            },
        ]
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