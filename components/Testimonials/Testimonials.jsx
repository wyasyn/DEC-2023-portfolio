"use client";
import { useState } from "react";
import "./Testimonials.scss";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Image from "next/image";
import { BsCircle, BsStopCircle } from "react-icons/bs";
import { testimonialsData } from "@/constants/testimonialsData";

export default function Testimonials() {
    const [slideIndex, setSlideIndex] = useState(0);
    function showNext() {
        setSlideIndex((index) => {
            if (index === testimonialsData.length - 1) return 0;
            return index + 1;
        });
    }
    function showPrev() {
        setSlideIndex((index) => {
            if (index === 0) return testimonialsData.length - 1;
            return index - 1;
        });
    }
    return (
        <div className="container">
            <div className="testimonies">
                <div
                    style={{
                        translate: `${-100 * slideIndex}%`,
                    }}
                    className="slide-container"
                >
                    {testimonialsData.map((data) => (
                        <article className="slide" key={data.name}>
                            <div className="image">
                                <Image
                                    src={data.photo}
                                    alt={data.name}
                                    width={100}
                                    height={100}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    placeholder="blur"
                                    title={data.name}
                                />
                            </div>
                            <div className="info">
                                <h4>{data.title}</h4>
                                <h3>{data.name}</h3>
                                <p className="port-text">{data.comment}</p>
                            </div>
                        </article>
                    ))}
                </div>

                <button
                    onClick={showPrev}
                    className="slider-btn"
                    style={{ left: 0 }}
                    aria-label="View Previous Testimoial"
                >
                    <BiLeftArrow />
                </button>
                <button
                    onClick={showNext}
                    className="slider-btn"
                    style={{ right: 0 }}
                    aria-label="View Next Testimoial"
                >
                    <BiRightArrow />
                </button>
                <div className="pagination">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setSlideIndex(index)}
                            aria-label={`View ${index + 1} Testimony`}
                        >
                            {index === slideIndex ? (
                                <BsStopCircle />
                            ) : (
                                <BsCircle />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
