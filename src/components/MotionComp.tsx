'use client';


import React from 'react';
import { motion, Variants } from 'framer-motion';

// Type for the props, including the type of element and variants
interface MotionComponentProps {
  variants: Variants;          // Type for framer-motion variants
  children: React.ReactNode;   // Children can be anything renderable (text, elements, etc.)
  type?: 'div' | 'text';       // Specify if it's a div or text (default is div)
  className?: string;          // Optional className for styling
}

const MotionComponent: React.FC<MotionComponentProps> = ({
  variants,
  children,
  type = 'div',
  className = '',
  ...props
}) => {
  // Determine which motion element to render based on the `type` prop
  const MotionElement = type === 'text' ? motion.span : motion.div;

  return (
    <MotionElement
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
      {...props} // Spread the rest of the props like onClick, style, etc.
    >
      {children}
    </MotionElement>
  );
};

export default MotionComponent;
