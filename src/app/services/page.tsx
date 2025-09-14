'use client';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from '@mui/material';
import {
  Build,
  Emergency,
  Schedule,
  Settings,
  Home,
  Business,
  CheckCircle,
  Phone,
  ArrowForward,
} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    title: 'Garage Door Installation',
    description: 'Professional installation of new garage doors for residential and commercial properties.',
    icon: <Build fontSize="large" />,
    features: [
      'Residential and commercial installations',
      'Wide selection of door styles and materials',
      'Professional measurement and fitting',
      'Warranty on all installations',
      'Same-day installation available',
    ],
    pricing: 'Starting at $899',
    image: '/api/placeholder/400/300',
  },
  {
    title: 'Emergency Repair Services',
    description: '24/7 emergency repair services for urgent garage door issues.',
    icon: <Emergency fontSize="large" />,
    features: [
      '24/7 emergency availability',
      'Rapid response time',
      'Spring replacement and repair',
      'Cable and track repair',
      'Opener troubleshooting',
    ],
    pricing: 'Starting at $199',
    image: '/api/placeholder/400/300',
  },
  {
    title: 'Maintenance & Tune-ups',
    description: 'Regular maintenance services to keep your garage door running smoothly.',
    icon: <Schedule fontSize="large" />,
    features: [
      'Comprehensive safety inspection',
      'Lubrication of moving parts',
      'Spring tension adjustment',
      'Track alignment check',
      'Opener performance testing',
    ],
    pricing: 'Starting at $149',
    image: '/api/placeholder/400/300',
  },
  {
    title: 'Garage Door Opener Services',
    description: 'Installation, repair, and replacement of garage door openers.',
    icon: <Settings fontSize="large" />,
    features: [
      'Smart opener installation',
      'Belt and chain drive options',
      'Remote programming',
      'Safety feature setup',
      'Wi-Fi connectivity setup',
    ],
    pricing: 'Starting at $299',
    image: '/api/placeholder/400/300',
  },
];

const serviceAreas = [
  'Residential Properties',
  'Commercial Buildings',
  'Industrial Facilities',
  'Multi-unit Housing',
  'Storage Facilities',
  'Auto Dealerships',
];

export default function ServicesPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }}>
                Our Garage Door Services
              </Typography>
              <Typography variant="h5" component="p" sx={{ opacity: 0.9 }}>
                Comprehensive garage door solutions for all your needs. From installation to emergency repairs,
                we&apos;ve got you covered with professional service you can trust.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Emergency sx={{ fontSize: 100, opacity: 0.8 }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Emergency Service CTA */}
      <Box sx={{ backgroundColor: 'error.main', color: 'white', py: 8, mt: 2 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" component="h2" gutterBottom>
                Need Emergency Service?
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                We&apos;re available 24/7 for emergency garage door repairs.
                Don&apos;t let a broken garage door disrupt your day.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    backgroundColor: 'white',
                    color: 'error.main',
                    '&:hover': { backgroundColor: 'grey.100' }
                  }}
                  startIcon={<Phone />}
                  href="tel:18162883574"
                >
                  Call Now: (816) 288-3574
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} key={index}>
              <Card
                sx={{
                  mb: 4,
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-2px)' }
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={4}>
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={300}
                      style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                      }}
                      unoptimized
                    />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ color: 'primary.main', mr: 2 }}>
                          {service.icon}
                        </Box>
                        <Typography variant="h4" component="h2">
                          {service.title}
                        </Typography>
                      </Box>

                      <Typography variant="body1" paragraph color="text.secondary">
                        {service.description}
                      </Typography>

                      <List dense sx={{ mb: 2 }}>
                        {service.features.map((feature, featureIndex) => (
                          <ListItem key={featureIndex} sx={{ px: 0 }}>
                            <ListItemIcon>
                              <CheckCircle color="success" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>

                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                        <Chip
                          label={service.pricing}
                          color="primary"
                          variant="outlined"
                          size="medium"
                        />
                        <Button
                          variant="contained"
                          endIcon={<ArrowForward />}
                          href="tel:18162883574"
                        >
                          Get Quote
                        </Button>
                      </Box>
                    </CardContent>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Service Areas */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
            We Service All Property Types
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
            Professional garage door services for residential and commercial properties
          </Typography>

          <Grid container spacing={3}>
            {serviceAreas.map((area, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ textAlign: 'center', p: 3, height: '100%' }}>
                  <Box sx={{ color: 'primary.main', mb: 2 }}>
                    {index % 2 === 0 ? <Home fontSize="large" /> : <Business fontSize="large" />}
                  </Box>
                  <Typography variant="h6" component="h3">
                    {area}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact CTA */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h2" gutterBottom>
          Ready to Schedule Service?
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
          Contact us today for a free estimate on any of our garage door services
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            startIcon={<Phone />}
            href="tel:18162883574"
          >
            Call (816) 288-3574
          </Button>
          <Link href="/contact" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForward />}
            >
              Get Free Quote Online
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
