import { buttonDisabled } from "../../../utils/client/helperFunctions";

const buttonPagination = (prevImage, nextImage) => [
  {
    icon: "❮",
    onclick: () => {
      buttonDisabled();
      prevImage();
    },
  },
  {
    icon: "❯",
    onclick: () => {
      buttonDisabled();
      nextImage();
    },
  },
];

export { buttonPagination};
