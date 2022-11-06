import React from 'react';
import './label.css';

interface LabelProps {
  
  /**
   * Label Personalizado
   */
  label: string;
  backgroundColor?:string;
  color?:string
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({
  
  label,
  backgroundColor,
  color,
  ...props
}: LabelProps) => {
  return (
    <label
    
     
      style={{ backgroundColor ,color}}
      {...props}
    >
      {label}
    </label>
  );
};
