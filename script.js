/** @format */

"use strict";

const mainContainer = document.querySelector("main");
const screen = document.querySelector(".screen");
const filterButtonsContainer = document.querySelector(
  ".filter-buttons-container"
);

class Jobs {
  jobs = [];
  uniqueArr = [];
  arr = [];
  constructor() {
    this.jobs = JSON.parse(JSON.stringify(jobsObject)) || [];
    this.jobs.forEach((job) => {
      job.filterInfo = [job.role, job.level, ...job.languages, ...job.tools];
    });
    this.#renderJobs(this.jobs);
    mainContainer.addEventListener("click", (e) => {
      const target = e.target;

      // Check if the clicked element has the 'btn' class
      if (target.classList.contains("btn")) {
        this.#filterJobs(target);
      }

      this.removeFilterJobs(this.arr);
    });
  }

  removeFilter(filterToRemove) {
    const index = this.uniqueArr.indexOf(filterToRemove);
    if (index !== -1) {
      this.uniqueArr.splice(index, 1);
    }
  }

  #filterJobs(clicked) {
    this.arr.push(clicked.textContent);
    this.uniqueArr = [...new Set(this.arr)];
    this.displayOnScreen();
    if (screen.children.length > 0) screen.classList.remove("hidden");

    // Filter jobs based on selected filters
    const filteredJobs = this.jobs.filter((job) => {
      return this.uniqueArr.every((filter) => job.filterInfo.includes(filter));
    });

    // Clear the main container before rendering the filtered jobs
    mainContainer.innerHTML = "";
    this.#renderJobs(filteredJobs);
  }

  removeFilterJobs(arr) {
    const closeButtons = document.querySelectorAll(".close");
    closeButtons.forEach((closeButton) => {
      closeButton.addEventListener("click", (e) => {
        const filterToRemove = e.target.parentElement.textContent.trim();

        // Remove the filter from arr
        const index = arr.indexOf(filterToRemove);
        if (index !== -1) {
          arr.splice(index, 1);
        }

        // Remove the filter button
        filterButtonsContainer.removeChild(e.target.parentElement);

        // Reapply filters
        const filteredJobs = this.jobs.filter((job) => {
          return arr.every((filter) => job.filterInfo.includes(filter));
        });

        // Clear the main container before rendering the filtered jobs
        mainContainer.innerHTML = "";
        this.#renderJobs(filteredJobs);
        if (arr.length === 0) {
          // If no filters left, hide the screen
          screen.classList.add("hidden");
        }
      });
    });
  }

  displayOnScreen() {
    let html = "";
    this.uniqueArr.forEach((fil) => {
      html += `<button class="btn btn__close" type="button" title=${fil}>
          ${fil}<img
            class="close"
            src="./images/icon-remove.svg"
            alt=""
          /></button>`;
    });

    // Insert the filter buttons into the filterButtonsContainer
    filterButtonsContainer.innerHTML = html;
  }

  #renderJobs(jobs = this.jobs) {
    // if (jobs.length === 0) mainContainer.textContent = " No Jobs Available";
    if (jobs) {
      mainContainer.innerHTML = "";

      jobs.forEach((job) => {
        const filterInfo = [
          job.role,
          job.level,
          ...job.languages,
          ...job.tools,
        ];
        const jobsFil = function () {
          const jobContainers = document.querySelectorAll(".job");

          const filter = document.createElement("div");
          filter.classList.add("filter");

          filterInfo.forEach((fil) => {
            const html = `
            <button class="btn" type="button" title=${fil}>${fil}</button>
            `;

            filter.insertAdjacentHTML("beforeend", html);
          });
          jobContainers.forEach((jobContainer) => {
            jobContainer.appendChild(filter);
            if (job.new) jobContainer.classList.add("new__content");
            if (job.featured) jobContainer.classList.add("featured__content");
          });
        };

        const html = `
        <section class="job" id= ${job.id}>
            <div class="main">
            <img class="job__image" src= ${job.logo} alt="" />
            <div class="content">
                <div class="content__top">
                <p>${job.company}</p>
                <p class="tab new">NEW!</p>
                <p class="tab featured">FEATURED</p>
                </div>
                <h3 class="content__middle">${job.position}</h3>
                <div class="content__bottom">
                <p>${job.postedAt} </p>
                <p>.</p>
                <p>${job.contract} </p>
                <p>.</p>
                <p>${job.location} </p>
                </div>
            </div>
            </div>
        </section> 
            `;

        mainContainer.insertAdjacentHTML("beforeend", html);
        jobsFil();
      });
    }
  }
}

const jobs = new Jobs();
