const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
console.log(params.category);
const brandsContainersElement = document.getElementById("brandsRowContainer");

console.log(brandsContainersElement.children.forEach(element => {
    
});[0].children[1].textContent);
