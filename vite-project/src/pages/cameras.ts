import DJI from "../assets/avata360.png";
import sony from "../assets/sonyA6100.png";
import pentax from "../assets/pentaxME.png";

// Import gallery images here if you have them

export interface CameraData {
  id: string;
  category: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  modalInfo: {
    price: string;
    details: string;
    gallery: string[]; // Array of image URLs for the gallery
  };
}

export const camerasData: CameraData[] = [
  {
    id: 'dji',
    category: 'Aerial',
    name: 'DJI Avata 360',
    description: 'A advanced drone that captures stunning 8K video and 120-megapixel aerial photos in a full 360-degree view.',
    image: DJI,
    alt: 'DJI Avata 360',
    modalInfo: {
      price: 'Contact for pricing.',
      details: 'Specializing in FPV (First-Person View) drone footage for dynamic and immersive video content. Perfect for real estate, events, and cinematic projects.',
      gallery: [], // Add image URLs here e.g. [djiImage1, djiImage2]
    }
  },
  {
    id: 'sony',
    category: 'Digital',
    name: 'Sony A6100',
    description: 'A advanced mirrorless camera known for capturing ultra-sharp details and beautiful, true-to-life colors.',
    image: sony,
    alt: 'Sony A6100',
    modalInfo: {
      price: 'Contact for pricing.',
      details: 'Ideal for portraits, events, and product photography. High-resolution images with excellent low-light performance and fast autofocus.',
      gallery: [], // Add image URLs here
    }
  },
  {
    id: 'pentax',
    category: 'Film',
    name: 'Pentax ME',
    description: 'Experience the unique aesthetic of 35mm film. Perfect for artistic portraits and lifestyle shoots with a vintage feel.',
    image: pentax,
    alt: 'Pentax ME',
    modalInfo: {
      price: '$65 per 36 exposures (developed and scanned). $55 if you bring your own film.',
      details: 'Experience the unique aesthetic of 35mm film. Perfect for artistic portraits and lifestyle shoots with a vintage feel.',
      gallery: [], // Add image URLs here
    }
  }
];