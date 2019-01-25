import React, { Component } from 'react';
import TableData from '../data/table.json';
import './_table.scss';
import { findIndex } from 'lodash';
import PeriodicTable from '../components/periodicTable/periodicTable.web';

class Table extends Component {
  constructor(props) {
    super(props);

    this.onClickUser = this.onClickUser.bind(this);
  }

  componentWillMount() {
    const groups = [];

    TableData.forEach(element => {
      const groupIndex = findIndex(groups, { name: element.group });
      if (groupIndex !== -1) {
        groups[groupIndex].total++;
      } else {
        groups.push({
          name: element.group,
          displayName: element.groupDisplayName,
          total: 1,
        });
      }
    });

    this.tableData = TableData;
    this.groups = groups;
  }

  onClickUser() {
    const { history } = this.props;
    history.push('/profile');
  }

  render() {
    return (
      <div>
        <div className="mtx-user__home" onClick={this.onClickUser}>
          <img src="./img/user.png" alt="user" />
        </div>
        <PeriodicTable groups={this.groups} tableData={this.tableData} />
      </div>
    );
  }
}

export default Table;
