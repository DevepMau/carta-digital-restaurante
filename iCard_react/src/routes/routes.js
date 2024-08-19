import routerAdmin from "./routes.admin";
import routerClient from "./routes.client";
import { Error404 } from '../pages';
import {BasicLayout} from '../layouts';

const routes = [...routerAdmin, ...routerClient,
    {
        path: "*", // Atrapa todas las rutas no coincidentes
        layout: BasicLayout,
        component: Error404,
    },
];

export default routes;