import { useLocation, matchPath } from 'react-router-dom';

// ----------------------------------------------------------------------

type ReturnType = {
  active: boolean;
};

export default function useActiveLink(path: string, deep = true): ReturnType {
  const { pathname } = useLocation();

  const active = path ? !!matchPath({ path, end: true }, pathname) : false;

  return {
    active,
  };
}
