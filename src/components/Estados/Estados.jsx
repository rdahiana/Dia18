import React, { useState } from 'react';
import Estado from './Estado'; // Importa el componente Estado
import Expander from './Expander'; // Importa el componente Expander

const Estados = () => {
  // Define el estado de los estados y sus subelementos
  const [estados, setEstados] = useState([
    {
      element: 'Alaska',
      subElements: ['Bascom']
    },
    {
      element: 'Connecticut',
      subElements: []
    },
    {
      element: 'Wisconsin',
      subElements: ['Oretta', 'Konterra', 'Guthrie']
    },
    {
      element: 'Nebraska',
      subElements: ['Jennings', 'Harviell', 'Alfarata', 'Bluffview', 'Escondida']
    },
    {
      element: 'Georgia',
      subElements: []
    }
  ]);

  // Obtiene las funciones de Expander
  const { toggleExpand, isExpanded, selectedElement, selectedSubElement, setSelectedElement, setSelectedSubElement } = Expander();

  return (
    <div className="row">
      {/* Itera sobre los estados y renderiza el componente Estado para cada uno */}
      {estados.map((estado, index) => (
        <Estado
          key={index}
          element={estado.element}
          subElements={estado.subElements}
          expanded={isExpanded(estado.element)}
          isSelected={selectedElement === estado.element}
          selectedSubElement={selectedSubElement}
          toggleExpand={() => toggleExpand(estado.element)}
          onSelect={() => setSelectedElement(estado.element)}
          onSelectSubElement={(subElement) => setSelectedSubElement(subElement)}
        />
      ))}
    </div>
  );
};

export default Estados;
