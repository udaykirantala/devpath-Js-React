// ../Components/TechSelector/ExploreCard.js
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '/Users/udayk/OneDrive/Desktop/devpath-Js-React/src/Styles/TechSelector.css'
export const ExploreCard = ({ icon, title, description,id }) => {
  return (
    <div className='exploreCard'>
      <FontAwesomeIcon icon={icon} size="2x" className='exploreCardIcon' />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
