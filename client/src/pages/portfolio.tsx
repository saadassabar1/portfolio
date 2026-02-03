import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- DONNÉES DES PROJETS ---
const projectsData = [
  {
    id: 1,
    title: "Déneigeuse Téléguidée",
    description: "Déneigeuse électrique téléguidée par manette et dotée d’un système de souffleuse indépendant.",
    category: ["PERSONNEL", "ÉNERGIE", "SYSTÈMES EMBARQUÉS"],
    image: "/deneigeuse.jpg", 
    link: "/project/deneigeuse"
  },
  {
    id: 2,
    title: "Moto Électrique ULIX",
    description: "Système de batterie basse tension et télémétrie.",
    category: ["ÉQUIPES ÉTUDIANTES", "ÉNERGIE", "SYSTÈMES EMBARQUÉS"],
    image: "/ulix.jpg",
    link: "/project/ulix"
  },
  {
    id: 3,
    title: "Assistant IA & Serveur Domestique",
    description: "Développement d'une infrastructure cloud privée et d’automatisation locale avec architecture de sécurité Zero Trust et contrôle déterministe.",
    category: ["PERSONNEL", "SYSTÈMES EMBARQUÉS"],
    image: "/serveur.jpg",
    link: "/project/assistant-ia-serveur"
  },
  {
    id: 4,
    title: "Capteur d'Humidité STM32",
    description: "STM32 Nucleo en sommeil, se réveillant quotidiennement à 8h00AM pour prendre une mesure de l’humidité de son environnement.",
    category: ["PERSONNEL", "SYSTÈMES EMBARQUÉS"],
    image: "/capteurSTM32.jpg",
    link: "/project/capteur-stm32"
  },
  {
    id: 5,
    title: "Moniteur de Consommation Énergétique",
    description: "Dispositif capable de mesurer la consommation électrique de l'entrée électrique principale d'un logement de manière non intrusive.",
    category: ["PERSONNEL", "ÉNERGIE"],
    image: "/moniteur.jpg",
    link: "/project/moniteur-energie"
  },
  {
    id: 6,
    title: "Simulation de Réseaux",
    description: "MATLAB pour modéliser des circuits simples RLC en régime alternatif.",
    category: ["PERSONNEL", "ÉNERGIE"],
    image: "/simulation_reseaux.jpg",
    link: "/project/simulation-reseaux"
  }
];

// Liste des filtres disponibles
const filters = ["TOUS", "PERSONNEL", "ÉQUIPES ÉTUDIANTES", "ÉNERGIE", "SYSTÈMES EMBARQUÉS"];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("TOUS");

  // Logique de filtrage (Corrigée)
  const filteredProjects = activeFilter === "TOUS" 
    ? projectsData 
    : projectsData.filter(project => project.category.includes(activeFilter));

  return (
    // Ajout de 'flex flex-col' au conteneur principal pour s'assurer que le footer reste en bas si le contenu est court
    <div className="min-h-screen flex flex-col bg-white text-[#1a1a1a] font-sans selection:bg-[#CEFF00] selection:text-black">
      
      {/* --- NAVBAR --- */}
      <nav className="absolute top-0 left-0 right-0 z-20 w-full px-8 py-6 flex justify-between items-center text-white">
          <div className="font-bold text-2xl tracking-tighter border-2 border-white p-1 hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors duration-300">
            <Link href="/">SA</Link>
          </div>
          <ul className="hidden md:flex gap-8 text-sm md:text-base font-medium uppercase tracking-wider">
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/">Accueil</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/cv">CV</Link></li>
            {/* Lien Actif */}
            <li className="text-[#CEFF00] cursor-pointer transition-colors duration-300 border-b-2 border-[#CEFF00]"><Link href="/portfolio">Projets</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/about">À propos</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/contact">Contact</Link></li>
          </ul>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-black flex-shrink-0">
        <div className="absolute inset-0">
          <img 
            src="/projets_hero.jpg" 
            alt="Engineering Tools" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-white text-6xl md:text-8xl font-bold uppercase tracking-widest drop-shadow-xl"
        >
          Projets
        </motion.h1>
      </section>

      {/* --- CONTENU PRINCIPAL --- */}
      {/* flex-grow permet de pousser le footer vers le bas si la liste est vide ou courte */}
      <section className="container mx-auto px-4 py-8 max-w-7xl flex-grow">
        
        <div className="text-center mb-8">
          <p className="text-xl md:text-2xl text-gray-700 font-light">
            Cliquez sur chaque image pour en apprendre plus !
          </p>
        </div>

        {/* --- FILTRES --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`
                px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border-2
                ${activeFilter === filter 
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a] shadow-lg scale-105" 
                  : "bg-gray-100 text-gray-500 border-gray-100 hover:bg-[#CEFF00] hover:text-black hover:border-[#CEFF00]"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* --- GRILLE DE PROJETS --- */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="relative aspect-square group overflow-hidden cursor-pointer bg-gray-100"
              >
                <Link href={project.link}>
                  <div className="w-full h-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                      <h3 className="text-[#CEFF00] text-2xl font-bold uppercase tracking-wider mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                        {project.title}
                      </h3>
                      <p className="text-white text-sm font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                        {project.description}
                      </p>
                      <span className="mt-6 px-4 py-2 border border-white text-white text-xs uppercase tracking-widest hover:bg-[#CEFF00] hover:text-black hover:border-[#CEFF00] transition-colors">
                        Voir le projet
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </section>

      {/* --- FOOTER --- */}
      {/* Modification : Remplacement de py-8 par pt-8 pour supprimer l'espace du bas */}
      <footer className="bg-[#f3f4f6] border-t border-gray-200 pt-8 mt-12">
        <div className="container mx-auto px-20 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/saad-assabar" 
            target="_blank" 
            className="flex items-center gap-4 bg-[#0077b5] text-white px-4 py-2 rounded shadow-sm hover:bg-[#005e93] transition-colors font-semibold text-sm"
          >
            <Linkedin size={18} fill="white" />
            <span>LinkedIn</span>
          </a>

          {/* Email Text */}
          <div className="text-gray-600 text-sm font-medium">
            Email : <a href="mailto:saad.assabar.1@ulaval.ca" className="text-black hover:text-[#CEFF00] transition-colors hover:underline">saad.assabar.1@ulaval.ca</a>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="bg-[#1a1a1a] text-gray-400 text-[10px] text-center py-4 mt-8 uppercase tracking-wider">
           Copyright © 2026 Saad Assabar
        </div>
      </footer>
    </div>
  );
}