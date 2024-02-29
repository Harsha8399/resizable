import { useEffect } from 'react';
import interact from 'interactjs';

const ResizableComponents = () => {
  useEffect(() => {
    interact('.resizable-component')

      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        modifiers: [
          interact.modifiers.restrictEdges({
            outer: 'false',
          }),
          interact.modifiers.restrictSize({
            min: { width: 0,height: 20 },
          }),
        ],
        onmove: function (event) {
          const target = event.target;
          const x = parseFloat(target.getAttribute('data-x')) || 0;
          const y = parseFloat(target.getAttribute('data-y')) || 0;

          target.style.width = `${event.rect.width}px`;
          target.style.height = `${event.rect.height}px`;

          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        },
      });
  }, []);

  return (
    <div>
        <div style={{display: "flex"}}>

      <div className="resizable-component" style={{ background: '#3498db', width: '50%', height: '100%' }}>
        Component 1
      </div>

      <div className="resizable-component" style={{ background: '#e74c3c', width: '50%', height: '50%' }}>
        Component 2
      </div>
        </div>

      <div className="resizable-component" style={{ background: '#2ecc71', width: '99%', height: '50%',margin: "10px" }}>
        Component 3
      </div>
    </div>
  );
};

export default ResizableComponents;

