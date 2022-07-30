const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const person = document.getElementById("photo");
const textEl = document.getElementById("text");
const nameEl = document.getElementById("name");
const roleEl = document.getElementById("role");

const testimonials = [
  {
    image: "./images/image-tanya.jpg",
    name: "Tanya Sinclair",
    role: "UX Engineer",
    text: `
      “ I’ve been interested in coding for a while but never taken the jump,
      until now. I couldn’t recommend this course enough. I’m now in the job
      of my dreams and so excited about the future. ”
      `,
  },
  {
    image: "./images/image-john.jpg",
    name: "John Tarkpor",
    role: "Junior Front-end Developer",
    text: `
    “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”
      `,
  },
];

let curr = 0;

prevBtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  if (curr <= 0) {
    curr = testimonials.length - 1;
  } else {
    curr--;
  }
  displayCurrentPerson(testimonials[curr]);
});

nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  e.stopPropagation();

  if (curr >= testimonials.length - 1) {
    curr = 0;
  } else {
    curr++;
  }
  displayCurrentPerson(testimonials[curr]);
});

function displayCurrentPerson(currPerson) {
  const { image, text, name, role } = currPerson;

  person.src = image;
  textEl.innerHTML = text;
  nameEl.innerHTML = name;
  roleEl.innerHTML = role;
}

window.addEventListener("load", displayCurrentPerson(testimonials[0]));
