import { List, Stack, Divider } from '@mui/material';

import { NavSectionProps } from '../types';
import { StyledSubheader } from './styles';
import NavList from './NavList';

// ----------------------------------------------------------------------

export default function NavSectionVertical({ data, sx, ...other }: NavSectionProps) {
  return (
    <Stack sx={sx} {...other}>
      {data.map((group) => {
        const key = group.subheader || group.items[0].title;

        return (
          <List key={key} sx={{ padding: '0 30px', marginBottom: '35px' }}>
            <Divider />
            {group.subheader && <StyledSubheader disableSticky>{group.subheader}</StyledSubheader>}

            {group.items.map((list) => (
              <NavList key={list.title + list.path} data={list} />
            ))}
          </List>
        );
      })}
    </Stack>
  );
}
