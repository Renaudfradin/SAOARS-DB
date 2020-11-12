import { useEffect } from 'react'
function TiltePageDocument(props) {
    const { title } = props;

    useEffect(()=> {
        document.title = title;
    }, [title]);

    return(
        <div>
            <h1>  </h1>
        </div>
    );
}
export default TiltePageDocument;