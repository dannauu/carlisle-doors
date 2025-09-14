'use client';

import React, { useState, useRef, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stepper,
  Step,
  StepLabel,
  Alert,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Chip,
  Tabs,
  Tab,
} from '@mui/material';
import {
  CloudUpload,
  Visibility,
  Download,
  Close,
  Phone,
  ArrowForward,
  ArrowBack,
} from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

interface DoorStyle {
  id: string;
  name: string;
  category: 'Traditional' | 'Modern' | 'Carriage' | 'Glass';
  description: string;
  image: string;
  color: string;
}

interface DoorDiv {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const doorStyles: DoorStyle[] = [
  {
    id: 'traditional-white',
    name: 'Traditional White',
    category: 'Traditional',
    description: 'Classic white recessed panel design',
    image: '/api/door-styles/traditional?panelColor=%23FFFFFF&frameColor=%23ffffff',
    color: 'white',
  },
  {
    id: 'traditional-cream',
    name: 'Traditional Cream',
    category: 'Traditional',
    description: 'Warm cream recessed panel design',
    image: '/api/door-styles/traditional?panelColor=%23F5F5DC&frameColor=%23F5F5DC',
    color: 'cream',
  },
  {
    id: 'traditional-gray',
    name: 'Traditional Gray',
    category: 'Traditional',
    description: 'Modern gray recessed panel design',
    image: '/api/door-styles/traditional?panelColor=%23D3D3D3&frameColor=%23D3D3D3',
    color: 'gray',
  },
  {
    id: 'traditional-tan',
    name: 'Traditional Tan',
    category: 'Traditional',
    description: 'Elegant tan recessed panel design',
    image: '/api/door-styles/traditional?panelColor=%23D2B48C&frameColor=%23D2B48C',
    color: 'tan',
  },
  {
    id: 'modern-flush',
    name: 'Modern Flush',
    category: 'Modern',
    description: 'Sleek flush design for contemporary homes',
    image: '/api/door-styles/modern',
    color: 'gray',
  },
  {
    id: 'modern-aluminum',
    name: 'Modern Aluminum & Glass',
    category: 'Modern',
    description: 'Contemporary aluminum frame with glass panels',
    image: '/api/door-styles/modern',
    color: 'black',
  },
  {
    id: 'carriage-overlay',
    name: 'Carriage House Overlay',
    category: 'Carriage',
    description: 'Traditional carriage house style with decorative hardware',
    image: '/api/door-styles/carriage',
    color: 'brown',
  },
  {
    id: 'carriage-stamped',
    name: 'Carriage House Stamped',
    category: 'Carriage',
    description: 'Stamped steel design mimicking wood carriage doors',
    image: '/api/door-styles/carriage',
    color: 'wood',
  },
];

const steps = ['Upload Photo', 'Select Style & Preview'];

// Draggable Door Div Component
function DraggableDoorDiv({ 
  doorDiv, 
  index, 
  selectedStyle, 
  activeDivIndex, 
  onDrag,
  onResize 
}: { 
  doorDiv: DoorDiv; 
  index: number; 
  selectedStyle: DoorStyle | null; 
  activeDivIndex: number | null;
  onDrag: (index: number, e: React.MouseEvent) => void;
  onResize: (e: React.MouseEvent, index: number, handle: string) => void;
}) {
  // Debug logging
  if (selectedStyle) {
    console.log(`Door ${index + 1} background:`, selectedStyle.image);
  }
  
  return (
    <Box
      sx={{
        position: 'absolute',
        left: `${doorDiv.x * 100}%`,
        top: `${doorDiv.y * 100}%`,
        width: `${doorDiv.width * 100}%`,
        height: `${doorDiv.height * 100}%`,
        border: selectedStyle 
          ? 'none' 
          : `2px solid ${activeDivIndex === index ? '#ff6b35' : '#1976d2'}`,
        backgroundColor: selectedStyle 
          ? 'transparent' 
          : 'rgba(25, 118, 210, 0.1)',
        backgroundImage: selectedStyle 
          ? `url(${selectedStyle.image})` 
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        cursor: 'grab',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        '&:hover': {
          border: selectedStyle 
            ? '2px solid #ff6b35' 
            : '2px solid #ff6b35',
          transform: 'scale(1.02)',
          transition: 'all 0.2s ease',
          '& .resize-handle': {
            opacity: 1,
          },
          '& .door-label': {
            opacity: 1,
          }
        }
      }}
      style={{
        backgroundImage: selectedStyle 
          ? `url(${selectedStyle.image})` 
          : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseDown={(e) => onDrag(index, e)}
    >
      {/* Resize Handles - Hidden by default, shown on hover */}
      <Box
        className="resize-handle"
        sx={{
          position: 'absolute',
          top: -4,
          left: -4,
          width: 8,
          height: 8,
          backgroundColor: activeDivIndex === index ? '#ff6b35' : '#1976d2',
          border: '2px solid white',
          borderRadius: '50%',
          cursor: 'nw-resize',
          opacity: 0,
          transition: 'opacity 0.2s ease',
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          onResize(e, index, 'nw');
        }}
      />
      <Box
        className="resize-handle"
        sx={{
          position: 'absolute',
          top: -4,
          right: -4,
          width: 8,
          height: 8,
          backgroundColor: activeDivIndex === index ? '#ff6b35' : '#1976d2',
          border: '2px solid white',
          borderRadius: '50%',
          cursor: 'ne-resize',
          opacity: 0,
          transition: 'opacity 0.2s ease',
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          onResize(e, index, 'ne');
        }}
      />
      <Box
        className="resize-handle"
        sx={{
          position: 'absolute',
          bottom: -4,
          left: -4,
          width: 8,
          height: 8,
          backgroundColor: activeDivIndex === index ? '#ff6b35' : '#1976d2',
          border: '2px solid white',
          borderRadius: '50%',
          cursor: 'sw-resize',
          opacity: 0,
          transition: 'opacity 0.2s ease',
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          onResize(e, index, 'sw');
        }}
      />
      <Box
        className="resize-handle"
        sx={{
          position: 'absolute',
          bottom: -4,
          right: -4,
          width: 8,
          height: 8,
          backgroundColor: activeDivIndex === index ? '#ff6b35' : '#1976d2',
          border: '2px solid white',
          borderRadius: '50%',
          cursor: 'se-resize',
          opacity: 0,
          transition: 'opacity 0.2s ease',
        }}
        onMouseDown={(e) => {
          e.stopPropagation();
          onResize(e, index, 'se');
        }}
      />

      {/* Center Label - Hidden by default, shown on hover */}
      <Box
        className="door-label"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: activeDivIndex === index 
            ? 'rgba(255, 107, 53, 0.9)' 
            : 'rgba(25, 118, 210, 0.9)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 'bold',
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        Door {index + 1}
      </Box>
    </Box>
  );
}

export default function DoorVisualizerPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<DoorStyle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Traditional');
  const [processing, setProcessing] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [error, setError] = useState<string>('');
  const [detectedArea, setDetectedArea] = useState<{ x: number, y: number, width: number, height: number } | null>(null);
  const [manualAdjustment, setManualAdjustment] = useState(false);
  const [doorDivs, setDoorDivs] = useState<DoorDiv[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number, y: number } | null>(null);
  const [resizeHandle, setResizeHandle] = useState<string | null>(null);
  const [activeDivIndex, setActiveDivIndex] = useState<number | null>(null);
  const [doorCount, setDoorCount] = useState<number>(2);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const categories = ['Traditional', 'Modern', 'Carriage', 'Glass'];

  // Handle drag start for door divs
  const handleDragStart = (index: number, e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setActiveDivIndex(index);
    
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const parentRect = (e.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
    
    const offsetX = (e.clientX - rect.left) / parentRect.width;
    const offsetY = (e.clientY - rect.top) / parentRect.height;
    
    setDragStart({ x: offsetX, y: offsetY });
  };

  // Generate door divs based on door count
  const generateDoorDivs = (count: number) => {
    const divs: DoorDiv[] = [];
    const totalWidth = 0.6; // Total width for all doors
    const doorWidth = totalWidth / count; // Width per door
    const startX = 0.5 - totalWidth / 2; // Center the total width
    
    for (let i = 0; i < count; i++) {
      divs.push({
        id: `door-${i}`,
        x: startX + (i * doorWidth),
        y: 0.6, // 60% from top
        width: doorWidth,
        height: 0.3 // 30% height
      });
    }
    
    return divs;
  };

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please upload a valid image file.');
      return;
    }

    // Validate file size (max 10MB)
    if (file.size > 10 * 1024 * 1024) {
      setError('File size must be less than 10MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
      setError('');

      // Initialize door divs based on door count
      setDoorDivs(generateDoorDivs(doorCount));

      setActiveStep(1);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleStyleSelect = (style: DoorStyle) => {
    console.log('Style selected:', style.name, 'Image URL:', style.image);
    setSelectedStyle(style);
    
    // Force a small delay to ensure the background image updates
    setTimeout(() => {
      console.log('Background image should now be updated for:', style.name);
    }, 100);
  };

  const handleGeneratePreview = async () => {
    if (!uploadedImage || !selectedStyle) return;

    setProcessing(true);

    // Since we're using CSS background images, we don't need complex processing
    // Just set the uploaded image as the preview (the door styles are already applied via CSS)
    setPreviewImage(uploadedImage);
    
    setProcessing(false);
    setPreviewOpen(true);
  };

  // Removed processImageClientSide and processImageServerSide - no longer needed with CSS background images

  const handleReset = () => {
    setActiveStep(0);
    setUploadedImage(null);
    setSelectedStyle(null);
    setPreviewImage(null);
    setError('');
    setDoorDivs([]);
    setActiveDivIndex(null);
    setDoorCount(2);
  };

  const handleDoorCountChange = (count: number) => {
    setDoorCount(count);
    
    // Update door divs based on new door count
    setDoorDivs(generateDoorDivs(count));
    setActiveDivIndex(null); // Reset active div
  };

  // Handle resize start for door divs
  const handleResizeStart = (e: React.MouseEvent, divIndex: number, handle: string) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsResizing(true);
    setActiveDivIndex(divIndex);
    setResizeHandle(handle);
    
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const parentRect = (e.currentTarget.parentElement as HTMLElement).getBoundingClientRect();
    
    const x = (e.clientX - rect.left) / parentRect.width;
    const y = (e.clientY - rect.top) / parentRect.height;
    
    setDragStart({ x, y });
  };

  // Handle mouse move for dragging and resizing
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging && !isResizing) return;
    
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width;
    const mouseY = (e.clientY - rect.top) / rect.height;
    
    if (isDragging && dragStart && activeDivIndex !== null) {
      const newX = mouseX - dragStart.x;
      const newY = mouseY - dragStart.y;
      
      // Keep within bounds
      const clampedX = Math.max(0, Math.min(1 - doorDivs[activeDivIndex].width, newX));
      const clampedY = Math.max(0, Math.min(1 - doorDivs[activeDivIndex].height, newY));
      
      setDoorDivs(prev => prev.map((div, index) => 
        index === activeDivIndex 
          ? { ...div, x: clampedX, y: clampedY }
          : div
      ));
    } else if (isResizing && resizeHandle && activeDivIndex !== null) {
      const currentDiv = doorDivs[activeDivIndex];
      let newX = currentDiv.x;
      let newY = currentDiv.y;
      let newWidth = currentDiv.width;
      let newHeight = currentDiv.height;
      
      switch (resizeHandle) {
        case 'nw':
          newX = mouseX;
          newY = mouseY;
          newWidth = currentDiv.x + currentDiv.width - mouseX;
          newHeight = currentDiv.y + currentDiv.height - mouseY;
          break;
        case 'ne':
          newY = mouseY;
          newWidth = mouseX - currentDiv.x;
          newHeight = currentDiv.y + currentDiv.height - mouseY;
          break;
        case 'sw':
          newX = mouseX;
          newWidth = currentDiv.x + currentDiv.width - mouseX;
          newHeight = mouseY - currentDiv.y;
          break;
        case 'se':
          newWidth = mouseX - currentDiv.x;
          newHeight = mouseY - currentDiv.y;
          break;
      }
      
      // Apply constraints
      newX = Math.max(0, Math.min(1 - newWidth, newX));
      newY = Math.max(0, Math.min(1 - newHeight, newY));
      newWidth = Math.max(0.05, Math.min(1 - newX, newWidth));
      newHeight = Math.max(0.05, Math.min(1 - newY, newHeight));
      
      setDoorDivs(prev => prev.map((div, index) => 
        index === activeDivIndex 
          ? { ...div, x: newX, y: newY, width: newWidth, height: newHeight }
          : div
      ));
    }
  }, [isDragging, isResizing, dragStart, resizeHandle, activeDivIndex, doorDivs]);

  // Handle mouse up to stop dragging/resizing
  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setIsResizing(false);
    setDragStart(null);
    setResizeHandle(null);
  }, []);


  const filteredStyles = doorStyles.filter(style => style.category === selectedCategory);

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
            Garage Door Visualizer
          </Typography>
          <Typography variant="h5" component="p" textAlign="center" sx={{ opacity: 0.9 }}>
            See how different garage door styles will look on your home before you buy
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Progress Stepper */}
        <Box sx={{ mb: 6 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }} onClose={() => setError('')}>
            {error}
          </Alert>
        )}

        {/* Step 1: Upload Photo */}
        {activeStep === 0 && (
          <Card>
            <CardContent sx={{ p: 6, textAlign: 'center' }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Upload a Photo of Your Home
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 4 }}>
                Upload a clear, front-facing photo of your home. Make sure the garage door is visible and the image is well-lit.
              </Typography>

              {uploadedImage ? (
                <Box sx={{ mb: 4 }}>
                  <Image
                    src={uploadedImage}
                    alt="Uploaded house"
                    width={400}
                    height={300}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Box sx={{ mt: 2, display: 'flex', gap: 2, justifyContent: 'center' }}>
                    <Button
                      variant="outlined"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      Choose Different Photo
                    </Button>
                    <Button
                      variant="contained"
                      onClick={() => setActiveStep(1)}
                      endIcon={<ArrowForward />}
                    >
                      Continue to Style Selection
                    </Button>
                  </Box>
                </Box>
              ) : (
                <Box
                  sx={{
                    border: '2px dashed',
                    borderColor: 'primary.main',
                    borderRadius: 2,
                    p: 6,
                    backgroundColor: 'grey.50',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s',
                    '&:hover': {
                      backgroundColor: 'grey.100',
                    },
                  }}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <CloudUpload sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Click to upload or drag and drop
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Supports JPG, PNG files up to 10MB
                  </Typography>
                </Box>
              )}

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*"
                  style={{ display: 'none' }}
                />

                {/* Door Count Selector */}
                <Box sx={{ mt: 4, mb: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    How many garage doors do you have?
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                    {[1, 2, 3, 4].map((count) => (
                      <Button
                        key={count}
                        variant={doorCount === count ? 'contained' : 'outlined'}
                        onClick={() => handleDoorCountChange(count)}
                        sx={{
                          minWidth: 60,
                          height: 60,
                          fontSize: '1.2rem',
                          fontWeight: 'bold',
                          borderRadius: '12px',
                          border: doorCount === count ? 'none' : '2px solid',
                          '&:hover': {
                            transform: 'scale(1.05)',
                            transition: 'transform 0.2s ease-in-out'
                          }
                        }}
                      >
                        {count}
                      </Button>
                    ))}
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
                    {doorCount === 1 && 'Single car garage'}
                    {doorCount === 2 && 'Double car garage'}
                    {doorCount === 3 && 'Three car garage'}
                    {doorCount === 4 && 'Four car garage'}
                  </Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Tips for Best Results:
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body2" sx={{ textWrap: 'balance' }}>
                      Try your best to take a photo straight-on and not at an angle
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body2" sx={{ textWrap: 'balance' }}>
                      Use good lighting, and rotate your phone to landscape orientation
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Typography variant="body2" sx={{ textWrap: 'balance' }}>
                      Ensure entire front of the house is visible with garage door in view
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Interactive Door Style Selection */}
        {activeStep === 1 && (
          <Grid container spacing={4}>
            {/* Left Side - Door Style Options */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4" component="h2" gutterBottom>
                  Choose Your Door Style
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                  Click any style to see it applied to your home instantly
                </Typography>

                {/* Category Tabs */}
                <Box sx={{ mb: 3 }}>
                  <Tabs
                    value={selectedCategory}
                    onChange={(_, newValue) => setSelectedCategory(newValue)}
                    variant="scrollable"
                    scrollButtons="auto"
                  >
                    {categories.map((category) => (
                      <Tab key={category} label={category} value={category} />
                    ))}
                  </Tabs>
                </Box>

                {/* Door Style Options */}
                <Box sx={{ maxHeight: '60vh', overflowY: 'auto', pr: 1 }}>
                  <Grid container spacing={2}>
                    {filteredStyles.map((style) => (
                      <Grid item xs={12} key={style.id}>
                        <Card
                          sx={{
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            border: selectedStyle?.id === style.id ? '2px solid' : '1px solid',
                            borderColor: selectedStyle?.id === style.id ? 'primary.main' : 'divider',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: 3,
                              borderColor: 'primary.main',
                            }
                          }}
                          onClick={() => handleStyleSelect(style)}
                        >
                          <CardContent sx={{ p: 2 }}>
                            <Grid container spacing={2} alignItems="center">
                              <Grid item xs={4}>
                                <Image
                                  src={style.image}
                                  alt={style.name}
                                  width={120}
                                  height={80}
                                  style={{
                                    width: '100%',
                                    height: '80px',
                                    objectFit: 'cover',
                                    borderRadius: '4px',
                                  }}
                                  unoptimized
                                />
                              </Grid>
                              <Grid item xs={8}>
                                <Typography variant="h6" gutterBottom sx={{ fontSize: '1rem', mb: 1 }}>
                                  {style.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                  {style.description}
                                </Typography>
                                <Chip
                                  label={style.category}
                                  size="small"
                                  color="primary"
                                  variant="outlined"
                                />
                              </Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
                  <Button
                    variant="outlined"
                    onClick={() => setActiveStep(0)}
                    startIcon={<ArrowBack />}
                  >
                    Back to Upload
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Right Side - Original Image with Live Preview */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'sticky', top: 20 }}>
                <Typography variant="h5" gutterBottom>
                  Your Home Preview
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {selectedStyle ? `Previewing: ${selectedStyle.name}` : 'Drag the selection box to align with your garage doors'}
                </Typography>
                
                {/* Door Count Selector for Step 1 */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    Number of garage doors:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {[1, 2, 3, 4].map((count) => (
                      <Button
                        key={count}
                        variant={doorCount === count ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => handleDoorCountChange(count)}
                        sx={{
                          minWidth: 40,
                          height: 40,
                          fontSize: '0.9rem',
                          fontWeight: 'bold',
                          borderRadius: '8px',
                        }}
                      >
                        {count}
                      </Button>
                    ))}
                  </Box>
                </Box>

                <Card sx={{ position: 'relative' }}>
                  {uploadedImage && (
                    <Box
                      sx={{ 
                        position: 'relative',
                        userSelect: 'none',
                        WebkitUserSelect: 'none',
                        MozUserSelect: 'none',
                        msUserSelect: 'none',
                        WebkitTouchCallout: 'none',
                        WebkitTapHighlightColor: 'transparent',
                      }}
                      onMouseMove={handleMouseMove}
                      onMouseUp={handleMouseUp}
                      onMouseLeave={handleMouseUp}
                    >
                      <Image
                        src={uploadedImage}
                        alt="Your home"
                        width={500}
                        height={400}
                        style={{
                          width: '100%',
                          height: '400px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          pointerEvents: 'none',
                          userSelect: 'none',
                          WebkitUserSelect: 'none',
                          MozUserSelect: 'none',
                          msUserSelect: 'none',
                        }}
                      />

                      {/* Door Divs Overlay */}
                      {doorDivs.map((div, index) => (
                        <DraggableDoorDiv
                          key={`${div.id}-${selectedStyle?.id || 'none'}`}
                          doorDiv={div}
                          index={index}
                          selectedStyle={selectedStyle}
                          activeDivIndex={activeDivIndex}
                          onDrag={handleDragStart}
                          onResize={handleResizeStart}
                        />
                      ))}

                      {/* Live Preview Overlay - Disabled for simplified approach */}
                      {false && selectedStyle && previewImage && (
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            cursor: 'pointer',
                            transition: 'opacity 0.3s',
                            '&:hover': {
                              opacity: 0.8,
                            }
                          }}
                          onClick={() => setPreviewOpen(true)}
                        >
                          {previewImage && (
                            <>
                              <Image
                                src={previewImage!}
                                alt="Door style preview"
                                width={500}
                                height={400}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'cover',
                                  borderRadius: '8px',
                                }}
                              />
                              <Box sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                padding: '8px 16px',
                                borderRadius: '20px',
                                opacity: 0,
                                transition: 'opacity 0.2s',
                              }}>
                                <Typography variant="body2">Click to enlarge</Typography>
                              </Box>
                            </>
                          )}
                        </Box>
                      )}

                      {/* Processing Overlay */}
                      {processing && (
                        <Box sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: '8px',
                        }}>
                          <Box sx={{ textAlign: 'center' }}>
                            <CircularProgress sx={{ mb: 2 }} />
                            <Typography variant="body2" color="text.secondary">
                              Applying door style...
                            </Typography>
                          </Box>
                        </Box>
                      )}
                    </Box>
                  )}
                </Card>
              </Box>
            </Grid>
          </Grid>
        )}

      </Container>

      {/* CTA Section */}
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Love What You See?
            </Typography>
            <Typography variant="h6" paragraph sx={{ opacity: 0.9, mb: 4 }}>
              Get a free estimate for your new garage door installation
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

      {/* Preview Dialog */}
      <Dialog
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        maxWidth="lg"
        fullWidth
      >
        <DialogTitle>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5">
              Your Home with {selectedStyle?.name}
            </Typography>
            <IconButton onClick={() => setPreviewOpen(false)}>
              <Close />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          {previewImage && (
            <Box sx={{ textAlign: 'center' }}>
              <Image
                src={previewImage}
                alt="Preview result"
                width={800}
                height={600}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                }}
                unoptimized
              />
              <Box sx={{ mt: 3, display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  startIcon={<Download />}
                >
                  Download Image
                </Button>
                <Link href="/contact" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowForward />}
                  >
                    Get Quote for This Style
                  </Button>
                </Link>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}
