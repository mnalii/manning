// @mui
import { Box, Typography, Avatar } from '@mui/material';

// ----------------------------------------------------------------------

export default function NavAccount() {
  return (
    <Box sx={{ padding: '0 30px', marginBottom: '30px' }}>
      <Box>
        <Avatar
          src="/user.png"
          alt="Radhika Dhawan Puri"
          sx={{ width: '67px', height: '67px', mb: '12px' }}
        />

        <Typography variant="h6" noWrap>
          Radhika Dhawan Puri
        </Typography>

        <Typography variant="subtitle2" noWrap sx={{ color: 'text.secondary' }}>
          Senior Client Service
        </Typography>
      </Box>
    </Box>
  );
}
