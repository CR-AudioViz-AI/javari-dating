'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, MessageCircle, Shield, Sparkles, Users, MapPin,
  CheckCircle, ArrowRight, Star, Lock, Camera, Video,
  Smile, Coffee, Music, Compass
} from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'AI Matching', desc: 'Smart algorithms find your most compatible matches' },
  { icon: Shield, title: 'Verified Profiles', desc: 'Photo verification ensures real people only' },
  { icon: Video, title: 'Video Dates', desc: 'Get to know matches through video before meeting' },
  { icon: Lock, title: 'Privacy First', desc: 'Control who sees your profile and information' },
];

const interests = [
  { icon: Coffee, name: 'Coffee Lover' },
  { icon: Music, name: 'Music' },
  { icon: Compass, name: 'Travel' },
  { icon: Camera, name: 'Photography' },
];

const stats = [
  { value: '2M+', label: 'Active Users' },
  { value: '500K+', label: 'Matches Made' },
  { value: '50K+', label: 'Success Stories' },
  { value: '4.8/5', label: 'App Rating' },
];

const testimonials = [
  { name: 'Jessica & David', duration: 'Together 2 years', quote: 'We matched on shared values and it just clicked!' },
  { name: 'Michael & Sarah', duration: 'Engaged', quote: 'The video date feature helped us connect before meeting.' },
  { name: 'Alex & Jordan', duration: 'Married', quote: 'Found my soulmate. Forever grateful.' },
];

export default function DatingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-rose-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Javari Connect</span>
                <span className="text-rose-400 text-xs block -mt-1">by CR AudioViz AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a href="#success" className="text-gray-300 hover:text-white transition">Success Stories</a>
              <a href="#safety" className="text-gray-300 hover:text-white transition">Safety</a>
              <a href="#start" className="px-4 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Join Free
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500/20 border border-rose-500/30 rounded-full text-sm text-rose-300 mb-8"
          >
            <Shield className="w-4 h-4" />
            <span>100% verified profiles</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Find Your<br/>
            <span className="bg-gradient-to-r from-rose-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Perfect Match
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Meaningful connections start here. AI-powered matching based on 
            compatibility, values, and shared interests.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <a href="#start" className="px-8 py-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-semibold rounded-xl hover:opacity-90 transition flex items-center gap-2">
              Create Free Profile
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#how-it-works" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition">
              Learn More
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-xl text-gray-400">Find your match in 3 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Create Your Profile', desc: 'Share your interests, values, and what you are looking for', icon: Users },
              { step: 2, title: 'Get Matched', desc: 'Our AI finds compatible matches based on deep compatibility', icon: Sparkles },
              { step: 3, title: 'Connect & Meet', desc: 'Chat, video date, and plan your first real-world meetup', icon: MessageCircle },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 bg-white/5 border border-white/10 rounded-2xl"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <item.icon className="w-10 h-10 text-rose-400 mb-4 mt-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-slate-900/50 border border-white/10 rounded-xl text-center"
              >
                <feature.icon className="w-10 h-10 text-rose-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="success" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-gray-400">Real couples who found love here</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Heart key={i} className="w-4 h-4 text-rose-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{t.quote}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white">{t.name}</span>
                  <span className="text-rose-400 text-sm">{t.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="start" className="py-20 bg-gradient-to-r from-rose-900/50 to-pink-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Your Story Starts Here</h2>
          <p className="text-xl text-gray-300 mb-8">Join millions finding meaningful connections</p>
          <a href="/signup" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-rose-900 font-semibold rounded-xl hover:bg-gray-100 transition">
            <Heart className="w-5 h-5" />
            Create Free Profile
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-rose-400" />
              <span className="text-white font-semibold">Javari Connect</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
