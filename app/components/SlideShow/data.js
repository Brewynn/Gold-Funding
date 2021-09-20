import {buttonDisabled} from '../../../utils/client/helperFunctions';

const buttonsNextPrev = (prevImage, nextImage) => [
  {
    icon: '❮',
    onclick: () => {
      buttonDisabled();
      prevImage();
    },
  },
  {
    icon: '❯',
    onclick: () => {
      buttonDisabled();
      nextImage();
    },
  },
];

export {buttonsNextPrev};
