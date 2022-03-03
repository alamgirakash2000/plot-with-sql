import React from "react";

const Header = ({ entry, setEntry, handleSubmit }) => {
  return (
    <div className='header'>
      <div className='container'>
        <form className='entry'>
          <input
            placeholder='Number of visible data (50-2500)'
            onChange={(e) => setEntry(e.target.value)}
            type='number'
          />
          <button type='submit' onClick={handleSubmit}>
            SET
          </button>
        </form>

        <h1 className='py-1'>Voltage Plotting</h1>
        <div className='something'></div>
      </div>
    </div>
  );
};

export default Header;
