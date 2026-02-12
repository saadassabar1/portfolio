import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

export default function About() {
  
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-[#CEFF00] selection:text-black flex flex-col">
      
      {/* --- NAVBAR --- */}
      <nav className="absolute top-0 left-0 right-0 z-20 w-full px-8 py-6 flex justify-between items-center text-white">
          <div className="font-bold text-2xl tracking-tighter border-2 border-white p-1 hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors duration-300">
            <Link href="/">SA</Link>
          </div>
          <ul className="hidden md:flex gap-8 text-sm md:text-base font-medium uppercase tracking-wider">
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/">Accueil</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/cv">CV</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/portfolio">Projets</Link></li>
            {/* Lien Actif */}
            <li className="text-[#CEFF00] cursor-pointer transition-colors duration-300 border-b-2 border-[#CEFF00]"><Link href="/about">À propos</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/contact">Contact</Link></li>
          </ul>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-black shrink-0">
        {/* Image de fond "Laboratoire / Université" */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2000&auto=format&fit=crop" 
            alt="Engineering Lab" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        {/* Titre */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 text-white text-6xl md:text-8xl font-bold uppercase tracking-widest drop-shadow-xl"
        >
          À PROPOS
        </motion.h1>
      </section>

      {/* --- CONTENU PRINCIPAL --- */}
      <section className="container mx-auto px-6 py-12 max-w-6xl flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* COLONNE GAUCHE : Texte + Bouton CV */}
          <div className="flex flex-col items-start gap-6">
            {/* MODIFICATION ICI : 
                Ajout de "md:ml-16" pour ajouter une grande marge à gauche 
                sur les écrans desktop, poussant le texte vers la droite.
            */}
            <div className="text-base text-justify leading-relaxed text-gray-700 space-y-4 md:ml-4">
              <p>
                Bonjour ! Je m'appelle Saad Assabar et je suis actuellement étudiant en génie électrique à l'Université Laval.
              </p>
              <p>
                Ma passion pour l'ingénierie a commencé bien avant mes études, j'ai toujours cherché à automatiser et entreprendre des projets pour simplifier mon quotidien. Aujourd'hui, je canalise cette passion dans la conception de systèmes embarqués et l'optimisation énergétique.
              </p>
              <p className="mb-2">
                Vous pouvez en apprendre plus sur mon parcours académique dans mon CV : 
              </p>
            </div>

            {/* Bouton CV Centré */}
            <div className="w-full flex justify-center mt-2">
              <Link href="/cv">
                <Button className="bg-black text-white hover:bg-[#CEFF00] hover:text-black transition-all duration-300 rounded-full px-10 py-6 text-sm font-bold tracking-widest uppercase shadow-lg border-2 border-black">
                  Voir mon CV
                </Button>
              </Link>
            </div>
          </div>

          {/* COLONNE DROITE : Image + Légende */}
          <div className="flex flex-col gap-4 items-center">
            {/* Image PAYSAGE modéré (aspect 4/3) et largeur max moyenne */}
            <div className="overflow-hidden shadow-2xl aspect-[4/3] w-full max-w-md">
              <img 
                src="" 
                alt="Saad en action" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Légende */}
            <p className="text-center text-sm text-gray-500 italic">
              
            </p>
          </div>

        </div>

        {/* --- BOUTON ACCUEIL --- */}
        <div className="flex justify-center mt-8">
          <Link href="/">
            <Button className="bg-black text-white hover:bg-[#CEFF00] hover:text-black transition-all duration-300 rounded-full px-12 py-6 text-sm font-bold tracking-widest uppercase shadow-lg border-2 border-black">
              Accueil
            </Button>
          </Link>
        </div>

      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#f3f4f6] border-t border-gray-200 pt-4 pb-0 mt-4 w-full mt-auto">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* LinkedIn Button */}
          <a 
            href="https://linkedin.com/in/saad-assabar" 
            target="_blank" 
            className="flex items-center gap-2 bg-[#0077b5] text-white px-4 py-2 rounded shadow-sm hover:bg-[#005e93] transition-colors font-semibold text-sm"
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
        <div className="bg-[#1a1a1a] text-gray-400 text-[10px] text-center py-4 mt-4 uppercase tracking-wider w-full">
           Copyright © 2026 Saad Assabar
        </div>
      </footer>
    </div>
  );
}