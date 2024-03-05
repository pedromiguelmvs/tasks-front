import { Layout } from '../../layout/layout.types';

export type Scheme = 'auto' | 'dark' | 'light';
export type Screens = { [key: string]: string };
export type Theme = 'theme-default' | string;
export type Themes = { id: string; name: string }[];

export interface AppConfig {
  layout: Layout;
  scheme: Scheme;
  screens: Screens;
  theme: Theme;
  themes: Themes;
}

export const appConfig: AppConfig = {
  layout: 'sidebar',
  scheme: 'auto',
  screens: {
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1440px',
  },
  theme: 'theme-default',
  themes: [
    {
      id: 'theme-default',
      name: 'Default',
    },
  ],
};
