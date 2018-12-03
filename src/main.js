require("./main.scss");
// require("./node_modules/gsap/scrollToPlugin.js");

import { TweenLite, Power2 } from "gsap";

const appContainer = document.querySelector("#app");
const button = appContainer.querySelector("#shotProjects");
const containerProjects = appContainer.querySelector(".container-projects");
const listProjects = appContainer.querySelector(".list-projects");
const listProjectsItem = listProjects.querySelectorAll(".list-projects--item");

button.addEventListener("click", () => {
  TweenLite.to(containerProjects, 0.6, {
    css: { left: 0 },
    ease: Power2.easeOut,
    onComplete: () => {
      listProjectsItem.forEach((el, i) => {
        TweenLite.to(el, 1, {
          css: { minWidth: 200 },
          delay: i * 0.1,
          ease: Back.easeOut,
          onComplete: () => {
            if (i == listProjectsItem.length - 1) {
              listProjectsItem.forEach(el => {
                el.addEventListener("mouseenter", () => {
                  TweenLite.to(el, 0.4, {
                    css: { width: 600 },
                    ease: Power2.easeInOut
                  });
                });

                el.addEventListener("mouseleave", () => {
                  TweenLite.to(el, 0.4, {
                    css: { width: 200 },
                    ease: Power2.easeInOut
                  });
                });
              });
            }
          }
        });
      });
      TweenLite.set(containerProjects, { css: { overflow: "auto" } });
      // TweenLite.to(containerProjects, 2, { scrollTo: { x: 250 } });
    }
  });
});
