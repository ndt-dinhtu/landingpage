import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './landingpage.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Container, Row, Col } from 'reactstrap';
import London_1 from '../assets/London_1.png';
import London_2 from '../assets/London_2.png';
import London_3 from '../assets/London_3.png';
import London_4 from '../assets/London_4.png';
import LosAngeles_1 from '../assets/LosAngeles_1.png';
import LosAngeles_2 from '../assets/LosAngeles_2.png';
import LosAngeles_3 from '../assets/LosAngeles_3.png';
import LosAngeles_4 from '../assets/LosAngeles_4.png';
import NewYok_1 from '../assets/NewYok_1.png';
import NewYok_2 from '../assets/NewYok_2.png';
import NewYok_3 from '../assets/NewYok_3.png';
import NewYok_4 from '../assets/NewYok_4.png';
import Tokyo_1 from '../assets/Tokyo_1.png';
import Tokyo_2 from '../assets/Tokyo_2.png';
import Tokyo_3 from '../assets/Tokyo_3.png';
import Tokyo_4 from '../assets/Tokyo_4.png';

export default function LandingPage() {

    const [selectedCity, setSelectedCity] = useState('New York');

    const cities = ['New York', 'London', 'Tokyo', 'Los Angeles'];

    const tours = [
        {
            id: 1,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "New York",
            price: 149.99,
            image: London_1
        },
        {
            id: 2,
            title: "Essence of Vietnam South to North",
            category: "New York",
            price: 167.19,
            image: London_2
        },
        {
            id: 3,
            title: "Osa Peninsula to Dominical City Tour",
            category: "New York",
            price: 134.99,
            image: London_3
        },
        {
            id: 4,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise Alababa",
            category: "New York",
            price: 50.15,
            image: London_4
        },
        {
            id: 5,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "London",
            price: 149.99,
            image: LosAngeles_1
        },
        {
            id: 6,
            title: "Essence of Vietnam South to North",
            category: "London",
            price: 167.19,
            image: LosAngeles_2
        },
        {
            id: 7,
            title: "Osa Peninsula to Dominical City Tour",
            category: "London",
            price: 134.99,
            image: LosAngeles_3
        },
        {
            id: 8,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise Alababa",
            category: "London",
            price: 50.15,
            image: LosAngeles_4
        },
        {
            id: 9,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "Tokyo",
            price: 149.99,
            image: NewYok_1
        },
        {
            id: 10,
            title: "Essence of Vietnam South to North",
            category: "Tokyo",
            price: 117.19,
            image: NewYok_2
        },
        {
            id: 11,
            title: "Osa Peninsula to Dominical City Tour",
            category: "Tokyo",
            price: 134.99,
            image: NewYok_3
        },
        {
            id: 12,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise Alababa Seno",
            category: "Tokyo",
            price: 50.15,
            image: NewYok_4
        },
        {
            id: 13,
            title: "Three Temples Bangkok City Tour Must Visit",
            category: "Los Angeles",
            price: 149.99,
            image: Tokyo_1
        },
        {
            id: 14,
            title: "Essence of Vietnam South to North",
            category: "Los Angeles",
            price: 117.19,
            image: Tokyo_2
        },
        {
            id: 15,
            title: "Osa Peninsula to Dominical City Tour",
            category: "Los Angeles",
            price: 134.99,
            image: Tokyo_3
        },
        {
            id: 16,
            title: "Mt Fuji, Hakone, Lake Ashi Cruise Alababa Alaka",
            category: "Los Angeles",
            price: 33.15,
            image: Tokyo_4
        },

    ];

    const handleCityClick = (city) => {
        setSelectedCity(city);
    };

    const filteredTours = tours.filter(item => item.category === selectedCity);

    return (
        <Container className="landingpage">
            <div className="aaa text-center mb-4">
                <p className="h3">Perfect Destination</p>
                <p className="h5">Trending Destinations</p>
            </div>
            <div className="d-flex justify-content-center mb-4">
                {cities.map((city, index) => (
                    <button
                        key={index}
                        className={`btn m-2 ${selectedCity === city ? 'btn-secondary' : 'btn-light'}`}
                        onClick={() => handleCityClick(city)}
                    >
                        {city}
                    </button>
                ))}
            </div>
            <div className="listTour" >
                {filteredTours.map((item) => (
                    <Card key={item.id} className="mb-4 " style={{ width: '18rem' }}>
                        <img
                            alt={item.title}
                            src={item.image}
                            className="card-img-top"
                        />
                        <CardBody>
                            <CardTitle className='titleTour' tag="h5"><i class="fa-solid fa-magnifying-glass"></i>{item.category}</CardTitle>
                            <div className='sale'>

                            </div>
                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                {item.title}
                            </CardSubtitle>
                            <CardText>
                                From <b>${item.price}</b> <strike>$249.99</strike>
                                <div>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </CardText>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </Container>
    );
}
