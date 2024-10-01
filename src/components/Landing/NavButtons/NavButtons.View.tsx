import React from 'react';
import "../NavButtons/NavButtons.css"

interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary'; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button className={`btn ${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
