// @mui
import { styled } from '@mui/material/styles';
import { ListItemIcon, ListSubheader, ListItemButton } from '@mui/material';
// config
import { NavItemProps } from '../types';

// ----------------------------------------------------------------------

type StyledItemProps = Omit<NavItemProps, 'item'> & {
  caption?: boolean;
  disabled?: boolean;
};

export const StyledItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'caption',
})<StyledItemProps>(({ active, theme }) => {
  const activeStyle = {
    color: '#1E67AF',
  };

  return {
    padding: 0,
    position: 'relative',
    marginBottom: '10px',
    color: '#323A46',
    height: 20,

    ...(active && {
      ...activeStyle,
    }),

    '&:hover': {
      ...activeStyle,
      backgroundColor: 'inherit',
    },
  };
});

// ----------------------------------------------------------------------

export const StyledIcon = styled(ListItemIcon)({
  display: 'flex',
  alignItems: 'center',
  marginRight: '12px',
  width: 30,
  height: 30,
});

// ----------------------------------------------------------------------

type StyledDotIconProps = {
  active?: boolean;
};

export const StyledDotIcon = styled('span', {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledDotIconProps>(({ active, theme }) => ({
  width: 4,
  height: 4,
  borderRadius: '50%',
  backgroundColor: theme.palette.text.disabled,
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shorter,
  }),
  ...(active && {
    transform: 'scale(2)',
    backgroundColor: theme.palette.primary.main,
  }),
}));

// ----------------------------------------------------------------------

export const StyledSubheader = styled(ListSubheader)(({ theme }) => ({
  ...theme.typography.overline,
  fontSize: 11,
  padding: 0,
  color: '#323A46',
  letterSpacing: '0.16em',
  marginTop: '30px',
  marginBottom: '12px',
}));
