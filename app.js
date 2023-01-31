const $ = (el) => document.querySelector(el);
const $$ = (el) => document.querySelectorAll(el);

const ce = (el) => document.createElement(el);
const ac = (classes, el) => {
  classes = classes.split(" ");
  el.classList.add(...classes);
};

const rc = (classes, el) => {
  el.classList.remove(classes);
};

const cc = (remove, add, el) => {
  el.classList.remove(remove);
  el.classList.add(add);
};

const ae = (el, anchor) => anchor.appendChild(el);

const createCarouselItem = (title, paragraph) => {
  const item = ce("div");
  const container = ce("div");
  const row = ce("div");
  const col = ce("div");
  const caption = ce("div");

  const titleEl = ce("h2");
  const paragraphEl = ce("p");
  const cta = ce("a");

  ac("carousel-item", item);
  ac("container h-100 d-md-block", container);
  ac("row align-items-center h-100", row);
  ac("col-12 col-md-9 col-lg-7 col-xl-6", col);
  ac("caption animated fadeIn", caption);

  ac("animated fadeInLeft", titleEl);
  ac("animated fadeInRight", paragraphEl);
  ac("animated fadeInUp btn uld-btn-secondary", cta);

  titleEl.innerText = title;
  paragraphEl.innerText = paragraph;
  cta.innerText = "contato";

  cta.href = "#";

  ae(titleEl, caption);
  ae(paragraphEl, caption);
  ae(cta, caption);

  ae(caption, col);
  ae(col, row);
  ae(row, container);
  ae(container, item);

  return item;
};

const carouselItemsText = [
  /*
"Hire the Best Freelance Web Designer for Your Next Project"
"Get a Custom Website Design that Meets Your Unique Needs"
"Unleash Your Business Potential with a Professional Web Design"
"Transform Your Online Presence with a Custom Web Design"
"Maximize Your Website's Potential with a Skilled Freelance Designer"
"Bring Your Website to Life with a Personalized Web Design Solution"
"Attract More Visitors and Boost Your Sales with a Stunning Web Design"
"Get a Competitive Edge with a Professional Freelance Web Designer"
"Elevate Your Brand with a Custom Web Design Built Just for You"
"Experience the Power of a Unique and Engaging Web Design"
"Streamline Your Website and Enhance User Experience with a Custom Web Design"
"Get a Responsive and User-Friendly Web Design that Works on All Devices"
"Partner with a Freelance Web Designer for a Website that Delivers Results"
"Make Your Website Stand Out with a One-of-a-Kind Web Design"
"Empower Your Business with a High-Quality Freelance Web Design"
*/
  {
    title: "Libere o potencial",
    paragraph:
      "Libere o potencial do seu negocio com um web designer profissional",
    imageClass: "boat",
  },
  {
    title: "Empondere!",
    paragraph:
      "Empondere sua empresa com um desenvolvimento web de alta qualidade",
    imageClass: "sea",
  },
  {
    title: "Em todo lugar",
    paragraph:
      "Designs responsivos e user-friendly que funcionam em todos os dispositivos",
    imageClass: "river",
  },
];

const controlScroll = () => {
  const header = $("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 280) {
      ac("header-scrolled", header);
    } else {
      rc("header-scrolled", header);
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const carousel = $("#main-carousel");

  const carouseItems = [];

  for (let index = 0; index < carouselItemsText.length; index++) {
    const text = carouselItemsText[index];
    const item = createCarouselItem(text.title, text.paragraph);
    item.classList.add(text.imageClass);

    if (index === 0) {
      item.classList.add("active");
    }

    carouseItems.push(item);
  }

  carouseItems.forEach((item) => carousel.appendChild(item));

  controlScroll();
});
