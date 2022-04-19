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
            title={"Voltage in Channel 1"}
            n={0}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            data={data.channel2}
            n={1}
            title={"Voltage in Channel 2"}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            n={2}
            data={data.channel3}
            title={"Voltage in Channel 3"}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            n={3}
            data={data.channel4}
            title={"Voltage in Channel 4"}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            n={4}
            data={data.channel5}
            title={"Voltage in Channel 5"}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            n={5}
            data={data.channel6}
            title={"Voltage in Channel 6"}
          />
        </div>

        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            n={6}
            data={data.channel7}
            title={"Voltage in Channel 7"}
          />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent
            pauseManager={pauseManager}
            setPauseManager={setPauseManager}
            n={7}
            data={data.channel8}
            title={"Voltage in Channel 8"}
          />
        </div>
      </div>
    </div>
  );
}
