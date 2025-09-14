'use client';

import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  Build,
  Emergency,
  Schedule,
  Star,
  Phone,
  ArrowForward,
} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Installation',
    description: 'Professional garage door installation with quality materials and expert craftsmanship.',
    icon: <Build fontSize="large" />,
    color: 'primary',
  },
  {
    title: 'Emergency Repair',
    description: '24/7 emergency repair services for urgent garage door issues.',
    icon: <Emergency fontSize="large" />,
    color: 'error',
  },
  {
    title: 'Maintenance',
    description: 'Regular maintenance services to keep your garage door running smoothly.',
    icon: <Schedule fontSize="large" />,
    color: 'success',
  },
];

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                Professional Garage Door Services
              </Typography>
              <Typography variant="h5" component="p" paragraph sx={{ opacity: 0.9, mb: 4 }}>
                Expert installation, repair, and emergency services in and around Kansas City, Missouri.
                Quality craftsmanship you can trust.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: 'primary.main',
                    '&:hover': { backgroundColor: 'grey.100' }
                  }}
                  startIcon={<Phone />}
                  href="tel:18162883574"
                >
                  Call Now: (816) 288-3574
                </Button>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    size="large"
                    sx={{
                      borderColor: 'white',
                      color: 'white',
                      '&:hover': { borderColor: 'grey.100', backgroundColor: 'rgba(255,255,255,0.1)' }
                    }}
                    endIcon={<ArrowForward />}
                  >
                    Get Free Quote
                  </Button>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Image
                  src="/api/placeholder/600/400"
                  alt="Professional garage door installation"
                  width={600}
                  height={400}
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                  }}
                  unoptimized
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Comprehensive garage door solutions for residential and commercial properties
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-4px)' }
                }}
              >
                <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                  <Box sx={{ color: `${service.color}.main`, mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Link href="/services" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" endIcon={<ArrowForward />}>
              View All Services
            </Button>
          </Link>
        </Box>
      </Container>

      {/* Why Choose Us Section */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
            Why Choose Carlisle Overhead Doors & Services?
          </Typography>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Star sx={{ fontSize: 60, color: 'gold', mb: 2 }} />
                <Typography variant="h4" component="h3" gutterBottom>
                  15+ Years Experience
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Over 15 years of professional garage door service in the Kansas City area.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Emergency sx={{ fontSize: 60, color: 'red', mb: 2 }} />
                <Typography variant="h4" component="h3" gutterBottom>
                  24/7 Emergency Service
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Available around the clock for emergency garage door repairs.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Build sx={{ fontSize: 60, color: 'black', mb: 2 }} />
                <Typography variant="h4" component="h3" gutterBottom>
                  Licensed & Insured
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Fully licensed and insured for your protection and peace of mind.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Ready to Get Started?
            </Typography>
            <Typography variant="h6" paragraph sx={{ opacity: 0.9, mb: 4 }}>
              Contact us today for a free estimate on your garage door project
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': { backgroundColor: 'grey.100' }
                }}
                startIcon={<Phone />}
                href="tel:18162883574"
              >
                Call (816) 288-3574
              </Button>
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'white',
                    color: 'white',
                    '&:hover': { borderColor: 'grey.100', backgroundColor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  Contact Us Online
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
