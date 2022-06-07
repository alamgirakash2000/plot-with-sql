import React, { useState, useEffect } from "react";

// Importing Plotly
import Plotly from "plotly.js-basic-dist-min";
import createPlotlyComponent from "react-plotly.js/factory";
import FullScreenPlot from "./FullScreenPlot";
const Plot = createPlotlyComponent(Plotly);

export default function PlotComponent({
  pauseManager,
  setPauseManager,
  data,
  title,
  n,
}) {
  const [myData, setMyData] = useState(data);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!pauseManager[n] && data?.y) {
      if (data.y.length >= 5000) setMyData(data);
    }
  }, [data]);

  return (
    <div className='plot'>
      {open && <FullScreenPlot data={myData} setOpen={setOpen} title={title} />}
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
        {!pauseManager[n] && (
          <button
            onClick={() => {
              pauseManager[n] = true;
              setPauseManager(pauseManager);
              setMyData(data);
            }}
            className='btn btn-info'>
            PAUSE
          </button>
        )}
        {pauseManager[n] && (
          <button
            onClick={() => {
              pauseManager[n] = false;
              setPauseManager(pauseManager);
            }}
            className='btn btn-warning'>
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
