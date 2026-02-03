import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Download, Home, Linkedin, Mail } from "lucide-react";

export default function Resume() {
  
  // Animation simple pour l'apparition
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#CEFF00] selection:text-black">
      
      {/* --- NAVBAR (Cohérente avec la Home) --- */}
      <nav className="absolute top-0 left-0 right-0 z-20 w-full px-8 py-6 flex justify-between items-center text-white">
          <div className="font-bold text-2xl tracking-tighter border-2 border-white p-1 hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors duration-300">
            <Link href="/">SA</Link>
          </div>
          <ul className="hidden md:flex gap-8 text-sm md:text-base font-medium uppercase tracking-wider">
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/">Accueil</Link></li>
            {/* CORRECTION ICI : Le lien pointe maintenant vers /cv pour correspondre à App.tsx */}
            <li className="text-[#CEFF00] cursor-pointer transition-colors duration-300 border-b-2 border-[#CEFF00]"><Link href="/cv">CV</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/portfolio">Projets</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/about">À propos</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/contact">Contact</Link></li>
          </ul>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden">
        {/* Image de fond "Génie Électrique" */}
        <div className="absolute inset-0">
          <img 
            src="/cv_hero.png" 
            alt="Electrical Engineering" 
            className="w-full h-full object-cover"
          />
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Titre CV */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-white text-6xl md:text-7xl font-bold uppercase tracking-widest"
        >
          CV
        </motion.h1>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="container mx-auto px-4 py-16 flex flex-col items-center gap-12 max-w-5xl">
        
        {/* BOUTON TÉLÉCHARGER (Noir style pilule) */}
        <motion.div 
          initial="hidden" animate="visible" variants={fadeIn}
        >
          <a href="/cv_saad_assabar.pdf" download="ASSABAR Saad - CV - G. Électrique.pdf">
            <Button className="bg-black text-white hover:bg-[#CEFF00] hover:text-black transition-all duration-300 rounded-full px-10 py-6 text-sm font-bold tracking-widest uppercase border-2 border-black">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Télécharger CV PDF
            </Button>
          </a>
        </motion.div>

        {/* IMAGE DU CV (Lecture rapide) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full shadow-2xl border border-gray-200"
        >
          {/* Assurez-vous que l'image 'CV - Génie.jpg' est dans le dossier public sous le nom 'cv_preview.jpg' */}
          <img 
            src="/cv_preview.jpg" 
            alt="CV Saad Assabar" 
            className="w-full h-auto object-contain bg-white"
          />
        </motion.div>

        {/* BOUTON ACCUEIL (En bas) */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-8"
        >
          <Link href="/">
            <Button className="bg-black text-white hover:bg-[#CEFF00] hover:text-black transition-all duration-300 rounded-full px-12 py-6 text-sm font-bold tracking-widest uppercase border-2 border-black">
              Accueil
            </Button>
          </Link>
        </motion.div>

      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#111] text-white py-12 mt-12 border-t-4 border-[#CEFF00]">
        <div className="container mx-auto flex flex-col items-center gap-6">
           <div className="flex gap-6 text-gray-400">
             <a href="https://linkedin.com/in/saad-assabar" target="_blank" className="hover:text-[#CEFF00] transition-colors"><Linkedin /></a>
             <a href="mailto:saad.assabar.1@ulaval.ca" className="hover:text-[#CEFF00] transition-colors"><Mail /></a>
           </div>
           <div className="text-center text-xs text-gray-500 uppercase tracking-wider">
              Copyright © 2026 Saad Assabar
           </div>
        </div>
      </footer>
    </div>
  );
}