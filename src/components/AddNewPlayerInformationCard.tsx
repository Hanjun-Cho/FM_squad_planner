import { useState } from 'react';
import './PlayerInformationCard.css';

function AddNewPlayerInformationCard() {
  const [clicked, setClicked] = useState(false);
  const [stage, setStage] = useState(-1);

  // -------- TEMPORARY ----------
  const attributes = [
    {
      'id': 0,
      'name': '1v1',
    },
    {
      'id': 1,
      'name': 'Defensive Awareness',
    },
    {
      'id': 2,
      'name': 'Aerial Duels',
    },
  ];
  
  const tendencies = [
    {
      'id': 0,
      'name': 'Cuts Inside from Both Wings',
    },
    {
      'id': 1,
      'name': 'Runs with Ball Often',
    },
  ]
  // -----------------------------

  const abilityOptions = [
    'Star Player',
    'Important Player',
    'Regular Starter',
    'Squad Player',
    'Impact Sub',
    'Fringe Player',
    'Breakthrough Prospect',
    'Hot Prospect',
    'Youngster'
  ];

  const footedness = [
    'Very Strong',
    'Strong',
    'Reasonable',
    'Weak',
    'Very Weak'
  ]

  const stages = [
    'Basic Info',
    'Strengths',
    'Weaknesses',
    'Tendencies'
  ]

  function startPlayerInput() {
    setClicked(true);
    setStage(0);
  }

  function hasNextStage() {
    return stage + 1 < stages.length;
  }

  function hasPreviousStage() {
    return stage - 1 >= 0;
  }

  function moveNext() {
    if(stage + 1 == stages.length) return;
    setStage(stage + 1);
  }

  function movePrevious() {
    setStage(stage - 1);
    if(stage == 0) {
      setClicked(false);
    }
  }

  return (
    <>
      { !clicked &&
        <div className='new-player-card add-new-player-card' onClick={() => startPlayerInput()}>
          Register New Player
        </div>
      }
      { clicked &&
        <div className='new-player-card input-new-player-card'>
          <span className='stage-name'>{stages[stage]}</span>
          <div className='input-new-player-card-container'>
            { stage == 0 &&
              <>
                <div className='input-new-player-name-ability'>
                  <input id='new-player-name' placeholder='Player Name'/>
                  <select className='new-player-strengths' name='new-player-strengths' id='new-player-strengths'>
                    {
                      abilityOptions.map((option, i) => {
                        return <option key={i} value='option'>{option}</option>
                      })
                    }
                  </select>
                </div>
                <div className='input-new-player-footedness'>
                  <label>
                    <input type='checkbox' id='is-left-footed' value='isLeftFooted'/>
                    <span className='checkbox'></span>
                    Left Footed?
                  </label>
                  <select className='new-player-footedness' name='new-player-footedness' id='new-player-footedness'>
                    {
                      footedness.map((option, i) => {
                        return <option key={i} value='option'>{option}</option>
                      })
                    }
                  </select>
                </div>
              </>
            }
            { stage != 0 &&
              <>
                <div className='search-container'>
                  <input id='search-input' placeholder={'Search ' + (stage == 3 ? 'Trait' : "Attribute")}/>
                  <button>Add</button>
                </div>
              </>
            }
            <div className='add-player-inputs'>
              <button onClick={() => movePrevious()}>
                { hasPreviousStage() && <>Back</>}
                { !hasPreviousStage() && <>Cancel</>}
              </button>
              <button className="next-button" onClick={() => moveNext()}>
                { hasNextStage() &&
                  <>Move to {stages[stage + 1]}</>
                }
                { !hasNextStage() &&
                  <>Finish</>
                }
              </button>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default AddNewPlayerInformationCard;
