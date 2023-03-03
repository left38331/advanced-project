import { classNames } from 'shared/lib/classNames/classNames';
import { FC, ButtonHTMLAttributes } from 'react';
import cls from './Button.module.scss';

export const enum ThemeButton {
    CLEAR = 'clear',
    OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...rest
    } = props;

    return (
        <button
            type="button"
            {...rest}
            className={classNames(cls.Button, {}, [className, cls[theme]])}
        >
            {children}
        </button>
    );
};
