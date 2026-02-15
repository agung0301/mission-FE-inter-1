import { useState } from 'react';
import eyeOpen from '/src/assets/icons/eye.svg';
import eyeClose from '/src/assets/icons/eye-closed.svg';

const Input = ({ type, placeholder, id, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <style>
        {`
          #${id}::placeholder {
            color: #bbbbbb; /* Abu-abu lebih terang agar kontras */
            opacity: 1;
          }
        `}
      </style>

      <input 
        type={inputType} 
        id={id}
        onChange={onChange} 
        placeholder={placeholder}
        className="form-control shadow-none"
        style={{ 
          width: '100%',
          height: '40px', 
          borderRadius: '20px', 
          fontSize: '13px', 
          backgroundColor: '#181A1C', 
          color: 'white', 
          padding: '0 45px 0 15px',
          border: '1px solid #333',
          outline: 'none'
        }} 
      />
      
      {isPassword && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            right: '15px',
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            zIndex: '10',
            display: 'flex',
            alignItems: 'center',
            padding: '5px' 
          }}
        >
          <img 
            src={showPassword ? eyeOpen : eyeClose} 
            alt="Toggle Password"
            style={{ 
              width: '18px', 
              height: '18px',
              filter: 'brightness(0) invert(1)', 
              opacity: '0.7'
            }} 
          />
        </div>
      )}
    </div>
  );
};

export default Input;