import React, { Component } from 'react';
import Rating from 'react-rating';
import UserData from '../data/users.json';
import './_profile.scss';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: []
    };

    this.onClickHome = this.onClickHome.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  componentWillMount() {
    this.setState({ userData: UserData });
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
    var user = this.state.userData[0];
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
          <div className="mtx-section noselect">
            user profile<div>.</div>
          </div>
          <div className="mtx-block mtx-block--top">
            <div className="mtx-column">
              <img className="mtx-picture" src="./img/pic.png" alt="user" />
            </div>
            <div className="mtx-column mtx-column--center">
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">name</div>
                {edit ? <input className="mtx-section-info__input" placeholder={user.name}></input> : <div className="mtx-section-info__content noselect">{user.name}</div>}
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">email</div>
                  {edit ? <input className="mtx-section-info__input" placeholder={user.email}></input> : <div className="mtx-section-info__content noselect">{user.email}</div>}
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">level</div>
                  {edit ? <input className="mtx-section-info__input" placeholder={user.level}></input> : <div className="mtx-section-info__content noselect">{user.level}</div>}
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">department</div>
                  {edit ? <input className="mtx-section-info__input" placeholder={user.dept}></input> : <div className="mtx-section-info__content noselect">{user.dept}</div>}
              </div>
            </div>
            <div className="mtx-column">
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">
                  current assignment
                </div>
                {edit ? <input className="mtx-section-info__input" placeholder={user.currentAss}></input> : <div className="mtx-section-info__content noselect">
                  {user.currentAss}
                  </div>}
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">end date</div>
                  {edit ? <input className="mtx-section-info__input" placeholder={user.endDate}></input> : <div className="mtx-section-info__content noselect">{user.endDate}</div>}
              </div>
              <div className="mtx-section-info">
                <div className="mtx-section-info__header noselect">
                  assignment history
                </div>
                {edit ? user.assHistory.map(i => (
                  <input className="mtx-section-info__input" key={i.order} placeholder={i.name}></input>
                )) : user.assHistory.map(i => (
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
            {user.skills.map(i => (
              <div className="mtx-skill" key={i.name}>
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
