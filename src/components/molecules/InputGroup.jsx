import Input from "../atoms/Input";

const InputGroup = ({ label, type, placeholder, id, onChange }) => {
  return (
    <div className="text-start">
      <label 
        htmlFor={id} 
        style={{ 
          fontSize: '14px', 
          color: 'white', 
          display: 'block',
          marginLeft: '12px',
          marginBottom: '0px', 
          position: 'relative',
          zIndex: '2',
        }}
      >
        {label}
      </label>
      <div style={{ position: 'relative', zIndex: '1' }}>
        <Input type={type} placeholder={placeholder} id={id} onChange={onChange} />
      </div>
    </div>
  );
};

export default InputGroup;