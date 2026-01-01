import { motion } from 'framer-motion';
import { useState } from 'react';
import slothImg from '../assets/sloth.png';

export default function Card({ onOpen }) {
  return (
    <motion.div 
      className="card-front"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onOpen}
      style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
        textAlign: 'center',
        cursor: 'pointer',
        border: '4px solid var(--color-primary)',
        width: '100%',
        height: '100%', // Match parent
        backfaceVisibility: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <motion.img 
        src={slothImg} 
        alt="Chill Sloth" 
        style={{ width: '100%', borderRadius: '10px' }}
        animate={{ rotate: [0, 5, 0, -5, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      
      <h1 style={{ 
        marginTop: '1.5rem', 
        color: 'var(--color-primary)',
        fontSize: '2.5rem',
        lineHeight: 1
      }}>
        For the chillest girl...
      </h1>
      
      <p style={{ marginTop: '1rem', color: '#888', fontStyle: 'italic' }}>
        (Tap to open)
      </p>
    </motion.div>
  );
}
