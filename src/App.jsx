import { useState } from 'react'
import Card from './components/Card'
import BirthdayContent from './components/BirthdayContent'
import { motion } from 'framer-motion'

function App() {
  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className="container" style={{ 
      minHeight: '100vh',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'relative',
        width: 'min(90vw, 500px)', // Increased width
        height: 'min(85vh, 700px)', // Increased height
        perspective: '2000px'
      }}>
        {/* Inside Content (Bottom Layer) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          <BirthdayContent />
        </div>

        {/* Cover / Front of Card (Top Layer) */}
        <motion.div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
            transformStyle: 'preserve-3d',
            transformOrigin: 'left center' 
          }}
          animate={{ rotateY: isOpened ? -120 : 0 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.2 }}
        >
          {/* Front Face of the Cover */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
          }}>
            <Card onOpen={() => setIsOpened(!isOpened)} />
          </div>

          {/* Back Face of the Cover (The inside left) */}
          <div style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: '#fff',
            borderRadius: '20px',
            transform: 'rotateY(180deg)',
            backfaceVisibility: 'hidden',
            border: '4px solid var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <span style={{ fontSize: '3rem' }}>✨</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default App
