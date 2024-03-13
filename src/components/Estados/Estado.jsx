import React from 'react';

              //aca estan los props que se mandan desde Estados
const Estado = ({ element, subElements, expanded, isSelected, selectedSubElement, toggleExpand, onSelect, onSelectSubElement }) => {
  return (
    <div className="estado-container">

      {/* si el estado esta seleccionado se aplica la clase selected y se activa la funcion
        de expandir o contraer yy tambien para marcarlo como seleccionado */}
      <div className={`estado ${isSelected ? 'selected' : ''}`} onClick={() => { toggleExpand(); onSelect(); }}>
        
       {/* si el estado esta seleccionado se le aplica la clase para cambiar el color del contenedor */}
        <h1 className={isSelected ? 'selected-text' : ''}>{element}</h1>
      </div>

      {/* Renderiza los subelementos si el estado está expandido y tiene subelementos */}

      {expanded && subElements.length > 0 && (
        <div className="sub-elements">
          {subElements.map((subElement, index) => ( //recorremos los subelementos 
            <div 
              key={index} 
              className={`sub-element ${selectedSubElement === subElement ? 'selected' : ''}`} 
              onClick={() => { onSelectSubElement(subElement); }}
            >
              {subElement}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Estado;
