import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import PersonagePage from '../PersonagePage/PersonagePage.js'
import Arme from '../Arme/Arme.js'
import Objet from '../Objet/Objet.js'
import Scoot from '../Scoot/Scoot.js'
import Equipement from '../Equipement/Equipement.js'
import Home from '../Home/Home.js'
import className from 'classnames';
import './HeaderNav.css'
function HeaderNav() {
    return(
        <BrowserRouter>
            <div className={className("wrapper")} id="aa">
                <div className={className("sidebar")}>
                    <h2>SAOARS DB</h2>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/personages`}>Personages</Link></li>
                        <li><Link to={`/arme`}>Arme</Link></li>
                        <li><Link to={`/objet`}>Objet</Link></li>
                        <li><Link to={`/scoot`}>Scoot</Link></li>
                        <li><Link to={`/equipement`}>Equipement</Link></li>
                    </ul>
                </div>
                <div className={className("main_content")}>
                    <div className={className("info")}>
                        <div>
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route exact path="/personages" component={PersonagePage}></Route>
                            <Route exact path="/arme" component={Arme}></Route>
                            <Route exact path="/objet" component={Objet}></Route>
                            <Route exact path="/scoot" component={Scoot}></Route>
                            <Route exact path="/equipement" component={Equipement}></Route>
                            <Route component={()=>'404'}></Route>
                        </Switch>
                        </div>
                    </div>
                </div>
            </div>
            
        </BrowserRouter>     
    );
}
export default HeaderNav;