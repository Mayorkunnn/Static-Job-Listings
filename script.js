/** @format */

"use strict";

import photosnapLogo from "./images/photosnap.svg";
import manageLogo from "./images/manage.svg";
import accountLogo from "./images/account.svg";
import myhomeLogo from "./images/myhome.svg";
import loopStudiosLogo from "./images/loop-studios.svg";
import faceitLogo from "./images/faceit.svg";
import shortlyLogo from "./images/shortly.svg";
import insureLogo from "./images/insure.svg";
import eyecamCoLogo from "./images/eyecam-co.svg";
import airFilterCompanyLogo from "./images/the-air-filter-company.svg";

const images = {
  photosnapLogo,
  manageLogo,
  accountLogo,
  myhomeLogo,
  loopStudiosLogo,
  faceitLogo,
  shortlyLogo,
  insureLogo,
  eyecamCoLogo,
  airFilterCompanyLogo,
};

export default images;

const mainContainer = document.querySelector("main");
const screen = document.querySelector(".screen");
const asideContainer = document.querySelector("aside");
const filterButtonsContainer = document.querySelector(
  ".filter-buttons-container"
);

const jobsObject = [
  {
    id: 1,
    company: "Photosnap",
    logo: photosnapLogo,
    new: true,
    featured: true,
    position: "Senior Frontend Developer",
    role: "Frontend",
    level: "Senior",
    postedAt: "1d ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["HTML", "CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 2,
    company: "Manage",
    logo: manageLogo,
    new: true,
    featured: true,
    position: "Fullstack Developer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1d ago",
    contract: "Part Time",
    location: "Remote",
    languages: ["Python"],
    tools: ["React"],
  },
  {
    id: 3,
    company: "Account",
    logo: accountLogo,
    new: true,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2d ago",
    contract: "Part Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
  {
    id: 4,
    company: "MyHome",
    logo: myhomeLogo,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "5d ago",
    contract: "Contract",
    location: "USA Only",
    languages: ["CSS", "JavaScript"],
    tools: [],
  },
  {
    id: 5,
    company: "Loop Studios",
    logo: loopStudiosLogo,
    new: false,
    featured: false,
    position: "Software Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "1w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["Ruby", "Sass"],
  },
  {
    id: 6,
    company: "FaceIt",
    logo: faceitLogo,
    new: false,
    featured: false,
    position: "Junior Backend Developer",
    role: "Backend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "UK Only",
    languages: ["Ruby"],
    tools: ["RoR"],
  },
  {
    id: 7,
    company: "Shortly",
    logo: shortlyLogo,
    new: false,
    featured: false,
    position: "Junior Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["HTML", "JavaScript"],
    tools: ["Sass"],
  },
  {
    id: 8,
    company: "Insure",
    logo: insureLogo,
    new: false,
    featured: false,
    position: "Junior Frontend Developer",
    role: "Frontend",
    level: "Junior",
    postedAt: "2w ago",
    contract: "Full Time",
    location: "USA Only",
    languages: ["JavaScript"],
    tools: ["Vue", "Sass"],
  },
  {
    id: 9,
    company: "Eyecam Co.",
    logo: eyecamCoLogo,
    new: false,
    featured: false,
    position: "Full Stack Engineer",
    role: "Fullstack",
    level: "Midweight",
    postedAt: "3w ago",
    contract: "Full Time",
    location: "Worldwide",
    languages: ["JavaScript", "Python"],
    tools: ["Django"],
  },
  {
    id: 10,
    company: "The Air Filter Company",
    logo: airFilterCompanyLogo,
    new: false,
    featured: false,
    position: "Front-end Dev",
    role: "Frontend",
    level: "Junior",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "Worldwide",
    languages: ["JavaScript"],
    tools: ["React", "Sass"],
  },
];

class Jobs {
  jobs = [];
  #uniqueArr = [];
  #arr = new Set();
  constructor() {
    this.jobs = JSON.parse(JSON.stringify(jobsObject)) || [];
    this.#renderJobs();
    // const filterInfo = [this.jobs.role, this.jobs.level, ...this.jobs.languages, ...this.jobs.tools];
    mainContainer.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("btn")) {
        this.#filterJobs(target);
      }
    });

    asideContainer.addEventListener("click", (e) => {
      const target = e.target;

      if (target.classList.contains("close")) {
        this.#removeFilterJobs(target.parentElement);
      }
    });
  }

  #filterJobs(clicked) {
    this.#arr.add(clicked.textContent);
    this.#uniqueArr = [...this.#arr];
    this.#displayOnScreen();

    if (screen.children.length > 0) screen.classList.remove("hidden");

    const filteredJobs = this.jobs.filter((job) => {
      return this.#uniqueArr.every((el) => job.filterInfo.includes(el));
    });

    mainContainer.innerHTML = "";
    this.#renderJobs(filteredJobs);
  }

  #displayOnScreen() {
    let html = "";
    this.#arr.forEach((el) => {
      html += `<button class="btn btn__close" type="button" title=${el} >
          ${el} <img
            class="close"
            src="./images/icon-remove.svg"
            alt=""
          /></button
        >`;
    });

    filterButtonsContainer.innerHTML = html;
  }

  #removeFilterJobs(clicked) {
    const filterToRemove = clicked.textContent.trim();

    // Delete from Set
    this.#arr.delete(filterToRemove);

    // Update Array
    this.#uniqueArr = [...this.#arr];

    filterButtonsContainer.removeChild(clicked);

    const filteredJobs = this.jobs.filter((job) => {
      return this.#uniqueArr.every((el) => job.filterInfo.includes(el));
    });

    mainContainer.innerHTML = "";
    this.#renderJobs(filteredJobs);

    if (this.#arr.size === 0) screen.classList.add("hidden");
  }

  #renderJobs(jobs = this.jobs) {
    if (!jobs) return;
    jobs.forEach((job) => {
      job.filterInfo = [job.role, job.level, ...job.languages, ...job.tools];
      // job.push(filterInfo);

      const displayFilters = () => {
        const jobsContainer = document.querySelectorAll(".job");

        const filter = document.createElement("div");
        filter.classList.add("filter");

        job.filterInfo.forEach((fil) => {
          const html = `<button class="btn" type="button" title=${fil}>${fil}</button>`;
          filter.insertAdjacentHTML("beforeend", html);
        });

        jobsContainer.forEach((jobContainer) => {
          jobContainer.append(filter);
          if (job.new) jobContainer.classList.add("new__content");
          if (job.featured) jobContainer.classList.add("featured__content");
        });
      };

      const html = `<section class="job">
        <div class="main">
          <img class="job__image" src=${job.logo} alt=${job.company} />
          <div class="content">
            <div class="content__top">
              <p>${job.company} </p>
              <p class="tab new">NEW!</p>
              <p class="tab featured">FEATURED</p>
            </div>
            <h3 class="content__middle">${job.position}</h3>
            <div class="content__bottom">
              <p>${job.postedAt}</p>
              <p>.</p>
              <p>${job.contract}</p>
              <p>.</p>
              <p>${job.location}</p>
            </div>
          </div>
        </div>
      </section>`;

      mainContainer.insertAdjacentHTML("beforeend", html);
      displayFilters();
    });
  }
}

const jobs = new Jobs();
