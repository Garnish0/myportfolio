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
      className="fixed inset-0 z-[1001] p-4"
    >
      <div className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0">
        <div className="modal-content bg-background border rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative opacity-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-2"
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
              className="font-sans font-bold mb-4 text-foreground text-3xl tracking-tight"
            >
              Success!<br />
              <span className="bg-gradient-to-r from-[#40ffaa] via-[#4079ff] to-[#40ffaa] bg-clip-text text-transparent">Form submitted!</span>
            </h2>

            <p 
              className="font-sans text-muted-foreground mb-6 leading-relaxed"
            >
              Thank you for your submission!<br />
              We'll get back to you soon.
            </p>


            <p className="text-sm font-medium text-muted-foreground">
              You're in great company!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SuccessModal