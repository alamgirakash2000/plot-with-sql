import React, { useEffect, useState } from "react";
import PlotComponent from "./PlotComponent";

export default function DisplayPlots({ data }) {
  return (
    <div>
      <div className='row plots'>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent data={data.channel1} title={"Voltage in Channel 1"} />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent data={data.channel2} title={"Voltage in Channel 2"} />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent data={data.channel3} title={"Voltage in Channel 3"} />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent data={data.channel4} title={"Voltage in Channel 4"} />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent data={data.channel5} title={"Voltage in Channel 5"} />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent data={data.channel6} title={"Voltage in Channel 6"} />
        </div>

        <div className='col-lg-4 col-md-6'>
          <PlotComponent data={data.channel7} title={"Voltage in Channel 7"} />
        </div>
        <div className='col-lg-4 col-md-6'>
          <PlotComponent data={data.channel8} title={"Voltage in Channel 8"} />
        </div>
      </div>
    </div>
  );
}
