import femalehairs from './components/Img/female-hairs.png';
import manicure from './components/Img/manicure.png';
import braid from './components/Img/braid.png';
import cream from './components/Img/cream.png';
import pedicure from './components/Img/pedicure.png';
import female from './components/Img/female.jpg';
import womanget from './components/Img/womanget.jpg';
import manicurist from './components/Img/manicurist.jpg';
import portrait from './components/Img/portrait.jpg';
import pedicurist from './components/Img/pedicurist.jpg';

const data ={
    serviceData: [
        {
            cost: 500.0,
            description: "A pedicure is a comprehensive treatment of your feet and is suitable for both men and women. It involves cutting, trimming and shaping your toenails, tending to your cuticles, exfoliating, hydrating and massaging your feet, and, if desired, painting your toenails",
            duration: 1,
            id: 1,
            imgSrc1: pedicurist,
            imgSrc: pedicure,
            style: "Pedicure"
        },
        {
            cost: 1500.0,
            description: "A manicure is a beauty treatment of the hands. Your nails will be cut, filed, and shaped. You will then have your cuticles pushed back and tidied, and then enjoy a hand massage. The final step will be the painting of the nails with a colour of your choice.",
            duration: 1,
            id: 2,
            imgSrc1: manicurist,
            imgSrc: manicure,
            style: "Manicure"
        },
        {
            cost: 1500.0,
            description: "Hair Stylist responsibilities include cutting hair using basic and advanced techniques, consulting customers about styles and colors and applying hair care products, like treatment oils and masks. If you have experience cutting short and long hair and are up-to-date with styling trends, we'd like to meet you.",
            duration: 2,
            id: 3,
            imgSrc1: female,
            imgSrc: femalehairs,
            style: "Hair styles"
        },
        {
            cost: 1500.0,
            description: "Extensions can quickly and easily add volume and length, naturally enhancing your hairstyle for a different look. They can be a quick, gratifying way to compensate for a bad haircut or prepare for a special occasion.",
            duration: 3,
            id: 4,
            imgSrc1: portrait,
            imgSrc: braid,
            style: "Extension Services"
        },
        {
            cost: 500.0,
            description: "Salon treatments are designed to moisturise the hair from the inside out, restore and protect your scalp and boost hair growth. Read on to explore the variety of treatments and find the perfect one for your hair type.",
            duration: 3,
            id: 5,
            imgSrc1: womanget,
            imgSrc: cream,
            style: "Treatment"
        }
    ]
}

export default data;