// @mui
import { alpha, styled } from '@mui/material/styles';
import { Popover, ListItemButton, ListItemIcon } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// config
import { ICON } from '../../../config-global';
//
import { NavItemProps } from '../types';

// ----------------------------------------------------------------------

type StyledItemProps = Omit<NavItemProps, 'item'>;

export const StyledItem = styled(ListItemButton, {
  shouldForwardProp: (prop) => prop !== 'active' && prop !== 'open',
})<StyledItemProps>(({ active, disabled, open, theme }) => {
  const isLight = theme.palette.mode === 'light';

  const activeStyle = {
    color: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    ...(!isLight && {
      color: theme.palette.primary.light,
    }),
  };

  const hoverStyle = {
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.action.hover,
  };

  return {
    flexDirection: 'column',
    textTransform: 'capitalize',
    padding: theme.spacing(1, 0, 0.5, 0),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    '&:hover': hoverStyle,

    // Active item
    ...(active && {
      ...activeStyle,
      '&:hover': {
        ...activeStyle,
      },
    }),
    // Open
    ...(open && !active && hoverStyle),
    // Disabled
    ...(disabled && {
      '&.Mui-disabled': {
        opacity: 0.64,
      },
    }),
  };
});

// ----------------------------------------------------------------------

export const StyledIcon = styled(ListItemIcon)({
  marginRight: 0,
  marginBottom: 4,
  width: ICON.NAV_ITEM_MINI,
  height: ICON.NAV_ITEM_MINI,
});

// ----------------------------------------------------------------------

export const StyledPopover = styled(Popover)(({ theme }) => ({
  pointerEvents: 'none',
  '& .MuiPopover-paper': {
    width: 160,
    pointerEvents: 'auto',
    padding: theme.spacing(1),
    marginTop: theme.spacing(0.5),
    boxShadow: theme.customShadows.dropdown,
    borderRadius: Number(theme.shape.borderRadius) * 1.5,
    ...bgBlur({ color: theme.palette.background.default }),
  },
}));
