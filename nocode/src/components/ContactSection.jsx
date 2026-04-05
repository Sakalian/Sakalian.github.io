import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../utils/animations';

const ContactSection = ({ personalInfo, socialLinks }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 清除错误信息
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '请输入您的姓名';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = '请输入您的邮箱';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = '请输入消息主题';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = '请输入消息内容';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // 模拟表单提交
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('消息已发送！我会尽快回复您。');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Phone,
      label: '电话',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: '位置',
      value: personalInfo.location,
      href: '#',
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  const extendedSocialLinks = [
    ...socialLinks,
    { icon: Twitter, name: 'Twitter', url: 'https://twitter.com', color: 'hover:text-blue-400' },
    { icon: MessageCircle, name: '微信', url: '#', color: 'hover:text-green-500' }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 to-purple-900/50" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            variants={fadeInUp}
          >
            让我们开始对话
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            如果您有任何问题或合作机会，欢迎随时联系我。我期待与您的交流！
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 联系信息 */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 
              className="text-2xl font-bold mb-8"
              variants={fadeInLeft}
            >
              联系信息
            </motion.h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                  variants={fadeInLeft}
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className={`p-3 bg-gradient-to-r ${info.color} rounded-xl shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{info.label}</h4>
                    <p className="text-gray-300">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* 社交媒体 */}
            <motion.div
              variants={fadeInLeft}
            >
              <h4 className="text-xl font-semibold mb-6">关注我</h4>
              <div className="flex flex-wrap gap-4">
                {extendedSocialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon className={`w-6 h-6 group-${social.color}`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* 联系表单 */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.h3 
              className="text-2xl font-bold mb-8"
              variants={fadeInRight}
            >
              发送消息
            </motion.h3>
            
            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              variants={fadeInRight}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">姓名</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${
                      errors.name ? 'border-red-500' : 'border-white/20'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                    placeholder="您的姓名"
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">邮箱</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${
                      errors.email ? 'border-red-500' : 'border-white/20'
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                    placeholder="您的邮箱"
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">主题</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${
                    errors.subject ? 'border-red-500' : 'border-white/20'
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300`}
                  placeholder="消息主题"
                />
                {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">消息内容</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className={`w-full px-4 py-3 bg-white/10 backdrop-blur-sm border ${
                    errors.message ? 'border-red-500' : 'border-white/20'
                  } rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none`}
                  placeholder="请输入您的消息内容..."
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>发送中...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>发送消息</span>
                  </>
                )}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
