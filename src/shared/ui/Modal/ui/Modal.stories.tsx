import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Modal } from 'shared/ui/Modal';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

export default {
    title: 'share/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Tsfdsdfsdf  sdf sd fsd fext',
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'Tsfdsdfsdf  sdf sd fsd fext',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
