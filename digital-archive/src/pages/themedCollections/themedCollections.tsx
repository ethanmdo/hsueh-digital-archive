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
                <p className="collection-text">
                    Conscription in Taiwan is mandatory for all male citizens. My grandfather, although born in China,
                    moved to Taiwan in middle school, and served in the military before migrating to the United States 
                    to pursue grad school in the 60s. This was a common reality for many immigrants during this time
                    period, where only highly skilled and educated migrants were allowed in. This collection showcases
                    my grandfather and  other Taiwanese military men, capturing moments of daily life, training, 
                    camaraderie, and the surrounding cultural setting. 
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
                <p className="collection-text">
                    Graduation is a milestone for all, but certainly for immigrants who are the 
                    first to graduate from the United States. My grandfather, who immigrated to 
                    the U.S. to complete graduate school, did not have the same family support
                    system in these photos as other native born Americans. My grandfather was the 
                    first in my family to graduate in the U.S., but certainly not the last. 
                    This collection features my aunt and my mother graduating from college as well,
                    pictured here with their parents and friends. 
                </p>
                <p className="view-button" onClick={() => navigate('/graduations')} style={{ cursor: 'pointer' }} >View Collection</p>
            </div>
            <div className="col-sm">
                <img src={graduation} className="collection-image"></img>
            </div>
        </div>

        <div className="collection row bg-light">
            <div className="col-sm">
                <h3 className="collection-title">Family Portraits</h3>
                <p className="collection-text">
                    Family portraits in the mid 20th century were hard to come by, and each
                    image represents key moments in time often separated by many years. 
                    As the decades progress, these portraits are easier to take, and can capture
                    more than just big milestones. As this collection progresses, the pictures
                    get more frequent and more casual —- photographs no longer a rare commodity.
                    These photos span over sixty years.

                </p>
                <p className="view-button" onClick={() => navigate('/family-portraits')} style={{ cursor: 'pointer' }}>View Collection</p>
            </div>
            <div className="col-sm">
                <img src={familyPortrait} className="collection-image"></img>
            </div>
        </div>

        
        </>
    );
}

export default ThemedCollections;