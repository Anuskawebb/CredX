import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown, Shield, CreditCard, Zap, TrendingUp, Users, Lock } from 'lucide-react';
import InteractiveBackground from '../components/InteractiveBackground';
import GlassNavbar from '../components/GlassNavbar';
import Footer from '../components/Footer';
import TypewriterText from '../components/TypewriterText';
import CreditCardFlip from '../components/CreditCardFlip';
import VerticalHowItWorks from '../components/VerticalHowItWorks';

const Landing: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'ZK Identity + Reputation',
      description: 'Build your on-chain credit score using zero-knowledge proofs and DeFi history'
    },
    {
      icon: Lock,
      title: 'Collateralized Credit Vaults',
      description: 'Secure USDC loans backed by your crypto assets with transparent liquidation protection'
    },
    {
      icon: CreditCard,
      title: 'USDC Loans + MetaMask Card',
      description: 'Borrow USDC and spend instantly in the real world with MetaMask Card integration'
    },
    {
      icon: Zap,
      title: 'Cross-chain Repayment',
      description: 'Repay loans seamlessly across multiple chains using LI.FI bridge technology'
    },
    {
      icon: TrendingUp,
      title: 'Liquidation Protection',
      description: 'Advanced algorithms protect your collateral with early warning systems'
    },
    {
      icon: Users,
      title: 'Community Governance',
      description: 'Participate in protocol governance and earn rewards for active participation'
    }
  ];

  const scrollToHowItWorks = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <InteractiveBackground />
      <GlassNavbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left"
            >
              <h1 className="font-bold mb-4 text-white text-compact">
                CredX
              </h1>
              <h2 className="font-semibold mb-6 text-white text-compact">
                Use crypto like real cash in real life.
              </h2>
              
              {/* Typewriter Animation */}
              <div className="mb-8 max-w-2xl">
                <TypewriterText
                  text="Your on-chain rep is your new credit score. Borrow and spend with MetaMask."
                  delay={40}
                  className="text-gray-300"
                />
              </div>

              <motion.button
                onClick={scrollToHowItWorks}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 2 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ChevronDown className="w-5 h-5" />
              </motion.button>
            </motion.div>

            {/* Right Column - Credit Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center lg:justify-end"
            >
              <CreditCardFlip />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spend Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-white">
              Tired of holding tokens you can't use in real life?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              CredX unlocks real-world utility for your crypto.
              <br />
              Borrow USDC, spend with MetaMask Card, build trust on-chain.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <div id="how-it-works">
        <VerticalHowItWorks />
      </div>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Advanced DeFi infrastructure for real-world credit
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Platform features designed for the future of finance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience CredX Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">
              Experience CredX
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Modern interface designed for seamless Web3 credit management
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl p-8 mx-auto max-w-4xl"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-8 text-center">
              <div className="w-full h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-6">
                <div className="text-center">
                  <CreditCard className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-xl font-semibold text-white">Dashboard Preview</p>
                  <p className="text-gray-400">Coming Soon</p>
                </div>
              </div>
              <Link to="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-3 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Try the App
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;