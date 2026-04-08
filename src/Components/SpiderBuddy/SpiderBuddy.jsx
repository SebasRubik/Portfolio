import React, { useEffect, useState } from 'react';
import './SpiderBuddy.css';

export default function SpiderBuddy() {
  const [position, setPosition] = useState({ x: window.innerWidth / 2, y: 150 });
  const [rotation, setRotation] = useState(0);
  const [isWalking, setIsWalking] = useState(false);

  useEffect(() => {
    let animationFrame;
    
    // Posiciones
    let currentX = window.innerWidth / 2;
    let currentY = 150;
    
    let targetX = currentX;
    let targetY = currentY;

    let mouseX = -1000;
    let mouseY = -1000;
    
    let isFleeing = false;
    let pauseTimer = 0;

    // Generar un nuevo nodo imaginario donde caminar
    const pickNewNode = () => {
      // Las telarañas tienen líneas rectas abruptas
      // Hacemos que se mueva en distancias cortas y rectas simulando enlaces
      const angle = Math.random() * Math.PI * 2;
      const distance = 80 + Math.random() * 100; 
      targetX = currentX + Math.cos(angle) * distance;
      targetY = currentY + Math.sin(angle) * distance;
      
      // Mantener en límites
      targetX = Math.max(20, Math.min(window.innerWidth - 20, targetX));
      targetY = Math.max(20, Math.min(600, targetY));
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY + window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const distToMouse = Math.hypot(mouseX - currentX, mouseY - currentY);

      if (distToMouse < 100) {
        // Huye de repente en dirección recta contraria al mouse
        if (!isFleeing) {
          isFleeing = true;
          const escAngle = Math.atan2(currentY - mouseY, currentX - mouseX);
          targetX = currentX + Math.cos(escAngle) * 200;
          targetY = currentY + Math.sin(escAngle) * 200;
          targetX = Math.max(10, Math.min(window.innerWidth - 10, targetX));
          targetY = Math.max(10, Math.min(700, targetY));
        }
      } else {
        isFleeing = false;
      }

      const dx = targetX - currentX;
      const dy = targetY - currentY;
      const distToTarget = Math.hypot(dx, dy);

      if (pauseTimer > 0) {
        pauseTimer--;
        setIsWalking(false);
      } else if (distToTarget > 2) {
        setIsWalking(true);
        // Movimiento constante y lineal, NO curvado ni easing fluido (para parecer que camina en un hilo tenso)
        const speed = isFleeing ? 8 : 1.2;
        const normalizedDx = dx / distToTarget;
        const normalizedDy = dy / distToTarget;
        
        currentX += normalizedDx * speed;
        currentY += normalizedDy * speed;

        const angle = Math.atan2(normalizedDy, normalizedDx) * (180 / Math.PI) + 90;
        setRotation(angle);
      } else {
        // Llegó al nodo imaginario. Esperar un poco antes de moverse a otro (comportamiento de araña)
        currentX = targetX;
        currentY = targetY;
        setIsWalking(false);
        if (!isFleeing && Math.random() < 0.02) { // Probabilidad aleatoria de caminar
          pickNewNode();
          pauseTimer = 30 + Math.random() * 60; // Pausa antes de moverse
        }
      }

      setPosition({ x: currentX, y: currentY });
      animationFrame = requestAnimationFrame(animate);
    };

    pickNewNode();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div 
      className={`spider-buddy ${isWalking ? 'walking' : ''}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg)`
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="14" r="4" fill="#1A1A1A" />
        <circle cx="12" cy="8" r="2.5" fill="#1A1A1A" />
        <path d="M4 4L9 8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 10L8 11" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 16L8 14" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 21L10 16" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 4L15 8" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 10L16 11" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M21 16L16 14" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 21L14 16" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" />
        {/* Ojos */}
        <circle cx="11.5" cy="7.5" r="0.6" fill="#E23636" />
        <circle cx="12.5" cy="7.5" r="0.6" fill="#E23636" />
      </svg>
    </div>
  );
}
