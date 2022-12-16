import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link, BoxProps } from '@mui/material';

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(({ disabledLink = false, sx }) => {
  const logo = <Box component="img" src="/logo.svg" sx={{ cursor: 'pointer', ...sx }} />;

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} to="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

export default Logo;
