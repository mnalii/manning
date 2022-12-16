import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Typography, Card, Box, Grid, Button, IconButton } from '@mui/material';

import Iconify from 'src/components/iconify';

const API = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10 ';

export default function DashboardPage() {
  const [coins, setCoins] = useState<any>([]);

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
      });
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h3" component="h1" paragraph mt="25px" mb="40px">
          Hi Radhika, welcome back!
        </Typography>

        <Typography variant="h4">Your client list</Typography>

        <Typography variant="subtitle2" mb="25px">
          You currently servicing 3 clients
        </Typography>

        <Grid container spacing={2} marginBottom="56px">
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 2, boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.05)', height: '100%' }}>
              <Box sx={{ textAlign: 'right' }}>
                <IconButton aria-label="settings" sx={{ p: 0 }}>
                  <Iconify icon="mdi:dots-horizontal" />
                </IconButton>
              </Box>

              <Box component="img" src="/dbs.png" marginBottom={2} />

              <Typography variant="h6" marginBottom="5px">
                DBS Bank
              </Typography>

              <Typography variant="body1">
                DBS Bank Limited is a Singaporean multinational banking and financial services
                corporation headquartered at the Marina Bay Financial Centre in the Marina Bay
                district of Singapore.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 2, pt: 1, boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.05)' }}>
              <Box sx={{ textAlign: 'right', transform: 'translateY(10px)' }}>
                <IconButton aria-label="settings" sx={{ p: 0 }}>
                  <Iconify icon="mdi:dots-horizontal" />
                </IconButton>
              </Box>

              <Box component="img" src="/lozenge.png" marginBottom="10px" />

              <Typography variant="h6" marginBottom="5px">
                Proudfoot
              </Typography>

              <Typography variant="body1">
                Proudfoot engages teams and leadership, at all levels, to create innovative
                solutions to operational constraints and solve the people challenge associated with
                making sure that change takes place.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ p: 2, boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.05)', height: '100%' }}>
              <Box sx={{ textAlign: 'right' }}>
                <IconButton aria-label="settings" sx={{ p: 0 }}>
                  <Iconify icon="mdi:dots-horizontal" />
                </IconButton>
              </Box>

              <Box component="img" src="/rmi.png" marginBottom="22px" />

              <Typography variant="h6" marginBottom="5px">
                DBS Bank
              </Typography>

              <Typography variant="body1">
                RMI is a trusted global verification partner for Asia-Pacific organisations,
                offering a highly personalised and comprehensive background screening service.
              </Typography>
            </Card>
          </Grid>
        </Grid>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: {
              xs: 'start',
              md: 'space-between',
            },
            marginBottom: '24px',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
        >
          <Box sx={{ marginBottom: { xs: 2, sm: 0 } }}>
            <Typography variant="h4">Recent Approvals</Typography>

            <Typography variant="subtitle2">
              You can find the recent on-going approvals here
            </Typography>
          </Box>
          <Button
            variant="contained"
            startIcon={<Iconify icon="ic:baseline-plus" />}
            sx={{ borderRadius: '1500px', textTransform: 'none' }}
          >
            Create new approval
          </Button>
        </Box>

        <Card
          sx={{
            padding: '13px 15px',
            borderRadius: '5px',
            boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.05)',
            marginBottom: '13px',
          }}
        >
          <Grid container>
            <Grid item xs={2}>
              <Typography variant="subtitle2">Image</Typography>
            </Grid>
            <Grid item xs={2} md={4}>
              <Typography variant="subtitle2">Name</Typography>
            </Grid>
            <Grid item xs={4} md={2}>
              <Typography variant="subtitle2">Current price</Typography>
            </Grid>
            <Grid item xs={2} md={4}>
              <Typography variant="subtitle2">Market cap</Typography>
            </Grid>
          </Grid>
        </Card>

        {coins.map((c: any) => (
          <Card
            key={c.id}
            sx={{
              padding: '13px 15px',
              borderRadius: '5px',
              boxShadow: '2px 2px 4px 0 rgba(0, 0, 0, 0.05)',
              marginBottom: '13px',
            }}
          >
            <Grid container alignItems="center">
              <Grid item xs={2}>
                <Box component="img" src={c.image} sx={{ width: '47px', height: '47px' }} />
              </Grid>
              <Grid item xs={2} md={4}>
                <Typography variant="subtitle2">{c.name}</Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <Typography variant="subtitle2">{c.current_price}</Typography>
              </Grid>
              <Grid item xs={2} md={4}>
                <Typography variant="subtitle2">{c.market_cap}</Typography>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Container>
    </>
  );
}
