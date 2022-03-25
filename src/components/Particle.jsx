import React from 'react';
import Particles from "react-tsparticles";
import {particle1, particle2, particle3} from './particales/particles'

const Particle = () => {

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    loaded={particlesLoaded}
    options={particle3}
  />
  )
}

export default Particle;