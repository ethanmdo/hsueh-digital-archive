import Navbar from '../../components/Navbar/Navbar'
import './themedCollections.css'
import image1 from "../../images/taiwan/83922822-PHO-001-0052.jpg"

function ThemedCollections() {
    return(
        <>
        <Navbar/>
        <h1 id="header">Themed Collections</h1>
        <div className="collection row bg-light">
            <div className="col-sm">
                <h3 className="collection-title">Taiwan Military</h3>
                <p>This collection brings together the asdfasd asdfasdfasdf asdfadsf 
                    asdfasdfasdf asdfasdfdasfasdfsadf asdfasdfdasfasdfsadf 
                    adsfasdfsadf sdfasdfadfs asdfasdfdasfasdfsadf asdfasdfdasfasdfsadf
                    asdfasdfdasfasdfsadf asdfasdfdasfasdfsadf asdfa sdfdasfasdfsadf
                    asdfasdfdasfasdfsadfasdfasdfdasfasdfsadf asdfasdfdasfasdfsadf asdfasdfdasfasdfsadf
                    asdfasdfdasfasdfsadf asdfasdfdasfasdfsadf  asdfasdfdasfasdfsadf
                </p>
                <a className="view-button">View Collection</a>
            </div>
            <div className="col-sm">
                <img src={image1} className="collection-image"></img>
            </div>
        </div>
        </>
    );
}

export default ThemedCollections;