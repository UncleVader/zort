'use client';

import { motion } from 'framer-motion';

const basicFeatures = [
  {
    title: 'AI Analysis',
    description: 'Advanced algorithms analyze your betting patterns',
    icon: '🤖',
  },
  {
    title: 'Real-time Tracking',
    description: 'Monitor your bets as they happen',
    icon: '📊',
  },
  {
    title: 'Smart Predictions',
    description: 'Get AI-powered insights for better decisions',
    icon: '🎯',
  },
];

export default function SmartFeatures() {
  return (
    <section className="py-20 bg-white h-[300vh] sticky top-0 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {basicFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-xl bg-gray-50"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}