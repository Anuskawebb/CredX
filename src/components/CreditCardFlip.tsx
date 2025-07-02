import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CreditCard } from 'lucide-react';

const CreditCardFlip: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-80 h-48 perspective-1000">
      <motion.div
        className="relative w-full h-full cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: isHovered ? 360 : 0 }}
        transition={{ 
          duration: 2, 
          ease: 'easeInOut',
          repeat: isHovered ? Infinity : 0
        }}
      >
        {/* 3D Credit Card with glassmorphism */}
        <div className="absolute inset-0 w-full h-full rounded-2xl glass-card transform rotate-y-12 rotate-x-6">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-pink-500/30 rounded-2xl" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-2xl" />
          
          {/* Subtle glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-2xl blur-lg opacity-75" />
          
          <div className="relative z-10 h-full flex flex-col justify-between text-white p-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm font-medium text-white/80">Master Card</div>
                <div className="text-lg font-bold text-white">
                 Metamask Card
                </div>
              </div>
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="font-mono text-lg tracking-wider">
                •••• •••• •••• 1234
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="text-xs text-white/60">BALANCE</div>
                  <div className="text-xl font-bold">$2,450</div>
                </div>
                <div>
                  <div className="text-xs text-white/60">VALID THRU</div>
                  <div className="text-sm font-mono">12/27</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CreditCardFlip;