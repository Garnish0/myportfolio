import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface ConfettiProps {
  isActive: boolean
  onComplete?: () => void
}

interface ConfettiPiece {
  id: number
  x: number
  y: number
  color: string
  rotation: number
  scale: number
  delay: number
}

const colors = [
  '#5DCCFF', '#4DB8E8', '#3FA5D1', '#6BC4C9', '#8DD4B8',
  '#B5E3A5', '#D4F192', '#F0E682', '#FFDA73', '#FFCC65',
  '#FFB857', '#FFA449', '#FF913B', '#FF7E2D', '#FF6B1F'
]

const Confetti: React.FC<ConfettiProps> = ({ isActive, onComplete }) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([])

  useEffect(() => {
    if (isActive) {
      const newPieces: ConfettiPiece[] = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: -20,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        scale: Math.random() * 0.8 + 0.6,
        delay: Math.random() * 0.5
      }))

      setPieces(newPieces)

      setTimeout(() => {
        setPieces([])
        onComplete?.()
      }, 3000)
    }
  }, [isActive, onComplete])

  if (!isActive || pieces.length === 0) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute w-3 h-3 rounded-sm"
          style={{
            backgroundColor: piece.color,
            left: piece.x,
            top: piece.y,
          }}
          initial={{
            y: -20,
            rotate: piece.rotation,
            scale: piece.scale,
            opacity: 1
          }}
          animate={{
            y: window.innerHeight + 100,
            rotate: piece.rotation + 180,
            opacity: [1, 1, 0.8, 0],
          }}
          transition={{
            duration: 2.5 + Math.random() * 1,
            delay: piece.delay,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  )
}

export default Confetti