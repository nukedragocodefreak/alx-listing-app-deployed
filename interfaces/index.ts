// interfaces/index.ts

export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}
export interface Address {
    state: string;
    city: string;
    country: string;
}

export interface Offers {
    bed: string;
    shower: string;
    occupants: string;
}

export interface PropertyProps {
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offers;
    image: string;
    discount: string;
    description: string;
}
