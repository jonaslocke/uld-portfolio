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

const createCarouselItem = (title, paragraph, animated = true) => {
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
  ac("caption", caption);
  ac("btn uld-btn-secondary", cta);

  if (animated) {
    ac("animated fadeInLeft", titleEl);
    ac("animated fadeInRight", paragraphEl);
    ac("animated fadeIn", caption);
    ac("animated fadeInUp", cta);
  }

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

const carouselItemsProps = [
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
    animated: false,
  },
  {
    title: "Empondere!",
    paragraph:
      "Empondere sua empresa com um desenvolvimento web de alta qualidade",
    imageClass: "sea",
    animated: true,
  },
  {
    title: "Em todo lugar",
    paragraph:
      "Designs responsivos e user-friendly que funcionam em todos os dispositivos",
    imageClass: "river",
    animated: true,
  },
];

const controlScroll = () => {
  const header = $("header");
  const scrollDownElement = $("#scroll-down-element");
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 280) {
      ac("header-scrolled animate", header);
      cc("d-block", "d-none", scrollDownElement);
    } else {
      rc("header-scrolled", header);
      cc("d-none", "d-block", scrollDownElement);
    }
  });
};

const insertOfferedServices = () => {
  /*
    Design de sites responsivos
    Otimização de SEO
    Integração de plataformas de e-commerce
    Desenvolvimento de landing pages
    Criação de logotipos e identidade visual
    Manutenção e atualização de sites existentes
    Desenvolvimento de aplicativos web
    Design de mídia social e gerenciamento de conteúdo
    Desenvolvimento de sistemas personalizados de gerenciamento de conteúdo (CMS)
    Consultoria em estratégias de marketing digital.
    Análise de desempenho e otimização de sites
    Integração de ferramentas de análise de dados
    Design de campanhas de marketing por email
    Desenvolvimento de aplicativos móveis híbridos
    Implementação de segurança em sites
    Desenvolvimento de sistemas de gerenciamento de pedidos e pagamentos online
    Design de interfaces de usuário (UI) e de experiência do usuário (UX)
    Personalização de templates de site prontos
    Integração de sistemas de pagamento online
    Criação de protótipos e testes de usuário para validação de ideias.    
  */

  const element = $("#offered-services");
  const services = [
    "Design de sites responsivos",
    "Otimização de SEO",
    "Integração de plataformas de e-commerce",
    "Desenvolvimento de landing pages",
    "Manutenção e atualização de sites existentes",
    "Desenvolvimento de aplicativos web",
    "Integração de ferramentas de análise de dados",
    "Implementação de segurança em sites",
    "Design de interfaces de usuário (UI) e de experiência do usuário (UX)",
    "Integração de sistemas de pagamento online",
    "Análise de desempenho e otimização de sites"
  ];
  for (let service of services) {
    const li = ce("li");
    li.innerText = service;
    element.appendChild(li);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const carousel = $("#main-carousel");

  const carouseItems = [];

  for (let index = 0; index < carouselItemsProps.length; index++) {
    const prop = carouselItemsProps[index];
    const item = createCarouselItem(prop.title, prop.paragraph, prop.animated);
    item.classList.add(prop.imageClass);

    if (index === 0) {
      item.classList.add("active");
    }

    carouseItems.push(item);
  }

  carouseItems.forEach((item) => carousel.appendChild(item));

  controlScroll();
  insertOfferedServices();
});
