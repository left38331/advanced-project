import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
}

export const RoutePaths: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
};

export const routeConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: {
        path: RoutePaths.main,
        element: <MainPage />,
    },
    [AppRoute.ABOUT]: {
        path: RoutePaths.about,
        element: <AboutPage />,
    },
};
