import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

function TextInput({
  className, name, label, type, value, onChange, readOnly, disabled,
  placeholder, isRequired
}) {
  const [inputType, setInputType] = useState(type || 'text');

  return (
    <div className={`${className || ''} relative`}>
      <label htmlFor={name} className="text-sm text-lightText block">
        {label} {isRequired && (<span className="text-error">*</span>)}
      </label>
      <input
        type={inputType}
        name={name}
        id={name}
        value={value}
        className="appearance-none border-b w-full py-4 px-3 leading-tight focus:outline-none focus:shadow-outline border-gray-300"
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        autoComplete="off"
        placeholder={placeholder || ''}
      />
      {type === 'password' && (
        <span className="absolute right-3 bottom-3.5 text-gray-700">
          {inputType === 'password' ? (
            <AiFillEye className="w-6 h-auto cursor-pointer" onClick={() => setInputType('text')} />
          ) : (
            <AiFillEyeInvisible className="w-6 h-auto cursor-pointer" onClick={() => setInputType('password')} />
          )}
        </span>
      )}
    </div>
  );
}

export default TextInput;
