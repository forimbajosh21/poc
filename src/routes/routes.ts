import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';

import { DownloadOffline } from 'common/components/base/Icons';

export const managerRoutes = [
  {
    name: 'Dashboard',
    link: '/manager/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Scholars',
    link: '/manager/scholars',
    icon: PeopleIcon,
  },
];

export const scholarRoutes = [
  {
    name: 'Dashboard',
    link: '/scholar/dashboard',
    icon: HomeIcon,
  },
  {
    name: 'Claims',
    link: '/scholar/claims',
    icon: DownloadOffline,
  },
  {
    name: 'Scholar Details',
    link: '/scholar/details',
    icon: PersonIcon,
  },
];
