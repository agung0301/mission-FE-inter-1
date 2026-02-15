import { useState } from 'react';
import { Link } from 'react-router-dom';
import InputGroup from '../components/molecules/InputGroup';
import logo from '../assets/images/logo.png';
import bg from '../assets/images/register-bg.jpg';

const Register = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Kata sandi tidak cocok! Silakan cek kembali.');
    } else if (password.length < 6) {
      setError('Kata sandi minimal 6 karakter ya.');
    } else {
      setError('');
      alert('Daftar Berhasil! Silakan masuk ke akun Anda.');
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        width: '100%',
        height: '100dvh', 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed',
        top: 0,
        left: 0
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: '380px',
          padding: '20px 30px',
          backgroundColor: 'rgba(24, 26, 28, 0.9)',
          borderRadius: '16px',
          textAlign: 'center',
          color: 'white',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)'
        }}
      >
        <div style={{ marginBottom: '12px' }}>
          <img src={logo} alt="Logo" style={{ width: '70px' }} className="mb-1" />
          <h2 className="fw-bold fs-4 mb-0">Daftar</h2>
          <p style={{ fontSize: '11px', color: '#aaa' }}>Buat akun baru</p>
        </div>

        {error && (
          <div style={{
            color: '#ff4d4d',
            fontSize: '10px',
            marginBottom: '10px',
            fontWeight: '600',
            backgroundColor: 'rgba(255, 77, 77, 0.1)',
            padding: '5px',
            borderRadius: '5px'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleRegister}>
          <div style={{ marginBottom: '10px' }}>
            <InputGroup
              label="Username"
              type="text"
              placeholder="Masukkan username"
              id="username"
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <InputGroup
              label="Kata Sandi"
              type="password"
              placeholder="Masukkan kata sandi"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '4px' }}>
            <InputGroup
              label="Konfirmasi Kata Sandi"
              type="password"
              placeholder="Masukkan ulang"
              id="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div style={{ fontSize: '11px', textAlign: 'left', marginBottom: '16px', paddingLeft: '5px' }}>
            <span style={{ color: '#aaa' }}>Sudah punya akun?</span>
            <Link to="/login" className="text-white fw-bold text-decoration-none ms-1">Masuk</Link>
          </div>

          <button
            type="submit"
            className="btn w-100 fw-bold shadow-none mb-2"
            style={{
              borderRadius: '25px',
              backgroundColor: password === confirmPassword && password !== '' ? '#E50914' : '#2F3334',
              color: 'white',
              fontSize: '14px',
              height: '38px',
              transition: '0.3s',
              border: 'none'
            }}
          >
            Daftar
          </button>

          <div style={{ fontSize: '11px', color: '#888', marginBottom: '8px' }}>Atau</div>

          <button
            type="button"
            className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center shadow-none mb-3"
            style={{ borderRadius: '25px', fontSize: '13px', height: '38px', borderColor: '#444' }}
          >
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="G" style={{ width: '16px', marginRight: '10px' }} />
            Daftar dengan Google
          </button>

        </form>
      </div>
    </div>
  );
};

export default Register;