import React, { Component } from 'react';
import Rating from 'react-rating';
import './_profile.scss';

const SkillListItem = props => {
  return(
    <div className="mtx-skill">
      <div className="mtx-skill__rating">
        <div className="mtx-section__header">{props.displayName}</div>
        <Rating
          initialRating={props.number}
          readonly={true}
          emptySymbol={'mtx-rating--empty'}
          fullSymbol={'mtx-rating--full'}
        />
      </div>
    </div>
  )
}
export default SkillListItem;