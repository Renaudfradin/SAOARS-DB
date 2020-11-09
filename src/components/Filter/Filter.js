import {useRef,useEffect}from'react'
function Filter(props) {
    const {name,handleFilterChange } = props;
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[inputRef])
    return(
        <div>
            <input name="name" type="text" value={name} onChange={handleFilterChange} ref={inputRef}/>
        </div>
    )
}
export default Filter;