import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RouteImageSlider = ( { imageSliderData } ) => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imageSliderData.map((image) => (
          <div key={image.id} className="slider-image-container">
            <img src={image.photo} alt={image.alt} className="slider-image" />
            <p className="slider-caption">{image.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RouteImageSlider;
