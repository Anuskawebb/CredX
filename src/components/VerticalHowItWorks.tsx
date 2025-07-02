import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Wallet, Vault, DollarSign, CreditCard, TrendingUp, ArrowDown, ArrowRight } from 'lucide-react';

const VerticalHowItWorks: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const steps = [
    {
      number: '01',
      title: 'Connect Wallet + Create ZK ID',
      description: 'Link your wallet and establish your zero-knowledge identity',
      icon: Wallet,
    },
    {
      number: '02',
      title: 'Deposit ETH/MATIC',
      description: 'Secure your vault with crypto collateral',
      icon: Vault,
    },
    {
      number: '03',
      title: 'Borrow USDC @ 70% LTV',
      description: 'Access USDC loans up to 70% of your collateral value',
      icon: DollarSign,
    },
    {
      number: '04',
      title: 'Spend via MetaMask Card',
      description: 'Use your borrowed USDC for real-world purchases',
      icon: CreditCard,
    },
    {
      number: '05',
      title: 'Repay + Boost Your Score',
      description: 'Repay loans to improve your ZK credit score',
      icon: TrendingUp,
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get started with CredX in five simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Steps */}
          <div className="space-y-28">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-start space-x-6${index === steps.length - 1 ? ' mb-6 lg:mb-8' : ''}`}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-white text-compact">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </motion.div>
                )}
                {index === steps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                    className="flex-shrink-0 ml-4"
                  >
                    <ArrowRight className="w-5 h-5 text-blue-400" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column - Icons Flow */}
          <div className="relative">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 glass-card rounded-2xl flex items-center justify-center shadow-2xl">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      transition={{ delay: (index + 1) * 0.15, duration: 0.4 }}
                      className="mt-6 origin-top"
                    >
                      <ArrowDown className="w-6 h-6 text-blue-400" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalHowItWorks;