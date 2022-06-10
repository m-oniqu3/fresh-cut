//variables for the navbar
const menuIcon = document.querySelector("#menu-icon");
const links = document.querySelectorAll(".nav__links");

// variables for the team members
const teamPictures = document.querySelectorAll(".about__team__picture");
const teamMemberPicture = document.getElementsByClassName(
  "about__team__member"
);
let barberName = document.getElementById("name");
let description = document.getElementById("description");

//NAVBAR SECTION

menuIcon.addEventListener("click", () => {
  links.forEach((link) => {
    link.classList.toggle("nav__links--active");
  });
});

// TEAM MEMBERS SECTION

// array of team info
const teamInfo = [
  {
    name: "Donny Pancho",
    image:
      "https://images.unsplash.com/photo-1582893561942-d61adcb2e534?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80",
    description:
      "If you're looking for a high-end barbering experience, look no further than Donny. With years of experience in the industry he gives his clients the perfect cut, every time. He's also a master of color, so if you're looking to add a little something extra to your look, Don is your man. Book your appointment with Donny today and you'll be sure to walk out of the salon looking and feeling your best.",
  },
  {
    name: "Toris Dorelli",
    image:
      "https://images.unsplash.com/photo-1571154182577-a63c5101f8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description:
      "Toris is one of the best barbers at Fresh Cut. He has been in the business for over 10 years and has mastered the art of cutting hair. He is always up-to-date on the latest trends and knows how to style any hair type. Toris is also a great listener and takes the time to understand each client's individual needs. He always strives to provide the best possible service and leaves every client looking and feeling their best. If you're looking for a luxury barbering experience, book your appointment with Toris today!",
  },
  {
    name: "Luca Bianchi",
    image:
      "https://images.unsplash.com/photo-1635273051937-a0ddef9573b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    description:
      "If you want a luxurious haircut experience, then you need to book with Luca. He takes his time to ensure each client leaves looking and feeling their best. His precision and attention to detail is unmatched, and he always makes sure to listen to his clients to ensure they get the cut they really want. Trust us, Luca is the one of best in the business and you won't be disappointed!",
  },
  {
    name: "Marcus Bryant",
    image:
      "https://images.unsplash.com/photo-1567894340315-735d7c361db0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=437&q=80",
    description:
      "Marcus is an experienced barber who has been working at Fresh Cut for over three years. He takes pride in his work and takes the time to ensure each client leaves looking and feeling their best. Marcus is especially skilled in cutting and styling men's hair, and is always up-to-date on the latest trends. He has a friendly and personable demeanor which puts clients at ease, and he always goes the extra mile to ensure they are happy with their service. If you are looking for a top-notch haircut and styling experience, Marcus is the barber for you!",
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
