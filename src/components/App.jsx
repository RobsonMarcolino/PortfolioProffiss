import React, { useEffect } from 'react';
import {
  ArrowRight, Download, Play,
  Layout, Smartphone, Monitor,
  Figma, PenTool, Code, Star, Terminal, Zap,
  Mail, Github, Linkedin
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Importação dos Componentes que criamos acima
import Navbar from './Navbar';
import Footer from './Footer';
import Button from './Button';
import ServiceCard from './ServiceCard';
import ProjectCard from './ProjectCard';
import CustomCursor from './CustomCursor';
import MinhaFoto from '../assets/MinhaFoto.jpg';

// Importação das Imagens dos Projetos
import AgentIA from '../assets/Agent IA.png';
import MarvelStore from '../assets/MarvelStore.png';
import GamerHub from '../assets/GamerHub.png';
import RaioXapp from '../assets/RaioXapp.jpeg';
import Video from '../assets/Video.mp4';
import MecChill from '../assets/MecChill.png';
import CestasMimos from '../assets/CestasMimos.png';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-gray-900 font-sans selection:bg-[#FFC107] selection:text-[#1A2C24] transition-colors duration-300 md:cursor-none overflow-x-hidden">

      <Navbar />

      {/* --- HERO SECTION --- */}
      <header className="container mx-auto px-6 pt-32 md:pt-40 flex flex-col md:flex-row items-center gap-12 relative">
        {/* Texto Hero */}
        <div className="flex-1 z-10" data-aos="fade-right">
          <div className="inline-block px-4 py-1.5 bg-[#FFF8E1] text-[#FFC107] font-bold text-xs rounded-full mb-6 border border-[#FFC107]/20">
            🚀 Engenheiro de Software
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-[#1A2C24] dark:text-white leading-[1.1] mb-6">
            Eu sou <span className="text-[#FFC107] underline decoration-4 underline-offset-4 decoration-[#1A2C24]/10">Robson,</span><br />
            Especialista em<br />
            Front-End.
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            Transformo ideias complexas em interfaces web de alta performance. Foco em código limpo, escalabilidade e experiências de usuário fluidas utilizando o ecossistema moderno do JavaScript.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="https://github.com/RobsonMarcolino?tab=repositories" target="_blank" rel="noopener noreferrer">
              Ver Meu Código <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center ml-2"><Code size={10} fill="currentColor" /></div>
            </Button>
            <Button variant="secondary" href="https://www.linkedin.com/in/robson-marcolino" target="_blank" rel="noopener noreferrer">
              Linkedin
            </Button>
          </div>
        </div>

        {/* Imagem Hero */}
        <div className="flex-1 relative flex justify-center" data-aos="fade-left">
          {/* Formas de Fundo */}
          <div className="absolute top-10 right-10 w-[400px] h-[400px] bg-[#FFC107] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-10 -left-10 w-[300px] h-[300px] bg-[#1A2C24] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

          {/* Círculo Amarelo Decorativo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FFC107] rounded-full -z-10 mt-10 ml-10"></div>

          {/* Imagem Principal */}
          <div className="relative z-10">
            <img
              src={MinhaFoto}
              alt="Robson - Engenheiro de Software"
              className="w-[400px] h-[500px] object-cover rounded-[3rem] shadow-2xl"
            />

            {/* Floating Badges */}
            <div className="absolute top-10 -left-12 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="bg-[#1A2C24] text-white p-2 rounded-lg font-bold text-xs"><Code size={16} /></div>
              <div className="text-xs font-bold text-[#1A2C24]">Clean<br />Code</div>
            </div>

            <div className="absolute bottom-20 -right-6 bg-white p-3 px-5 rounded-full shadow-xl flex items-center gap-2 animate-bounce-slow delay-700">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-[#1A2C24]">Disponível para Projetos</span>
            </div>

            <div className="absolute top-1/3 -right-12 bg-white p-3 rounded-xl shadow-lg rotate-12">
              <div className="text-xs font-black text-[#1A2C24] text-center leading-tight">
                REACT<br /><span className="text-[#FFC107]">EXPERT</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- BANNER AMARELO --- */}
      <div className="bg-[#FFC107] py-6 mt-20 rotate-1 scale-105 shadow-lg relative z-20 overflow-hidden" id="skills">
        <div className="flex w-full">
          <div className="flex items-center gap-12 text-[#1A2C24] font-black text-xl uppercase tracking-widest whitespace-nowrap animate-marquee px-6">
            <span>React.js</span> <Star fill="black" size={16} />
            <span>TypeScript</span> <Star fill="black" size={16} />
            <span>Front-End Architecture</span> <Star fill="black" size={16} />
            <span>Next.js</span> <Star fill="black" size={16} />
            <span>Tailwind CSS</span> <Star fill="black" size={16} />
            <span>Performance</span> <Star fill="black" size={16} />
            <span>Git</span> <Star fill="black" size={16} />
            <span>Node.js</span> <Star fill="black" size={16} />
            <span>Analise de Dados</span> <Star fill="black" size={16} />
            <span>Power BI</span> <Star fill="black" size={16} />
            <span>Excel</span> <Star fill="black" size={16} />
          </div>
          <div className="flex items-center gap-12 text-[#1A2C24] font-black text-xl uppercase tracking-widest whitespace-nowrap animate-marquee px-6">
            <span>React.js</span> <Star fill="black" size={16} />
            <span>TypeScript</span> <Star fill="black" size={16} />
            <span>Front-End Architecture</span> <Star fill="black" size={16} />
            <span>Next.js</span> <Star fill="black" size={16} />
            <span>Tailwind CSS</span> <Star fill="black" size={16} />
            <span>Performance</span> <Star fill="black" size={16} />
            <span>Git</span> <Star fill="black" size={16} />
            <span>Node.js</span> <Star fill="black" size={16} />
            <span>Analise de Dados</span> <Star fill="black" size={16} />
            <span>Power BI</span> <Star fill="black" size={16} />
            <span>Excel</span> <Star fill="black" size={16} />
          </div>
        </div>
      </div>

      {/* --- SERVICES SECTION --- */}
      <section className="container mx-auto px-6 py-24" id="projects">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16" data-aos="fade-up">
          <div>
            <span className="text-[#FFC107] font-bold text-sm uppercase tracking-wider">— Minhas Competências</span>
            <h2 className="text-4xl font-black text-[#1A2C24] dark:text-white mt-2">
              Minhas <span className="relative">
                Competências
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFC107] opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span>
            </h2>
          </div>
          <Button variant="primary" className="mt-6 md:mt-0" icon={ArrowRight} href="#projects-real">
            Ver Meus Projetos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            icon={Monitor}
            title="Desenvolvimento Web"
            description="Criação de sites e aplicações web responsivas, utilizando as melhores práticas de HTML5, CSS3 e JavaScript moderno."
          />
          <ServiceCard
            icon={Code}
            title="SPAs com React"
            description="Desenvolvimento de Single Page Applications complexas, focadas em gestão de estado, roteamento e performance."
          />
          <ServiceCard
            icon={Zap}
            title="Otimização de Performance"
            description="Melhoria de Core Web Vitals, SEO técnico e otimização de carregamento para garantir a melhor experiência possível."
          />
        </div>
      </section>

      {/* --- REAL PROJECTS SECTION --- */}
      <section className="bg-white dark:bg-gray-800 py-24 transition-colors duration-300" id="projects-real">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-up">
            <span className="text-[#FFC107] font-bold text-sm uppercase tracking-wider">— Portfolio</span>
            <h2 className="text-4xl font-black text-[#1A2C24] dark:text-white mt-2">
              Projetos em Destaque
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[minmax(0,1fr)]">
            {/* 1. MarvelStore (Horizontal - 2 colunas) */}
            <ProjectCard
              title="MarvelStore"
              description="A melhor loja de quadrinhos da Marvel. Compre HQs exclusivas dos Vingadores, X-Men, Homem-Aranha e muito mais."
              tags={['React', 'API', 'JavaScript', 'CSS']}
              image={MarvelStore}
              repoLink="https://github.com/RobsonMarcolino/marvel-store"
              demoLink="https://robsonmarcolino.github.io/marvel-store/"
              className="md:col-span-2"
              imageHeight="h-48 md:h-64"
            />

            {/* 2. Raio-X App (Vertical - 2 linhas) */}
            <ProjectCard
              title="Raio-X App"
              description="Aplicativo Mobile inovador para análise e gestão de Lojas de redes do setor OFF TRADE da ambev."
              tags={['Python', 'AI', 'Image Processing', 'Mobile', 'React Native', 'Google Cloud']}
              image={RaioXapp}
              video={Video}
              repoLink="https://github.com/RobsonMarcolino/RaioXApp"
              demoLink="https://github.com/RobsonMarcolino/RaioXApp"
              className="md:row-span-2 bg-gray-900"
              imageHeight="h-96 md:h-full"
              showPhoneFrame={true}
            />

            {/* 3. Geo Minas Hub (Normal - 1 coluna) */}
            <ProjectCard
              title="Geo Minas Hub"
              description="Hub de acesso rápido com identidade visual divertida e nostálgica (8-bits), incluindo efeitos sonoros e animações glitch."
              tags={['HTML', 'CSS', 'JavaScript']}
              image={GamerHub}
              repoLink="https://github.com/RobsonMarcolino/Geo_Minas_Hub"
              demoLink="https://github.com/RobsonMarcolino/Geo_Minas_Hub"
            />

            {/* 4. Agent de IA (Normal - 1 coluna) */}
            <ProjectCard
              title="Agent de IA"
              description="Chatbot inteligente powered by AI para automação e assistência."
              tags={['AI', 'JavaScript', 'Python', 'Google cloud functions', 'Google cloud storage', 'Google Sheets']}
              image={AgentIA}
              repoLink="https://github.com/RobsonMarcolino/Chatbot-Raio-x"
              demoLink="https://github.com/RobsonMarcolino/Chatbot-Raio-x"
            />

            {/* 5. Mec Chill (Normal - 1 coluna) */}
            <ProjectCard
              title="Mec Chill"
              description="Site institucional para empresa de refrigeração, focado em SEO e performance."
              tags={['React', 'SEO', 'Performance', 'Bot']}
              image={MecChill}
              repoLink="https://github.com/RobsonMarcolino/mec-chill-site"
              demoLink="https://mecchillrefrigeracao.site/"
            />

            {/* 6. Cestas e Mimos (Normal - 1 coluna) */}
            <ProjectCard
              title="Cestas e Mimos"
              description="E-commerce de cestas personalizadas e presentes especiais."
              tags={['React', 'E-commerce', 'UI/UX']}
              image={CestasMimos}
              repoLink="https://github.com/RobsonMarcolino/cestas-e-mimos"
              demoLink="https://cestas-e-mimos.vercel.app/"
            />
          </div>
        </div>
      </section>

      {/* --- ABOUT ME SECTION (DARK) --- */}
      <section className="bg-[#1A2C24] text-white py-24 relative overflow-hidden" id="about">
        {/* Elementos de fundo */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFC107] rounded-full mix-blend-overlay filter blur-[120px] opacity-10"></div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">

          {/* Imagem Circular com Órbita */}
          <div className="flex-1 relative flex justify-center" data-aos="fade-right">
            <div className="w-[400px] h-[400px] border border-white/10 rounded-full flex items-center justify-center relative animate-spin-slow">
              {/* Ícones orbitando */}
              <div className="absolute -top-6 left-1/2 bg-[#2a4539] p-3 rounded-full"><Terminal size={24} className="text-[#FFC107]" /></div>
              <div className="absolute top-1/2 -right-6 bg-[#2a4539] p-3 rounded-full"><Code size={24} className="text-[#FFC107]" /></div>
              <div className="absolute -bottom-6 left-1/2 bg-[#2a4539] p-3 rounded-full"><Layout size={24} className="text-[#FFC107]" /></div>
            </div>

            {/* Foto Central */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-[#FFC107] rounded-full overflow-hidden border-8 border-[#1A2C24]">
              <img
                src={MinhaFoto}
                alt="Robson Sobre"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texto Sobre */}
          <div className="flex-1" data-aos="fade-left">
            <span className="text-[#FFC107] font-bold text-sm uppercase tracking-wider">— Sobre Mim</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-6">
              Quem é <span className="text-[#FFC107]">Robson?</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">
              Sou um Engenheiro de Software apaixonado por resolver problemas através do código. Minha especialidade é o ecossistema Front-End, onde combino lógica robusta com design intuitivo.
              <br /><br />
              Acredito que um bom software vai além de funcionar: ele deve ser acessível, rápido e agradável de usar. Estou sempre em busca de novas tecnologias para elevar o nível das minhas entregas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-10 border-t border-white/10 pt-8">
              <div>
                <h4 className="text-3xl font-black text-[#FFC107]">50+</h4>
                <p className="text-sm text-gray-400">Projetos Web</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-[#FFC107]">100%</h4>
                <p className="text-sm text-gray-400">Comprometimento</p>
              </div>
              <div>
                <h4 className="text-3xl font-black text-[#FFC107]">3+</h4>
                <p className="text-sm text-gray-400">Anos de Código</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="accent" icon={Download}>
                Meu Currículo
              </Button>
              <Button variant="outline" href="https://github.com/RobsonMarcolino?tab=repositories" target="_blank" rel="noopener noreferrer">
                Ver GitHub
              </Button>
            </div>
          </div>
        </div >
      </section >

      {/* --- CONTACT SECTION --- */}
      < section className="py-24 bg-[#FAFAFA] dark:bg-gray-900 transition-colors duration-300" id="contact" >
        <div className="container mx-auto px-6 text-center">
          <div data-aos="fade-up">
            <span className="text-[#FFC107] font-bold text-sm uppercase tracking-wider">— Contato</span>
            <h2 className="text-4xl font-black text-[#1A2C24] dark:text-white mt-2 mb-8">
              Vamos trabalhar juntos?
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-12">
              Estou sempre aberto a novos desafios e parcerias. Se você tem um projeto em mente ou quer apenas bater um papo sobre tecnologia, entre em contato!
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-6">
              <a href="mailto:seuemail@exemplo.com" className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-[#FFF8E1] rounded-full flex items-center justify-center text-[#FFC107] group-hover:bg-[#FFC107] group-hover:text-[#1A2C24] transition-colors">
                  <Mail size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-bold uppercase">Email</p>
                  <p className="text-[#1A2C24] dark:text-white font-bold">robsonstudent123@hotmail.com</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/robson-marcolino" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-[#E1F1FF] rounded-full flex items-center justify-center text-[#0077B5] group-hover:bg-[#0077B5] group-hover:text-white transition-colors">
                  <Linkedin size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-bold uppercase">LinkedIn</p>
                  <p className="text-[#1A2C24] dark:text-white font-bold">/robson-marcolino</p>
                </div>
              </a>

              <a href="https://github.com/RobsonMarcolino" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 bg-[#F0F0F0] rounded-full flex items-center justify-center text-[#333] group-hover:bg-[#333] group-hover:text-white transition-colors">
                  <Github size={24} />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-bold uppercase">GitHub</p>
                  <p className="text-[#1A2C24] dark:text-white font-bold">@RobsonMarcolino</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section >

      <Footer />
      <div className="hidden md:block">
        <CustomCursor />
      </div>
    </div >
  );
}