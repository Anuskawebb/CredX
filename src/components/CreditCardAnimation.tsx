import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CreditCardAnimation: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Transform values for parallax and entrance animations
  const leftCardX = useTransform(scrollYProgress, [0.15, 0.35], [-400, 0]);
  const rightCardX = useTransform(scrollYProgress, [0.15, 0.35], [400, 0]);
  const leftCardRotate = useTransform(scrollYProgress, [0.15, 0.35], [-15, 5]);
  const rightCardRotate = useTransform(scrollYProgress, [0.15, 0.35], [15, -5]);
  
  // Exit animations
  const leftCardExitY = useTransform(scrollYProgress, [0.5, 0.7], [0, -200]);
  const rightCardExitY = useTransform(scrollYProgress, [0.5, 0.7], [0, -200]);
  const cardsOpacity = useTransform(scrollYProgress, [0.6, 0.75], [1, 0]);

  const CreditCard: React.FC<{ 
    style: any; 
    className?: string; 
    cardNumber: string;
    cardType: string;
    balance: string;
  }> = ({ style, className = "", cardNumber, cardType, balance }) => (
    <motion.div
      style={style}
      whileHover={{ 
        scale: 1.05, 
        rotateY: 10,
        transition: { duration: 0.3 }
      }}
      className={`relative w-80 h-48 rounded-2xl p-6 backdrop-blur-md border border-glass-white/30 shadow-2xl ${className}`}
    >
      {/* Card gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/40 via-neon-purple/30 to-neon-cyan/40 rounded-2xl" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-2xl" />
      
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-neon-blue/50 to-neon-purple/50 rounded-2xl blur-lg opacity-75" />
      
      <div className="relative z-10 h-full flex flex-col justify-between text-white">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-sm font-medium text-white/80">{cardType}</div>
            <div className="text-lg font-bold bg-gradient-to-r from-neon-cyan to-white bg-clip-text text-transparent">
              CredX
            </div>
          </div>
          <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan to-neon-blue rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full" />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="font-mono text-lg tracking-wider">
            {cardNumber}
          </div>
          <div className="flex justify-between items-end">
            <div>
              <div className="text-xs text-white/60">BALANCE</div>
              <div className="text-xl font-bold">{balance}</div>
            </div>
            <div>
              <div className="text-xs text-white/60">VALID THRU</div>
              <div className="text-sm font-mono">12/27</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">
            Spend Your Borrowed USDC in Real Life, Instantly
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Your crypto collateral unlocks real-world spending power through MetaMask Card integration
          </p>
        </motion.div>

        {/* 3D Credit Cards Container */}
        <div className="relative h-96 flex items-center justify-center">
          {/* Left Card */}
          <motion.div
            style={{
              x: leftCardX,
              y: leftCardExitY,
              rotate: leftCardRotate,
              opacity: cardsOpacity,
            }}
            className="absolute left-1/4 transform -translate-x-1/2"
          >
            <CreditCard
              style={{}}
              cardNumber="•••• •••• •••• 1234"
              cardType="Virtual Card"
              balance="$2,450"
            />
          </motion.div>

          {/* Right Card */}
          <motion.div
            style={{
              x: rightCardX,
              y: rightCardExitY,
              rotate: rightCardRotate,
              opacity: cardsOpacity,
            }}
            className="absolute right-1/4 transform translate-x-1/2"
          >
            <CreditCard
              style={{}}
              cardNumber="•••• •••• •••• 5678"
              cardType="Physical Card"
              balance="$1,850"
            />
          </motion.div>

          {/* Center floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center space-y-4">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity }
                }}
                className="w-16 h-16 mx-auto bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center"
              >
                <div className="w-8 h-8 bg-white rounded-full" />
              </motion.div>
              <div className="text-white/60 text-sm font-medium">
                Seamless Integration
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan/40 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * 400,
                opacity: 0,
              }}
              animate={{
                y: [null, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreditCardAnimation;