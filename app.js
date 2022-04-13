const form = document.querySelector("#memeForm");
const imgURL = document.querySelector("#memeImg");
const topTextInput = document.querySelector("#topText");
const bottomTextInput = document.querySelector("#bottomText");
const addBtn = document.querySelector("#addBtn");
const results = document.querySelector("#results");
addBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const memePhoto = document.createElement("img");
  memePhoto.setAttribute("src", imgURL.value);
  memePhoto.setAttribute("id", "memePhoto");
  memePhoto.classList.add("memeImage");
  const topText = document.createElement("div");
  topText.innerText = topTextInput.value;
  topText.classList.add("topText");
  const bottomText = document.createElement("div");
  bottomText.innerText = bottomTextInput.value;
  bottomText.classList.add("bottomText");
  // const deleteImg = document.createElement("img");
  // deleteImg.setAttribute(
  //   "src",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKdW3NEfMq-dNbbby6A-OfzfgQXHMZioOiw&usqp=CAU"
  // );
  // deleteImg.setAttribute("width", `${memePhoto.width}px`);
  // deleteImg.setAttribute("height", `${memePhoto.width}px`);
  // deleteImg.setAttribute("id", "deleteImg");
  const container = document.createElement("div");
  container.classList.add("container");
  // container.append(deleteImg);
  container.append(bottomText);
  container.append(topText);
  container.append(memePhoto);
  results.append(container);
  imgURL.value = "";
  topTextInput.value = "";
  bottomTextInput.value = "";
});

results.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("topText")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("memeImage")) {
    e.target.parentElement.remove();
  } else if (e.target.classList.contains("bottomText")) {
    e.target.parentElement.remove();
  }
});

//how do i make it so that if i click outside of the photo it doesn't delete the whole body
//and how do i make the div the same size as the photo

// // ****i can't get this to work
// results.addEventListener("mousemove", function (e) {
//   if (e.target.classList.contains("memeImage")) {

//   }
// });

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", function () {
  results.remove();
}); //how come when i put e.preventDefault it doesn't work anymore when i hit submit again
