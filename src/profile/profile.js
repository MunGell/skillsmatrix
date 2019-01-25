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
      name: 'name',
      email: 'email',
      level: 'level',
      dept: 'department',
      currentAss: 'current assignment',
      endDate: 'end date',
      assHistory: [{order: 0, name: 'previous project'}, {order: 1, name: 'previous project'}, {order: 2, name: 'previous project'}, {order: 3, name: 'previous project'}],
      skills: []
    };

    this.onClickHome = this.onClickHome.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  componentWillMount() {
    this.setState({ name: UserData[0].name, email: UserData[0].email, level: UserData[0].level, dept: UserData[0].dept, currentAss: UserData[0].currentAss, endDate: UserData[0].endDate, assHistory: UserData[0].assHistory, skills: UserData[0].skills });
    // For now we just going to take the first user from the mock data to work with.

    const listSkills =  UserData[0].skills
      .map(skill => skill.name)
      .filter(skill => {
        return !find(listSkills, skill);
      });

    this.tableData = TableData;
    this.userSkills = listSkills;
  }

  handleChange(name, e) {
    this.setState({[name]: e.target.value});
  }

  onClickHome() {
    const { history } = this.props;
    history.push('/');
  }

  onClickEdit() {
    const { history } = this.props;
    history.push('/edit');
  }

  onClickSave() {
    const { history } = this.props;
    history.push('/profile');
  }

  render() {
    var user = this.state;
    var edit = this.props.edit;

    return (
      <div>
        <div className="mtx-logo noselect" onClick={this.onClickHome}>
          nomad<div>.</div>
        </div>
        {edit ? <div className="mtx-user" onClick={this.onClickSave}>
          <img src="./img/save.png" alt="save" />
        </div> : <div className="mtx-user" onClick={this.onClickEdit}>
          <img src="./img/edit.png" alt="edit" />
        </div>} 
        <div className="mtx-half"> 
          <div className="d-flex"> 
            <div className="mtx-section noselect w-50 h-100"> 
              user profile<div>.</div> 
            </div> 
            <div className="heatmap w-50">
              <PeriodicTable userSkills={this.userSkills} tableData={this.tableData} />
            </div>
          </div>
          <div className="mtx-block mtx-block--top"> 
            <div className="mtx-column"> 
              <img className="mtx-picture" src="./img/pic.png" alt="user" />
            </div> 
            <div className="mtx-column mtx-column--center"> 
              <div className="mtx-section-info"> 
                <div className="mtx-section-info__header noselect">name</div>
                {edit ? <input className="mtx-section-info__input" value={user.name} onChange={(e) => this.handleChange("name", e)}></input> : <div className="mtx-section-info__content noselect">{user.name}</div>}
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">email</div>
                  {edit ? <input className="mtx-section-info__input" value={user.email} onChange={(e) => this.handleChange("email", e)}></input> : <div className="mtx-section-info__content noselect">{user.email}</div>}
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">level</div>
                  {edit ? <input className="mtx-section-info__input" value={user.level} onChange={(e) => this.handleChange("level", e)}></input> : <div className="mtx-section-info__content noselect">{user.level}</div>}
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">department</div>
                  {edit ? <input className="mtx-section-info__input" value={user.dept} onChange={(e) => this.handleChange("dept", e)}></input> : <div className="mtx-section-info__content noselect">{user.dept}</div>}
              </div> 
            </div> 
            <div className="mtx-column"> 
              <div className="mtx-section-info"> 
                <div className="mtx-section-info__header noselect">
                  current assignment
                </div>
                {edit ? <input className="mtx-section-info__input" value={user.currentAss} onChange={(e) => this.handleChange("currentAss", e)}></input> : <div className="mtx-section-info__content noselect">
                  {user.currentAss}
                  </div>}
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">end date</div>
                  {edit ? <input className="mtx-section-info__input" value={user.endDate} onChange={(e) => this.handleChange("endDate", e)}></input> : <div className="mtx-section-info__content noselect">{user.endDate}</div>}
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">
                  assignment history
                </div> 
                {//edit ? user.assHistory.map(i => (
                  // <input className="mtx-section-info__input" key={i.order} value={i.name} onChange={(e) => this.handleChange("assHistory["+i.order+"].name", e)}></input>
                // )) : 
                user.assHistory.map(i => (
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
