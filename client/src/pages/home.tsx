import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Download, ArrowDown, Cpu, Server, Zap, Snowflake } from "lucide-react";

export default function Home() {
  
  // Animation variants pour l'apparition au scroll
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Données des projets (Identiques à portfolio.tsx)
  const portfolioProjects = [
    {
      id: 1,
      title: "Déneigeuse Téléguidée",
      description: "Déneigeuse électrique téléguidée par manette et dotée d’un système de souffleuse indépendant.",
      image: "/deneigeuse.jpg", 
      link: "/project/deneigeuse"
    },
    {
      id: 2,
      title: "Moto Électrique ULIX",
      description: "Système de batterie basse tension et télémétrie.",
      image: "/ulix.jpg",
      link: "/project/ulix"
    },
    {
      id: 3,
      title: "Assistant IA & Serveur Domestique",
      description: "Infrastructure cloud privée et automatisation locale avec sécurité Zero Trust.",
      image: "/serveur.jpg",
      link: "/project/assistant-ia-serveur"
    },
    {
      id: 4,
      title: "Capteur d'Humidité STM32",
      description: "STM32 Nucleo low-power prenant des mesures quotidiennes.",
      image: "/capteurSTM32.jpg",
      link: "/project/capteur-stm32"
    },
    {
      id: 5,
      title: "Moniteur Énergétique",
      description: "Mesure de consommation électrique non intrusive pour logement.",
      image: "/moniteur.jpg",
      link: "/project/moniteur-energie"
    },
    {
      id: 6,
      title: "Simulation de Réseaux",
      description: "Modélisation MATLAB de circuits RLC en régime alternatif.",
      image: "/simulation_reseaux.jpg",
      link: "/project/simulation-reseaux"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#1a1a1a] font-sans selection:bg-[#CEFF00] selection:text-black">
      
      {/* --- NOUVELLE SECTION HERO (HEADER) --- */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
            alt="Saad Assabar" 
            className="w-full h-full object-cover"
          />
          {/* Overlay sombre pour la lisibilité du texte */}
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Navbar */}
        <nav className="relative z-20 w-full px-8 py-6 flex justify-between items-center text-white">
          {/* Logo ou Nom */}
          <div className="font-bold text-2xl tracking-tighter border-2 border-white p-1 hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors duration-300">
            SA
          </div>

          {/* Menu Links */}
          <ul className="hidden md:flex gap-8 text-sm md:text-base font-medium uppercase tracking-wider">
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/">Accueil</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/cv">CV</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/portfolio">Projets</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/about">À propos</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        {/* Center Content */}
        <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-white text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl font-bold uppercase tracking-widest mb-4 opacity-100 text-[#CEFF00]"
          >
            Portfolio Génie Électrique
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight uppercase"
          >
            Saad Assabar
          </motion.h1>
        </div>
      </section>

      {/* --- SECTION 1: RÉSUMÉ & DIAGRAMME --- */}
      <section className="container mx-auto px-6 pt-10 pb-0 max-w-6xl">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fadeInUp}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-wider mb-6 text-slate-900">Résumé</h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Merci de jeter un coup d'œil à mon portfolio ! Que vous soyez recruteur, collègue, ami ou un inconnu un peu perdu, j’espère que la visite vous plaira.
          </p>
        </motion.div>

        {/* --- DIAGRAMME INTÉGRÉ --- */}
        {/* Modification ici: mb-16 -> mb-8 pour réduire l'espace avant Forces */}
        <div className="w-full max-w-5xl mx-auto mt-8 mb-8">
          
          {/* Conteneur relatif */}
          <div className="relative w-full pt-8 pb-4">
            
            {/* MARQUEUR "JE SUIS ICI" */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute top-[-10px] md:top-[-15px] left-[33%] -translate-x-1/2 flex flex-col items-center z-20"
            >
              <span className="text-red-600 font-bold uppercase text-xs md:text-sm mb-0.5 tracking-tighter whitespace-nowrap">JE SUIS ICI</span>
              <ArrowDown className="text-red-600 w-4 h-4 md:w-6 md:h-6" strokeWidth={3} />
            </motion.div>

            {/* BARRE 1 : MAUVE (GÉNIE ÉLECTRIQUE) */}
            <div 
              className="relative w-full bg-[#4338ca] text-white h-10 md:h-14 flex items-center justify-center rounded-l-full shadow-lg z-10"
              style={{ clipPath: "polygon(0% 0%, 99% 0%, 100% 50%, 99% 100%, 0% 100%)" }} 
            >
              <span className="text-sm md:text-lg font-bold uppercase tracking-wide px-4">Génie Électrique</span>
            </div>

            {/* BARRE 2 : LIGNE DU BAS (ÉTUDES + ÊTRE UTILE) */}
            <div className="flex w-full mt-1 h-10 md:h-14 gap-1">
              
              {/* Partie BLEU CIEL (Études) */}
              <div className="w-[49%] bg-[#93C5FD] text-white flex items-center justify-center rounded-full shadow-md">
                 <span className="text-xs md:text-base font-bold uppercase tracking-wide px-2">Études</span>
              </div>

              {/* Partie ORANGE (Être Utile) */}
              <div 
                className="flex-grow bg-[#F97316] text-white flex items-center justify-center rounded-l-full shadow-md"
                style={{ clipPath: "polygon(0% 0%, 98% 0%, 100% 50%, 98% 100%, 0% 100%)" }}
              >
                 <span className="text-xs md:text-base font-bold uppercase tracking-wide px-2">Être Utile</span>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION FORCES/FAIBLESSES --- */}
      {/* Modification ici: pb-20 -> pb-10 pour réduire l'espace après Forces */}
      <section className="container mx-auto px-6 pb-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mt-4">
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-4 border-[#CEFF00] inline-block pb-1">Forces :</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base font-medium marker:text-[#000000]">
              <li>Addict à l'optimisation de consommation (au milliampère près).</li>
              <li>J'aime planifier, bâtir et assembler TOUT.</li>
              <li>Curiosité insatiable.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 border-b-4 border-[#CEFF00] inline-block pb-1">Faiblesses :</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm md:text-base font-medium marker:text-[#000000]">
              <li>Addict à l'optimisation de consommation.</li>
              <li>Je n'ai pas encore codé un projet qui fonctionne du premier coup.</li>
              <li>Incapable de jeter un câble, une résistance ou un moteur "au cas où".</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: COMPÉTENCES ET PROJETS CV --- */}
      <section className="bg-white py-10 border-t border-gray-200">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.h2 
            initial="hidden" whileInView="visible" variants={fadeInUp}
            className="text-4xl font-bold text-center uppercase text-slate-800 mb-16"
          >
            Compétences
          </motion.h2>

          {/* Logo Strip - Technos */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" className="h-10 md:h-14" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="MATLAB" className="h-10 md:h-14" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/STMicroelectronics_Logo.svg/2560px-STMicroelectronics_Logo.svg.png" alt="STM32" className="h-6 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Autodesk_AutoCAD_2024_icon.svg/1024px-Autodesk_AutoCAD_2024_icon.svg.png" alt="AutoCAD" className="h-8 md:h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Autodesk_Revit_2024_icon.svg/1024px-Autodesk_Revit_2024_icon.svg.png" alt="Revit" className="h-8 md:h-12" />
            <img src="https://raw.githubusercontent.com/n8n-io/n8n/master/assets/n8n-logo.png" alt="n8n" className="h-8 md:h-12" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo-ubuntu_cof-orange-hex.svg" alt="Ubuntu" className="h-10 md:h-14" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git" className="h-10 md:h-14" />
          </div>

          {/* Timeline Verticale - PROJETS CV */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full hidden md:block"></div>
            
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gray-300 z-10 hidden md:block"></div>

            {/* PROJET 1: Déneigeuse (RIGHT) */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative w-full pt-8">
              <div className="hidden md:block w-1/2 pr-12 text-right">
                <h4 className="text-black font-bold text-lg">Oct 2025 - Jan 2026</h4>
                <p className="text-gray-400 text-sm">Projet Personnel</p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-[#CEFF00] z-10 hidden md:flex items-center justify-center shadow-md">
                 <Snowflake className="w-4 h-4 text-black" />
              </div>

              <div className="w-full md:w-1/2 md:pl-12">
                <Link href="/project/deneigeuse">
                  <motion.div 
                    whileHover={{ y: -5, borderColor: "#CEFF00" }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-blue-50 rounded-full">
                        <Snowflake className="w-5 h-5 text-blue-600"/>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">Déneigeuse téléguidée</h3>
                    </div>
                    <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img src="/deneigeuse.jpg" alt="Snowblower Project" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"/>
                    </div>
                    <p className="text-gray-500 text-sm font-medium mb-3">
                      Déneigeuse électrique téléguidée par manette et dotée d'un système de souffleuse indépendant.
                    </p>
                     <span className="text-black font-bold text-xs hover:bg-[#CEFF00] hover:px-1 transition-all uppercase tracking-wide border-b-2 border-[#CEFF00]">Voir le projet</span>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* PROJET 2: Assistant Virtuel (LEFT) */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative w-full">
              <div className="w-full md:w-1/2 md:pr-12">
                <Link href="/project/assistant-ia-serveur">
                   <motion.div 
                    whileHover={{ y: -5, borderColor: "#CEFF00" }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-4">
                       <div className="p-2 bg-purple-50 rounded-full">
                        <Server className="w-5 h-5 text-purple-600"/>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">Assistant virtuel IA & Serveur Domestique</h3>
                    </div>
                    <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img src="/serveur.jpg" alt="Server Project" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"/>
                    </div>
                    <p className="text-gray-500 text-sm font-medium mb-3">
                      Développement d'une infrastructure cloud privée et d'automatisation locale avec architecture de sécurité "Zero Trust".
                    </p>
                    <span className="text-black font-bold text-xs hover:bg-[#CEFF00] hover:px-1 transition-all uppercase tracking-wide border-b-2 border-[#CEFF00]">Voir le projet</span>
                  </motion.div>
                </Link>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-[#CEFF00] z-10 hidden md:flex items-center justify-center shadow-md">
                 <Server className="w-4 h-4 text-black" />
              </div>

              <div className="hidden md:block w-1/2 pl-12 text-left">
                <h4 className="text-black font-bold text-lg">Janvier 2026</h4>
                <p className="text-gray-400 text-sm">Projet Personnel</p>
              </div>
            </div>

             {/* PROJET 3: Moto Électrique ULIX (RIGHT) */}
             <div className="flex flex-col md:flex-row items-center justify-between mb-16 relative w-full">
              <div className="hidden md:block w-1/2 pr-12 text-right">
                <h4 className="text-black font-bold text-lg">2026 - Présent</h4>
                <p className="text-gray-400 text-sm">ULIX, Université Laval</p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-[#CEFF00] z-10 hidden md:flex items-center justify-center shadow-md">
                 <Zap className="w-4 h-4 text-black" />
              </div>

              <div className="w-full md:w-1/2 md:pl-12">
                <Link href="/project/ulix">
                  <motion.div 
                    whileHover={{ y: -5, borderColor: "#CEFF00" }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="p-2 bg-yellow-50 rounded-full">
                        <Zap className="w-5 h-5 text-yellow-600"/>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">Projet de moto électrique ULIX</h3>
                    </div>
                    <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img src="/ulix.jpg" alt="Electric Motorcycle" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"/>
                    </div>
                    <p className="text-gray-500 text-sm font-medium mb-3">
                      Réalisé le bilan de puissance complet du système auxiliaire pour dimensionner la batterie basse tension.
                    </p>
                     <span className="text-black font-bold text-xs hover:bg-[#CEFF00] hover:px-1 transition-all uppercase tracking-wide border-b-2 border-[#CEFF00]">Voir le projet</span>
                  </motion.div>
                </Link>
              </div>
            </div>

            {/* PROJET 4: Capteur STM32 (LEFT) */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-0 relative w-full">
              <div className="w-full md:w-1/2 md:pr-12">
                <Link href="/project/capteur-stm32">
                   <motion.div 
                    whileHover={{ y: -5, borderColor: "#CEFF00" }}
                    className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 transition-colors duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-4">
                       <div className="p-2 bg-green-50 rounded-full">
                        <Cpu className="w-5 h-5 text-green-600"/>
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">Capteur d'humidité STM32</h3>
                    </div>
                    <div className="bg-gray-100 rounded-lg overflow-hidden mb-4">
                      <img src="/capteurSTM32.jpg" alt="STM32 Chip" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"/>
                    </div>
                    <p className="text-gray-500 text-sm font-medium mb-3">
                      STM32 Nucleo en sommeil, se réveillant quotidiennement à 8h00AM pour prendre une mesure de l'humidité.
                    </p>
                    <span className="text-black font-bold text-xs hover:bg-[#CEFF00] hover:px-1 transition-all uppercase tracking-wide border-b-2 border-[#CEFF00]">Voir le projet</span>
                  </motion.div>
                </Link>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-white border-[3px] border-[#CEFF00] z-10 hidden md:flex items-center justify-center shadow-md">
                 <Cpu className="w-4 h-4 text-black" />
              </div>

              <div className="hidden md:block w-1/2 pl-12 text-left">
                <h4 className="text-black font-bold text-lg">Décembre 2025</h4>
                <p className="text-gray-400 text-sm">Projet Personnel</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 3: PROJECTS HERO (Hauteur réduite) --- */}
      <section className="relative w-full h-[250px] md:h-[350px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="projets_hero.jpg" 
            alt="Workshop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <h2 className="relative z-10 text-white text-5xl md:text-7xl font-bold uppercase tracking-widest drop-shadow-xl">
          Projets
        </h2>
      </section>

      {/* --- SECTION 4: PROJECTS GRID (DYNAMIQUE) --- */}
      <section className="bg-white py-4">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {portfolioProjects.map((project) => (
              <Link href={project.link} key={project.id}>
                <motion.div 
                   whileHover={{ scale: 1.01 }}
                   className="aspect-[4/3] bg-black overflow-hidden relative group cursor-pointer"
                >
                  {/* Overlay au survol : Titre & Description */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col items-center justify-center text-center p-6">
                    <h3 className="text-[#CEFF00] font-bold uppercase text-xl mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <p className="text-white text-xs font-medium line-clamp-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {project.description}
                    </p>
                  </div>

                  {/* Bouton VOIR (Considéré comme décoratif ici) */}
                  <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-[#CEFF00] text-black text-xs font-bold px-2 py-1 uppercase">VOIR</span>
                  </div>

                  {/* Image du projet */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-60 transition-all duration-500" 
                  />
                </motion.div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* --- SECTION 5: FOOTER / CTA --- */}
      <section className="bg-white py-12 border-t border-gray-100 mt-12">
        <div className="container mx-auto flex flex-col items-center gap-8">
          <div className="flex gap-8 mb-8">
            <Link href="/portfolio">
              <Button className="bg-black text-white hover:bg-[#CEFF00] hover:text-black transition-all duration-300 rounded-full px-8 py-6 text-xs font-bold tracking-widest uppercase border-2 border-black">
                Projets
              </Button>
            </Link>
            <Link href="/cv">
              <Button className="bg-black text-white hover:bg-[#CEFF00] hover:text-black transition-all duration-300 rounded-full px-8 py-6 text-xs font-bold tracking-widest uppercase border-2 border-black">
                CV
              </Button>
            </Link>
          </div>
          
          <div className="w-full h-px bg-gray-200 max-w-4xl mb-4"></div>

          <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-4xl px-4 text-gray-500 text-sm">
            <div className="flex items-center gap-2 font-medium text-black hover:text-[#CEFF00] cursor-pointer transition-colors">
              <Linkedin size={20} className="fill-current" />
              <span>LinkedIn</span>
            </div>
            
            <div className="flex items-center gap-2 font-medium">
               <span className="font-bold text-black">Email :</span>
               {/* Modification: Email cliquable */}
               <a href="mailto:saad.assabar.1@ulaval.ca" className="hover:text-[#CEFF00] cursor-pointer transition-colors">saad.assabar.1@ulaval.ca</a>
            </div>
          </div>
        </div>
        
        <div className="text-center text-[10px] text-gray-400 mt-12 uppercase tracking-wider">
            Copyright © 2026 Saad Assabar
        </div>
      </section>
    </div>
  );
}