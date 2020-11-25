import React, {Component} from 'react';
import './Noticias.scss';
import {Breakpoint} from "react-socks";
import {Link} from "react-router-dom";
import noticias1 from '../../assets/noticias1.png';
import atras from '../../assets/atras.png';


export default class Noticias extends Component {

    render() {
        return (
            <>

                <Breakpoint large up>
                <nav className="navbar-wrapper">
                        <Breakpoint large up>
                            <ul className="sidebar-top">
                                <div className="sidebar-links">

                                    <li className="sidebar-link-logo">
                                        <Link to="/">
                                            <img src={atras} alt="logo" />
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">
                           
                            <div className="App">
      <header className="App-header">
      <section>
      
        <img src={noticias1} className="" alt="" />
        <h1>LO MÁS NUEVO</h1>
        </section>

       
<section>
<div className="section"> 
<a
          className="App-link"
        
        >
          <h2>Suspenden clases y se da inicio a nuevas herramientas tecnologicas para el aprendizaje.</h2>
        </a>
 
  <h4>
        Como todos sabemos se a dado inicio de una crisis mundial, una pandemia que dejara marcada a toda
         la historia de este año 2020.
         Esta crisis afecta las clases presenciales de manera acelerada, tanto asi que el gobierno a puesto 
         la cancelacion de estas mismas. 
         Pero estudiantes... Tranquilos, como plan B se a dado origen a nuevas herramientas tecnologicas 
         que facilitaran el desarrollo del año escolar. Veamos esta situacion como oportunidades para aprender 
         aun mas sobre la rama tecnologica que muy pronto formara parte de nuestra vida diaria. Antes que nada,
         queridos estudiantes, cuidensen y cuiden a sus familias!
          
        

    </h4>
  <h4>
        #QUEDATEENCASA

    </h4>
    
    <img src="logo.png" className="" alt="" />
    
    
    </div>
</section>
       
      </header>
    </div>
                            <Link to="/">
                                <div>


                                </div>
                            </Link>
                        </div>
                    </div>
                </Breakpoint>

                <Breakpoint small down>
                <nav className="navbar-wrapper">
                        <Breakpoint small down>
                            <ul className="sidebar-top">
                                <div className="sidebar-links">

                                    <li className="sidebar-link-logo">
                                        <Link to="/Menu">
                                            <img src={atras} alt="logo" />
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                  
                    <div className="dashboard-mobile" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">
                        
                            <div className="App">
      <header className="App-header">
      <section>
      
        <img src={noticias1} className="" alt="" />
        <h1>LO MÁS NUEVO</h1>
        </section>

       
<section>
<div className="section"> 
<a
          className="App-link"
        
        >
          <h2>Suspenden clases y se da inicio a nuevas herramientas tecnologicas para el aprendizaje.</h2>
        </a>
 
  <h4>
        Como todos sabemos se a dado inicio de una crisis mundial, una pandemia que dejara marcada a toda
         la historia de este año 2020.
         Esta crisis afecta las clases presenciales de manera acelerada, tanto asi que el gobierno a puesto 
         la cancelacion de estas mismas. 
         Pero estudiantes... Tranquilos, como plan B se a dado origen a nuevas herramientas tecnologicas 
         que facilitaran el desarrollo del año escolar. Veamos esta situacion como oportunidades para aprender 
         aun mas sobre la rama tecnologica que muy pronto formara parte de nuestra vida diaria. Antes que nada,
         queridos estudiantes, cuidensen y cuiden a sus familias!
          
        

    </h4>
  <h4>
        #QUEDATEENCASA

    </h4>
    
    <img src="logo.png" className="" alt="" />
    
    
    </div>
</section>


      </header>
    </div>
                           
                            <Link to="/">
                                <div>


                                </div>
                            </Link>
                        </div>
                    </div>
                </Breakpoint>
            </>
        );
    }
}
