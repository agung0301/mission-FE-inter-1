  import { Link, useNavigate } from 'react-router-dom';
  import InputGroup from '../components/molecules/InputGroup';
  import logo from '../assets/images/logo.png';
  import bg from '../assets/images/login-bg.jpg';

  const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (e) => {
      e.preventDefault();
      navigate('/');
    };

    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          position: 'fixed'
        }}
      >
        <div
          style={{
            width: '90%',
            maxWidth: '380px',
            padding: '25px 35px',
            backgroundColor: 'rgba(24, 26, 28, 0.85)',
            borderRadius: '16px',
            textAlign: 'center',
            color: 'white'
          }}
        >
          <div style={{ marginBottom: '20px' }}>
            <img src={logo} alt="Logo" style={{ width: '90px' }} className="mb-1" />
            <h2 className="fw-bold fs-4 mb-0">Masuk</h2>
            <p style={{ fontSize: '12px', color: '#888' }}>Selamat datang kembali!</p>
          </div>

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '14px' }}>
              <InputGroup label="Username" type="text" placeholder="Masukkan username" id="username" />
            </div>
            <div style={{ marginBottom: '6px' }}>
              <InputGroup label="Kata Sandi" type="password" placeholder="Masukkan kata sandi" id="password" />
            </div>

            <div className="d-flex justify-content-between" style={{ fontSize: '11px', marginBottom: '18px' }}>
              <span>
                Belum punya akun? <Link to="/register" className="text-white fw-bold text-decoration-none ms-1">Daftar</Link>
              </span>
              <Link to="#" style={{ color: '#888', textDecoration: 'none' }}>Lupa kata sandi?</Link>
            </div>

            <button
              type="submit"
              className="btn w-100 fw-bold shadow-none"
              style={{
                borderRadius: '25px',
                backgroundColor: '#2F3334',
                color: 'white',
                border: 'none',
                fontSize: '14px',
                height: '40px',
                marginBottom: '10px'
              }}
            >
              Masuk
            </button>

            <div style={{ fontSize: '11px', color: '#888', marginBottom: '10px' }}>Atau</div>

            <button
              type="button"
              className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center shadow-none"
              style={{
                borderRadius: '25px',
                fontSize: '13px',
                height: '40px',
                borderColor: '#444'
              }}
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="G"
                style={{ width: '16px', marginRight: '10px' }}
              />
              Masuk dengan Google
            </button>
          </form>
        </div>
      </div>
    );
  };

  export default Login;