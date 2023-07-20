import routerAdmin from "./routes.admin";
import routesrClient from "./routes.client";
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";

const routes = [
    ...routerAdmin, 
    ...routesrClient, 
    {
        layout: BasicLayout,
        component: Error404,
    },
];

export default routes;