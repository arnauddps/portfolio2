import React from 'react';
import { motion } from 'framer-motion';
import './Cards.css';
import CardItem from './CardItem';

import photoPortrait from '../data/images/portrait/agathe.jpg';
import photoCanada from '../data/images/Terre/Canada/1.jpeg';
import photoUSA from '../data/images/Terre/USA/newyork.jpg';
import photoSpace from '../data/images/Espace/Planet/lune.jpg';
import photoChinatown from '../data/images/Terre/USA/chinatown/3.jpg';

function Cards() {
  return (
    <div className="cards">
      <motion.h1
        className="h1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Discover my work
      </motion.h1>

      {/* CONTENEUR PRINCIPAL : Force la largeur max et centre le tout */}
      <div style={{ 
        maxWidth: '1240px', 
        margin: '0 auto', 
        width: '100%', 
        padding: '0 20px' 
      }}>
        
        {/* LA GRILLE : Force 3 colonnes sur PC, 1 sur Mobile */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px', 
          width: '100%'
        }}>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            style={{ width: '100%' }} // On force le bloc motion à prendre 100% de sa colonne
          >
            <CardItem
              src={photoPortrait}
              text="People who have the power"
              label="Portraits"
              path="/Gallery_portrait"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <CardItem
              src={photoCanada}
              text="Travel through the mountains of Eastern Canada"
              label="Canada"
              path="/Gallery_Canada"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <CardItem
              src={photoUSA}
              text="Witness the highlights of the city that never sleeps: New York City"
              label="USA"
              path="/Gallery_USA"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <CardItem
              src={photoSpace}
              text="Explore some astrophotographies and see what deep space looks like"
              label="Space"
              path="/mainGalleryEspace"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            style={{ width: '100%' }}
          >
            <CardItem
              src={photoChinatown}
              text="Get in touch with the Chinese culture in NY"
              label="Chinatown"
              path="/Gallery_USA"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default Cards;