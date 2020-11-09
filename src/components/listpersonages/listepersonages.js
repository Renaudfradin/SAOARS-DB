import Personages from '../personages/personages.js'
function listepersonages(props){
   const { perso } = props;
    return(
        <div>
            {perso.map(perso => <Personages persos={perso} key={perso.id}></Personages>)}
        </div>
    );
}

export default listepersonages;