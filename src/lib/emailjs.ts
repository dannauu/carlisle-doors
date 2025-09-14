import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

if (PUBLIC_KEY) {
  emailjs.init(PUBLIC_KEY);
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export const sendContactEmail = async (formData: ContactFormData): Promise<boolean> => {
  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

    if (!serviceId || !templateId || !PUBLIC_KEY) {
      console.error('EmailJS configuration is missing');
      return false;
    }

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      to_name: 'Kansas City Doors',
    };

    const response = await emailjs.send(serviceId, templateId, templateParams);
    
    if (response.status === 200) {
      return true;
    } else {
      console.error('EmailJS send failed:', response);
      return false;
    }
  } catch (error) {
    console.error('Error sending email:', error);
    return false;
  }
};
