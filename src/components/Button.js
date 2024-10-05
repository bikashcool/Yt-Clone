import React from 'react'

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-4 py-2 border mx-1 border-gray-100 bg-gray-200 rounded-lg">
        {name}
      </button>
    </div>
  );
};

export default Button;
