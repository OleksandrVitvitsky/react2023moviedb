import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";

import './index.css';
import {ContextProvider} from "./hok";




const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ContextProvider>
             <RouterProvider router={router}/>
    </ContextProvider>
);
