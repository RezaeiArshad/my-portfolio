import { useContext, useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { ThemeContext } from "../contexts";
// import { loadAll } from "@tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { color } from "motion/react";
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const {theme} = useContext(ThemeContext);
  const [toDisplay, setDisplay] = useState("#ffffff")
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (theme === "dark") setDisplay("#ffffff")
    else if (theme === "light") setDisplay("#000000")
  }, [theme])

  const particlesLoaded = () => {
    console.log("particles working");
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: false,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 2,
            duration: 100,
          },
        },
      },
      particles: {
        color: {
          value: toDisplay,
        },
        links: {
          color: toDisplay,
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: false,
    }),
    [toDisplay],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
        ariaHidden= "true"
      />
    );
  }

  return <></>;
};

export default ParticlesComponent

export const ParticlesSnow = () => {
  const [init, setInit] = useState(false);
  const {theme} = useContext(ThemeContext);
  const [toDisplay, setDisplay] = useState("#ffffff")
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    if (theme === "dark") setDisplay("#ffffff")
    else if (theme === "light") setDisplay("#000000")
  }, [theme])

  const particlesLoaded = () => {
    console.log("particles working");
  };

  const options = useMemo(
    () => ({
      background: {
        color: "transparent",
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "repulse"
          },
          onHover: {
            enable: true,
            mode: "bubble"
          }
        },
        modes: {
          bubble: {
            distance: 200,
            duration: 2,
            opacity: 0,
            size: 0,
            speed: 3
          },
          repulse: {
            distance: 400,
            duration: 0.4
          }
        }
      },
      particles: {
        color: { value: toDisplay },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: true,
          speed: 0.4
        },
        number: {
          density: {
            enable: true
          },
          value: 700
        },
        opacity: {
          animation: {
            enable: true,
            speed: 5
          },
          value: { min: 0.3, max: 0.6 }
        },
        shape: {
          type: "circle"
        },
        size: {
          value: 1.5
        }
      }
    }),
    [toDisplay],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles-snow"
        particlesLoaded={particlesLoaded}
        options={options}
        ariaHidden= "true"
      />
    );
  }

  return <></>;
};
