import React from 'react';
import classNames from 'classnames';
import { ButtonProps } from '../../interfaces';


const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  className,
  disabled,
  ...props
}) => {
  const base = 'inline-flex items-center justify-center font-medium rounded-xl focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-offset-2';

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-300',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-300',
  };

  return (
    <button
      {...props}
      disabled={isLoading || disabled}
      className={classNames(
        base,
        sizeClasses[size],
        variantClasses[variant],
        { 'opacity-50 cursor-not-allowed': isLoading || disabled },
        className
      )}
    >
      {isLoading ? 'Loading...' : children}
    </button>
  );
};

export default Button;
