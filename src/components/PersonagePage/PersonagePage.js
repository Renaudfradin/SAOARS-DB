import {useState} from 'react';
import usePersonages from '../../hoooks/usePersonages/usePersonages.js'
import Listepersonages from '../listpersonages/listepersonages.js'
import Filter from '../Filter/Filter.js'
import Title from '../TiltePageDocument/TiltePageDocument.js'
function PersonagePage() {
    const perso = usePersonages();
    console.log(perso);

    const [filters, setFilters] = useState({
        name: ''
    });
    function handleFilterChange(event) {
        setFilters({
          ...filters,
          [event.target.name]: event.target.value
        });
    }
    const filteredArticles = perso
        .filter(art => art.name.includes(filters.name))
    return(
        <div>
            <Title title={"Personages - SAOARS DB"}></Title>
            <h1>Les personages</h1>
            <Filter name={filters.name} handleFilterChange={handleFilterChange}></Filter>
            <Listepersonages perso={filteredArticles}></Listepersonages>
        </div>
    );
}
export default PersonagePage;