import './home.css'
import Navbar from "../../components/Navbar/Navbar";
import image1 from "../../images/taiwan/83922822-PHO-001-0077.jpg";
import image2 from "../../images/taiwan//83922822-PHO-001-0020.jpg";
import image3 from "../../images/raisingKids/Hsueh Family-110.jpg"
import image4 from "../../images/90s/83922820-PHO-001-0038.jpg"
import { useEffect } from 'react';

function Home() {

    useEffect(() => {
        let slideIndex = 0;
        const slides = document.getElementsByClassName("slide");

        const showSlides = () => {
            for (let i = 0; i < slides.length; i++) {
                (slides[i] as HTMLElement).style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) {slideIndex = 1}
            (slides[slideIndex - 1] as HTMLElement).style.display = "block";
            setTimeout(showSlides, 2000); // Change image every 3 seconds
        };

        showSlides();
    }, []);
    return (
        <div>
            <Navbar/>
            <div className="slideshow">
                <div className="slide">
                    <img src={image1} alt="Slide 1" />
                </div>
                <div className="slide">
                    <img src={image2} alt="Slide 2" />
                </div>
                <div className="slide">
                    <img src={image3} alt="Slide 3" />
                </div>
                <div className="slide">
                    <img src={image4} alt="Slide 4" />
                </div>
            </div>
            <div id="welcome">
                Welcome to the Hsueh Digital Archive
            </div>
            <div id="blurb">
                This digital archive is a collection of photographs curated for ENGL 0700W, 
                American Misfits: Short Story Collections of Displacement. Photographs are 
                a means of remembrance beyond traditional narratives. This collection seeks 
                to trace my family history before and after migration through images.
            </div>
        </div>
    );
}

export default Home;