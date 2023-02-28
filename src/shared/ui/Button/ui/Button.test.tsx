import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button';
import { ThemeButton } from 'shared/ui/Button/ui/Button';

describe('Button', () => {
    test('проверка текста', () => {
        render(<Button>Test</Button>);

        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('проверка класса', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);

        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
