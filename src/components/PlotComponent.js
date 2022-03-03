import React, { useState, useEffect } from "react";

// Importing Plotly
import Plotly from "plotly.js-basic-dist-min";
import createPlotlyComponent from "react-plotly.js/factory";
import FullScreenPlot from "./FullScreenPlot";
const Plot = createPlotlyComponent(Plotly);

export default function PlotComponent({ data, title }) {
  const [myData, setMyData] = useState(data);
  const [open, setOpen] = useState(false);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    setMyData(data);
  }, []);

  useEffect(() => {
    if (!pause) {
      setMyData(data);
    }
  }, [data]);

  return (
    <div className='plot'>
      {open && <FullScreenPlot data={myData} setOpen={setOpen} title={title} />}
      {console.log(myData)}
      {data && (
        <Plot
          data={[
            {
              y: myData?.y,
              x: myData?.x,
              type: "line",
              marker: { color: "red" },
            },
          ]}
          layout={{
            width: 450,
            height: 400,
            title: `${title}`,
            yaxis: {
              range: [100, 4200],
            },
          }}
        />
      )}
      <div className='btns'>
        {!pause && (
          <button onClick={() => setPause(true)} className='btn btn-info'>
            PAUSE
          </button>
        )}
        {pause && (
          <button onClick={() => setPause(false)} className='btn btn-warning'>
            RESUME
          </button>
        )}

        <button onClick={() => setOpen(true)} className='btn btn-success'>
          FULL SCREEN
        </button>
      </div>
    </div>
  );
}
