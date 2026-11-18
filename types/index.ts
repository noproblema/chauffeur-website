// Created by Qwen 3.7 November 14, 2026
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode; // Using ReactNode for Lucide icons
}

export interface Vehicle {
  id: string;
  name: string;
  capacity: number;
  features: string[];
  imageUrl: string;
}
