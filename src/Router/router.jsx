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
    },
    {
        path:"/",
        element:<Hover/>,
        children:[
            {
                path:"/",
                element:<Phones/>
            },
            {
                path:"/hover/computers",
                element:<Computers/>
            },
            {
                path:"/hover/smartWatch",
                element:<SmartWatch/>
            },
            {
                path:"/hover/camera",
                element:<Camera/>
            },
            {
                path:"/hover/headPhones",
                element:<HeadPhones/>
            },
            {
                path:"/hover/gaming",
                element:<Gaming/>
            },
        ]
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