import { useState, memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Input from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import { Box, Slide, ClickAwayListener, Typography } from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// components
import Iconify from '../../../components/iconify';
import { IconButtonAnimate } from '../../../components/animate';

const APPBAR_MOBILE = 64;

const StyledSearchbar = styled('div')(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  top: 0,
  left: 0,
  zIndex: 99,
  width: '100%',
  display: 'flex',
  position: 'absolute',
  alignItems: 'center',
  height: APPBAR_MOBILE,
  padding: theme.spacing(0, 3),
  boxShadow: theme.customShadows.z8,
  [theme.breakpoints.up('md')]: {
    height: 65,
    padding: theme.spacing(0, 5),
  },
}));

function Searchbar() {
  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <div>
        {!open && (
          <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={handleOpen}>
            <IconButtonAnimate>
              <Iconify icon="eva:search-fill" />
            </IconButtonAnimate>
            <Typography
              sx={{ fontSize: '14px', color: '#A1A1A1', fontWeight: '400px', marginLeft: '10px' }}
            >
              Search anything here...
            </Typography>
          </Box>
        )}

        <Slide direction="down" in={open} mountOnEnter unmountOnExit>
          <StyledSearchbar>
            <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={handleOpen}>
              <IconButtonAnimate>
                <Iconify icon="eva:search-fill" />
              </IconButtonAnimate>
              <Input placeholder="Search" />
            </Box>
          </StyledSearchbar>
        </Slide>
      </div>
    </ClickAwayListener>
  );
}

export default memo(Searchbar);
