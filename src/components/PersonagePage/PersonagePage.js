import {useState} from 'react';
import usePersonages from '../../hoooks/usePersonages/usePersonages.js'
import Listepersonages from '../listpersonages/listepersonages.js'
import Filter from '../Filter/Filter.js'
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
            <h1>les personages</h1>
            <Filter name={filters.name} handleFilterChange={handleFilterChange}></Filter>
            <Listepersonages perso={filteredArticles}></Listepersonages>
        </div>
    );
}
export default PersonagePage;