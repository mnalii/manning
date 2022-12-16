import Iconify from 'src/components/iconify/Iconify';

const navConfig = [
  {
    subheader: 'navigation',
    items: [
      {
        title: 'Dashboard',
        path: '/',
        icon: <Iconify icon="material-symbols:dashboard-outline" width={20} height={20} />,
      },
      {
        title: 'Approvals',
        path: '/approvals',
        icon: <Iconify icon="icon-park-outline:file-search-one" width={20} height={20} />,
      },
    ],
  },
  {
    subheader: 'my account',
    items: [
      {
        title: 'My Clients',
        path: '/my-clients',
        icon: <Iconify icon="mdi:comment-user-outline" width={20} height={20} />,
      },
      {
        title: 'Edit Profile',
        path: '/approvals',
        icon: <Iconify icon="ph:gear-six-bold" width={20} height={20} />,
      },
    ],
  },
];

export default navConfig;
