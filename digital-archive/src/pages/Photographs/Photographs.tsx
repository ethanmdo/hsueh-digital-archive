import React, { useRef, useState } from "react";
import "./Photographs.css"; // for grid styling
import Navbar from '../../components/Navbar/Navbar'

const importAll = (r: any) => r.keys().map(r);

const taiwanImages = importAll(require.context("../../images/taiwan", false, /\.(png|jpe?g|svg)$/));
const earlyUSImages = importAll(require.context("../../images/earlyUS", false, /\.(png|jpe?g|svg)$/));
const raisingKidsImages = importAll(require.context("../../images/raisingKids", false, /\.(png|jpe?g|svg)$/));




function Photographs() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleClick = (src: string) => {
        setSelectedImage(src);
    };
    
    const handleClose = () => {
        setSelectedImage(null);
    };
        
    return (
        <>
        <Navbar/>
        <h1 className="photo-header" id="taiwan">Taiwan</h1>
        <div className="image-grid">
            {taiwanImages.map((src: any, index: any) => (
                <img key={index} src={src} alt={`img-${index}`}  style={{ cursor: 'pointer', maxWidth: '200px' }} onClick={() => handleClick(src)}/>
            ))}
        </div>
        <h1 className="photo-header" id="earlyUS">Early U.S.</h1>
        <div className="image-grid">
            {earlyUSImages.map((src: any, index: any) => (
                <img key={index} src={src} alt={`img-${index}`} style={{ cursor: 'pointer', maxWidth: '200px' }} onClick={() => handleClick(src)}/>
            ))}
        </div>
        <h1 className="photo-header" id="raisingKids">Raising a Family</h1>
        <div className="image-grid">
            {raisingKidsImages.map((src: any, index: any) => (
                <img key={index} src={src} alt={`img-${index}`} style={{ cursor: 'pointer', maxWidth: '200px' }} onClick={() => handleClick(src)}/>
            ))}
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

export default Photographs;