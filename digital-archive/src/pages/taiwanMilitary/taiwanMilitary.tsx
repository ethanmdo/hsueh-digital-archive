import './taiwanMilitary.css'
import Navbar from '../../components/Navbar/Navbar';
import image1 from "../../images/taiwan/83922822-PHO-001-0052.jpg";
import image2 from "../../images/taiwan/83922822-PHO-001-0003.jpg";
import image3 from "../../images/taiwan/83922822-PHO-001-0009.jpg";
import image4 from "../../images/taiwan/83922822-PHO-001-0044.jpg";
import image5 from "../../images/taiwan/83922822-PHO-001-0045.jpg";
import image6 from "../../images/taiwan/83922822-PHO-001-0046.jpg";
import image7 from "../../images/taiwan/83922822-PHO-001-0047.jpg";
import image8 from "../../images/taiwan/83922822-PHO-001-0063.jpg";
import image9 from "../../images/taiwan/83922822-PHO-001-0073.jpg";
import image10 from "../../images/taiwan/83922822-PHO-001-0081.jpg";
import image11 from "../../images/taiwan/83922822-PHO-001-0084.jpg";
import { useState } from 'react';


const images = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11
  ];

// digital-archive/src/images/taiwan/83922822-PHO-001-0020.jpg and 83922822-PHO-001-0083.jpg  for family portraits


function TaiwanMilitary() {
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
            <h1 className="header-text mb-4">Taiwan Military Collection</h1>
            <p>
            This collection documents military life during the family's time in Taiwan, capturing moments of daily life,
            training, camaraderie, and the surrounding cultural setting.
            </p>

            <div className="row mt-4">
                {images.map((img, idx) => (
                    <div key={idx} className="col-6 col-sm-4 col-md-3 mb-4">
                    <img
                        src={img}
                        alt={`Taiwan Military ${idx + 1}`}
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

export default TaiwanMilitary