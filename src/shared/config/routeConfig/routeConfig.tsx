import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export enum AppRoute {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about',
    [AppRoute.PROFILE]: '/profile',
    [AppRoute.NOT_FOUND]: '*',
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
    [AppRoute.NOT_FOUND]: {
        path: RoutePaths.not_found,
        element: <NotFoundPage />,
    },
    [AppRoute.PROFILE]: {
        path: RoutePaths.profile,
        element: <ProfilePage />,
    },
};
