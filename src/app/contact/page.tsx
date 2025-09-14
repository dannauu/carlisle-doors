'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  MenuItem,
  Alert,
  CircularProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  Schedule,
  Send,
  CheckCircle,
} from '@mui/icons-material';
import { sendContactEmail, ContactFormData } from '@/lib/emailjs';

const services = [
  'Garage Door Installation',
  'Emergency Repair',
  'Maintenance & Tune-up',
  'Opener Installation/Repair',
  'Spring Replacement',
  'Other',
];

const businessHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
  { day: 'Sunday', hours: 'Emergency Service Only' },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const emailSent = await sendContactEmail(formData);
      
      if (emailSent) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
        });
      } else {
        setError('Failed to send message. Please try again or call us directly.');
      }
    } catch {
      setError('An error occurred. Please try again or call us directly.');
    } finally {
      setLoading(false);
    }
  };

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
          <Typography variant="h1" component="h1" textAlign="center" gutterBottom sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }}>
            Contact Kansas City Doors
          </Typography>
          <Typography variant="h5" component="p" textAlign="center" sx={{ opacity: 0.9 }}>
            Get in touch for a free estimate or emergency service
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Get Your Free Estimate
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  Fill out the form below and we&apos;ll get back to you within 24 hours with a free estimate.
                </Typography>

                {success && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you! Your message has been sent successfully. We&apos;ll contact you within 24 hours.
                  </Alert>
                )}

                {error && (
                  <Alert severity="error" sx={{ mb: 3 }}>
                    {error}
                  </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        select
                        label="Service Needed"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        {services.map((service) => (
                          <MenuItem key={service} value={service}>
                            {service}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        multiline
                        rows={4}
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Please describe your garage door needs or any specific issues you're experiencing..."
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        disabled={loading}
                        startIcon={loading ? <CircularProgress size={20} /> : <Send />}
                        sx={{ minWidth: 200 }}
                      >
                        {loading ? 'Sending...' : 'Send Message'}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <Grid container spacing={4}>
              {/* Contact Details */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      Contact Information
                    </Typography>
                    <List>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Phone color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Phone"
                          secondary="(816) 288-3574"
                        />
                      </ListItem>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemIcon>
                          <Email color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Email"
                          secondary="info@kansascitydoors.com"
                        />
                      </ListItem>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemIcon>
                          <LocationOn color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary="Address"
                          secondary="123 Main Street, Kansas City, MO 64101"
                        />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>

              {/* Business Hours */}
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      Business Hours
                    </Typography>
                    <List>
                      {businessHours.map((schedule, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon>
                            <Schedule color="primary" />
                          </ListItemIcon>
                          <ListItemText 
                            primary={schedule.day}
                            secondary={schedule.hours}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </CardContent>
                </Card>
              </Grid>

              {/* Emergency Service */}
              <Grid item xs={12}>
                <Card sx={{ backgroundColor: 'error.main', color: 'white' }}>
                  <CardContent>
                    <Typography variant="h5" component="h3" gutterBottom>
                      Emergency Service
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Need immediate garage door repair? We offer 24/7 emergency service for urgent situations.
                    </Typography>
                    <Button
                      variant="contained"
                      fullWidth
                      sx={{ 
                        backgroundColor: 'white', 
                        color: 'error.main',
                        '&:hover': { backgroundColor: 'grey.100' }
                      }}
                      startIcon={<Phone />}
                      href="tel:18162883574"
                    >
                      Call Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Service Areas */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Service Areas
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" paragraph sx={{ mb: 6 }}>
            We proudly serve the following areas in Jackson County, MO
          </Typography>
          
          <Grid container spacing={2} justifyContent="center">
            {['Kansas City', 'Independence', 'Lee\'s Summit', 'Blue Springs', 'Raytown', 'Overland Park'].map((area) => (
              <Grid item key={area}>
                <Card sx={{ p: 2, textAlign: 'center', minWidth: 150 }}>
                  <Typography variant="h6">{area}</Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Typography variant="body1" color="text.secondary">
              Don&apos;t see your area listed? Call us to check if we service your location.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Why Choose Kansas City Doors?
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CheckCircle sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Licensed & Insured
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Fully licensed and insured for your protection and peace of mind.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CheckCircle sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                15+ Years Experience
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Over 15 years of professional garage door service in the Kansas City area.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <CheckCircle sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                24/7 Emergency Service
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Available around the clock for emergency garage door repairs.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
