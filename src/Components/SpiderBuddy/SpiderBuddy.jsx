import React, { useEffect, useState } from 'react';
import './SpiderBuddy.css';

export default function SpiderBuddy() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [rotation, setRotation] = useState(0);
  const [isWalking, setIsWalking] = useState(false);

  useEffect(() => {
    let animationFrame;
    
    // Limits for the top-left sector
    const maxX = Math.min(400, window.innerWidth / 2);
    const maxY = Math.min(400, window.innerHeight / 2);
    
    let currentX = 50;
    let currentY = 50;
    
    let targetX = currentX;
    let targetY = currentY;

    let mouseX = -1000;
    let mouseY = -1000;
    
    let isFleeing = false;
    let pauseTimer = 0;

    const pickNewNode = () => {
      // Ángulo y distancia aleatoria
      const angle = Math.random() * Math.PI * 2;
      const distance = 50 + Math.random() * 150; 
      
      targetX = currentX + Math.cos(angle) * distance;
      targetY = currentY + Math.sin(angle) * distance;
      
      // Mantener estrictamente en la esquina superior izquierda
      targetX = Math.max(10, Math.min(maxX, targetX));
      targetY = Math.max(10, Math.min(maxY, targetY));
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const distToMouse = Math.hypot(mouseX - currentX, mouseY - currentY);

      if (distToMouse < 100) {
        // Huye del mouse si se acerca, pero sin salir de su sector superior izquierdo
        if (!isFleeing) {
          isFleeing = true;
          const escAngle = Math.atan2(currentY - mouseY, currentX - mouseX);
          targetX = currentX + Math.cos(escAngle) * 150;
          targetY = currentY + Math.sin(escAngle) * 150;
          targetX = Math.max(10, Math.min(maxX, targetX));
          targetY = Math.max(10, Math.min(maxY, targetY));
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
        // Movimiento lineal simple
        const speed = isFleeing ? 5 : 1.2;
        const normalizedDx = dx / distToTarget;
        const normalizedDy = dy / distToTarget;
        
        currentX += normalizedDx * speed;
        currentY += normalizedDy * speed;

        const angle = Math.atan2(normalizedDy, normalizedDx) * (180 / Math.PI) + 90;
        setRotation(angle);
      } else {
        currentX = targetX;
        currentY = targetY;
        setIsWalking(false);
        
        // Probabilidad de caminar o seguir quieto
        if (!isFleeing && Math.random() < 0.03) { 
          pickNewNode();
          pauseTimer = 20 + Math.random() * 50;
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
        <circle cx="11.5" cy="7.5" r="0.6" fill="#E23636" />
        <circle cx="12.5" cy="7.5" r="0.6" fill="#E23636" />
      </svg>
    </div>
  );
}
