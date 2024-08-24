import React from 'react';

const Navbar = ({ selectedValue, handleChange, options }) => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#022130', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <h2 style={{ margin: '0 10px 0 0' }}>Ashghal DNMC DSS </h2>
      <select value={selectedValue} onChange={handleChange} style={{ padding: '5px', fontSize: '16px' }}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;
