'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Facebook,
  Instagram,
  Twitter,
} from '@mui/icons-material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'primary.dark',
        color: 'white',
        py: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Carlisle Overhead Doors & Services
            </Typography>
            <Typography variant="body2" paragraph>
              Professional garage door installation, repair, and emergency services.
              Serving the Kansas City area with quality craftsmanship and reliable service.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton color="inherit" size="small">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" size="small">
                <Twitter />
              </IconButton>
            </Box>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="/services" color="inherit" underline="hover">
                Garage Door Installation
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Garage Door Repair
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Emergency Service
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Maintenance & Tune-ups
              </Link>
              <Link href="/services" color="inherit" underline="hover">
                Opener Installation
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone fontSize="small" />
                <Link href="tel:18162883574" color="inherit" underline="hover">
                  (816) 288-3574
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email fontSize="small" />
                <Link href="" color="inherit" underline="hover">
                  Tylers Email Goes Here
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="body2">
            © 2025 Carlisle Overhead Doors & Services. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/privacy" color="inherit" underline="hover" variant="body2">
              Privacy Policy
            </Link>
            <Link href="/terms" color="inherit" underline="hover" variant="body2">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
