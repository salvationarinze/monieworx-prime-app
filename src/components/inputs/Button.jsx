import React from 'react';

function Button({
  children = 'Button', className = '', onClick = () => {},
  disabled = false, fontSize = 'text-sm', borderColor = 'border-primary',
  bgColor = 'bg-primary', textColor = '',
  paddingY = 'py-3', paddingX = 'px-6', border = false
}) {
  return (
    <button
      className={`${fontSize} ${bgColor} ${textColor} ${paddingX} ${
        paddingY} rounded-xl font-semibold ${border ? `border-2 ${borderColor}` : ''
      } flex justify-center items-center transition ease-in-out hover:bg-opacity-70 disabled:border-0 ${
        className} disabled:cursor-default disabled:bg-opacity-30`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
