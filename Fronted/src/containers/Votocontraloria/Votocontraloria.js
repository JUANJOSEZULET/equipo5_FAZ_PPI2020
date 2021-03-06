import React, { useState, useEffect } from "react";
import "./Votocontraloria.scss";
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import atras from "../../assets/atras.png";
import G from "../../assets/G.png";

export default function Votocontraloria() {
  const [contralores, setContralores] = useState([]);
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)

  async function fetchData() {
    const response = await fetch("http://localhost:3001/api/contralores");
    const data = await response.json();
    console.log(data)
    setContralores(data);
  }

  async function sendCount(id,votos){
    //setCount(count + 1)
    // console.log(id)
    // console.log(`los votos del personero son: ${count}`)
    setVisible(false)
    await fetch(`http://localhost:3001/api/contralores/${id}`,{
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({voto: votos+1, id: id})
    })

  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Breakpoint large up>
        <nav className="navbar-wrapper">
          <Breakpoint large up>
            <ul className="sidebar-top">
              <div className="sidebar-links">
                <li className="sidebar-link-logo">
                <Link to="/voto">
                    <img
                      src={atras}
                      alt="logo"
                    
                    />
                  </Link>
                </li>
              </div>
            </ul>
          </Breakpoint>
        </nav>
        <div className="dashboard" data-testid="main__dashboard">
          <div className="dashboard-card-wrapper">
            <div class="cuadrado">CONTRALORÍA</div>
            {contralores &&
              contralores.length > 0 &&
              contralores.map((contralor) => (
                <div>
                  <section key={contralor.id}>
                    <h4>
                      {contralor.nombre} {contralor.apellidos}
                    </h4>
                    <h4>{contralor.cargo}</h4>
                    <h4>{contralor.tarjeton}</h4>
                    <div class="circular--portrait">
                    <img src={require("../../assets/" + contralor.imagen)} />
                    </div>
                  </section>
                  <section>
                  {visible ?
                        <button type="button" onClick={()=> sendCount(contralor.id,contralor.votos)} className="button1">Votar</button>
                    : <button type="button" disabled className="button1">Votar</button>
                    }
                  </section>
                </div>
              ))}
          </div>
        </div>
      </Breakpoint>

      <Breakpoint small down>
        <nav className="navbar-wrapper">
          <Breakpoint small down>
            <ul className="sidebar-top">
              <div className="sidebar-links">
                <li className="sidebar-link-logo">
                <Link to="/voto">
                    <img
                      src={atras}
                      alt="logo"
                    
                    />
                  </Link>
                </li>
              </div>
            </ul>
          </Breakpoint>
        </nav>
        <div className="dashboard-mobile" data-testid="main__dashboard">
          <div className="dashboard-card-wrapper">
            {contralores &&
              contralores.length > 0 &&
              contralores.map((contralor) => (
                <div>
                  <section key={contralor.name}>
                    <h4>
                      {contralor.nombre} {contralor.apellidos}
                    </h4>
                    <h4>{contralor.cargo}</h4>
                    <h4>TARJETON: #{contralor.tarjeton}</h4>
                    <div class="circular--portrait">
                    <img src={require("../../assets/" + contralor.imagen)} />
                    </div>
                  </section>
                  <section>
                    {/* <Link to="/validaciones"> */}
                      
                    {visible ?
                        <button type="button" onClick={()=> sendCount(contralor.id,contralor.votos)} className="button1">Votar</button>
                    : <button type="button" disabled className="button1">Votar</button>
                    }
                    {/* </Link> */}
                  </section>
                </div>
              ))}
          </div>
        </div>
      </Breakpoint>
    </>
  );
}
