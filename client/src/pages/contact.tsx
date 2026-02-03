import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  // Hook Formspree
  const [state, handleSubmit] = useForm("mjgbvaqn");

  // --- ÉCRAN DE SUCCÈS ---
  if (state.succeeded) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#1a1a1a]">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-center p-8 border-2 border-black rounded-3xl"
        >
          <CheckCircle2 className="w-16 h-16 text-[#CEFF00] mx-auto mb-4 bg-black rounded-full p-2" />
          <h2 className="text-3xl font-bold uppercase tracking-wider mb-2">Message envoyé !</h2>
          <p className="text-gray-600 mb-8">Je vous répondrai dans les plus brefs délais.</p>
          <Link href="/">
            <Button className="bg-black text-white hover:bg-[#CEFF00] hover:text-black rounded-full px-8 py-6 font-bold tracking-widest uppercase transition-all">
              Retour à l'accueil
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

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
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/about">À propos</Link></li>
            <li className="text-[#CEFF00] cursor-pointer transition-colors duration-300 border-b-2 border-[#CEFF00]"><Link href="/contact">Contact</Link></li>
          </ul>
      </nav>

      {/* --- HEADER IMAGE --- */}
      <section className="relative w-full h-[400px] flex items-center justify-center overflow-hidden bg-black flex-shrink-0">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop" 
            alt="Contact Header" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-white text-5xl md:text-7xl font-bold uppercase tracking-widest drop-shadow-xl text-center"
        >
          CONTACTEZ-MOI
        </motion.h1>
      </section>

      {/* --- CONTENU PRINCIPAL --- */}
      <section className="container mx-auto px-6 py-16 max-w-6xl flex-grow">
        <div className="grid md:grid-cols-2 gap-16">

          {/* COLONNE GAUCHE : FORMULAIRE */}
          <div>
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-8 border-l-4 border-[#CEFF00] pl-4">
              DISCUTONS !
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-bold text-sm uppercase tracking-wider">Votre Nom <span className="text-red-500">*</span></label>
                <Input 
                  id="name" 
                  name="name" 
                  required 
                  className="bg-gray-50 border-gray-200 focus:border-black focus:ring-0 rounded-none h-12" 
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="font-bold text-sm uppercase tracking-wider">Email <span className="text-red-500">*</span></label>
                <Input 
                  id="email" 
                  type="email" 
                  name="email" 
                  required 
                  className="bg-gray-50 border-gray-200 focus:border-black focus:ring-0 rounded-none h-12" 
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="font-bold text-sm uppercase tracking-wider">Message <span className="text-red-500">*</span></label>
                <Textarea 
                  id="message" 
                  name="message" 
                  required 
                  className="bg-gray-50 border-gray-200 focus:border-black focus:ring-0 rounded-none min-h-[150px]" 
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
              </div>

              {/* Bouton Envoyer MODIFIÉ : Vert Électrique (#CEFF00) */}
              <Button 
                type="submit" 
                disabled={state.submitting} 
                className="w-full md:w-auto bg-[#CEFF00] hover:bg-[#b5e600] text-black font-bold uppercase tracking-widest px-8 py-6 rounded-full shadow-lg transition-all"
              >
                {state.submitting ? "Envoi..." : "Envoyer le message"}
              </Button>
            </form>
          </div>

          {/* COLONNE DROITE : INFO CONTACT */}
          <div className="flex flex-col items-start">
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-8 border-l-4 border-[#CEFF00] pl-4">
              INFO CONTACT
            </h2>

            <div className="space-y-8 mt-2">
              
              {/* LinkedIn */}
              <div className="flex flex-col gap-2">
                 <a 
                    href="https://linkedin.com/in/saad-assabar" 
                    target="_blank"
                    className="inline-flex"
                 >
                    <div className="bg-[#0077b5] text-white p-4 rounded-lg shadow-md hover:scale-110 transition-transform cursor-pointer">
                        <Linkedin size={32} />
                    </div>
                 </a>
                 <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">LinkedIn</span>
                 <a href="https://linkedin.com/in/saad-assabar" target="_blank" className="font-medium hover:text-[#0077b5] transition-colors">
                    linkedin.com/in/saad-assabar
                 </a>
              </div>

              {/* Email MODIFIÉ : Cliquable avec mailto */}
              <div className="flex flex-col gap-2 mt-4">
                 <a 
                    href="mailto:saad.assabar.1@ulaval.ca"
                    className="inline-flex"
                 >
                    <div className="bg-black text-[#CEFF00] p-4 rounded-lg shadow-md hover:scale-110 transition-transform cursor-pointer">
                        <Mail size={32} />
                    </div>
                 </a>
                 <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mt-1">Email</span>
                 <a href="mailto:saad.assabar.1@ulaval.ca" className="font-medium hover:text-[#CEFF00] transition-colors">
                    saad.assabar.1@ulaval.ca
                 </a>
              </div>

            </div>
          </div>

        </div>

        {/* BOUTON ACCUEIL */}
        <div className="flex justify-center mt-20 mb-8">
            <Link href="/">
                <Button className="bg-black text-white hover:bg-[#CEFF00] hover:text-black rounded-full px-12 py-8 text-sm font-bold tracking-[0.2em] uppercase shadow-2xl border-2 border-black transition-all duration-300">
                    Accueil
                </Button>
            </Link>
        </div>

      </section>

      {/* --- FOOTER MODIFIÉ : pb-0 pour enlever l'espace du bas --- */}
      <footer className="bg-[#f3f4f6] border-t border-gray-200 pt-6 pb-0 mt-auto">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          
          <a 
            href="https://linkedin.com/in/saad-assabar" 
            target="_blank" 
            className="flex items-center gap-2 text-[#0077b5] font-bold hover:underline"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>

          <div className="text-gray-600 text-sm font-medium">
            Email : <a href="mailto:saad.assabar.1@ulaval.ca" className="text-black hover:text-[#CEFF00] transition-colors">saad.assabar.1@ulaval.ca</a>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="bg-[#1a1a1a] text-gray-400 text-[10px] text-center py-4 uppercase tracking-wider w-full">
           Copyright © 2026 Saad Assabar
        </div>
      </footer>

    </div>
  );
}