import Navbar from '../../components/Navbar/Navbar'
import './themedCollections.css'
import taiwan from "../../images/taiwan/83922822-PHO-001-0052.jpg"
import graduation from "../../images/earlyUS/83922816-PHO-001-0007.jpg"
import familyPortrait from "../../images/taiwan//83922822-PHO-001-0020.jpg";
import { useNavigate } from 'react-router-dom';

function ThemedCollections() {
    const navigate = useNavigate();
    
    return(
        <>
        <Navbar/>
        <h1 id="header">Themed Collections</h1>
        <div className="collection row bg-light">
            <div className="col-sm">
                <h3 className="collection-title">Taiwan Military</h3>
                <p>This collection brings together 
                </p>
                <p className="view-button" onClick={() => navigate('/taiwan-military')} style={{ cursor: 'pointer' }}>View Collection</p>
            </div>
            <div className="col-sm">
                <img src={taiwan} className="collection-image"></img>
            </div>
        </div>

        <div className="collection row bg-light">
            <div className="col-sm">
                <h3 className="collection-title">Graduations</h3>
                <p>This collection 
                </p>
                <p className="view-button" >View Collection</p>
            </div>
            <div className="col-sm">
                <img src={graduation} className="collection-image"></img>
            </div>
        </div>

        <div className="collection row bg-light">
            <div className="col-sm">
                <h3 className="collection-title">Family Portraits</h3>
                <p>This collection 
                </p>
                <p className="view-button" >View Collection</p>
            </div>
            <div className="col-sm">
                <img src={familyPortrait} className="collection-image"></img>
            </div>
        </div>

        
        </>
    );
}

export default ThemedCollections;