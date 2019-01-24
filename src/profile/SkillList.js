import React, { Component } from 'react';
import SkillListItem from './SkillListItem';
import userData from '../data/users.json';

export default class SkillList extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const categorySkills = [];
    this.props.skills.forEach(skill => {
      if(skill.groupDisplayName === this.props.skillGroup){
        categorySkills.push(skill);
      }
    });

    return(
        categorySkills.map(skill => {
          return(<SkillListItem {...skill} />)
        }
      )
    )
  }
}