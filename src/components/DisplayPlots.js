import React, { useEffect, useState } from "react";
import PlotComponent from "./PlotComponent";

export default function DisplayPlots({ data }) {
  const [pauseManager, setPauseManager] = useState([]);

  useEffect(() => {
    setPauseManager([false, false, false, false, false, false, false, false]);
  }, []);

  return (
    <div>
      <div className='row plots'>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            data={data.channel1}
            title={"Channel 0"}
            n={0}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            data={data.channel2}
            n={1}
            title={"Channel 3"}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            n={2}
            data={data.channel3}
            title={" Channel 4"}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            n={3}
            data={data.channel4}
            title={"Channel 5"}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            n={4}
            data={data.channel5}
            title={"Channel 6"}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            n={5}
            data={data.channel6}
            title={"Channel 7"}
          />
        </div>
      </div>
    </div>
  );
}
