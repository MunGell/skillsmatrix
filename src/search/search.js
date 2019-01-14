import React, { Component } from 'react';
import Rating from 'react-rating';
import UserData from '../data/users.json';
import '../profile/_profile.scss';
import './_search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userData: []
        };

        this.onClickHome = this.onClickHome.bind(this);
        this.onClickUser = this.onClickUser.bind(this);
    }   

    componentWillMount() {
        this.setState({userData: UserData});
    }

    onClickHome() {
        let { history } = this.props;
        history.push('/');
    }

    onClickUser() {
        let { history } = this.props;
        history.push('/profile');
    }

    returnLevels(){
        let levels = [];

        this.state.userData.forEach((user) => {
            if(levels.includes(user.level) == false){
            levels.push(user.level)
            }});

        return levels;
    }

    returnDept(){
        let dept = [];

        this.state.userData.forEach((user) => {
            if(dept.includes(user.dept) == false){
            dept.push(user.dept)
            }});

        return dept;
    }

    render() {
        this.returnLevels();
        return (
            <div>
                <div className="mtx-logo" onClick={this.onClickHome}>nomad<div>.</div></div>  
                <div className="mtx-user" onClick={this.onClickUser}>
                    <img src="./user.png"></img>
                </div>
                <div className="mtx-half">
                    <div className="mtx-">
                        <div className="mtx-section">search results<div>.</div></div>  
                    </div>    
                    <div className="mtx-main">
                        <div className="mtx-sidebar">
                            <div className="mtx-sidebar__top">
                                <div className="mtx-section__title">
                                    filter
                                </div>
                            </div>
                            <div className="mtx-sidebar__section">
                                <div className="mtx-section__title">
                                    level
                                </div>
                                {this.returnLevels().map((level,index) =>
                                    <div className="mtx-sidebar__option">{level}</div>
                                    )}
                                
                            </div>
                            <div className="mtx-sidebar__section">
                                <div className="mtx-section__title">
                                    department
                                </div>

                                {this.returnDept().map((dept,index) =>
                                    <div className="mtx-sidebar__option">{dept}</div>
                                    )}

                            </div>
                            <div className="mtx-sidebar__section">
                                <div className="mtx-section__title">
                                    skill level
                                </div>
                                <div className="mtx-rating__filter">
                                    <Rating initialRating={3} readonly={true} emptySymbol={"mtx-rating--empty"} fullSymbol={"mtx-rating--full"} />
                                    3+
                                </div>
                            </div>
                            <div className="mtx-sidebar__section">
                                <div className="mtx-section__title">
                                    skills
                                </div>
                            </div>
                        </div>
                        <div className="mtx-results">
                            <div className="mtx-section__title ">
                                sort by
                            </div>  
                            <div className="mtx-sr__list">
                                {this.state.userData.map(i =>
                                    <div className="mtx-sr__container"  onClick={this.onClickUser}>
                                        <div className="mtx-sr__top">
                                            <div className="mtx-sr__left">
                                                <img className="mtx-sr__picture" src="./pic.png"></img>
                                            </div>
                                            <div className="mtx-sr__right">
                                                <div className="mtx-sr__">
                                                    <div className="mtx-section__title">{i.name}</div>
                                                    <div className="mtx-sr__">{i.level}</div>
                                                    <div className="mtx-sr__email">
                                                        <div>{i.email}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mtx-sr__bottom">
                                            {i.skills.slice(0, 9).map(i =>
                                                <div className="mtx-sr__skill">{i.name}</div>
                                            )}  
                                            ...  
                                        </div>
                                    </div>
                                )} 
                            </div>  
                        </div>
                    </div>    
                </div>    
            </div>
        );
    }
}

export default Search;