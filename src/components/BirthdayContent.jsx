import { motion } from 'framer-motion';
import narutoRunImg from '../assets/naruto-run.png';

export default function BirthdayContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      style={{
        background: 'rgba(255, 255, 255, 0.95)',
        padding: '0rem 2rem 2rem 2rem', // Increased top padding
        borderRadius: '20px',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        border: '4px dashed var(--color-secondary)',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start', // Start from top to avoid compressing center
        alignItems: 'center',
        overflowY: 'auto', // Allow scroll if content is too tall
        overflowX: 'hidden'
      }}
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ fontSize: '4rem', marginBottom: '1rem', marginTop: '1rem' }}
      >
        🎉 🎂 🎈
      </motion.div>

      <h1 style={{ color: 'var(--color-primary)', fontSize: '3rem', marginBottom: '0.5rem' }}>
        Happy Birthday Reenu!
      </h1>

      <p style={{ fontSize: '1.1rem', lineHeight: 1.5, marginBottom: '1rem', maxWidth: '90%' }}>
        Here's to another year of being absolutely effortless, cool, and amazing. 
        May you always be sweet as honey, powerful like a Gorkha, and fancy like Dior.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'nowrap', marginBottom: '1rem' }}>
        {['Chill', 'Vibes', 'Only', '✨'].map((tag, i) => (
          <span key={i} style={{
            background: tag === '✨' ? '#fff' : 'var(--color-accent)',
            border: tag === '✨' ? '2px solid var(--color-accent)' : 'none',
            padding: '6px 12px',
            borderRadius: '15px',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            color: 'var(--color-text)',
            transform: `rotate(${Math.random() * 6 - 3}deg)`
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Naruto Run - Full Width between sections */}
      <div style={{
        width: 'calc(100% + 4rem)', // Span full width overlapping padding
        height: '60px',
        marginLeft: '-2rem',
        marginRight: '-2rem',
        marginTop: 'auto', // Push to center of empty space
        marginBottom: 'auto', 
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <motion.img
          src={narutoRunImg}
          alt="Ninja Run"
          initial={{ x: 300, opacity: 0 }} 
          animate={{ x: -300, opacity: [0, 0.5, 0.5, 0.5, 0] }} // Fade in/out at edges
          transition={{ 
            repeat: Infinity, 
            duration: 2.5, 
            ease: "linear",
            delay: 0.5
          }}
          style={{
            width: 'clamp(40px, 12vw, 60px)', // Responsive width: smaller on mobile
            mixBlendMode: 'multiply',
            opacity: 0.5
          }}
        />
      </div>

      <p style={{ 
        fontFamily: 'var(--font-heading)', 
        color: 'var(--color-primary)', 
        fontSize: '1.4rem',
        marginTop: '0', // Reset auto since we used it above
        paddingBottom: '0.5rem',
        zIndex: 2
      }}>
        From, Defective Guy
      </p>
    </motion.div>
  );
}
