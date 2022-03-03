import React from "react";
// Importing Plotly
import Plotly from "plotly.js-basic-dist-min";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

export default function FullScreenPlot({ data, title, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='fullScreen position-fixed sticky-top'>
      <button onClick={handleClose} className='btn-lg btn-block btn-danger'>
        CLOSE
      </button>
      {data && (
        <Plot
          data={[
            {
              y: data.y,
              x: data.x,
              type: "line",
              marker: { color: "red" },
            },
          ]}
          layout={{
            width: window.screen.availWidth - 50,
            height: 600,
            title: `${title}`,
            yaxis: {
              range: [100, 4200],
            },
          }}
        />
      )}
    </div>
  );
}
