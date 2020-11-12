import { BrowserRouter,Route,Switch,Link } from 'react-router-dom';
import PersonagePage from '../PersonagePage/PersonagePage.js'
import Arme from '../Arme/Arme.js'
import Objet from '../Objet/Objet.js'
import Scoot from '../Scoot/Scoot.js'
import Equipement from '../Equipement/Equipement.js'
import Home from '../Home/Home.js'
import className from 'classnames';
import logohome from './nav_main.png'
import logoperso from './nav_character.png'
import logoequipement from './nav_equipment.png'
import logoitem from './nav_item.png'
import logoscoot from './nav_scout.png'
import logoarme from './nav_weapon.png'
import './HeaderNav.css'
function HeaderNav() {
    return(
        <BrowserRouter>
            <div className={className("wrapper")}>
                <div className={className("sidebar")}>
                    <h2>SAOARS DB</h2>
                    <ul>
                        <li><Link to={`/`}><img className={className("sidebar_img")} src={logohome} alt=""></img> <p className={className("sidebar_p")}>Home</p></Link></li>
                        <li><Link to={`/personages`}><img className={className("sidebar_img")} src={logoperso} alt=""></img> <p className={className("sidebar_p")}>Personages</p></Link></li>
                        <li><Link to={`/arme`}><img className={className("sidebar_img")} src={logoarme} alt=""></img> <p className={className("sidebar_p")}>Arme</p></Link></li>
                        <li><Link to={`/objet`}><img className={className("sidebar_img")} src={logohome} alt=""></img> <p className={className("sidebar_p")}>Objet</p></Link></li>
                        <li><Link to={`/scoot`}><img className={className("sidebar_img")} src={logoscoot} alt=""></img> <p className={className("sidebar_p")}>Scoot</p></Link></li>
                        <li><Link to={`/equipement`}><img className={className("sidebar_img")} src={logoequipement} alt=""></img> <p className={className("sidebar_p")}>Equipement</p></Link></li>
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