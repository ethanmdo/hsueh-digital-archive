import Navbar from '../../components/Navbar/Navbar';
import {useState} from 'react';
import image1 from "../../images/taiwan//83922822-PHO-001-0020.jpg";
import image2 from "../../images/taiwan/83922822-PHO-001-0053.jpg"
import image3 from "../../images/taiwan/83922822-PHO-001-0077.jpg"
import image4 from "../../images/taiwan/83922822-PHO-001-0083.jpg"
import image5 from "../../images/earlyUS/Hsueh Family 2-82.jpg"
import image6 from "../../images/raisingKids/Hsueh Family 2-159.jpg"
import image7 from "../../images/raisingKids/Hsueh Family 2-165.jpg"
import image8 from "../../images/raisingKids/Hsueh Family 2-170.jpg"
import image9 from "../../images/raisingKids/Hsueh Family-110.jpg"
import image10 from "../../images/raisingKids/Hsueh Family-298.jpg"
import image11 from "../../images/raisingKids/Hsueh Family-306.jpg"
import image12 from "../../images/raisingKids/Hsueh Family-308.jpg"
import image13 from "../../images/90s/83922818-PHO-001-0042.jpg"
import image14 from "../../images/90s/83922820-PHO-001-0038.jpg"
import image15 from "../../images/90s/83922821-PHO-001-0003.jpg"
import image16 from "../../images/90s/83922821-PHO-001-0052.jpg"

const collection = [
    image1, image2, image3, image4, image5, image6, image7, image8, image9,
    image10, image11, image12, image13, image14, image15, image16
  ];

function FamilyPortraits() {
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
            <h1 className="header-text mb-4">Family Portrait Collection</h1>
            <p>
            Family portraits in the mid 20th century were hard to come by, and each
            image represents key moments in time often separated by many years. 
            As the decades progress, these portraits are easier to take, and can capture
            more than just big milestones. As this collection progresses, the pictures
            get more frequent and more casual —- photographs no longer a rare commodity.
            These photos span over sixty years.
            </p>

            <div className="row mt-4">
                {collection.map((img, idx) => (
                    <div key={idx} className="col-6 col-sm-4 col-md-3 mb-4">
                    <img
                        src={img}
                        alt={`Family Portrait ${idx + 1}`}
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

export default FamilyPortraits;