import {getImagePath} from '../../../utils/client/helperFunctions';

const path = '../../asset/images';
const dataSlideShow = [
  {
    title: 'Welcome to',
    subTitle: 'Golden Funding',
    backgroundImage: getImagePath(`${path}/slideshow-1`, 'jpg'),
  },
  {
    title: 'Apply for an immediate offer',
    subTitle: 'Speak with an agent!',
    backgroundImage: getImagePath(`${path}/slideshow-2`, 'jpeg'),
  },
  {
    title: 'Minimum Requirement',
    subTitle: 'ask about our offers',
    backgroundImage: getImagePath(`${path}/slideshow-3`, 'jpg'),
  },
];

export {
  dataSlideShow,
};
