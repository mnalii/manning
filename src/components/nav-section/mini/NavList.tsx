import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
// hooks
import useActiveLink from '../../../hooks/useActiveLink';
//
import { NavListProps } from '../types';
import NavItem from './NavItem';

// ----------------------------------------------------------------------

type NavListRootProps = {
  data: NavListProps;
  hasChild: boolean;
};

export default function NavList({ data, hasChild }: NavListRootProps) {
  const navRef = useRef(null);

  const { pathname } = useLocation();

  const { active } = useActiveLink(data.path);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const appBarEl = Array.from(document.querySelectorAll('.MuiAppBar-root')) as Array<HTMLElement>;

    // Reset styles when hover
    const styles = () => {
      document.body.style.overflow = '';
      document.body.style.padding = '';
      // Apply for Window
      appBarEl.forEach((elem) => {
        elem.style.padding = '';
      });
    };

    if (open) {
      styles();
    } else {
      styles();
    }
  }, [open]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <NavItem
      ref={navRef}
      item={data}
      open={open}
      active={active}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
    />
  );
}
