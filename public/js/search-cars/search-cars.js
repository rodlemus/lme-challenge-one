const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
const brandsContainersElement = document.getElementById("brandsRowContainer");
const brandsItems = Array.from(brandsContainersElement.children);

const initDefaultBrand = (defaultQueryUrl) => {
  brandsItems.forEach((brandElement) => {
    const brandTextFromSpan = brandElement.children[1].textContent
      .trim()
      .toLowerCase();

    const brandMatch = brandTextFromSpan === defaultQueryUrl;
    if (brandMatch) {
      brandElement.classList.add("brand-item-selected");
    }
  });
};

const removeBrandSelected = () => {
  brandsItems.forEach((brandElement) => {
    const isCurrentBrandSelected = brandElement.classList.contains(
      "brand-item-selected"
    );
    if (isCurrentBrandSelected) {
      brandElement.classList.remove("brand-item-selected");
    }
  });
};
const defaultQueryBrand = !params.defaultBrand ? "toyota" : params.defaultBrand;

// Esta funcion primero lee el Query Param ' defaultBrand ', para definir una marca de carros por defecto
// sino existe en la url se asigna una por default en este caso toyota, y se deja el Div por default con la clase de css
// brand-item-selected

initDefaultBrand(defaultQueryBrand);

brandsItems.forEach((brandElement) => {
  brandElement.addEventListener("click", () => {
    removeBrandSelected();
    brandElement.classList.add("brand-item-selected");
  });
});
