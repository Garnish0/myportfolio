import React, { useRef } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import { useGSAP, slideIn } from '@/hooks/useGSAP'

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (isOpen && modalRef.current) {
      slideIn('.modal-content', 'up', {
        duration: 0.6,
        delay: 0,
        distance: 100,
        ease: 'power3.out'
      })

      slideIn('.modal-overlay', 'up', {
        duration: 0.3,
        delay: 0,
        distance: 0,
        ease: 'power2.out'
      })
    }
  }, { scope: modalRef, dependencies: [isOpen] })

  if (!isOpen) return null

  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 p-4"
    >
      <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0">
        <div className="modal-content bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative opacity-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center mb-6">
            <div className="w-16 h-16 mx-auto mb-6">
              <DotLottieReact
                src="https://lottie.host/451e224f-45ad-4e98-8928-65fe4b3538b7/CqxwHm4a2c.lottie"
                loop
                autoplay
              />
            </div>
          </div>

          <div className="text-center">
            <h2 
              className="font-serif font-normal mb-4"
              style={{ 
                color: '#262424',
                fontSize: '32px',
                letterSpacing: '-0.04em',
                lineHeight: '130%'
              }}
            >
              Success!<br />
              <span className="bg-gradient-to-r from-[#00C1FF] to-[#FFAE00] bg-clip-text text-transparent">Form submitted!</span>
            </h2>

            <p 
              className="font-sans font-normal mb-6 leading-relaxed"
              style={{ color: '#505050' }}
            >
              Thank you for your submission!<br />
              We'll get back to you soon.
            </p>

            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="flex -space-x-1">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-purple-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-green-400 to-blue-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-purple-400 to-pink-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-yellow-400 to-orange-500"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-gradient-to-r from-pink-400 to-red-500"></div>
              </div>
            </div>

            <p className="text-sm font-medium" style={{ color: '#505050' }}>
              You're in great company with <span className="bg-gradient-to-r from-[#00C1FF] to-[#FFAE00] bg-clip-text text-transparent font-semibold">thousands</span> of others!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal