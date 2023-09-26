/** @format */

"use strict";

const mainContainer = document.querySelector("main");
const screen = document.querySelector(".screen");
const asideContainer = document.querySelector("aside");
const filterButtonsContainer = document.querySelector(
  ".filter-buttons-container"
);

const jobCon = await fetch("./data.json");
const jobsObject = await jobCon.json();

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
