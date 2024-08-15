import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AvatarGroup from './AvatarGroup';

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof AvatarGroup>;

const Template: StoryFn<typeof AvatarGroup> = (args) => <AvatarGroup {...args} />;

export const TwoUsers = Template.bind({});
TwoUsers.args = {
  users: [
    { id: 1, name: 'Wanda', avatarUrl: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 2, name: 'Jon Doe', avatarUrl: 'https://i.imgur.com/mM9tFLP.png' },
  ],
  size: 'medium',
};

export const ThreeUsers = Template.bind({});
ThreeUsers.args = {
  users: [
    { id: 1, name: 'Budi' },
    { id: 2, name: 'Jon Doe', avatarUrl: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 3, name: 'Supri Amin'},
  ],
  size: 'medium',
};

export const FourUsers = Template.bind({});
FourUsers.args = {
  users: [
    { id: 1, name: 'Budi' },
    { id: 2, name: 'Jon Doe', avatarUrl: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 3, name: 'Supri Amin' },
    { id: 4, name: 'Paijo'},
  ],
  size: 'medium',
};

export const MoreThanFourUsers = Template.bind({});
MoreThanFourUsers.args = {
  users: [
    { id: 1, name: 'Budi' },
    { id: 2, name: 'Jon Doe', avatarUrl: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    { id: 3, name: 'Supri Amin',},
    { id: 4, name: 'Joko Santoso'},
    { id: 5, name: 'Mamat', avatarUrl: 'https://i.imgur.com/odSZ3Gv.png' },
    { id: 6, name: 'Susi', avatarUrl: 'https://www.cultureampcom-preview-1.usw2.wp-dev-us.cultureamp-cdn.com/assets/slices/main/assets/public/media/chapters-card-1@2x.05e547444387f29f14df0b82634bf2b6.png' },
  ],
  size: 'medium',
};


