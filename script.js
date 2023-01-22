const draggables =
  document.querySelectorAll(".dragable");
const containers =
  document.querySelectorAll(".container");

draggables.forEach((dragable) => {
  dragable.addEventListener("dragstart", () => {
    dragable.classList.add("dragging");
  });

  dragable.addEventListener("dragend", () => {
    dragable.classList.remove("dragging");
  });
});

// containers.forEach((container) => {
//   container.addEventListener("dragover", (e) => {
//     const draggingElement =
//       document.querySelector(".dragging");
//     const afterElement = getAfterElement(
//       container,
//       e.clientY
//     );
//     if (afterElement == null) {
//       container.append(draggingElement);
//     } else {
//       container.insertBefore(
//         draggingElement,
//         afterElement
//       );
//     }
//   });
// });

// function getAfterElement(container, y) {
//   const draggableElements = [
//     ...container.querySelectorAll(
//       ".dragable:not(.dragging)"
//     ),
//   ];
//   return draggableElements.reduce(
//     (closet, element) => {
//       const box = element.getBoundingClientRect();
//       const offset = y - box.top - box.height / 2;
//       if (offset < 0 && offset > closet.offset) {
//         return { offset, element };
//       } else {
//         return closet;
//       }
//     },
//     { offset: Number.NEGATIVE_INFINITY }
//   ).element;
// }
