import AddNewPlayerInformationCard from './AddNewPlayerInformationCard';
import PlayerInformationCard from './PlayerInformationCard';

function PlayerInformation() {
  return (
    <div className='player-information-cards'>
      <AddNewPlayerInformationCard/>
      <PlayerInformationCard/>
    </div>
  )
}

export default PlayerInformation;
