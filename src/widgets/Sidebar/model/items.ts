import React from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import Profile from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutePaths.about,
        text: 'О cайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePaths.profile,
        text: 'Профиль',
        Icon: Profile,
    },
];
