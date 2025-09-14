'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@mui/material';
import {
  Close,
  LocationOn,
  CalendarToday,
  Phone,
  ArrowForward,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

interface PastWorkItem {
  id: number;
  title: string;
  description: string;
  category: 'Installation' | 'Repair' | 'Replacement' | 'Maintenance';
  location: string;
  date: string;
  image: string;
  beforeImage?: string;
  details: string[];
}

const pastWorkData: PastWorkItem[] = [
  {
    id: 1,
    title: 'Modern Steel Garage Door Installation',
    description: 'Complete installation of insulated steel garage door with smart opener system.',
    category: 'Installation',
    location: 'Kansas City, MO',
    date: '2024-02-15',
    image: '/api/placeholder/600/400',
    details: [
      'Insulated steel construction for energy efficiency',
      'Smart garage door opener with WiFi connectivity',
      'Professional installation with warranty',
      'Improved home security and curb appeal',
    ],
  },
  {
    id: 2,
    title: 'Emergency Spring Replacement',
    description: '24-hour emergency service for broken garage door springs.',
    category: 'Repair',
    location: 'Overland Park, KS',
    date: '2024-02-10',
    image: '/api/placeholder/600/400',
    beforeImage: '/api/placeholder/600/400',
    details: [
      'Same-day emergency service',
      'High-quality torsion springs installed',
      'Complete safety inspection performed',
      'Garage door restored to full functionality',
    ],
  },
  {
    id: 3,
    title: 'Commercial Overhead Door Installation',
    description: 'Large commercial overhead door installation for local business.',
    category: 'Installation',
    location: 'Independence, MO',
    date: '2024-02-05',
    image: '/api/placeholder/600/400',
    details: [
      'Heavy-duty commercial grade door',
      'Insulated panels for temperature control',
      'Industrial-strength opener system',
      'Minimal business disruption during installation',
    ],
  },
  {
    id: 4,
    title: 'Wooden Garage Door Restoration',
    description: 'Complete restoration and modernization of classic wooden garage doors.',
    category: 'Replacement',
    location: 'Lee\'s Summit, MO',
    date: '2024-01-28',
    image: '/api/placeholder/600/400',
    beforeImage: '/api/placeholder/600/400',
    details: [
      'Preserved classic wooden appearance',
      'Modern insulation and hardware',
      'Weather-resistant finish applied',
      'Enhanced security features added',
    ],
  },
  {
    id: 5,
    title: 'Garage Door Opener Upgrade',
    description: 'Smart garage door opener installation with smartphone connectivity.',
    category: 'Installation',
    location: 'Blue Springs, MO',
    date: '2024-01-20',
    image: '/api/placeholder/600/400',
    details: [
      'Belt-drive system for quiet operation',
      'Smartphone app integration',
      'Battery backup for power outages',
      'Enhanced security features',
    ],
  },
  {
    id: 6,
    title: 'Preventive Maintenance Service',
    description: 'Comprehensive maintenance and tune-up service for residential garage door.',
    category: 'Maintenance',
    location: 'Raytown, MO',
    date: '2024-01-15',
    image: '/api/placeholder/600/400',
    details: [
      'Complete lubrication of moving parts',
      'Spring tension adjustment',
      'Safety feature inspection',
      'Track alignment and cleaning',
    ],
  },
];

const categories = ['All', 'Installation', 'Repair', 'Replacement', 'Maintenance'];

export default function PastWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<PastWorkItem | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const filteredWork = selectedCategory === 'All' 
    ? pastWorkData 
    : pastWorkData.filter(item => item.category === selectedCategory);

  const handleItemClick = (item: PastWorkItem) => {
    setSelectedItem(item);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedItem(null);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Installation': return 'primary';
      case 'Repair': return 'error';
      case 'Replacement': return 'warning';
      case 'Maintenance': return 'success';
      default: return 'default';
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
            Our Past Work
          </Typography>
          <Typography variant="h5" component="p" textAlign="center" sx={{ opacity: 0.9 }}>
            See examples of our professional garage door installations, repairs, and services
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Category Filter */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
            Browse Our Work
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1, mt: 3 }}>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'contained' : 'outlined'}
                onClick={() => setSelectedCategory(category)}
                sx={{ minWidth: 120 }}
              >
                {category}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Work Gallery */}
        <Grid container spacing={4}>
          {filteredWork.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card 
                sx={{ 
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': { 
                    transform: 'translateY(-4px)',
                    boxShadow: 4,
                  }
                }}
                onClick={() => handleItemClick(item)}
              >
                <CardMedia>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    style={{ 
                      width: '100%', 
                      height: '250px', 
                      objectFit: 'cover',
                    }}
                    unoptimized
                  />
                </CardMedia>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Typography variant="h6" component="h3" sx={{ flexGrow: 1, pr: 1 }}>
                      {item.title}
                    </Typography>
                    <Chip 
                      label={item.category} 
                      color={getCategoryColor(item.category) as 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'}
                      size="small"
                    />
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {item.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn fontSize="small" color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        {item.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday fontSize="small" color="primary" />
                      <Typography variant="body2" color="text.secondary">
                        {new Date(item.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {filteredWork.length === 0 && (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h6" color="text.secondary">
              No work found in this category.
            </Typography>
          </Box>
        )}
      </Container>

      {/* Stats Section */}
      <Box sx={{ backgroundColor: 'grey.50', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Our Track Record
          </Typography>
          
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary.main" gutterBottom>
                  500+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Projects Completed
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary.main" gutterBottom>
                  15+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Years Experience
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary.main" gutterBottom>
                  98%
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Customer Satisfaction
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h2" color="primary.main" gutterBottom>
                  24/7
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Emergency Service
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
              Ready for Your Project?
            </Typography>
            <Typography variant="h6" paragraph sx={{ opacity: 0.9, mb: 4 }}>
              Let us bring the same quality and professionalism to your garage door project
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

      {/* Detail Dialog */}
      <Dialog 
        open={dialogOpen} 
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        {selectedItem && (
          <>
            <DialogTitle>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5">
                  {selectedItem.title}
                </Typography>
                <IconButton onClick={handleCloseDialog}>
                  <Close />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    width={500}
                    height={300}
                    style={{ 
                      width: '100%', 
                      height: '300px', 
                      objectFit: 'cover',
                      borderRadius: '8px',
                    }}
                    unoptimized
                  />
                  {selectedItem.beforeImage && (
                    <Box sx={{ mt: 2 }}>
                      <Typography variant="h6" gutterBottom>Before</Typography>
                      <Image
                        src={selectedItem.beforeImage}
                        alt={`${selectedItem.title} - Before`}
                        width={500}
                        height={200}
                        style={{ 
                          width: '100%', 
                          height: '200px', 
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                        unoptimized
                      />
                    </Box>
                  )}
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 2 }}>
                    <Chip 
                      label={selectedItem.category} 
                      color={getCategoryColor(selectedItem.category) as 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'}
                      sx={{ mb: 2 }}
                    />
                  </Box>
                  
                  <Typography variant="body1" paragraph>
                    {selectedItem.description}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <LocationOn fontSize="small" color="primary" />
                      <Typography variant="body2">
                        {selectedItem.location}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday fontSize="small" color="primary" />
                      <Typography variant="body2">
                        {new Date(selectedItem.date).toLocaleDateString()}
                      </Typography>
                    </Box>
                  </Box>
                  
                  <Typography variant="h6" gutterBottom>
                    Project Details:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {selectedItem.details.map((detail, index) => (
                      <Typography component="li" key={index} variant="body2" sx={{ mb: 1 }}>
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>
    </Box>
  );
}
