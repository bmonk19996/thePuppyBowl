import React from "react";
import ReactDOM from "react-dom/client";
import { Main, PlayerDetails } from "./components";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements
} from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/'> 
        <Route index element={<Main/>}></Route>
        <Route path= ":id" element={<PlayerDetails />}></Route>
        </Route>
        
        </>
    )
)




const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router}/>);
