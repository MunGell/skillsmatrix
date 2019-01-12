import React, { Component } from 'react';
import TableData from '../data/table.json';
import './_table.scss';
import $ from 'jquery';

class Table extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            tableData: [],
            groups: []
        };

        this.onClickUser = this.onClickUser.bind(this);
    }   

    componentWillMount() {
    	var groups = {
    		names: [],
    		displayNames: [],
    		totals: []
    	};

    	TableData.forEach(function(element) {
	        if(groups.names.indexOf(element.group) === -1) {
	        	groups.names.push(element.group);
	        	groups.displayNames.push(element.groupDisplayName);
	        	groups.totals.push(element.number);
	        }
	        else {
	        	groups.totals[groups.names.indexOf(element.group)] += element.number;
	        }
	    });

        this.setState({tableData: TableData});
	    this.setState({groups: groups});
    }

    componentDidMount() {
    	var me = this, current = -1;
    	this.state.groups.names.forEach(function(group) {
    		$(document).find('.legend_' + group).parent()
	    		.mouseover(function() {
	    			highlightSection(me.state.groups.names.indexOf(group));
	    		})
	    		.mouseleave(function() {
	    			unhighlight();
	    		}
	    	);
    	});

		$(window).bind('mousewheel keydown', function(e) {
		    if(e.originalEvent.wheelDelta >= 0 || e.which===37 || e.which===38) {
		    	if(current > -1) current--;
		    	if(current > -1) highlightSection(current);	
 		    	else unhighlight();
		    }
		    else if(e.originalEvent.wheelDelta < 0 || e.which===32 || e.which===39 || e.which===40) {
		    	if(current < 6) current++;
		        if(current < 7) highlightSection(current); 
		    }
		});

		function highlightSection(key) {
			$(document).find('.element').addClass('dull');
	    	$(document).find('.legend_' + me.state.groups.names[key]).parent().removeClass('dull');
	    	$(document).find('.at_details_' + me.state.groups.names[key]).parent().removeClass('dull');	
		}

		function unhighlight() {
			$(document).find('.element').removeClass('dull');
		}
    }

    onClickUser() {
        let { history } = this.props;
        history.push('/profile');
    }

	render() {
		return (
            <div>
              <div className="mtx-user__home" onClick={this.onClickUser}>
                <img src="./user.png" alt="pic"></img>
              </div>	
			  <div className="periodic">
			    <div className="periodic-row">
			      <a className="cell" href={"/search?" + this.state.tableData[0].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[0].number}</div>
			          <div className="symbol">{this.state.tableData[0].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[0].group}></div>
			        </div>
			      </a>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell">
			      	<div className="element">
			      	  <div className="at_num">{this.state.groups.totals[0]}</div>
			      	  <div className="symbol">{this.state.groups.displayNames[0]}</div>
			      	  <div className={"legend_" + this.state.groups.names[0]}></div>
			      	</div>
			      </div>
			      <div className="cell">
			      	<div className="element">
			      	  <div className="at_num">{this.state.groups.totals[1]}</div>
			      	  <div className="symbol">{this.state.groups.displayNames[1]}</div>
			      	  <div className={"legend_" + this.state.groups.names[1]}></div>
			      	</div>
			      </div>
			      <div className="cell">
			      	<div className="element">
			      	  <div className="at_num">{this.state.groups.totals[2]}</div>
			      	  <div className="symbol">{this.state.groups.displayNames[2]}</div>
			      	  <div className={"legend_" + this.state.groups.names[2]}></div>
			      	</div>
			      </div>
			      <div className="cell">
			      	<div className="element">
			      	  <div className="at_num">{this.state.groups.totals[3]}</div>
			      	  <div className="symbol">{this.state.groups.displayNames[3]}</div>
			      	  <div className={"legend_" + this.state.groups.names[3]}></div>
			      	</div>
			      </div>
			      <div className="cell">
			      	<div className="element">
			      	  <div className="at_num">{this.state.groups.totals[4]}</div>
			      	  <div className="symbol">{this.state.groups.displayNames[4]}</div>
			      	  <div className={"legend_" + this.state.groups.names[4]}></div>
			      	</div>
			      </div>
			      <div className="cell">
			      	<div className="element">
			      	  <div className="at_num">{this.state.groups.totals[5]}</div>
			      	  <div className="symbol">{this.state.groups.displayNames[5]}</div>
			      	  <div className={"legend_" + this.state.groups.names[5]}></div>
			      	</div>
			      </div>
			      <div className="cell">
			      	<div className="element">
			      	  <div className="at_num">{this.state.groups.totals[6]}</div>
			      	  <div className="symbol">{this.state.groups.displayNames[6]}</div>
			      	  <div className={"legend_" + this.state.groups.names[6]}></div>
			      	</div>
			      </div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <a className="cell" href={"/search?" + this.state.tableData[1].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[1].number}</div>
			          <div className="symbol">{this.state.tableData[1].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[1].group}></div>
			        </div>
			      </a>
			    </div>
			    <div className="periodic-row">
			      <a className="cell" href={"/search?" + this.state.tableData[2].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[2].number}</div>
			          <div className="symbol">{this.state.tableData[2].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[2].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[3].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[3].number}</div>
			          <div className="symbol">{this.state.tableData[3].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[3].group}></div>
			        </div>
			      </a>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <a className="cell" href={"/search?" + this.state.tableData[4].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[4].number}</div>
			          <div className="symbol">{this.state.tableData[4].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[4].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[5].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[5].number}</div>
			          <div className="symbol">{this.state.tableData[5].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[5].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[6].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[6].number}</div>
			          <div className="symbol">{this.state.tableData[6].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[6].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[7].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[7].number}</div>
			          <div className="symbol">{this.state.tableData[7].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[7].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[8].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[8].number}</div>
			          <div className="symbol">{this.state.tableData[8].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[8].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[9].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[9].number}</div>
			          <div className="symbol">{this.state.tableData[9].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[9].group}></div>
			        </div>
			      </a>
			    </div>
			    <div className="periodic-row">
			      <a className="cell" href={"/search?" + this.state.tableData[10].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[10].number}</div>
			          <div className="symbol">{this.state.tableData[10].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[10].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[11].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[11].number}</div>
			          <div className="symbol">{this.state.tableData[11].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[11].group}></div>
			        </div>
			      </a>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <a className="cell" href={"/search?" + this.state.tableData[12].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[12].number}</div>
			          <div className="symbol">{this.state.tableData[12].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[12].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[13].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[13].number}</div>
			          <div className="symbol">{this.state.tableData[13].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[13].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[14].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[14].number}</div>
			          <div className="symbol">{this.state.tableData[14].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[14].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[15].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[15].number}</div>
			          <div className="symbol">{this.state.tableData[15].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[15].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[16].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[16].number}</div>
			          <div className="symbol">{this.state.tableData[16].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[16].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[17].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[17].number}</div>
			          <div className="symbol">{this.state.tableData[17].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[17].group}></div>
			        </div>
			      </a>
			    </div>
			    <div className="periodic-row">
			      <a className="cell" href={"/search?" + this.state.tableData[18].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[18].number}</div>
			          <div className="symbol">{this.state.tableData[18].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[18].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[19].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[19].number}</div>
			          <div className="symbol">{this.state.tableData[19].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[19].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[20].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[20].number}</div>
			          <div className="symbol">{this.state.tableData[20].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[20].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[21].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[21].number}</div>
			          <div className="symbol">{this.state.tableData[21].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[21].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[22].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[22].number}</div>
			          <div className="symbol">{this.state.tableData[22].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[22].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[23].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[23].number}</div>
			          <div className="symbol">{this.state.tableData[23].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[23].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[24].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[24].number}</div>
			          <div className="symbol">{this.state.tableData[24].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[24].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[25].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[25].number}</div>
			          <div className="symbol">{this.state.tableData[25].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[25].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[26].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[26].number}</div>
			          <div className="symbol">{this.state.tableData[26].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[26].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[27].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[27].number}</div>
			          <div className="symbol">{this.state.tableData[27].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[27].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[28].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[28].number}</div>
			          <div className="symbol">{this.state.tableData[28].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[28].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[29].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[29].number}</div>
			          <div className="symbol">{this.state.tableData[29].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[29].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[30].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[30].number}</div>
			          <div className="symbol">{this.state.tableData[30].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[30].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[31].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[31].number}</div>
			          <div className="symbol">{this.state.tableData[31].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[31].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[32].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[32].number}</div>
			          <div className="symbol">{this.state.tableData[32].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[32].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[33].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[33].number}</div>
			          <div className="symbol">{this.state.tableData[33].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[33].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[34].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[34].number}</div>
			          <div className="symbol">{this.state.tableData[34].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[34].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[35].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[35].number}</div>
			          <div className="symbol">{this.state.tableData[35].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[35].group}></div>
			        </div>
			      </a>
			    </div>
			    <div className="periodic-row">
			      <a className="cell" href={"/search?" + this.state.tableData[36].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[36].number}</div>
			          <div className="symbol">{this.state.tableData[36].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[36].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[37].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[37].number}</div>
			          <div className="symbol">{this.state.tableData[37].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[37].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[38].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[38].number}</div>
			          <div className="symbol">{this.state.tableData[38].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[38].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[39].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[39].number}</div>
			          <div className="symbol">{this.state.tableData[39].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[39].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[40].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[40].number}</div>
			          <div className="symbol">{this.state.tableData[40].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[40].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[41].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[41].number}</div>
			          <div className="symbol">{this.state.tableData[41].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[41].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[42].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[42].number}</div>
			          <div className="symbol">{this.state.tableData[42].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[42].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[43].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[43].number}</div>
			          <div className="symbol">{this.state.tableData[43].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[43].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[44].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[44].number}</div>
			          <div className="symbol">{this.state.tableData[44].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[44].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[45].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[45].number}</div>
			          <div className="symbol">{this.state.tableData[45].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[45].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[46].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[46].number}</div>
			          <div className="symbol">{this.state.tableData[46].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[46].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[47].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[47].number}</div>
			          <div className="symbol">{this.state.tableData[47].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[47].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[48].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[48].number}</div>
			          <div className="symbol">{this.state.tableData[48].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[48].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[49].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[49].number}</div>
			          <div className="symbol">{this.state.tableData[49].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[49].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[50].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[50].number}</div>
			          <div className="symbol">{this.state.tableData[50].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[50].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[51].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[51].number}</div>
			          <div className="symbol">{this.state.tableData[51].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[51].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[52].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[52].number}</div>
			          <div className="symbol">{this.state.tableData[52].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[52].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[53].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[53].number}</div>
			          <div className="symbol">{this.state.tableData[53].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[53].group}></div>
			        </div>
			      </a>
			    </div>
			    <div className="periodic-row">
			      <a className="cell" href={"/search?" + this.state.tableData[54].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[54].number}</div>
			          <div className="symbol">{this.state.tableData[54].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[54].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[55].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[55].number}</div>
			          <div className="symbol">{this.state.tableData[55].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[55].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[56].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[56].number}</div>
			          <div className="symbol">{this.state.tableData[56].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[56].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[57].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[57].number}</div>
			          <div className="symbol">{this.state.tableData[57].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[57].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[58].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[58].number}</div>
			          <div className="symbol">{this.state.tableData[58].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[58].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[59].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[59].number}</div>
			          <div className="symbol">{this.state.tableData[59].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[59].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[60].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[60].number}</div>
			          <div className="symbol">{this.state.tableData[60].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[60].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[61].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[61].number}</div>
			          <div className="symbol">{this.state.tableData[61].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[61].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[62].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[62].number}</div>
			          <div className="symbol">{this.state.tableData[62].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[62].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[63].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[63].number}</div>
			          <div className="symbol">{this.state.tableData[63].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[63].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[64].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[64].number}</div>
			          <div className="symbol">{this.state.tableData[64].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[64].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[65].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[65].number}</div>
			          <div className="symbol">{this.state.tableData[65].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[65].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[66].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[66].number}</div>
			          <div className="symbol">{this.state.tableData[66].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[66].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[67].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[67].number}</div>
			          <div className="symbol">{this.state.tableData[67].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[67].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[68].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[68].number}</div>
			          <div className="symbol">{this.state.tableData[68].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[68].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[69].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[69].number}</div>
			          <div className="symbol">{this.state.tableData[69].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[69].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[70].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[70].number}</div>
			          <div className="symbol">{this.state.tableData[70].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[70].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[71].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[71].number}</div>
			          <div className="symbol">{this.state.tableData[71].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[71].group}></div>
			        </div>
			      </a>
			    </div>
			    <div className="periodic-row">
			      <a className="cell" href={"/search?" + this.state.tableData[72].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[72].number}</div>
			          <div className="symbol">{this.state.tableData[72].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[72].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[73].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[73].number}</div>
			          <div className="symbol">{this.state.tableData[73].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[73].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[74].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[74].number}</div>
			          <div className="symbol">{this.state.tableData[74].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[74].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[75].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[75].number}</div>
			          <div className="symbol">{this.state.tableData[75].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[75].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[76].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[76].number}</div>
			          <div className="symbol">{this.state.tableData[76].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[76].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[77].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[77].number}</div>
			          <div className="symbol">{this.state.tableData[77].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[77].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[78].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[78].number}</div>
			          <div className="symbol">{this.state.tableData[78].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[78].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[79].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[79].number}</div>
			          <div className="symbol">{this.state.tableData[79].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[79].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[80].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[80].number}</div>
			          <div className="symbol">{this.state.tableData[80].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[80].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[81].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[81].number}</div>
			          <div className="symbol">{this.state.tableData[81].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[81].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[82].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[82].number}</div>
			          <div className="symbol">{this.state.tableData[82].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[82].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[83].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[83].number}</div>
			          <div className="symbol">{this.state.tableData[83].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[83].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[84].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[84].number}</div>
			          <div className="symbol">{this.state.tableData[84].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[84].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[85].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[85].number}</div>
			          <div className="symbol">{this.state.tableData[85].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[85].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[86].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[86].number}</div>
			          <div className="symbol">{this.state.tableData[86].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[86].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[87].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[87].number}</div>
			          <div className="symbol">{this.state.tableData[87].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[87].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[88].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[88].number}</div>
			          <div className="symbol">{this.state.tableData[88].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[88].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[89].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[89].number}</div>
			          <div className="symbol">{this.state.tableData[89].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[89].group}></div>
			        </div>
			      </a>
			    </div>
			    <div className="periodic-row--empty"></div>
			    <div className="periodic-row">
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <a className="cell" href={"/search?" + this.state.tableData[90].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[90].number}</div>
			          <div className="symbol">{this.state.tableData[90].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[90].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[91].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[91].number}</div>
			          <div className="symbol">{this.state.tableData[91].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[91].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[92].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[92].number}</div>
			          <div className="symbol">{this.state.tableData[92].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[92].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[93].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[93].number}</div>
			          <div className="symbol">{this.state.tableData[93].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[93].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[94].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[94].number}</div>
			          <div className="symbol">{this.state.tableData[94].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[94].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[95].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[95].number}</div>
			          <div className="symbol">{this.state.tableData[95].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[95].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[96].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[96].number}</div>
			          <div className="symbol">{this.state.tableData[96].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[96].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[97].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[97].number}</div>
			          <div className="symbol">{this.state.tableData[97].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[97].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[98].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[98].number}</div>
			          <div className="symbol">{this.state.tableData[98].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[98].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[99].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[99].number}</div>
			          <div className="symbol">{this.state.tableData[99].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[99].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[100].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[100].number}</div>
			          <div className="symbol">{this.state.tableData[100].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[100].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[101].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[101].number}</div>
			          <div className="symbol">{this.state.tableData[101].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[101].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[102].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[102].number}</div>
			          <div className="symbol">{this.state.tableData[102].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[102].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[103].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[103].number}</div>
			          <div className="symbol">{this.state.tableData[103].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[103].group}></div>
			        </div>
			      </a>
			      <div className="cell"></div>
			      <div className="cell"></div>
			    </div>
			    <div className="periodic-row">
			      <div className="cell"></div>
			      <div className="cell"></div>
			      <a className="cell" href={"/search?" + this.state.tableData[104].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[104].number}</div>
			          <div className="symbol">{this.state.tableData[104].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[104].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[105].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[105].number}</div>
			          <div className="symbol">{this.state.tableData[105].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[105].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[106].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[106].number}</div>
			          <div className="symbol">{this.state.tableData[106].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[106].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[107].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[107].number}</div>
			          <div className="symbol">{this.state.tableData[107].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[107].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[108].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[108].number}</div>
			          <div className="symbol">{this.state.tableData[108].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[108].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[109].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[109].number}</div>
			          <div className="symbol">{this.state.tableData[109].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[109].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[110].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[110].number}</div>
			          <div className="symbol">{this.state.tableData[110].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[110].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[111].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[111].number}</div>
			          <div className="symbol">{this.state.tableData[111].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[111].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[112].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[112].number}</div>
			          <div className="symbol">{this.state.tableData[112].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[112].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[113].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[113].number}</div>
			          <div className="symbol">{this.state.tableData[113].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[113].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[114].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[114].number}</div>
			          <div className="symbol">{this.state.tableData[114].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[114].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[115].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[115].number}</div>
			          <div className="symbol">{this.state.tableData[115].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[115].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[116].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[116].number}</div>
			          <div className="symbol">{this.state.tableData[116].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[116].group}></div>
			        </div>
			      </a>
			      <a className="cell" href={"/search?" + this.state.tableData[117].name}>
			        <div className="element">
			          <div className="at_num">{this.state.tableData[117].number}</div>
			          <div className="symbol">{this.state.tableData[117].displayName}</div>
			          <div className={"at_details_" + this.state.tableData[117].group}></div>
			        </div>
			      </a>
			      <div className="cell"></div>
			      <div className="cell"></div>
			    </div>
			  </div>
			</div>
        );
	}
}

export default Table;