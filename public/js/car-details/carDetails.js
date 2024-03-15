const carouselContainerElement = document.getElementById("carouselContainer");
const carouselIndicatorContainerElement = document.getElementById(
  "carouselIndicatorContainer"
);

const brandsData = {
  toyota: {
    corolla: {
      photos: [
        "/public/imgs/cars-photos-db/toyota/corolla/corolla-0.jpg",
        "/public/imgs/cars-photos-db/toyota/corolla/corolla-1.jpg",
        "/public/imgs/cars-photos-db/toyota/corolla/corolla-2.jpg",
        "/public/imgs/cars-photos-db/toyota/corolla/corolla-3.jpg",
      ],
      description:
        "El Toyota Corolla es un sedán compacto confiable y popular que ofrece una excelente eficiencia de combustible y un rendimiento sólido. Es conocido por su durabilidad y bajo costo de mantenimiento, lo que lo convierte en una opción popular para aquellos que buscan un vehículo práctico y económico.",
    },
    hilux: {
      photos: [
        "/public/imgs/cars-photos-db/toyota/hilux/hilux-0.png",
        "/public/imgs/cars-photos-db/toyota/hilux/hilux-1.jpg",
        "/public/imgs/cars-photos-db/toyota/hilux/hilux-bg.jpg",
        "/public/imgs/cars-photos-db/toyota/hilux/hilux-3.jpg",
      ],
      description:
        "La Toyota Hilux es una camioneta pickup resistente y versátil, ideal tanto para el trabajo como para el ocio. Ofrece una gran capacidad de carga y tracción en todas las condiciones, lo que la convierte en una opción popular para aventuras fuera de la carretera y para aquellos que necesitan un vehículo confiable para el trabajo diario.",
    },
  },
  nissan: {
    versa: {
      photos: [
        "/public/imgs/cars-photos-db/nissan/versa/versa-0.jpg",
        "/public/imgs/cars-photos-db/nissan/versa/versa-1.jpg",
        "/public/imgs/cars-photos-db/nissan/versa/versa-2.jpg",
        "/public/imgs/cars-photos-db/nissan/versa/versa-3.jpg",
      ],
      description:
        "El Nissan Versa es un automóvil compacto que destaca por su amplio espacio interior y su economía de combustible. Es ideal para aquellos que buscan un vehículo asequible y práctico para desplazamientos urbanos y viajes diarios.",
    },
    frontier: {
      photos: [
        "/public/imgs/cars-photos-db/nissan/frontier/frontier-0.jpg",
        "/public/imgs/cars-photos-db/nissan/frontier/frontier-1.jpg",
        "/public/imgs/cars-photos-db/nissan/frontier/frontier-2.jpg",
        "/public/imgs/cars-photos-db/nissan/frontier/frontier-3.jpg",
      ],
      description:
        "La Nissan Frontier es una camioneta pickup robusta y resistente, diseñada para el trabajo duro y la aventura todoterreno. Ofrece una excelente capacidad de remolque y tracción en terrenos difíciles, lo que la convierte en una opción popular para aquellos que necesitan un vehículo capaz y duradero.",
    },
  },
  hyundai: {
    tucson: {
      photos: [
        "/public/imgs/cars-photos-db/hyundai/tucson/tucson-0.jpg",
        "/public/imgs/cars-photos-db/hyundai/tucson/tucson-1.jpg",
        "/public/imgs/cars-photos-db/hyundai/tucson/tucson-2.jpg",
        "/public/imgs/cars-photos-db/hyundai/tucson/tucson-3.jpg",
      ],
      description:
        "El Hyundai Tucson es un SUV compacto que combina un diseño elegante con un interior espacioso y comodidades modernas. Ofrece un manejo suave y eficiente, junto con características de seguridad avanzadas, lo que lo convierte en una opción popular para familias y conductores urbanos.",
    },
    accent: {
      photos: [
        "/public/imgs/cars-photos-db/hyundai/accent/accent-0.jpg",
        "/public/imgs/cars-photos-db/hyundai/accent/accent-1.jpg",
        "/public/imgs/cars-photos-db/hyundai/accent/accent-2.jpg",
        "/public/imgs/cars-photos-db/hyundai/accent/accent-3.jpg",
      ],
      description:
        "El Hyundai Accent es un automóvil subcompacto que ofrece un excelente valor por su precio. Es conocido por su economía de combustible, manejo ágil y amplio espacio interior, lo que lo convierte en una opción popular para conductores que buscan un vehículo práctico y económico.",
    },
  },
  honda: {
    civic: {
      photos: [
        "/public/imgs/cars-photos-db/honda/civic/civic-0.jpg",
        "/public/imgs/cars-photos-db/honda/civic/civic-bg.png",
        "/public/imgs/cars-photos-db/honda/civic/civic-2.jpg",
        "/public/imgs/cars-photos-db/honda/civic/civic-3.jpg",
      ],
      description:
        "El Honda Civic es un automóvil compacto que destaca por su rendimiento deportivo, eficiencia de combustible y confiabilidad. Ofrece un manejo ágil, un interior cómodo y una amplia gama de características tecnológicas, lo que lo convierte en una opción popular para conductores que buscan un automóvil divertido de conducir y práctico para el uso diario.",
    },
    crv: {
      photos: [
        "/public/imgs/cars-photos-db/honda/cr-v/cr-v-0.jpg",
        "/public/imgs/cars-photos-db/honda/cr-v/cr-v-1.jpg",
        "/public/imgs/cars-photos-db/honda/cr-v/cr-v-2.jpg",
        "/public/imgs/cars-photos-db/honda/cr-v/cr-v-3.jpg",
      ],
      description:
        "El Honda CR-V es un SUV compacto que combina versatilidad, comodidad y confiabilidad. Ofrece un amplio espacio interior, una conducción suave y características de seguridad avanzadas, lo que lo convierte en una opción popular para familias y conductores aventureros por igual.",
    },
  },
  ford: {
    ranger: {
      photos: [
        "/public/imgs/cars-photos-db/ford/ranger/ranger-0.jpg",
        "/public/imgs/cars-photos-db/ford/ranger/ranger-1.jpg",
        "/public/imgs/cars-photos-db/ford/ranger/ranger-2.jpg",
        "/public/imgs/cars-photos-db/ford/ranger/ranger-3.jpg",
      ],
      description:
        "La Ford Ranger es una camioneta pickup compacta que ofrece una combinación de capacidad de carga, rendimiento y comodidad. Es conocida por su resistencia y capacidad todoterreno, lo que la convierte en una opción popular para aquellos que necesitan un vehículo resistente para el trabajo y la recreación al aire libre.",
    },
    ecoSport: {
      photos: [
        "/public/imgs/cars-photos-db/ford/ecosport/ecosport-0.jpg",
        "/public/imgs/cars-photos-db/ford/ecosport/ecosport-1.jpg",
        "/public/imgs/cars-photos-db/ford/ecosport/ecosport-2.jpg",
        "/public/imgs/cars-photos-db/ford/ecosport/ecosport-3.jpg",
      ],
      description:
        "La Ford EcoSport es un SUV subcompacto que combina un diseño atractivo con una conducción ágil y eficiencia de combustible. Ofrece un amplio espacio interior, características tecnológicas avanzadas y una conducción cómoda, lo que la convierte en una opción popular para conductores urbanos y aventureros.",
    },
  },
  mitsubishi: {
    ltwo: {
      photos: [
        "/public/imgs/cars-photos-db/mitsubishi/l200/l200-0.jpg",
        "/public/imgs/cars-photos-db/mitsubishi/l200/l200-1.jpg",
        "/public/imgs/cars-photos-db/mitsubishi/l200/l200-2.jpg",
        "/public/imgs/cars-photos-db/mitsubishi/l200/l200-3.jpg",
      ],
      description:
        "La Mitsubishi L200 es una camioneta pickup robusta y confiable que ofrece una excelente capacidad de carga y tracción en todas las condiciones. Es conocida por su durabilidad y rendimiento fuera de la carretera, lo que la convierte en una opción popular para aquellos que necesitan un vehículo resistente para el trabajo y la aventura.",
    },
    montero: {
      photos: [
        "/public/imgs/cars-photos-db/mitsubishi/montero-sport/montero-sport-0.jpg",
        "/public/imgs/cars-photos-db/mitsubishi/montero-sport/montero-sport-1.jpg",
        "/public/imgs/cars-photos-db/mitsubishi/montero-sport/montero-sport-2.jpg",
        "/public/imgs/cars-photos-db/mitsubishi/montero-sport/montero-sport-3.jpg",
      ],
      description:
        "El Mitsubishi Montero Sport es un SUV mediano que combina capacidad todoterreno con comodidad y tecnología moderna. Ofrece un amplio espacio interior, características de seguridad avanzadas y un rendimiento sólido tanto en carretera como fuera de ella, lo que lo convierte en una opción popular para familias y conductores aventureros.",
    },
  },
};

const { brand, model, year } = new Proxy(
  new URLSearchParams(window.location.search),
  {
    get: (searchParams, prop) => searchParams.get(prop),
  }
);

const randomNumber = (n, m) => {
  const decimalNumber = Math.random();

  const range = m - n + 1;

  return Math.floor(decimalNumber * range) + n;
};

const carouselSources = brandsData[brand][model].photos;
const carouselDescription = brandsData[brand][model].description;

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
  img.classList.add("d-block", "w-100", "img-fluid");

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
  const carouselIndicatorsItem = generateCarouselIndicatorElement(
    index,
    index === 0
  );
  carouselIndicatorContainerElement.appendChild(carouselIndicatorsItem);

  const carouselItem = generateCarouselElement(model, imgSrc, index === 0);
  carouselContainerElement.appendChild(carouselItem);
});

//Car info
const carTitle = `${brand} ${model} - ${year}`.toUpperCase();

document.getElementById("carTitle").textContent = carTitle;
document.getElementById("carDescription").textContent = carouselDescription;

const viewsNumber = randomNumber(120, 429);
const viewsTitle = `(Vistas ${viewsNumber})`;

document.getElementById("viewsTitle").textContent = viewsTitle;

//Comrar Modal
const shopCarButtonElement = document.getElementById("shopCarButton");
const shopCarModal = new bootstrap.Modal(
  document.getElementById("cardBuyedModal")
);

shopCarButtonElement.addEventListener("click", () => {
  shopCarModal.show();
});
