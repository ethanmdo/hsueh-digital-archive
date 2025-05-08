import Navbar from '../../components/Navbar/Navbar';
import {useState} from 'react';
import image1 from "../../images/taiwan/83922822-PHO-001-0070.jpg"
import image2 from "../../images/earlyUS/83922816-PHO-001-0003.jpg"
import image3 from "../../images/earlyUS/83922816-PHO-001-0005.jpg"
import image4 from "../../images/earlyUS/83922816-PHO-001-0006.jpg"
import image5 from "../../images/earlyUS/83922816-PHO-001-0007.jpg"
import image6 from "../../images/earlyUS/83922816-PHO-001-0035.jpg"
import image7 from "../../images/earlyUS/83922816-PHO-001-0042.jpg"
import image8 from "../../images/earlyUS/83922816-PHO-001-0043.jpg"
import image9 from "../../images/earlyUS/83922816-PHO-001-0045.jpg"
import image10 from "../../images/90s/83922820-PHO-001-0041.jpg"
import image11 from "../../images/90s/83922820-PHO-001-0042.jpg"
import image12 from "../../images/90s/83922820-PHO-001-0043.jpg"
import image13 from "../../images/90s/83922820-PHO-001-0052.jpg";
import image14 from "../../images/90s/83922820-PHO-001-0053.jpg";


const collection = [
   image1, image2, image3, image4, image5, image6, image7, image8, image9,
   image10, image11, image12, image13, image14
  ];

function Graduations() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleClick = (src: string) => {
        setSelectedImage(src);
    };
    
    const handleClose = () => {
        setSelectedImage(null);
    };

    return (
        <>
        <Navbar />
        <div className="container mt-5">
            <h1 className="header-text mb-4">Graduation Collection</h1>
            <p>
            Graduation is a milestone for all, but certainly for immigrants who are the 
            first to graduate from the United States. My grandfather, who immigrated to 
            the U.S. to complete graduate school, did not have the same family support
            system in these photos as other native born Americans. My grandfather was the 
            first in my family to graduate in the U.S., but certainly not the last. 
            This collection features my aunt and my mother graduating from college as well,
            pictured here with their parents and friends. 
            </p>

            <div className="row mt-4">
                {collection.map((img, idx) => (
                    <div key={idx} className="col-6 col-sm-4 col-md-3 mb-4">
                    <img
                        src={img}
                        alt={`Graduations ${idx + 1}`}
                        className="img-fluid rounded shadow-sm"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleClick(img)}
                    />
            </div>
            ))}
            </div>
        </div>

        {selectedImage && (
            <div
                className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex justify-content-center align-items-center"
                style={{ zIndex: 1055 }}
                onClick={handleClose}
            >
            <img
                src={selectedImage}
                alt="Enlarged"
                className="img-fluid"
                style={{ maxHeight: '80vh', borderRadius:'8px' }}
                onClick={(e) => e.stopPropagation()}
            />
            </div>
        )}
        </>
    );
}

export default Graduations;