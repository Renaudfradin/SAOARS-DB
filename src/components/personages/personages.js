function personages(props){
    const {persos}=props;
    const {id,name,description} =persos
    return(
       <div>
           <p>{id}</p>
           <p>{name}</p>
           <p>{description}</p>
       </div>
    );
}
export default personages;