import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.Navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinksTheme.SECONDARY} to="/" className={cls.mainLink}>Главная</AppLink>
            <AppLink theme={AppLinksTheme.SECONDARY} to="/about">О сайте</AppLink>
        </div>
    </div>
);
