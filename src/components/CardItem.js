import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <div 
      className="custom-card" // AJOUT DE LA CLASSE ICI
      style={{ 
        width: '100%', 
        backgroundColor: '#fff', 
        borderRadius: '15px', 
        overflow: 'hidden',
        display: 'block',
        boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
      }}
    >
      <Link 
        to={props.path} 
        style={{ 
          textDecoration: 'none', 
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
      >
        {/* IMAGE CONTAINER */}
        <figure 
          className="card-img-container" // AJOUT DE LA CLASSE ICI
          style={{ 
            margin: 0, 
            padding: 0, 
            width: '100%', 
            height: '250px', 
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <img
            src={props.src}
            alt={props.label}
            style={{ 
              display: 'block', 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover'
            }}
          />
          <span style={{
            position: 'absolute',
            bottom: '15px',
            left: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(8px)',
            padding: '6px 12px',
            borderRadius: '8px',
            fontSize: '10px',
            fontWeight: 'bold',
            color: '#333',
            textTransform: 'uppercase',
            zIndex: 2
          }}>
            {props.label}
          </span>
        </figure>

        {/* TEXT CONTAINER */}
        <div style={{ padding: '20px', width: '100%', boxSizing: 'border-box' }}>
          <h5 style={{ 
            margin: 0, 
            color: '#1d1d1f', 
            fontSize: '18px',
            fontWeight: '500'
          }}>
            {props.text}
          </h5>
        </div>
      </Link>
    </div>
  );
}

export default CardItem;

/*

import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 h-full" style={{ width: '100%', marginLeft: 0 }}>
      <Link className="block h-full" to={props.path}>
        <figure className="relative overflow-hidden" style={{ margin: 0, padding: 0, width: '100%', overflow: 'hidden', position: 'relative' }}>
          <img
            src={props.src}
            alt={props.label}
            style={{ 
              display: 'block',
              width: '100%',     // On force le 100% ici
              minWidth: '50px', // On donne une base minimum
              height: '250px', 
              objectFit: 'cover' 
            }}
            className="transition-transform duration-700 hover:scale-110" />
          <span className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm z-10">
            {props.label}
          </span>
        </figure>
        <div className="p-6">
          <h5 className="text-red-600 text-lg font-medium leading-snug tracking-tight">
            {props.text}
          </h5>
        </div>
      </Link>
    </div>
  );
}

export default CardItem;

*/