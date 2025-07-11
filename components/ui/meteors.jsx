// components/ui/meteors.jsx

"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react"; // 1. Importa useState e useEffect

export const Meteors = ({ number, className }) => {
    const meteors = new Array(number || 20).fill(true);

    // 2. Crea uno stato per memorizzare gli stili delle meteore
    const [meteorStyles, setMeteorStyles] = useState([]);

    // 3. Usa useEffect per generare gli stili casuali SOLO sul client
    useEffect(() => {
        // Questa funzione viene eseguita solo una volta, dopo che il componente è stato montato nel browser
        const styles = meteors.map(() => ({
            top: -40, // Inizia sempre sopra il container
            left: Math.floor(Math.random() * 800) - 400 + "px", // Posizione orizzontale casuale
            animationDelay: Math.random() * 5 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 5) + 5) + "s",
        }));
        setMeteorStyles(styles);
    }, []); // L'array vuoto [] assicura che questo effetto venga eseguito solo una volta

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {meteorStyles.map((style, idx) => (
                // Ora il componente usa gli stili generati e salvati nello stato
                <span
                    key={"meteor" + idx}
                    className={cn(
                        "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
                        "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
                        className
                    )}
                    // 4. Applica gli stili pre-calcolati
                    style={style}
                ></span>
            ))}
        </motion.div>
    );
};