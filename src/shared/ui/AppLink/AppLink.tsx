import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinksTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinksTheme;
    children: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        children,
        className,
        theme = AppLinksTheme.PRIMARY,
        ...OtherProps
    } = props;

    return (
        <Link
            {...OtherProps}
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
});
