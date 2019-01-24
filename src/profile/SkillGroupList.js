import React, { Component } from 'react';
import SkillList from './SkillList'
import userData from '../data/users.json';
import './_profile.scss';

export default class SkillGroupList extends Component {
  constructor(props) {
    super(props);
    this.skills = userData[0].skills;
    const skillGroups = [];
    this.skills.forEach(element => {
      skillGroups.push(element.groupDisplayName)
    });
    this.skillGroupSet = [...(new Set([...skillGroups]))];
  }
  render(){
    return(
    <div className="mtx-block mtx-block--bottom">
        {this.skillGroupSet.map((group, index) => {
            return(
                <div className="mtx-column">
                    <div className="mtx-section__content">{group}</div>
                    <SkillList name="Martin" skillGroup={group} skills={this.skills} key={`SkillList${index}`} />
                </div>
            )}
        )}
      </div>
    );
  }
}