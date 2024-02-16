import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default () => {
  return (
    <div className="w-full flex justify-center bg-slate-300">

      <Splide
     
        options={{
          type: "fade",
          rewind: true,
          gap: "1rem",
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <img    style={{ width: "80%", height:"78%"}} src="1.jpg" alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img    style={{ width: "80%", height:"78%"}} src="2.jpg" alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img    style={{ width: "80%", height:"78%"}} src="3.jpg" alt="Image 3" />
        </SplideSlide>
      </Splide>
      </div>
    
  );
};
