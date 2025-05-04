import React from "react";
import "./photographs.css"; // for grid styling
import Navbar from '../../components/Navbar/Navbar'

const importAll = (r: any) => r.keys().map(r);

const taiwanImages = importAll(require.context("../../images/taiwan", false, /\.(png|jpe?g|svg)$/));
const earlyUSImages = importAll(require.context("../../images/earlyUS", false, /\.(png|jpe?g|svg)$/));
const raisingKidsImages = importAll(require.context("../../images/raisingKids", false, /\.(png|jpe?g|svg)$/));
console.log(taiwanImages)
function Photographs() {
    return (
        <>
        <Navbar/>
        <h1 className="photo-header" id="taiwan">Taiwan</h1>
        <div className="image-grid">
            {taiwanImages.map((src: any, index: any) => (
                <img key={index} src={src} alt={`img-${index}`} />
            ))}
        </div>
        <h1 className="photo-header" id="earlyUS">Early U.S.</h1>
        <div className="image-grid">
            {earlyUSImages.map((src: any, index: any) => (
                <img key={index} src={src} alt={`img-${index}`} />
            ))}
        </div>
        <h1 className="photo-header" id="raisingKids">Raising a Family</h1>
        <div className="image-grid">
            {raisingKidsImages.map((src: any, index: any) => (
                <img key={index} src={src} alt={`img-${index}`} />
            ))}
        </div>
        </>
    );
}

export default Photographs;