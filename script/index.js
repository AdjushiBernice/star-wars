const starImage = document.querySelector(".photos");
const starDetails = document.querySelector(".details");
const starsList = document.querySelectorAll("li");

const photosArr = [
  "star wars characters/luke skywalker.jpg",
  "star wars characters/c-3po.jpg",
  "star wars characters/R2-D2_Droid.png",
  "star wars characters/darth vader.webp",
  "star wars characters/lela.webp",
  "star wars characters/owen lars.webp",
  "star wars characters/Beru_whitesun lars.webp",
  "star wars characters/r5-d4-star-wars-.jpg",
  "star wars characters/darklighter biggs.jpg",
  "star wars characters/obi wan kenobi.webp",
];

starsList.forEach((name, index) => {
  name.addEventListener("click", function main() {
    fetch("https://swapi.dev/api/people/?format=json")
      .then((response) => response.json())
      .then((data) => {
        starDetails.style.display = "flex";
        starImage.src = photosArr[index];
        starImage.style.display = "block";
        starDetails.innerHTML = `<span>Name: ${data.results[index].name} <br> Height: ${data.results[index].height}cm <br> Gender: ${data.results[index].gender} </span>`;
      })
      .catch((err) => console.log(err));
  });
});

// const Bernice = document.getElementById("Demo");
// function main() {
//   Bernice.textContent = "loading...";
//   fetch("https://swapi.dev/api/people/?format=json")
//     .then((result) => result.json())
//     .then((data) => {
//       Bernice.innerHTML = data.results
//         .map((result) => {
//           return (
//             "<li>" +
//             result.name +
//             "<br>" +
//             result.height +
//             "<br>" +
//             result.gender +
//             "</li>"
//           );
//         })
//         .join("");
//     })
//     .catch((error) => console.log(error));
// }
// window.onload = main();

module.exports = { main };
