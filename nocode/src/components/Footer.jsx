import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, Sparkles } from 'lucide-react';
import { fadeInUp } from '../utils/animations';

const Footer = ({ personalInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          {/* 装饰性图标 */}
          <motion.div 
            className="flex justify-center items-center space-x-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-blue-400" />
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Code className="w-6 h-6 text-purple-400" />
            </motion.div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Coffee className="w-6 h-6 text-amber-400" />
            </motion.div>
          </motion.div>

          {/* 主要信息 */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-lg">Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-red-500" />
              </motion.div>
              <span className="text-lg">using React & Tailwind CSS</span>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
          </motion.div>

          {/* 快速链接 */}
          <motion.div 
            className="flex flex-wrap justify-center items-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {['关于我', '技能', '项目', '联系'].map((link, index) => (
              <motion.button
                key={link}
                onClick={() => {
                  const section = document.getElementById(link === '关于我' ? 'about' : 
                                                      link === '技能' ? 'skills' :
                                                      link === '项目' ? 'projects' : 'contact');
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link}
              </motion.button>
            ))}
          </motion.div>

          {/* 底部装饰 */}
          <motion.div 
            className="pt-8 border-t border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-500 text-xs">
              用心创造每一个细节，只为呈现最好的用户体验
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
