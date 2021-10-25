export default function Error() {
    var Errormessages = ['El personaje que buscas probablemente sea de otra dimensión', 'Wubba lubba dub dub!', '¿Te has equivocado?. Tranquilo suele pasar'];
    let prob = Math.floor(Math.random() * Errormessages.length);
    let result = [Errormessages[prob]];


    return(
        <div className="error">
            <div className="error__content">
                <h1>{result}</h1>
                <button className="error__button" onClick={() => {window.location.href = '/'}}>Volver</button>
            </div>
        </div>
    )
}