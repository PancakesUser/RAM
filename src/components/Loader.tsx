export default function Loader() {
    var messagesLoader = ['Cargando..', 'Buscando la salsa sichuan..', 'Rellenando la pistola de portales..', 'Wubba lubba dub dub!'];
    var prob = Math.floor(Math.random() * messagesLoader.length);
    var result = [messagesLoader[prob]];

    return(
        <div className="loader">
            <div className="loader__content">
                <img  className="loader__img" src="https://i1.sndcdn.com/artworks-000369458718-0xvwiy-t500x500.jpg" alt="Loader"/>
                <h1>{result}</h1>
            </div>
        </div>
    )
}