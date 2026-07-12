import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";

type SlideType = {
  id: number;
  src: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
  carouselType: string;
};

const EmblaCarousel = (props: PropType) => {
  const { slides, options, carouselType } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="embla" onClick={(e) => e.stopPropagation()}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide: SlideType, index: number) => (
            <div className = {carouselType === "separateWindow" ? "embla__slide" : "embla__slideMain"} key={slide.id || index}>
              <img className = {carouselType === "separateWindow" ? "embla_img" : "embla_imgMain"} src={slide.src} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className = {carouselType === "separateWindow" ? "embla__controls" : "embla__controlsMain"}>
        <div className = {carouselType === "separateWindow" ? "embla__buttons" : "embla__buttonsMain"} >
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      {carouselType === "separateWindow" ? (
        <div className="embla__thumbs">
          {slides.map((slide: SlideType, index: number) => (
            <div
              key={slide.id || index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__thumb ${index === selectedIndex ? "embla__thumb--selected" : ""}`}
            >
              <img
                className="embla__thumb__img"
                src={slide.src}
                alt="thumbnail"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default EmblaCarousel;
