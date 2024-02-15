import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css'; 

export default () => {
  return (
    <Splide
    options={{
      type: 'fade', // Örnek bir animasyon seçeneği (fade, slide, ...)
      rewind: true,
      gap: '1rem',
    }}
      aria-label="My Favorite Images"
    >
      <SplideSlide>
        <img style={{width:"100%"}} src="1.jpg" alt="Image 1" />
      </SplideSlide>
      <SplideSlide>
        <img style={{width:"100%"}} src="2.jpg" alt="Image 2" />
      </SplideSlide>
      <SplideSlide>
        <img style={{width:"100%"}} src="3.jpg" alt="Image 3" />
      </SplideSlide>
    </Splide>
  );
};
