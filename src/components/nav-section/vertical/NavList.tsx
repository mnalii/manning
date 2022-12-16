import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useActiveLink from '../../../hooks/useActiveLink';
//
import { NavListProps } from '../types';
import NavItem from './NavItem';

// ----------------------------------------------------------------------

type NavListRootProps = {
  data: NavListProps;
};

export default function NavList({ data }: NavListRootProps) {
  const { pathname } = useLocation();

  const { active } = useActiveLink(data.path);

  const [open, setOpen] = useState(active);

  useEffect(() => {
    if (!active) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return <NavItem item={data} open={open} active={active} onClick={handleToggle} />;
}
