
import './App.css';
import google from './assets/google.png';
import logo from './assets/twitter.png';
import apple from './assets/apple.png';

function App() {
  return (
    <div className="logo-box">
     <img src={logo}  alt="apple" className="logo" />   
      <h2>Sign In to Twitter</h2>
      <button>
        <img src={google} alt="apple" />
        Sign in with Google
      </button>
      <button>
        <img src={apple}  alt="apple" />
        Sign in with Google
      </button>
      <hr></hr>
      <span>Or</span>
      <br/>
      <form>
        <input type="text" placeholder="Phone email or username" />
        <button>Next</button>
      </form>
      <button>Forget Password</button>
      <p>
        Don't Have an account? <a href="#">Sign up</a>
      </p>
    </div>
  );
}

export default App;
