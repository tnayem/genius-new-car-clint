import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="min-h-screen py-5">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className='rounded-lg shadow-2xl w-4/5 h-full'/>
                    <img src={parts} alt='' className='rounded-lg shadow-2xl absolute right-5 top-1/2 w-3/5 border-8'/>
                </div>
                <div className='w-1/2'>
                    <p className=' font-bold text-orange-600'>About</p>
                    <h1 className='text-3xl font-bold leading-10'>
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum <br /> available, but the majority have suffered alteration in some <br /> form, by injected humour, or randomised words which don't <br /> look even slightly believable.
                    </p>
                    <br />
                    <p>
                        the majority have suffered alteration in some form, by injected <br /> humour, or randomised words which don't look even slightly <br /> believable.
                    </p>
                    <button className="btn text-white bg-orange-600 border-none mt-5">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;