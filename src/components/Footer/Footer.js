import className from 'classnames';
import './Footer.css';
function Footer() {
    return(
        <div>
            <div className={className("main_content")}>
                    <div className={className("info")}>
                        <div className={className("footer")}>
                            <p >SAOARS-DB 2020. Design by NONO70063.</p>
                            <p>Crédits des données/images relatives au jeu Sword Art Online Alicization Rising Steel à Bandai Namco Entertainment Inc. et autres auteurs respectifs.</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}
export default Footer;