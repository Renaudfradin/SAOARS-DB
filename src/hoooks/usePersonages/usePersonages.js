import {useEffect,useState} from 'react';
import {getpersonages} from '../../service/personages/personages.js'

function usePersonages(){
    const [personages,setpersonages]= useState([]);
    useEffect(()=> {
        getpersonages()
            .then(data => setpersonages(data));
    },[setpersonages]);
    return personages;
}

export default usePersonages;