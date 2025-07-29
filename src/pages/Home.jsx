import { useNavigate } from 'react-router-dom';
import '../styles/main.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>VitaNova</h1>
      <p>Tu currículum, tu historia, tu diseño.</p>
      <button onClick={() => navigate('/editor')}>Comenzar</button>
    </div>
  );
};

export default Home;
