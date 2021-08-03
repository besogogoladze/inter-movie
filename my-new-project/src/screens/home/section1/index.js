import React from 'react';
import { Carousel } from 'react-bootstrap';
import Khachapuri from '../../../images/Khachapuri.jpg';
import Khinkali from '../../../images/Khinkali.jpg';
import './style.css'

function Section1() {
    return (
        <div className="w-75 mx-auto">
            <Carousel className="heigh-500">
                <Carousel.Item className="text-align-webkit-center">
                    <img
                        className="d-block w-100 heigh-500"
                        src={Khinkali}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-align-webkit-center">
                    <img
                        className="d-block w-100 heigh-500"
                        src={Khachapuri}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="text-align-webkit-center">
                    <img
                        className="d-block w-100 heigh-500"
                        src={Khachapuri}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Section1
