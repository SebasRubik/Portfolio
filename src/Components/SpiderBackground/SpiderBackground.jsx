import React, { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function SpiderBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Usamos slim para mejor rendimiento (solo las features necesarias)
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null;

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={async (container) => {
        window.tsparticlesContainer = container;
      }}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab", // Conecta los nodos al cursor (como telaraña interactiva)
            },
          },
          modes: {
            grab: {
              distance: 250,
              links: {
                opacity: 0.6,
                color: "#E23636"
              },
            },
          },
        },
        particles: {
          color: {
            value: "#E23636",
          },
          links: {
            color: "#E23636",
            distance: 220, // Más distancia para enlazar más nodos
            enable: true,
            opacity: 0.15,
            width: 1,
            triangles: {
              enable: true,
              opacity: 0.03 // Sombras geométricas sutiles cruzando los hilos
            }
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce", // Que no salgan del canvas
            },
            random: false,
            speed: 0.2, // Muy lento, como una telaraña mecida por el viento suave
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60, // Menos nodos para una red más limpia y simétrica
          },
          opacity: {
            value: 0.4, 
          },
          shape: {
            type: "polygon", // Simetría geométrica para los nodos
            options: {
              polygon: {
                sides: 6 // Hexágonos (simetría natural frecuentemente la de las telarañas)
              }
            }
          },
          size: {
            value: { min: 1, max: 3 }, // Nodos un poco más visibles para apreciar la forma
          },
        },
        detectRetina: true,
      }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1, /* Asegura que quede por debajo del contenido */
        pointerEvents: 'auto'
      }}
    />
  );
}
