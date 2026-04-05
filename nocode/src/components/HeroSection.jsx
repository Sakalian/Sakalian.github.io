import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { fadeInUp, staggerContainer, scaleIn } from '../utils/animations';

const HeroSection = ({ personalInfo, socialLinks }) => {
  const scrollToNext = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5" />
      
      {/* 浮动装饰元素 */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <motion.div 
        className="relative z-10 text-center max-w-5xl mx-auto"
        initial="initial"
        animate="animate"
        variants={staggerContainer}
      >
        {/* 头像 */}
        <motion.div 
          className="mb-8"
          variants={scaleIn}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 animate-pulse" />
            <img 
              src={personalInfo.avatar} 
              alt="头像" 
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full mx-auto object-cover border-4 border-white shadow-2xl"
            />
          </div>
        </motion.div>

        {/* 姓名 */}
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight"
          variants={fadeInUp}
        >
          {personalInfo.name}
        </motion.h1>

        {/* 职位 */}
        <motion.p 
          className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-6 font-light"
          variants={fadeInUp}
        >
          {personalInfo.title}
        </motion.p>

        {/* 位置 */}
        <motion.div 
          className="flex items-center justify-center space-x-2 text-gray-400 mb-8"
          variants={fadeInUp}
        >
          <MapPin className="w-5 h-5" />
          <span className="text-lg">{personalInfo.location}</span>
        </motion.div>

        {/* 简介 */}
        <motion.p 
          className="text-lg sm:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
          variants={fadeInUp}
        >
          {personalInfo.bio}
        </motion.p>

        {/* 操作按钮 */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          variants={fadeInUp}
        >
          <motion.button 
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            <span>下载简历</span>
          </motion.button>
          
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 ${social.color}`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* 滚动提示 */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="p-3 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDown className="w-6 h-6 text-gray-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
