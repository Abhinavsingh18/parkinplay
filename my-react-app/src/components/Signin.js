import React, { useState } from 'react';
import styles from "./Signin.module.css";
import { Link } from 'react-router-dom';
import signinpng from "../Assests/images/signin.png";
import { useNavigate } from 'react-router-dom';



function Signin(props) {
  const fetchedClientData = props.ClientData ; 
  const fetchedAgentData = props.AgentData ;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();

    fetchedClientData.forEach((data) => {
      if (data.Username === username && data.Password === password) {
        setIsLoggedIn(true);
        if (isLoggedIn) {
        
          return navigate(`/users/${data.Username}`);
        }
      }
      else{
      
        console.log("not details found") 
       
      }
      
    });

    fetchedAgentData.forEach((data)=>{
      if (data.Username ===username && data.Password===password){
        setIsLoggedIn(true);
        if(isLoggedIn){
        return navigate(`/agent/${data.Username}`);
        }

      }
})
};
// console.log("Client Data:", fetchedClientData);
// console.log("Agent Data:", fetchedAgentData);



  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.header}>
            <img src="https://cdn.cloudd.live/parkinplay.bet/ap/logo-light.png?v=5" alt="" />
          </div>
          <br />
          <div className={styles.validation}>
            <form>
              <label htmlFor="username">Username:</label>
              <br />
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <br />
              <label htmlFor="password">Password:</label>
              <br />
              <div style={{ position: 'relative' }}>
                <input
                  type='password'
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span className={styles['eye-icon']}>
                  {/* {showPassword ? '👁' : '👁‍🗨'} */}
                </span>
              </div>
              <div className={styles.remind}>
                <input type="checkbox" className={styles.check} />
                <label htmlFor="signed">KEEP ME SIGNED IN</label>
              </div>
              {error && <div style={{ color: 'red' }}>{error}</div>}
              <button type="submit" onClick={handleSignIn} className={styles['signin-btn']}>SIGN IN</button>

            </form>
          </div>



          <div className={styles['device-info']}>
            <p style={{ marginTop: "2.5vh" }}><br />Easy bet place on multiple sports, casino with our mobile application</p>
          </div>
        </div>
        <div className={styles.right}>
          <img src={signinpng} alt="" />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.phone}>
          <nav className={`${styles.nav} ${styles['nav--icons']}`}>
            <ul>
              <li>
                <Link to="/">
                  <svg className={styles['icon-home']} viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor"
                      d="M21.6 8.2l-9-7c-0.4-0.3-0.9-0.3-1.2 0l-9 7c-0.3 0.2-0.4 0.5-0.4 0.8v11c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-11c0-0.3-0.1-0.6-0.4-0.8zM14 21h-4v-8h4v8zM20 20c0 0.6-0.4 1-1 1h-3v-9c0-0.6-0.4-1-1-1h-6c-0.6 0-1 0.4-1 1v9h-3c-0.6 0-1-0.4-1-1v-10.5l8-6.2 8 6.2v10.5z">
                    </path>
                  </svg>
                  <span>Home</span>
                </Link>
              </li>
              {/* Add other navigation links here */}
            </ul>
          </nav>
        </div>
      </div>

    </>
  );
}

export default Signin;
