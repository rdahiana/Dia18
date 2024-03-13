import React, { useState } from 'react';

const Expander = () => {
  // Define el estado para el elemento seleccionado y el subelemento seleccionado
  const [selectedElement, setSelectedElement] = useState(null);
  const [selectedSubElement, setSelectedSubElement] = useState(null);
  // Define el estado para el estado expandido
  const [expandedStates, setExpandedStates] = useState({});

  // esta función  actualiza el estado expandedStates alternando el valor de expansión del elemento específico que
  // se pasa como argumento. Si el elemento estaba expandido, lo contrae; si estaba contraído, lo expande.
  const toggleExpand = (element) => { //en Estados se esta recorriendo los elementos con map y va mandando cada elemento
    setExpandedStates(prevStates => ({
      ...prevStates,
      [element]: !prevStates[element]
    }));
  };

  // esta función verifica si un elemento específico está expandido consultando el estado con expandedStates (que se actualizo en la funcion de arriba).
  // Si el elemento está expandido, devuelve true; de lo contrario, devuelve false. Esto se usa en la renderización 
  //condicional del componente Estado para determinar si mostrar los subelementos de un estado o no.
  const isExpanded = (element) => {
    return expandedStates[element] || false;
  };

  // Devuelve las funciones y estados necesarios para su uso en otros componentes
  return { toggleExpand, isExpanded, selectedElement, selectedSubElement, setSelectedElement, setSelectedSubElement };
};

export default Expander;
