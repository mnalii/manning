import { Link as RouterLink } from 'react-router-dom';
import { Link, ListItemText, Typography } from '@mui/material';
import { NavItemProps } from '../types';
import { StyledItem } from './styles';

// ----------------------------------------------------------------------

export default function NavItem({ item, open, active, ...other }: NavItemProps) {
  const { title, path, icon, caption } = item;

  const renderContent = (
    <StyledItem active={active} caption={!!caption} {...other}>
      {icon}

      <ListItemText sx={{ ml: '12px' }} primary={<Typography variant="h6">{title}</Typography>} />
    </StyledItem>
  );

  return (
    <Link component={RouterLink} to={path} underline="none">
      {renderContent}
    </Link>
  );
}
