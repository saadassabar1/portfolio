import { useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowLeft, ArrowRight } from "lucide-react";

// --- SYSTÈME DE GESTION DES DONNÉES ---
// Ajoutez ou modifiez vos projets ici. Le reste de la page s'adaptera automatiquement.
const projectsData = [
  {
    id: "deneigeuse",
    title: "Déneigeuse Téléguidée",
    subtitle: "ROBOTIQUE & SYSTÈMES EMBARQUÉS",
    description: "Conception complète d'une déneigeuse électrique capable d'opérer dans des conditions hivernales extrêmes (-30°C). Ce projet visait à résoudre la problématique du déneigement résidentiel sans effort physique.",
    details: "Le système repose sur une architecture distribuée avec isolation thermique des batteries. La propulsion est assurée par des moteurs à couple élevé, tandis que le système de soufflerie est indépendant pour maximiser l'efficacité énergétique.",
    heroImage: "/deneigeuse.jpg", 
    mediaImage: "https://images.unsplash.com/photo-1517055729445-3738dc6d8122?q=80&w=1200&auto=format&fit=crop", // Image secondaire pour le contenu
    skills: ["SolidWorks Design", "Impresion 3D (ASA/ABS)", "C++ / Arduino", "Power Management"],
    videoUrl: "" // Optionnel
  },
  {
    id: "ulix",
    title: "Moto Électrique ULIX",
    subtitle: "INGÉNIERIE AUTOMOBILE & COMPÉTITION",
    description: "Participation à la conception de la moto électrique de compétition pour le Moto Student International. Focus spécifique sur l'optimisation du poids et la gestion thermique.",
    details: "J'ai été responsable du dimensionnement du système basse tension (LV) et de l'intégration des capteurs de télémétrie. L'objectif était de réduire le poids du câblage de 15% tout en assurant une redondance critique pour la sécurité pilote.",
    heroImage: "/ulix.jpg",
    mediaImage: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1200&auto=format&fit=crop",
    skills: ["Systèmes Haut Voltage", "Télémétrie CAN Bus", "Altium Designer", "Gestion Thermique"],
  },
  {
    id: "assistant-ia-serveur",
    title: "Assistant IA & Serveur",
    subtitle: "INFRASTRUCTURE & INTELLIGENCE ARTIFICIELLE",
    description: "Création d'une 'Forteresse Numérique' à domicile. Un serveur local hébergeant une IA personnelle et divers services, totalement indépendant du cloud public.",
    details: "L'infrastructure utilise un Lenovo M720q modifié. La stack logicielle inclut Nextcloud, n8n pour l'automatisation, et un modèle LLM local quantizé pour tourner sur CPU. L'architecture réseau est en Zero Trust via Cloudflare Tunnels.",
    heroImage: "/serveur.jpg",
    mediaImage: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=1200&auto=format&fit=crop",
    skills: ["Docker & Kubernetes", "Linux SysAdmin", "Réseautique (DNS/Reverse Proxy)", "Local LLM Integration"],
  },
  {
    id: "capteur-stm32",
    title: "Capteur IoT STM32",
    subtitle: "MICROCONTRÔLEURS & LOW POWER",
    description: "Développement d'un nœud de capteur ultra-basse consommation capable de fonctionner plusieurs années sur une simple pile bouton.",
    details: "Programmation Bare-metal sur STM32. Utilisation intensive des modes 'Deep Sleep' et des interruptions RTC (Real Time Clock) pour réveiller le processeur uniquement à 8h00 chaque matin pour la prise de mesure et l'envoi de données.",
    heroImage: "/capteurSTM32.jpg",
    mediaImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    skills: ["C Embedded", "STM32 CubeIDE", "Gestion d'énergie", "Protocoles I2C/SPI"],
  },
  {
    id: "moniteur-energie",
    title: "Moniteur Énergétique",
    subtitle: "TRAITEMENT DE SIGNAL & ÉLECTRONIQUE",
    description: "Système non-intrusif de mesure de consommation électrique résidentielle. Se clipse directement sur l'entrée principale du panneau électrique.",
    details: "Utilisation de transformateurs de courant (CT Clamp) et d'un ESP32 pour l'échantillonnage à haute fréquence. Algorithme FFT (Fast Fourier Transform) implémenté pour analyser la signature du courant et identifier les appareils actifs.",
    heroImage: "/moniteur.jpg",
    mediaImage: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1200&auto=format&fit=crop",
    skills: ["Traitement de Signal (DSP)", "ESP32", "IoT Dashboard", "Calibration de capteurs"],
  },
  {
    id: "simulation-reseaux",
    title: "Simulation RLC MATLAB",
    subtitle: "ANALYSE NUMÉRIQUE & MODÉLISATION",
    description: "Modélisation mathématique complexe de circuits RLC en régime alternatif transitoire et permanent.",
    details: "Développement de scripts MATLAB pour résoudre les équations différentielles du second ordre. Visualisation des réponses fréquentielles (Diagramme de Bode) et analyse de la stabilité du système.",
    heroImage: "/simulation_reseaux.jpg",
    mediaImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop",
    skills: ["MATLAB / Simulink", "Mathématiques Appliquées", "Théorie des Circuits", "Analyse de Données"],
  }
];

export default function ProjectPage() {
  const [match, params] = useRoute("/project/:id");
  const [location, setLocation] = useLocation();

  // 1. Récupération du projet actuel
  const projectId = params?.id;
  const currentIndex = projectsData.findIndex(p => p.id === projectId);
  
  // Gestion d'erreur (si ID introuvable, on prend le premier ou redirige)
  const project = currentIndex !== -1 ? projectsData[currentIndex] : projectsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  // --- SYSTÈME AUTOMATIQUE : AUTRES PROJETS ---
  // Calcul mathématique pour trouver les voisins en boucle (Circular Buffer)
  const len = projectsData.length;
  
  const getNeighbor = (offset: number) => {
    // La formule (i + offset + len) % len assure qu'on boucle correctement 
    return projectsData[(currentIndex + offset + len) % len];
  };

  const otherProjects = [
    getNeighbor(-2), // 2 projets avant
    getNeighbor(-1), // 1 projet avant
    getNeighbor(1),  // 1 projet après
    getNeighbor(2)   // 2 projets après
  ];

  // Navigation Précédent / Suivant (pour les flèches du bas)
  const prevProjectLink = `/project/${getNeighbor(-1).id}`;
  const nextProjectLink = `/project/${getNeighbor(1).id}`;

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#1a1a1a] selection:bg-[#CEFF00] selection:text-black">

      {/* --- NAVBAR (Cohérente avec la Home) --- */}
      <nav className="absolute top-0 left-0 right-0 z-20 w-full px-8 py-6 flex justify-between items-center text-white">
          <div className="font-bold text-2xl tracking-tighter border-2 border-white p-1 hover:border-[#CEFF00] hover:text-[#CEFF00] transition-colors duration-300">
            <Link href="/">SA</Link>
          </div>
          <ul className="hidden md:flex gap-8 text-sm md:text-base font-medium uppercase tracking-wider">
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/">Accueil</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/cv">CV</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/portfolio">Projets</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/about">À propos</Link></li>
            <li className="hover:text-[#CEFF00] cursor-pointer transition-colors duration-300"><Link href="/contact">Contact</Link></li>
          </ul>
      </nav>

      {/* --- HERO IMAGE (Hauteur réduite à 350px) --- */}
      <section className="relative w-full h-[350px] overflow-hidden bg-black flex-shrink-0">
        <div className="absolute inset-0">
          <img 
            src={project.heroImage} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-8">
          <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-widest drop-shadow-xl mb-4">
            {project.title}
          </h1>
          <p className="text-white/80 text-sm md:text-lg font-light tracking-widest uppercase">
            {project.subtitle}
          </p>
        </div>
        
        {/* Disclaimer style "NDA" */}
        <div className="absolute bottom-4 left-0 right-0 text-center px-4">
           <p className="text-[10px] text-gray-400 italic">
             * Certaines informations techniques complexes peuvent être simplifiées pour la présentation publique.
           </p>
        </div>
      </section>

      {/* --- CONTENU DESCRIPTIF (Flex-grow pour pousser le footer) --- */}
      <section className="container mx-auto px-4 py-20 max-w-5xl flex-grow">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Texte */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-black uppercase tracking-tight">
              Aperçu du projet
            </h2>
            <div className="w-20 h-1 bg-[#CEFF00] mb-6"></div>
            
            <p className="text-lg leading-relaxed text-gray-700">
              {project.description}
            </p>
            <p className="text-base leading-relaxed text-gray-600">
              {project.details}
            </p>
          </div>

          {/* Média Support (Image/Vidéo) */}
          <div className="w-full md:w-1/2">
            {/* Modification: rounded-none pour coins carrés */}
            <div className="rounded-none overflow-hidden shadow-2xl border border-gray-100">
               <img 
                 src={project.mediaImage} 
                 alt="Project Detail" 
                 className="w-full h-auto object-cover"
               />
            </div>
            <p className="text-xs text-gray-400 mt-2 text-center italic">Vue détaillée du prototype / environnement</p>
          </div>

        </div>
      </section>

      {/* --- SECTION TOP COMPÉTENCES UTILISÉES --- */}
      <section className="container mx-auto px-4 mb-24 max-w-5xl flex-shrink-0">
        <div className="bg-[#1a1a1a] text-white py-3 text-center uppercase font-bold tracking-widest text-xl md:text-2xl shadow-md">
          Top Compétences Utilisées
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {project.skills.map((skill, index) => (
             <div key={index} className="bg-[#2D2D2D] text-white py-4 px-6 flex items-center justify-center text-center font-bold uppercase tracking-wider text-sm md:text-base shadow-sm hover:bg-[#CEFF00] hover:text-black transition-colors duration-300 cursor-default">
               {skill}
             </div>
          ))}
        </div>
      </section>

      {/* --- SECTION OTHER PROJECTS HERO --- */}
      <section className="relative w-full h-[300px] overflow-hidden bg-[#1a1a1a] flex items-center justify-center mb-1 flex-shrink-0">
         <div className="absolute inset-0">
          <img 
             src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2000&auto=format&fit=crop" 
             alt="Other Projects Background" 
             className="w-full h-full object-cover opacity-40 grayscale"
          />
         </div>
         <h2 className="relative z-10 text-white text-4xl md:text-5xl font-bold uppercase tracking-widest drop-shadow-xl border-b-4 border-[#CEFF00] pb-2">
            Autres Projets
         </h2>
      </section>

      {/* --- GRILLE AUTRES PROJETS & NAVIGATION --- */}
      <section className="bg-white pb-16 flex-shrink-0">
        <div className="container mx-auto max-w-6xl px-4">
          
          {/* Grille 2x2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherProjects.map((p) => (
              <Link href={`/project/${p.id}`} key={p.id}>
                <div className="group cursor-pointer relative aspect-[16/9] overflow-hidden bg-black">
                   <img 
                      src={p.heroImage} 
                      alt={p.title} 
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                   />
                   <div className="absolute bottom-0 left-0 right-0 bg-black py-3 px-4 flex justify-between items-center">
                      <span className="text-white font-bold uppercase text-sm tracking-wider">{p.title}</span>
                      <ArrowRight size={16} className="text-[#CEFF00] opacity-0 group-hover:opacity-100 transition-opacity" />
                   </div>
                </div>
              </Link>
            ))}
          </div>

          {/* --- NAVIGATION BOUTONS & FLÈCHES --- */}
          <div className="mt-16 flex flex-col items-center gap-8">
            
            {/* Bouton Central */}
            <Link href="/portfolio">
               {/* Modification: hover:border-black pour garder la bordure noire sur fond vert */}
               <button className="bg-black text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest border-2 border-black hover:bg-[#CEFF00] hover:text-black hover:border-black transition-all duration-300">
                 Tous les projets
               </button>
            </Link>

            {/* Navigation Précédent / Suivant (Boutons noirs pour visibilité) */}
            <div className="w-full flex justify-between items-center px-4 md:px-0">
              
              <Link href={prevProjectLink}>
                <div className="bg-black border-2 border-black rounded-full px-4 py-2 flex items-center gap-2 text-[#CEFF00] hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all shadow-md group">
                  <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                  <span className="font-bold uppercase tracking-widest text-xs md:text-sm">Précédent</span>
                </div>
              </Link>

              <Link href={nextProjectLink}>
                <div className="bg-black border-2 border-black rounded-full px-4 py-2 flex items-center gap-2 text-[#CEFF00] hover:bg-white hover:text-black hover:border-black cursor-pointer transition-all shadow-md group">
                  <span className="font-bold uppercase tracking-widest text-xs md:text-sm">Suivant</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>

            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER (Modification: pt-8 et pb-0 pour coller au bas) --- */}
      <footer className="bg-[#f3f4f6] border-t border-gray-200 pt-8 pb-0 mb-0 flex-shrink-0">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          
          <a 
            href="https://linkedin.com/in/saad-assabar" 
            target="_blank" 
            className="flex items-center gap-3 bg-[#0077b5] text-white px-4 py-2 rounded shadow-sm hover:bg-[#005e93] transition-colors font-semibold text-sm"
          >
            <Linkedin size={18} fill="white" />
            <span>LinkedIn</span>
          </a>

          <div className="text-gray-600 text-sm font-medium">
            Email : <a href="mailto:saad.assabar.1@ulaval.ca" className="text-black hover:text-[#CEFF00] transition-colors hover:underline">saad.assabar.1@ulaval.ca</a>
          </div>
        </div>
        
        {/* Copyright - Dernier élément, pas de margin-bottom, colle au bas grâce au pb-0 du parent */}
        <div className="bg-[#1a1a1a] text-gray-400 text-[10px] text-center py-4 mt-8 uppercase tracking-wider mb-0 w-full">
           Copyright © 2026 Saad Assabar
        </div>
      </footer>

    </div>
  );
}