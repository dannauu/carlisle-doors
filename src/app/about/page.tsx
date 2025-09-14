'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from '@mui/material';
import {
  CheckCircle,
  Build,
  Security,
  Schedule,
  Phone,
  ArrowForward,
} from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Kansas',
    role: 'Owner & Master Technician',
    experience: '15+ years',
    image: '/api/placeholder/200/200',
    bio: 'Founded Kansas City Doors with a commitment to quality craftsmanship and customer satisfaction.',
  },
  {
    name: 'Mike Johnson',
    role: 'Lead Installation Specialist',
    experience: '12+ years',
    image: '/api/placeholder/200/200',
    bio: 'Expert in residential and commercial garage door installations with precision and care.',
  },
  {
    name: 'Sarah Davis',
    role: 'Customer Service Manager',
    experience: '8+ years',
    image: '/api/placeholder/200/200',
    bio: 'Ensures every customer receives exceptional service from first call to project completion.',
  },
];

const certifications = [
  'Licensed & Insured',
  'Better Business Bureau A+ Rating',
  'IDEA Certified Technicians',
  'Manufacturer Authorized Dealer',
  'Safety Training Certified',
  'Emergency Response Certified',
];

const values = [
  {
    title: 'Quality Craftsmanship',
    description: 'We use only the highest quality materials and proven installation techniques.',
    icon: <Build />,
  },
  {
    title: 'Reliable Service',
    description: 'Count on us for prompt, professional service when you need it most.',
    icon: <Schedule />,
  },
  {
    title: 'Safety First',
    description: 'Your safety is our priority in every installation and repair we perform.',
    icon: <Security />,
  },
];

export default function AboutPage() {
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
            <Grid item xs={12} md={6}>
              <Typography variant="h1" component="h1" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }}>
                About Kansas City Doors
              </Typography>
              <Typography variant="h5" component="p" sx={{ opacity: 0.9, mb: 4 }}>
                Serving the Kansas City community for over 15 years with professional garage door 
                installation, repair, and emergency services.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Chip label="15+ Years Experience" sx={{ backgroundColor: 'white', color: 'primary.main' }} />
                <Chip label="Licensed & Insured" sx={{ backgroundColor: 'white', color: 'primary.main' }} />
                <Chip label="24/7 Emergency Service" sx={{ backgroundColor: 'white', color: 'primary.main' }} />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ textAlign: 'center' }}>
                <Image
                  src="/api/placeholder/500/400"
                  alt="Kansas City Doors team"
                  width={500}
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

      {/* Our Story */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" gutterBottom>
              Our Story
            </Typography>
            <Typography variant="body1" paragraph>
              Founded in 2009, Kansas City Doors began as a small family business with a simple mission: 
              to provide the Kansas City community with reliable, professional garage door services at fair prices.
            </Typography>
            <Typography variant="body1" paragraph>
              Over the years, we&apos;ve grown from a one-person operation to a full-service garage door company, 
              but we&apos;ve never lost sight of our core values: quality craftsmanship, honest pricing, 
              and exceptional customer service.
            </Typography>
            <Typography variant="body1" paragraph>
              Today, we&apos;re proud to be the trusted garage door experts for hundreds of satisfied customers 
              throughout the Kansas City area. Whether you need a simple repair or a complete installation, 
              we&apos;re here to help.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/api/placeholder/600/400"
              alt="Garage door installation"
              width={600}
              height={400}
              style={{ 
                width: '100%', 
                height: 'auto', 
                borderRadius: '12px',
              }}
              unoptimized
            />
          </Grid>
        </Grid>
      </Container>

      {/* Our Values */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
            Our Values
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
            The principles that guide everything we do
          </Typography>
          
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ textAlign: 'center', p: 4, height: '100%' }}>
                  <Box sx={{ color: 'primary.main', mb: 3 }}>
                    {React.cloneElement(value.icon, { fontSize: 'large' })}
                  </Box>
                  <Typography variant="h5" component="h3" gutterBottom>
                    {value.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {value.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Meet Our Team */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          Meet Our Team
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
          Experienced professionals dedicated to your satisfaction
        </Typography>
        
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ textAlign: 'center', p: 4 }}>
                <Avatar
                  src={member.image}
                  alt={member.name}
                  sx={{ width: 120, height: 120, mx: 'auto', mb: 3 }}
                />
                <Typography variant="h5" component="h3" gutterBottom>
                  {member.name}
                </Typography>
                <Typography variant="h6" color="primary.main" gutterBottom>
                  {member.role}
                </Typography>
                <Chip 
                  label={member.experience} 
                  color="primary" 
                  variant="outlined" 
                  sx={{ mb: 2 }}
                />
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Certifications */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
            Certifications & Credentials
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
            Fully licensed, insured, and certified for your peace of mind
          </Typography>
          
          <Grid container spacing={3}>
            {certifications.map((cert, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ p: 3, textAlign: 'center' }}>
                  <CheckCircle color="success" sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h6" component="h3">
                    {cert}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Service Area */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h2" gutterBottom>
              Service Area
            </Typography>
            <Typography variant="body1" paragraph>
              We proudly serve Kansas City and the surrounding communities in Jackson County, MO. 
              Our service area includes:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Kansas City" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Mechanicsburg" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Camp Hill" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="Shippensburg" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckCircle color="primary" /></ListItemIcon>
                <ListItemText primary="And surrounding areas" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: 'center', p: 4, backgroundColor: 'grey.100', borderRadius: 2 }}>
              <Typography variant="h4" gutterBottom>
                Service Radius
              </Typography>
              <Typography variant="h2" color="primary.main" gutterBottom>
                25 Miles
              </Typography>
              <Typography variant="body1" color="text.secondary">
                From Kansas City, MO
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Experience the Kansas City Doors Difference
            </Typography>
            <Typography variant="h6" paragraph sx={{ opacity: 0.9, mb: 4 }}>
              Join hundreds of satisfied customers who trust us with their garage door needs
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
                  endIcon={<ArrowForward />}
                >
                  Get Free Estimate
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
