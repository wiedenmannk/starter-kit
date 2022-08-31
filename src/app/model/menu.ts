export interface MenuItem {
  label: string;
  link: string;
  icon?: string;
}

export const menu: MenuItem[] = [
  {
    label: 'main.home',
    link: '/',
    icon: 'pi pi-home',
  },
  {
    label: 'main.dashboard',
    link: '/dashboard',
    icon: 'pi pi-pencil',
  },
  {
    label: 'main.videos',
    link: '/video',
    icon: 'pi pi-video',
  },
  {
    label: 'main.admin',
    link: '/dashboard',
    icon: 'pi pi-users',
  },
  {
    label: 'main.developer',
    link: '/dev',
    icon: 'pi pi-discord',
  },
  {
    label: 'main.forms',
    link: '/forms',
    icon: 'pi pi-book',
  },
];
