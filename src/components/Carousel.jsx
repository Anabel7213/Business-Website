import { Carousel } from 'react-carousel-minimal';

export default function Gallery() {
    const data = [
        {
            image: "/carousel-01.png"
        },
        {
            image: "/carousel-02.png"
        },
        {
            image: "/carousel-03.png"
        },
        {
            image: "/carousel-04.png"
        },
        {
            image: "/carousel-05.png"
        }
    ]
    return (
        <Carousel data={data} width="100%" time={2000} automatic={true} dots={true} />
    )
}