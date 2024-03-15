const carouselContainerElement = document.getElementById("carouselContainer");
const carouselIndicatorContainerElement = document.getElementById(
  "carouselIndicatorContainer"
);

const brandsData = {
  toyota: {
    corolla: [
      "/public/imgs/cars-photos-db/toyota/corolla/corolla-0.jpg",
      "/public/imgs/cars-photos-db/toyota/corolla/corolla-1.jpg",
      "/public/imgs/cars-photos-db/toyota/corolla/corolla-2.jpg",
      "/public/imgs/cars-photos-db/toyota/corolla/corolla-3.jpg",
    ],
    hilux: [
      "/public/imgs/cars-photos-db/toyota/hilux/hilux-0.png",
      "/public/imgs/cars-photos-db/toyota/hilux/hilux-1.jpg",
      "/public/imgs/cars-photos-db/toyota/hilux/hilux-bg.jpg",
      "/public/imgs/cars-photos-db/toyota/hilux/hilux-3.jpg",
    ],
  },
  nissan: {
    versa: [
      "/public/imgs/cars-photos-db/nissan/versa/versa-0.jpg",
      "/public/imgs/cars-photos-db/nissan/versa/versa-1.jpg",
      "/public/imgs/cars-photos-db/nissan/versa/versa-2.jpg",
      "/public/imgs/cars-photos-db/nissan/versa/versa-3.jpg",
    ],
    frontier: [
      "/public/imgs/cars-photos-db/nissan/frontier/frontier-0.jpg",
      "/public/imgs/cars-photos-db/nissan/frontier/frontier-1.jpg",
      "/public/imgs/cars-photos-db/nissan/frontier/frontier-2.jpg",
      "/public/imgs/cars-photos-db/nissan/frontier/frontier-3.jpg",
    ],
  },
  hyundai: {
    tucson: [
      "/public/imgs/cars-photos-db/hyundai/tucson/tucson-0.jpg",
      "/public/imgs/cars-photos-db/hyundai/tucson/tucson-1.jpg",
      "/public/imgs/cars-photos-db/hyundai/tucson/tucson-2.jpg",
      "/public/imgs/cars-photos-db/hyundai/tucson/tucson-3.jpg",
    ],
    accent: [
      "/public/imgs/cars-photos-db/hyundai/accent/accent-0.jpg",
      "/public/imgs/cars-photos-db/hyundai/accent/accent-1.jpg",
      "/public/imgs/cars-photos-db/hyundai/accent/accent-2.jpg",
      "/public/imgs/cars-photos-db/hyundai/accent/accent-3.jpg",
    ],
  },
  honda: {
    civic: [
      "/public/imgs/cars-photos-db/honda/civic/civic-0.jpg",
      "/public/imgs/cars-photos-db/honda/civic/civic-1.jpg",
      "/public/imgs/cars-photos-db/honda/civic/civic-2.jpg",
      "/public/imgs/cars-photos-db/honda/civic/civic-3.jpg",
    ],
    crv: [
      "/public/imgs/cars-photos-db/honda/cr-v/cr-v-0.jpg",
      "/public/imgs/cars-photos-db/honda/cr-v/cr-v-1.jpg",
      "/public/imgs/cars-photos-db/honda/cr-v/cr-v-2.jpg",
      "/public/imgs/cars-photos-db/honda/cr-v/cr-v-3.jpg",
    ],
  },
  ford: {
    ranger: [
      "/public/imgs/cars-photos-db/ford/ranger/ranger-0.jpg",
      "/public/imgs/cars-photos-db/ford/ranger/ranger-1.jpg",
      "/public/imgs/cars-photos-db/ford/ranger/ranger-2.jpg",
      "/public/imgs/cars-photos-db/ford/ranger/ranger-3.jpg",
    ],
    ecoSport: [
      "/public/imgs/cars-photos-db/ford/ecosport/ecosport-0.jpg",
      "/public/imgs/cars-photos-db/ford/ecosport/ecosport-1.jpg",
      "/public/imgs/cars-photos-db/ford/ecosport/ecosport-2.jpg",
      "/public/imgs/cars-photos-db/ford/ecosport/ecosport-3.jpg",
    ],
  },
  mitsubishi: {
    ltwo: [
      "/public/imgs/cars-photos-db/mitsubishi/l200/l200-0.jpg",
      "/public/imgs/cars-photos-db/mitsubishi/l200/l200-1.jpg",
      "/public/imgs/cars-photos-db/mitsubishi/l200/l200-2.jpg",
      "/public/imgs/cars-photos-db/mitsubishi/l200/l200-3.jpg",
    ],
    montero: [
      "/public/imgs/cars-photos-db/mitsubishi/montero-sport/montero-sport-0.jpg",
      "/public/imgs/cars-photos-db/mitsubishi/montero-sport/montero-sport-1.jpg",
      "/public/imgs/cars-photos-db/mitsubishi/montero-sport/montero-sport-2.jpg",
      "/public/imgs/cars-photos-db/mitsubishi/montero-sport/montero-sport-3.jpg",
    ],
  },
};

const { brand, model } = new Proxy(
  new URLSearchParams(window.location.search),
  {
    get: (searchParams, prop) => searchParams.get(prop),
  }
);

console.log(brand, model, brandsData[brand][model]);
const carouselSources = brandsData[brand][model];

const generateCarouselElement = (model, imageSrc, isFirst) => {
  const divCarousel = document.createElement("div");
  divCarousel.classList.add("carousel-item");

  const img = document.createElement("img");
  img.setAttribute("src", imageSrc);
  if (isFirst) {
    divCarousel.classList.add("active");
  }
  img.setAttribute("alt", model);
  img.setAttribute("height", "500");
  img.setAttribute("width", "600");
  img.classList.add("d-block", "w-100");

  divCarousel.appendChild(img);

  return divCarousel;
};

const generateCarouselIndicatorElement = (indicatorIndex, isFirstIndicator) => {
  const divIndicatorElement = document.createElement("button");
  if (isFirstIndicator) {
    divIndicatorElement.setAttribute("aria-current", "true");
    divIndicatorElement.classList.add("active");
  }
  divIndicatorElement.setAttribute(
    "data-bs-target",
    "#carouselExampleIndicators"
  );
  divIndicatorElement.setAttribute("data-bs-slide-to", `${indicatorIndex}`);
  divIndicatorElement.setAttribute("aria-label", `Slide ${indicatorIndex}`);

  return divIndicatorElement;
};

carouselSources.forEach((imgSrc, index) => {
  console.log(index);
  const carouselIndicatorsItem = generateCarouselIndicatorElement(
    index,
    index === 0
  );
  carouselIndicatorContainerElement.appendChild(carouselIndicatorsItem);

  const carouselItem = generateCarouselElement(model, imgSrc, index === 0);
  carouselContainerElement.appendChild(carouselItem);
});
