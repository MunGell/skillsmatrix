import React, { Component } from 'react';
import Rating from 'react-rating';
import UserData from '../data/users.json';
import './_profile.scss';
import PeriodicTable from '../components/periodicTable/periodicTable.web';
import TableData from '../data/table.json';
import { find } from 'lodash';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    };

    this.onClickHome = this.onClickHome.bind(this);
  }

  componentWillMount() {
    this.setState({ userData: UserData });

    // For now we just going to take the first user from the mock data to work with.
    this.user = UserData[0];

    const listSkills = this.user.skills
      .map(skill => skill.name)
      .filter(skill => {
        return !find(listSkills, skill);
      });

    this.tableData = TableData;
    this.userSkills = listSkills;
  }

  onClickHome() {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    var user = this.state.userData[0];

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
          <div>
            <div className="mtx-section">
              skills<div>.</div>
            </div>
            <div className="heatmap">
              <PeriodicTable
                userSkills={this.userSkills}
                tableData={this.tableData}
              />
            </div>
          </div>
          <div className="mtx-block mtx-block--bottom">
            {user.skills.map((i, index) => (
              <div className="mtx-skill" key={index}>
                {/*<div className="mtx-section__content">{i.groupDisplayName}</div>*/}
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
        </div>
      </div>
    );
  }
}

export default Profile;
