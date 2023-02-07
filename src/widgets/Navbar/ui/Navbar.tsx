import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss';
import {AppLink, AppLinksTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink theme={AppLinksTheme.SECONDARY} to={'/'} className={cls.mainLink}>Главная</AppLink>
                <AppLink theme={AppLinksTheme.SECONDARY} to={'/about'}>О сайте</AppLink>
            </div>
        </div>
    );
};
