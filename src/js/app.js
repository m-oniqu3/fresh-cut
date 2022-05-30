// Variables
const teamPictures = document.querySelectorAll(".about__team__picture");
const teamMemberPicture = document.getElementsByClassName(
  "about__team__member"
);
let barberName = document.getElementById("name");
let description = document.getElementById("description");

// array of team info
const teamInfo = [
  {
    name: "Donny Pancho",
    image:
      "https://images.unsplash.com/photo-1582893561942-d61adcb2e534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nunc euismod euismod aliquam, nisi nunc euismod nisi, euismod euismod nisi nunc euismod nisi.",
  },
  {
    name: "Toris Dorelli",
    image:
      "https://images.unsplash.com/photo-1571154182577-a63c5101f8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nunc euismod euismod aliquam, nisi nunc euismod nisi, euismod euismod nisi nunc euismod nisi.",
  },
  {
    name: "Luca Bianchi",
    image:
      "https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nunc euismod euismod aliquam, nisi nunc euismod nisi, euismod euismod nisi nunc euismod nisi.",
  },
  {
    name: "Marcus Bryant",
    image:
      "https://images.unsplash.com/photo-1567894340315-735d7c361db0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nunc euismod euismod aliquam, nisi nunc euismod nisi, euismod euismod nisi nunc euismod nisi.",
  },
];

//loop through the team pictures and add event listener to each one
teamPictures.forEach((picture) => {
  picture.addEventListener("click", () => getPictureInfo(picture.id));
});

//get the info of the team member clicked on and display it in the dom
const getPictureInfo = (id) => {
  if (id === "donny") {
    teamMemberPicture[0].setAttribute("src", teamInfo[0].image);
    barberName.innerHTML = teamInfo[0].name;
    description.innerHTML = teamInfo[0].description;
  } else if (id === "toris") {
    teamMemberPicture[0].setAttribute("src", teamInfo[1].image);
    barberName.innerHTML = teamInfo[1].name;
    description.innerHTML = teamInfo[1].description;
  } else if (id === "luca") {
    teamMemberPicture[0].setAttribute("src", teamInfo[2].image);
    barberName.innerHTML = teamInfo[2].name;
    description.innerHTML = teamInfo[2].description;
  } else if (id === "marcus") {
    teamMemberPicture[0].setAttribute("src", teamInfo[3].image);
    barberName.innerHTML = teamInfo[3].name;
    description.innerHTML = teamInfo[3].description;
  }
};
