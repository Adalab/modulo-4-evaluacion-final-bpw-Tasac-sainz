import "react";
import Cooking from "../images/cooking.png"
import Header from "../components/Header";

const HomePage = () => {



    return (
        <>
            <Header/>
            <div className="title-container">
            <h1 className="title-page">Recetas Four for Love</h1>
            <img className="cooking" src={Cooking}/> 
            </div>
        </>
    )
}

export default HomePage;