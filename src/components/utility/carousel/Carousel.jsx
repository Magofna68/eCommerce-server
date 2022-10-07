import './carousel.styles';

import { React, useState } from 'react'
import { Carousel } from 'react-bootstrap';

export default function CarouselComponent({dataSet}) {
  const [index, setIndex ] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} fade>
      {dataSet.map((slide, i) => {
        return (
          // <Carousel>
          <Carousel.Item interval={2000}>        
            <img
              className="d-block w-100"
              src={slide.img}
              alt={slide.alt}
            />
            <Carousel.Caption>
              <h3>{slide.caption}</h3>
              <p>{slide.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        

        )
      })}
    </Carousel>
  );
}
// export default HomeCarousel;


    // <Carousel>
    //   <Carousel.Item interval={2000}>
    //     <img 
    //       className='d-block w-100'
    //       src={item.img}
    //       alt={item.alt}
    //     />
    //     <Carousel.Caption>
    //       <h3>{item.title}</h3>
    //       <p>{item.text}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>

      // <Carousel.Item interval={1000}>
      //   <img 
      //     className='d-block w-100'
      //     src={item.img}
      //     alt={item.alt}
      //   />
      //   <Carousel.Caption>
      //     <h3>{item.title}</h3>
      //     <p>{item.text}</p>
      //   </Carousel.Caption>
      // </Carousel.Item>

    //   <Carousel.Item interval={2000}>
    //     <img 
    //       className='d-block w-100'
    //       src={item.img}
    //       alt={item.alt}
    //     />
    //     <Carousel.Caption>
    //       <h3>{item.title}</h3>
    //       <p>{item.text}</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
//   );
// }
