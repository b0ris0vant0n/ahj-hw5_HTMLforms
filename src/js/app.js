import { Popover } from "./poppover";

const btn = document.querySelector("button");

const popover = new Popover();

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (document.querySelector(".popover") === null) {
    popover.addPopover(btn);
  } else {
    popover.removePopover();
  }
});
