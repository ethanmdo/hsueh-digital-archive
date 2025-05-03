import './home.css'
import Navbar from "../../components/Navbar/Navbar";

function Home() {
    return (
        <div>
            <Navbar/>
            <div id="welcome">
                Welcome to the Hsueh Digital Archive
            </div>
            <div id="blurb">
                This digital archive is a collection of photographs curated for ENGL 0700W, 
                American Misfits: Short Story Collections of Displacement. Photographs are 
                a means of remembrance beyond traditional narratives. This collection seeks 
                to showcase 
            </div>
        </div>
    );
}

export default Home;