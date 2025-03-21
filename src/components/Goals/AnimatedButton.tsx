import React, { FC } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  value?: number | string;
};

const Button = styled(motion.button)`
    background: linear-gradient(135deg, aquamarine, #10808a);
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.3s;
    align-self: center;
    width: fit-content;
    font-weight: bold;
    margin-top: 1rem;

    &:hover {
        background: #10808a;
    }
`;

const AnimatedButton: FC<ButtonProps> = ({ children, type, value }) => {
  return (
    <Button
      type={type}
      value={value}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </Button>
  );
};

export default AnimatedButton;