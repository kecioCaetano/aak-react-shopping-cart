import { useEffect } from "react";
import { Link } from "react-router-dom";
import ProgressiveImage from "react-progressive-graceful-image";

import ImageWrapper from "../components/ImageWrapper";
import BlogContent from "../components/BlogContent";
import ScrollToTop from "../components/ScrollToTop";

// import blogData 
import { BLOB_URL } from "../config";

function AboutPage() {
    useEffect(() => {
        document.title = 'The SAVANT Experience | SAVANT Eyewear Online Store';
    })

    return (
        <main className="story">
            <section className="story-header">
                <h1 className="story-header__title">An Eye for Better Eyewear</h1>
                <p className="story-header__text">
                    Our designs are carefully crafted to capture the latest fashion trends
                    while ensuring maximum comfort and functionality. With a range of
                    unique styles and color options, we are confident that our collection
                    has something to suit every taste and personality.
                </p>
                <p className="story-header__text">
                    Our frames are crafted with attention to detail, utilizing the latest
                    materials and technology to ensure the highest quality products.
                    Elevate your eyewear game with SAVANT frames.
                </p>
            </section>
            <section className="story-main">
                <ImageWrapper className="story-main__panel panel-1">
                    <ProgressiveImage src={`${BLOB_URL}/unsplash/frame-13.webp`} placeholder={`${BLOB_URL}/unsplash-compressed/frame-13.webp`}>
                        {(src, loading) => {
                            <img src={src} alt="Guy in office wearing glasses and a denim jacket"
                                className={`story-main__img ${loading && 'img--loading'}`}
                                loading="lazy"
                            />
                        }}
                    </ProgressiveImage>
                </ImageWrapper>
                <div></div>
                <div></div>
                <ImageWrapper></ImageWrapper>
                <ImageWrapper></ImageWrapper>
                <div></div>
            </section>
            <section></section>
            <BlogContent></BlogContent>
            <section></section>
        </main>
    )
}
export default AboutPage