import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Database, Globe, Smartphone, Cloud } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const SkillsSection = ({ skills }) => {
  const skillIcons = {
    'React': Code,
    'JavaScript': Code,
    'TypeScript': Code,
    'Node.js': Database,
    'UI/UX设计': Palette,
    'Python': Code,
    'MongoDB': Database,
    'AWS': Cloud,
    'React Native': Smartphone,
    'Web开发': Globe
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/30 to-purple-900/30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            技能专长
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            持续学习和精进技术，致力于提供高质量的解决方案
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skillIcons[skill.name] || Code;
            return (
              <motion.div
                key={index}
                className="group relative"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  initial: { opacity: 0, y: 60 },
                  animate: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.6, delay: index * 0.1 }
                  }
                }}
              >
                <div className="relative bg-white/10 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:transform group-hover:scale-105 border border-white/20">
                  {/* 背景装饰 */}
                  <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                  
                  {/* 图标 */}
                  <div className="relative mb-6">
                    <div className={`inline-flex p-4 bg-gradient-to-r ${skill.color} rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* 技能信息 */}
                  <div className="relative">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {skill.name}
                      </h3>
                      <span className="text-lg font-semibold text-gray-300 bg-white/10 px-3 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>
                    
                    {/* 进度条 */}
                    <div className="relative">
                      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          <div className="absolute inset-0 bg-white/30 rounded-full animate-pulse" />
                        </motion.div>
                      </div>
                      
                      {/* 技能描述 */}
                      {skill.description && (
                        <motion.p 
                          className="mt-3 text-sm text-gray-300 leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {skill.description}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* 悬浮效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 技能统计 */}
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {[
            { number: "5+", label: "年开发经验" },
            { number: "50+", label: "完成项目" },
            { number: "10+", label: "技术栈" },
            { number: "100%", label: "客户满意度" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
