import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Github, Linkedin, Mail, Code, Palette, Music, Camera, BookOpen, Coffee, Database, Globe, Smartphone, Cloud } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import HeroSection from '../components/HeroSection';
import Navigation from '../components/Navigation';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import React, { useEffect, useState } from 'react';
const Index = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isLoading, setIsLoading] = useState(true);

  // 个人数据
  const personalInfo = {
    name: "Sakalian",
    title: "全栈开发工程师 & UI设计师",
    location: "上海，中国",
    email: "sakalian@example.com",
    phone: "+86 138-0000-0000",
    bio: "热爱创造美好数字体验的开发者，专注于前端技术和用户体验设计。喜欢用代码编织梦想，用设计传递情感。致力于构建既美观又实用的数字产品。",
    avatar: "https://nocode.meituan.com/photo/search?keyword=professional,portrait,developer&width=200&height=200"
  };

  const skills = [
    { 
      name: "React", 
      level: 95, 
      color: "from-blue-400 to-blue-600",
      description: "精通React生态系统，包括Hooks、Context、Redux等"
    },
    { 
      name: "JavaScript", 
      level: 98, 
      color: "from-yellow-400 to-yellow-600",
      description: "深入理解ES6+特性，异步编程和性能优化"
    },
    { 
      name: "TypeScript", 
      level: 90, 
      color: "from-blue-500 to-blue-700",
      description: "熟练使用TypeScript进行类型安全的开发"
    },
    { 
      name: "Node.js", 
      level: 85, 
      color: "from-green-400 to-green-600",
      description: "后端开发经验，RESTful API设计和数据库操作"
    },
    { 
      name: "UI/UX设计", 
      level: 80, 
      color: "from-purple-400 to-purple-600",
      description: "注重用户体验，擅长创建直观美观的界面"
    },
    { 
      name: "Python", 
      level: 75, 
      color: "from-indigo-400 to-indigo-600",
      description: "数据处理和机器学习项目经验"
    }
  ];

  const projects = [
    {
      id: 1,
      title: "智能电商平台",
      description: "基于React和Node.js构建的全栈电商解决方案，支持实时聊天、智能推荐、支付集成等功能。采用微服务架构，具备高可用性和可扩展性。",
      image: "https://nocode.meituan.com/photo/search?keyword=ecommerce,website,modern&width=400&height=250",
      tags: ["React", "Node.js", "MongoDB", "Redis", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2024.03",
      team: "5人团队"
    },
    {
      id: 2,
      title: "数据可视化仪表板",
      description: "企业级数据分析和可视化平台，支持多种图表类型、实时数据更新、自定义报表生成。提供直观的数据洞察和决策支持。",
      image: "https://nocode.meituan.com/photo/search?keyword=dashboard,analytics,charts&width=400&height=250",
      tags: ["D3.js", "React", "Python", "PostgreSQL", "WebSocket"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2024.01",
      team: "3人团队"
    },
    {
      id: 3,
      title: "移动端社交应用",
      description: "现代化的社交移动应用，支持实时消息、动态分享、位置服务、视频通话等功能。采用React Native开发，支持iOS和Android平台。",
      image: "https://nocode.meituan.com/photo/search?keyword=mobile,app,social&width=400&height=250",
      tags: ["React Native", "Firebase", "Redux", "WebRTC", "Push通知"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2023.11",
      team: "4人团队"
    },
    {
      id: 4,
      title: "AI智能助手",
      description: "基于机器学习的智能客服系统，支持自然语言处理、情感分析、智能问答等功能。提供24/7自动化客户服务。",
      image: "https://nocode.meituan.com/photo/search?keyword=ai,chatbot,artificial&width=400&height=250",
      tags: ["Python", "TensorFlow", "NLP", "FastAPI", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2023.09",
      team: "个人项目"
    },
    {
      id: 5,
      title: "区块链钱包应用",
      description: "安全可靠的数字货币钱包应用，支持多种加密货币、智能合约交互、DeFi协议集成等功能。注重安全性和用户体验。",
      image: "https://nocode.meituan.com/photo/search?keyword=blockchain,wallet,crypto&width=400&height=250",
      tags: ["React", "Web3.js", "Solidity", "Ethereum", "MetaMask"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2023.07",
      team: "2人团队"
    },
    {
      id: 6,
      title: "在线教育平台",
      description: "功能完整的在线学习平台，支持视频课程、实时互动、作业提交、成绩管理等功能。为师生提供优质的在线教学体验。",
      image: "https://nocode.meituan.com/photo/search?keyword=education,online,learning&width=400&height=250",
      tags: ["Vue.js", "Express", "MySQL", "WebSocket", "FFmpeg"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2023.05",
      team: "6人团队"
    }
  ];

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com", color: "hover:text-gray-800" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com", color: "hover:text-blue-600" },
    { icon: Mail, name: "Email", url: `mailto:${personalInfo.email}`, color: "hover:text-red-500" }
  ];

  // 页面加载动画
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 监听滚动事件，更新当前活跃区域
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center z-50">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.h2
            className="text-2xl font-bold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Sakalian
          </motion.h2>
          <motion.p
            className="text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            正在加载精彩内容...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <HeroSection personalInfo={personalInfo} socialLinks={socialLinks} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ContactSection personalInfo={personalInfo} socialLinks={socialLinks} />
      </main>
      
      <Footer personalInfo={personalInfo} />
    </div>
  );
};

export default Index;
