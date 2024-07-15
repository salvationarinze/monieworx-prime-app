import React from 'react';

function Textarea({
  className, name, label, value, onChange, readOnly, disabled,
  isRequird, onKeyDown, rows, placeholder
}) {
  return (
    <div className={`${className || ''} relative`}>
      <label htmlFor={name} className="text-sm text-lightText block">
        {label} {isRequird && (<span className="text-error">*</span>)}
      </label>
      <textarea
        name={name}
        id={name}
        rows={rows}
        value={value}
        className="appearance-none border-b w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline border-gray-300"
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        onKeyDown={onKeyDown}
        autoComplete="off"
        placeholder={placeholder || ''}
      />
    </div>
  );
}

export default Textarea;
