import React, { Component } from 'react';
import Rating from 'react-rating';
import UserData from '../data/users.json';
import '../profile/_profile.scss';
import './_search.scss';
import PeriodicTable from '../components/periodicTable/periodicTable.web';
import TableData from '../data/table.json';
import { find } from 'lodash';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: [],
      selectedLevels: [],
      filteredUsers: [],
      selectedDept: [],
    };

    this.onClickHome = this.onClickHome.bind(this);
    this.onClickUser = this.onClickUser.bind(this);
    this.onFilterSelect = this.onFilterSelect.bind(this);
  }

  componentWillMount() {
    UserData.map( (user) => {
      return user.listSkills = user.skills
      .map(skill => skill.name)
      .filter(skill => {
        return !find(this.UNSAFE_componentWillReceivePropslistSkills, skill);
      });
    });

    this.setState({
      userData: UserData,
      filteredUsers: UserData,
    });

    this.tableData = TableData;
    this.userSkills = [];
  }

  onClickHome() {
    const { history } = this.props;
    history.push('/');
  }

  onClickUser() {
    const { history } = this.props;
    history.push('/profile');
  }

  returnLevels() {
    const levels = [];

    this.state.userData.forEach(user => {
      if (levels.includes(user.level) === false) {
        levels.push(user.level);
      }
    });

    return levels;
  }

  onFilterSelect(selectedList, event) {
    const list = selectedList;

    if (event.target.checked) {
      event.target.labels[0].className = 'custom-control-label checked-bold';
    } else {
      event.target.labels[0].className = 'custom-control-label';
    }

    if (event.target.checked && !list.includes(event.target.value)) {
      list.push(event.target.value);
    } else if (!event.target.checked && list.includes(event.target.value)) {
      const index = list.indexOf(event.target.value);
      if (index !== -1) {
        list.splice(index, 1);
      }
    }

    if (selectedList === this.state.selectedLevels) {
      this.setState(
        {
          selectedLevels: list,
        },
        this.filterUsers()
      );
    } else if (selectedList === this.state.selectedDept) {
      this.setState(
        {
          selectedDept: list,
        },
        this.filterUsers()
      );
    }
  }

  filterUsers() {
    if (
      this.state.selectedLevels.length === 0 &&
      this.state.selectedDept.length === 0
    ) {
      this.setState({
        filteredUsers: this.state.userData,
      });
    } else {
      // creates array of all users with selected levels:
      const usersWithSelectedLevels = [];
      const usersByLevelArray = [];

      if (this.state.selectedLevels.length !== 0) {
        for (let i = 0; i < this.state.selectedLevels.length; i++) {
          usersWithSelectedLevels.push(
            this.state.userData.filter(
              user => user.level === this.state.selectedLevels[i]
            )
          );
        }

        for (let i = 0; i < usersWithSelectedLevels.length; i++) {
          for (let j = 0; j < usersWithSelectedLevels[i].length; j++) {
            usersByLevelArray.push(usersWithSelectedLevels[i][j]);
          }
        }
      }

      // creates array of all users with selected dept. :
      const usersWithSelectedDept = [];
      const usersByDeptArray = [];

      if (this.state.selectedDept.length !== 0) {
        for (let i = 0; i < this.state.selectedDept.length; i++) {
          usersWithSelectedDept.push(
            this.state.userData.filter(
              user => user.dept === this.state.selectedDept[i]
            )
          );
        }

        for (let i = 0; i < usersWithSelectedDept.length; i++) {
          for (let j = 0; j < usersWithSelectedDept[i].length; j++) {
            usersByDeptArray.push(usersWithSelectedDept[i][j]);
          }
        }
      }

      let allUsers = [];

      // if there are levels and dept selected:
      if (this.state.selectedDept.length !== 0 && this.state.selectedLevels.length !== 0) {
        const filteredUsers = [];
        const filteredArray = [];

        // filters the users by level array by all of the selected dept
        for (let i = 0; i < usersByDeptArray.length; i++) {
          filteredUsers.push(
            usersByLevelArray.filter(
              user => user.dept === usersByDeptArray[i].dept
            )
          );
        }

        // puts all of the users in a single array

        for (let i = 0; i < filteredUsers.length; i++) {
          for (let j = 0; j < filteredUsers[i].length; j++) {
            filteredArray.push(filteredUsers[i][j]);
          }
        }

        allUsers = filteredArray;
      } else {
        allUsers = usersByLevelArray.concat(usersByDeptArray);
      }

      const users = [];

      // remove any duplicate users
      for (let i = 0; i < allUsers.length; i++) {
        if (users.includes(allUsers[i])) {
          continue;
        } else {
          users.push(allUsers[i]);
        }
      }

      // set new list of users
      this.setState({ filteredUsers: users });
    }
  }

  returnDept() {
    const dept = [];

    this.state.userData.forEach(user => {
      if (dept.includes(user.dept) === false) {
        dept.push(user.dept);
      }
    });

    return dept;
  }

  render() {
    this.returnLevels();

    return (
      <div>
        <div className="mtx-logo noselect" onClick={this.onClickHome}>
          nomad<div>.</div>
        </div>
        <div className="mtx-user" onClick={this.onClickUser}>
          <img src="./img/user.png" alt="user" />
        </div>
        <div className="mtx-half">
          <div className="mtx-">
            <div className="mtx-section noselect">
              search results<div>.</div>
            </div>
          </div>
          <div className="mtx-main">
            <div className="mtx-sidebar">
              <div className="mtx-sidebar__top">
                <div className="mtx-section__title noselect">filter</div>
              </div>
              <div className="mtx-sidebar__section">
                <div className="mtx-section__title noselect">level</div>
                <form onChange={e => this.onFilterSelect(this.state.selectedLevels, e)}>
                  {this.returnLevels().map((level, index) => (
                    <div key={index} className="search-check custom-control custom-checkbox my-2 mr-sm-2">
                      <input
                        type="checkbox"
                        value={level}
                        className="custom-control-input"
                        id={level} />
                      <label className="custom-control-label" htmlFor={level}>
                        <div className="search-check-input-border">
                          {level}
                        </div>
                      </label>
                    </div>
                  ))}
                </form>
              </div>
              <div className="mtx-sidebar__section">
                <div className="mtx-section__title noselect">department</div>
                <form onChange={e => this.onFilterSelect(this.state.selectedDept, e)}>
                  {this.returnDept().map((dept, index) => (
                    <div key={index} className="search-check custom-control custom-checkbox my-2 mr-sm-2">
                      <input
                        type="checkbox"
                        value={dept}
                        className="custom-control-input"
                        id={dept} />
                      <label className="custom-control-label" htmlFor={dept}>
                        <div className="search-check-input-border">{dept}</div>
                      </label>
                    </div>
                  ))}
                </form>
              </div>
              <div className="mtx-sidebar__section">
                <div className="mtx-section__title noselect">skill level</div>
                <div className="mtx-rating__filter">
                  <Rating
                    initialRating={3}
                    readonly={true}
                    emptySymbol={'mtx-rating--empty'}
                    fullSymbol={'mtx-rating--full'} />
                  3+
                </div>
              </div>
              <div className="mtx-sidebar__section">
                <div className="mtx-section__title noselect">skills</div>
              </div>
            </div>
            <div className="mtx-results">
              <div className="mtx-section__title noselect">sort by</div>
              <div className="mtx-sr__list">
                {this.state.filteredUsers.map((user, index) => (
                  <div
                    key={index}
                    className="mtx-sr__container"
                    onClick={this.onClickUser}>
                    <div className="mtx-sr__top">
                      <div className="mtx-sr__left">
                        <img
                          className="mtx-sr__picture"
                          src="./img/pic.png"
                          alt="user" />
                      </div>
                      <div className="mtx-sr__right">
                        <div className="mtx-sr__">
                          <div className="mtx-section__title">{user.name}</div>
                          <div className="mtx-sr__">{user.level}</div>
                          <div className="mtx-sr__email">
                            <div>{user.email}</div>
                          </div>
                        </div>
                      </div>{' '}
                      <div className="heatmap w-50">
                        <PeriodicTable userSkills={user.listSkills} tableData={this.tableData} />
                      </div>
                    </div>
                    <div className="mtx-sr__bottom">
                      {user.skills.slice(0, 9).map((i, index) => (
                        <div key={index} className="mtx-sr__skill">
                          {i.name}
                        </div>
                      ))}
                      ...
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
