import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";


export default function ParticlesBackground({theme}) {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particleColor =
      theme === "dark" ? "#ffffff" : "#000000";

  return (
    <Particles
     key={theme} 
      init={init}
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },

        fpsLimit: 60,

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["repulse", "grab"],
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 120,
              duration: 0.4,
            },
            grab: {
              distance: 160,
              links: {
                opacity: 0.6,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },

        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800,
            },
          },

          /* 🔴 RED COLOR */
          color: {
            value: particleColor,
          },

          opacity: {
            value: 0.7,
          },

          size: {
            value: { min: 1, max: 3 },
          },

          links: {
            enable: true,
            distance: 150,
            color: particleColor,
            opacity: 0.4,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
            outModes: {
              default: "bounce",
            },
          },
        },

        detectRetina: true,
      }}
    />
  );
}
