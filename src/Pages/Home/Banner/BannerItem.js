import React from 'react';
import './Banner.css'

const BannerItem = ({slide}) => {
    const {image,prev,id,next} = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
                <div className='img-gradient'>
                    <img src={image} alt="" className="w-screen rounded-lg object-cover rounded-xl max-h-[33rem]" />
                </div>
                {/* text area start */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                    <h1 className='text-6xl font-bold text-white'>
                        Affordable <br />
                        Price For Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                    <p className='text-white text-xl'>
                        There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
                    </p>
                </div>
                {/* button area */}
                <div className="absolute flex justify-start transform -translate-y-1/2 left-24 top-3/4">
                    <button className="btn btn-active btn-secondary mr-5 text-white">Discover More</button>
                    <button className="btn btn-outline btn-white text-white">Latest Project</button>
                </div>
                {/* text area end */}
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">

                    <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                    <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                </div>
            </div>
    );
};

export default BannerItem;