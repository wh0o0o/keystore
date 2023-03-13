import "./Home.css";

import banner from "../../assets/images/banner.png";
import left from "../../assets/images/left.svg";
import right from "../../assets/images/right.svg";
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

const Home = () => {
  return (



    <div className="banner">
      <div className="banner_text">
        <div className="banner_text_inner">
          <p className="text_up line">ПОПУЛЯРНО СЕЙЧАС</p>
          <h1 className="text_up">cyberpunk 2077</h1>
          <p className="descr">
            Компьютерная игра в жанре action-adventure в открытом мире,
            разработанная и изданная польской студией CD Projekt. Действие игры
            происходит в 2077 году в Найт-Сити, вымышленном североамериканском
            городе из вселенной Cyberpunk.
          </p>
        </div>

        <div className="arrows">
          <img className="arrow" src={left} alt="" />
          <img className="arrow" src={right} alt="" />
        </div>
      </div>
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper> */}
      <img className="bannerimg" src={banner} alt="" />
    </div>
  );
};
export default Home;
