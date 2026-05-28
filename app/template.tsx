// src/app/template.tsx
"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      // 1. Stato iniziale: Invisibile e leggermente spostato verso il basso (12px)
      initial={{ opacity: 0, y: 12 }}
      // 2. Stato di ingresso: Diventa visibile e torna alla sua posizione originale
      animate={{ opacity: 1, y: 0 }}
      // 3. Configurazione del timing dell'animazione
      transition={{
        type: "spring", // Usa una fisica a molla per un movimento più naturale
        stiffness: 260, // Rigidità della molla
        damping: 30, // Controllo del rimbalzo (morbido e professionale)
        duration: 0.4, // Durata totale della transizione (400ms)
      }}
    >
      {children}
    </motion.div>
  );
}
