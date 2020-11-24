import React, { Component } from 'react';

import './Bosque.scss';
import { Breakpoint } from "react-socks";
import { Link } from "react-router-dom";
import atras from '../../assets/atras.png';
import libro from '../../assets/libro.jpg';
import clase from '../../assets/clase.jpg';
import personas from '../../assets/personas.jpg';
import reunir from '../../assets/reunir.jpg';
import profe from '../../assets/profe.jpg';
import social from '../../assets/social.jpg';
import cuaderno from '../../assets/cuaderno.png';
import imagen8 from '../../assets/b1.jpg';
import imagen9 from '../../assets/b1.png';




export default class Bosque extends Component {

    render() {
        return (
            <>

                <Breakpoint large up>
                <nav className="navbar-wrapper">
                        <Breakpoint large up>
                            <ul className="sidebar-top">
                                <div className="sidebar-links">
                                    <li className="sidebar-link-logo">
                                    <Link>
                                        <img src={atras} alt="logo"  onClick={() => this.props.history.goBack()} />
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">

                        <header className="App-header">

<section>
<h1>BOSQUE DE PALABRAS</h1>
<img src={libro}className="" alt="" />

</section>

<a
className="App-link"

>
<h2>¿QUÉ ES BOSQUE DE PALABRAS?</h2>
</a>

<p><center>
Propuesta Lúdico-pedagógica que busca reconciliar, en el contexto de la escuela, a las actuales y nuevas generaciones, consigo mismas y con las demás, desde el fortalecimiento de la identidad del ser, en interacción con otros seres humanos que piensan, sienten y actúan de manera similar o diferente. Pero, en todo caso, amantes de leer y escribir con sentido.


</center>
</p>

<h4>
¿QUIERES SABER MÁS SOBRE NOSOTROS?
</h4>

            <footer class="align-center">
                <a href="https://sites.google.com/view/bosque-de-palabras/lo-que-somos" class="button">SABER MÁS</a>
            </footer>
</header>
<h1>RECUERDOS...</h1>
<ul id="lista1">
<li>
<a ><button className="button1"><img src={profe} className="img" alt=""  width="170" height="300" /></button></a>
</li>
<li>
<a><button className="button1"><img src={social} className="img" alt=""  width="170" height="170"/> </button></a>
</li>
<li>
<a> <button className="button1"><img src={clase} className="img" alt=""  width="170" height="170"/></button></a>
</li>
<li>
<a><button className="button1"><img src={personas} className="img" alt=""  width="170" height="170"/></button></a>
</li>
<li>
<a> <button  className="button1"> <img src={reunir} className="img" alt="" width="250" height="170"/></button></a>
</li>
<li>
<a> <button  className="button1"><img src={cuaderno} className="img" alt=""  width="250" height="170"/></button></a>
</li>

</ul>          

                           
                                

            
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
                                    <Link>
                                        <img src={atras} alt="logo"  onClick={() => this.props.history.goBack()} />
                                        </Link>
                                    </li>
                                </div>
                            </ul>
                        </Breakpoint>
                    </nav>
                    <div className="dashboard-mobile" data-testid="main__dashboard">
                        <div className="dashboard-card-wrapper">

                        <header className="App-header">

                        <section>
      <h1>BOSQUE DE PALABRAS</h1>
        <img src={libro}className="" alt="" />
        
        </section>

<a
          className="App-link"
        
        >
          <h2>¿QUÉ ES BOSQUE DE PALABRAS?</h2>
        </a>

  <p><center>
  Propuesta Lúdico-pedagógica que busca reconciliar, en el contexto de la escuela, a las actuales y nuevas generaciones, consigo mismas y con las demás, desde el fortalecimiento de la identidad del ser, en interacción con otros seres humanos que piensan, sienten y actúan de manera similar o diferente. Pero, en todo caso, amantes de leer y escribir con sentido.
          
        
</center>
    </p>

  <h4>
        ¿QUIERES SABER MÁS SOBRE NOSOTROS?
    </h4>
   
									<footer class="align-center">
										<a href="https://sites.google.com/view/bosque-de-palabras/lo-que-somos" class="button">SABER MÁS</a>
									</footer>
      </header>
      <h1>RECUERDOS...</h1>
          <ul id="lista1">
     <li>
         <a ><button className="button1"><img src={profe} className="img" alt=""  width="170" height="300" /></button></a>
     </li>
     <li>
      <a><button className="button1"><img src={social} className="img" alt=""  width="170" height="170"/> </button></a>
     </li>
     <li>
     <a> <button className="button1"><img src={clase} className="img" alt=""  width="170" height="170"/></button></a>
     </li>
     <li>
     <a><button className="button1"><img src={personas} className="img" alt=""  width="170" height="170"/></button></a>
     </li>
     <li>
     <a> <button  className="button1"> <img src={reunir} className="img" alt="" width="250" height="170"/></button></a>
     </li>
     <li>
          <a> <button  className="button1"><img src={cuaderno} className="img" alt=""  width="250" height="170"/></button></a>
          </li>
    
 </ul>          

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
