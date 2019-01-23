import React, { Component } from 'react';
import Rating from 'react-rating';
import UserData from '../data/users.json';
import SkillsData from '../data/skillGroups.json';
import './_profile.scss';
import { array } from 'prop-types';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      skillsData: [],
    };

    this.onClickHome = this.onClickHome.bind(this);
  }

  
  componentWillMount() {
    this.setState({ userData: UserData });
    this.setState({ skillsData : SkillsData});
  }

  onClickHome() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    var user = this.state.userData[0];
    var skillsGroup = this.state.skillsData[0];
    var felArray = [];
    var clArray = [];
    var dmArray = [];
    var fbtArray = [];
    var taArray = [];
    var ssArray = [];
    var pcArray = [];
    var skiilGroupName;
    var y = 0;
    var skillsArray = [];
    return (
      <div>
        <div className="mtx-logo" onClick={this.onClickHome}>
          nomad<div>.</div>
        </div>
        <div className="mtx-half">
          <div className="mtx-section">
            user profile<div>.</div>
          </div>
          <div className="mtx-block mtx-block--top">
            <div className="mtx-column">
              <img className="mtx-picture" src="./pic.png" alt="user" />
            </div>
            <div className="mtx-column mtx-column--center">
              <div className="mtx-section-info">
                <div className="mtx-section-info__header">name</div>
                <div className="mtx-section-info__content">{user.name}</div>
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header">email</div>
                <div className="mtx-section-info__content">{user.email}</div>
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header">level</div>
                <div className="mtx-section-info__content">{user.level}</div>
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header">department</div>
                <div className="mtx-section-info__content">{user.dept}</div>
              </div>
            </div>
            <div className="mtx-column">
              <div className="mtx-section-info">
                <div className="mtx-section-info__header">
                  current assignment
                </div>
                <div className="mtx-section-info__content">
                  {user.currentAss}
                </div>
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header">end date</div>
                <div className="mtx-section-info__content">{user.endDate}</div>
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header">
                  assignment history
                </div>
                {user.assHistory.map(i => (
                  <div className="mtx-section-info__content" key={i.order}>
                    {i.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mtx-half--bottom">
          <div className="mtx-section">
            skills<div>.</div>
          </div>
          <div className="mtx-block mtx-block--bottom">
                 
          {user.skills.forEach(element => {
            switch (element.group) {
              case "fel":
                felArray.push(element)
                break;
              case "cl":
                clArray.push(element)
              break;
              case "dm":
                dmArray.push(element)
              break;
              case "fbt":
                fbtArray.push(element)
              break;
              case "ta":
                taArray.push(element)
              break;
              case "ss":
                ssArray.push(element)
              break;
              case "pc":
                pcArray.push(element)
              break;
              default:
                break;
            }
          })}

          {skillsGroup.groups.forEach(element => {
            skillsArray.push(element.groupName)
          })}
          {/* {skiilGroupName = eval(skillsArray[0] + "Array")} */}
          {console.log(felArray[0].groupDisplayName)}

          {skillsArray.map(x => (
             <div className="mtx-column">
             {console.log(x.displayName)}
             <div className="mtx-section__content">{x.displayName}</div>
               
               {eval(skillsArray[0] + "Array").map(i =>(
                 <div className="mtx-skill" key={i.order}>
                 <div className="mtx-skill__rating">
                   <div className="mtx-section__header">{i.displayName}</div>
                   <Rating
                     initialRating={i.number}
                     readonly={true}
                     emptySymbol={'mtx-rating--empty'}
                     fullSymbol={'mtx-rating--full'}
                   />
                 </div>
               </div>
               ))}                   
             </div>
          ))}


          {/* <div className="mtx-column">
          <div className="mtx-section__content">{felArray[0].groupDisplayName}</div>
            {felArray.map(i =>(
              <div className="mtx-skill" key={i.order}>
              <div className="mtx-skill__rating">
                <div className="mtx-section__header">{i.displayName}</div>
                <Rating
                  initialRating={i.number}
                  readonly={true}
                  emptySymbol={'mtx-rating--empty'}
                  fullSymbol={'mtx-rating--full'}
                />
              </div>
            </div>
            ))}   
          </div>

          <div className="mtx-column">
          <div className="mtx-section__content">{clArray[0].groupDisplayName}</div>
            {clArray.map(i =>(
              <div className="mtx-skill" key={i.order}>
              <div className="mtx-skill__rating">
                <div className="mtx-section__header">{i.displayName}</div>
                <Rating
                  initialRating={i.number}
                  readonly={true}
                  emptySymbol={'mtx-rating--empty'}
                  fullSymbol={'mtx-rating--full'}
                />
              </div>
            </div>
            ))}  
          </div>

          <div className="mtx-column">
          <div className="mtx-section__content">{dmArray[0].groupDisplayName}</div>
            {dmArray.map(i =>(
              <div className="mtx-skill" key={i.order}>
              <div className="mtx-skill__rating">
                <div className="mtx-section__header">{i.displayName}</div>
                <Rating
                  initialRating={i.number}
                  readonly={true}
                  emptySymbol={'mtx-rating--empty'}
                  fullSymbol={'mtx-rating--full'}
                />
              </div>
            </div>
            ))}  
          </div>

          <div className="mtx-column">
          <div className="mtx-section__content">{fbtArray.groupDisplayName}</div>
            {fbtArray.map(i =>(
              <div className="mtx-skill" key={i.order}>
              <div className="mtx-skill__rating">
                <div className="mtx-section__header">{i.displayName}</div>
                <Rating
                  initialRating={i.number}
                  readonly={true}
                  emptySymbol={'mtx-rating--empty'}
                  fullSymbol={'mtx-rating--full'}
                />
              </div>
            </div>
            ))}   
          </div>

          <div className="mtx-column">
          <div className="mtx-section__content">{taArray.groupDisplayName}</div>
            {taArray.map(i =>(
              <div className="mtx-skill" key={i.order}>
              <div className="mtx-skill__rating">
                <div className="mtx-section__header">{i.displayName}</div>
                <Rating
                  initialRating={i.number}
                  readonly={true}
                  emptySymbol={'mtx-rating--empty'}
                  fullSymbol={'mtx-rating--full'}
                />
              </div>
            </div>
            ))}   
          </div>

          <div className="mtx-column">
          <div className="mtx-section__content">{ssArray.groupDisplayName}</div>
            {ssArray.map(i =>(
              <div className="mtx-skill" key={i.order}>
              <div className="mtx-skill__rating">
                <div className="mtx-section__header">{i.displayName}</div>
                <Rating
                  initialRating={i.number}
                  readonly={true}
                  emptySymbol={'mtx-rating--empty'}
                  fullSymbol={'mtx-rating--full'}
                />
              </div>
            </div>
            ))}   
          </div>

          <div className="mtx-column">
          <div className="mtx-section__content">{pcArray.groupDisplayName}</div>
            {pcArray.map(i =>(
              <div className="mtx-skill" key={i.order}>
              <div className="mtx-skill__rating">
                <div className="mtx-section__header">{i.displayName}</div>
                <Rating
                  initialRating={i.number}
                  readonly={true}
                  emptySymbol={'mtx-rating--empty'}
                  fullSymbol={'mtx-rating--full'}
                />
              </div>
            </div>
            ))}   
          </div> */}
            
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
