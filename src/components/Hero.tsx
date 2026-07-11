"use client";

import Image from "next/image"; //  Fixed import path
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  // Animation variants for staggered fade-in
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20 py-20 px-4 sm:px-6 lg:px-8">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10 animate-pulse duration-[6000ms]" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl -z-10 animate-pulse duration-[8000ms]" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-6 text-center lg:text-left"
        >
          {/* Trust Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mx-auto lg:mx-0"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Your Health, Our Absolute Priority</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight"
          >
            Compassionate Care, <br />
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Advanced Medicine.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Access world-class healthcare from the comfort of your home or visit
            our state-of-the-art facilities. Your journey to better living
            starts here.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
          >
            <button className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 group">
              <Calendar className="w-5 h-5" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="inline-flex items-center justify-center bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-semibold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-slate-50">
              Explore Services
            </button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200/60 max-w-md mx-auto lg:mx-0"
          >
            <div>
              <p className="text-2xl font-bold text-slate-900">99%</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Satisfaction
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">150+</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Doctors
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">24/7</p>
              <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                Urgent Care
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Animated Image Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
          className="relative flex justify-center items-center"
        >
          {/* Main Image Frame */}
          <div className="relative w-full max-w-[500px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
            <Image
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Professional healthcare team providing premium care"
              fill
              preload
              className="object-cover"
              sizes="(max-width: 1280px) 50vw, 500px"
            />
          </div>

          {/* Floating Card 1: Live Support */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" as const }}
            className="absolute -left-6 bottom-16 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-slate-100 max-w-[200px]"
          >
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping" />
            <div>
              <p className="text-xs text-slate-500">Available Now</p>
              <p className="text-sm font-bold text-slate-800">
                Online Specialists
              </p>
            </div>
          </motion.div>

          {/* Floating Card 2: Patient Counter */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut" as const,
              delay: 0.5,
            }}
            className="absolute -right-4 top-12 bg-blue-600 text-white p-4 rounded-2xl shadow-xl hidden sm:flex flex-col items-center justify-center text-center w-28 aspect-square"
          >
            <span className="text-3xl font-extrabold">15k+</span>
            <span className="text-[10px] uppercase font-semibold tracking-wider opacity-90">
              Happy Patients
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
