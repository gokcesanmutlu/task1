import Carousel from 'react-bootstrap/Carousel';

function Slide() {
  return (
    <Carousel style={{background:"#e6f3fc"}} fade>
      <Carousel.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ width: "70%", height: "240px", marginTop:"10px", marginBottom:"10px", borderRadius:"10px"  }} src="1.jpg" alt="" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ width: "70%", height: "240px", marginTop:"10px", marginBottom:"10px" , borderRadius:"10px" }} src="2.jpg" alt="" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img style={{ width: "70%", height: "240px" , marginTop:"10px", marginBottom:"10px", borderRadius:"10px" }} src="3.jpg" alt="" />
        <Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slide;