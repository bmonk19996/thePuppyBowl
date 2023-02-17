import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    CreateRoutesFromElements,
    createRoutesFromElements
} from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route  path='/' element={<Main/>}/>
        </>
    )
)




const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router}/>);
