import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ListItemText, Link } from '@mui/material';

import { NavItemProps } from '../types';
import { StyledItem, StyledIcon } from './styles';

const NavItem = forwardRef<HTMLDivElement, NavItemProps>(
  ({ item, open, active, isExternalLink, ...other }, ref) => {
    const { title, path, icon, disabled } = item;

    const renderContent = (
      <StyledItem ref={ref} open={open} active={active} disabled={disabled} {...other}>
        {icon && <StyledIcon>{icon}</StyledIcon>}

        <ListItemText
          primary={title}
          primaryTypographyProps={{
            noWrap: true,
            component: 'span',
            variant: active ? 'subtitle2' : 'body2',
          }}
        />
      </StyledItem>
    );

    return (
      <Link component={RouterLink} to={path} underline="none">
        {renderContent}
      </Link>
    );
  }
);

export default NavItem;
