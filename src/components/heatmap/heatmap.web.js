import React, { Component } from 'react';
import './_heatmap.scss';



class PeriodicTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDull: false,
      hightlightGroup: null,
    };

    this.current = -1;
  }

  highlightSection(key) {
    this.setState({ isDull: true });
    if (this.props.groups) {
    this.setState({ hightlightGroup: this.props.groups[key].name });
    }
  }

  unhighlight() {
    this.setState({ isDull: false });
  }

  render() {
    return (
      <div>
        <div className="periodic">
          <div className="periodic-row">
            {this.renderCellContent(this.props.tableData[0])}
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            {this.renderGroupCells(this.props.groups)}
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            {this.renderCellContent(this.props.tableData[1])}
          </div>
          <div className="periodic-row">
            {this.renderCellContent(this.props.tableData[2])}
            {this.renderCellContent(this.props.tableData[3])}
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            {this.renderCellContent(this.props.tableData[4])}
            {this.renderCellContent(this.props.tableData[5])}
            {this.renderCellContent(this.props.tableData[6])}
            {this.renderCellContent(this.props.tableData[7])}
            {this.renderCellContent(this.props.tableData[8])}
            {this.renderCellContent(this.props.tableData[9])}
          </div>
          <div className="periodic-row">
            {this.renderCellContent(this.props.tableData[10])}
            {this.renderCellContent(this.props.tableData[11])}
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            <div className="cell" />
            {this.renderCellContent(this.props.tableData[12])}
            {this.renderCellContent(this.props.tableData[13])}
            {this.renderCellContent(this.props.tableData[14])}
            {this.renderCellContent(this.props.tableData[15])}
            {this.renderCellContent(this.props.tableData[16])}
            {this.renderCellContent(this.props.tableData[17])}
          </div>
          <div className="periodic-row">
            {this.renderCellContent(this.props.tableData[18])}
            {this.renderCellContent(this.props.tableData[19])}
            {this.renderCellContent(this.props.tableData[20])}
            {this.renderCellContent(this.props.tableData[21])}
            {this.renderCellContent(this.props.tableData[22])}
            {this.renderCellContent(this.props.tableData[23])}
            {this.renderCellContent(this.props.tableData[24])}
            {this.renderCellContent(this.props.tableData[25])}
            {this.renderCellContent(this.props.tableData[26])}
            {this.renderCellContent(this.props.tableData[27])}
            {this.renderCellContent(this.props.tableData[28])}
            {this.renderCellContent(this.props.tableData[29])}
            {this.renderCellContent(this.props.tableData[30])}
            {this.renderCellContent(this.props.tableData[31])}
            {this.renderCellContent(this.props.tableData[32])}
            {this.renderCellContent(this.props.tableData[33])}
            {this.renderCellContent(this.props.tableData[34])}
            {this.renderCellContent(this.props.tableData[35])}
          </div>
          <div className="periodic-row">
            {this.renderCellContent(this.props.tableData[36])}
            {this.renderCellContent(this.props.tableData[37])}
            {this.renderCellContent(this.props.tableData[38])}
            {this.renderCellContent(this.props.tableData[39])}
            {this.renderCellContent(this.props.tableData[40])}
            {this.renderCellContent(this.props.tableData[41])}
            {this.renderCellContent(this.props.tableData[42])}
            {this.renderCellContent(this.props.tableData[43])}
            {this.renderCellContent(this.props.tableData[44])}
            {this.renderCellContent(this.props.tableData[45])}
            {this.renderCellContent(this.props.tableData[46])}
            {this.renderCellContent(this.props.tableData[47])}
            {this.renderCellContent(this.props.tableData[48])}
            {this.renderCellContent(this.props.tableData[49])}
            {this.renderCellContent(this.props.tableData[50])}
            {this.renderCellContent(this.props.tableData[51])}
            {this.renderCellContent(this.props.tableData[52])}
            {this.renderCellContent(this.props.tableData[53])}
          </div>
          <div className="periodic-row">
            {this.renderCellContent(this.props.tableData[54])}
            {this.renderCellContent(this.props.tableData[55])}
            {this.renderCellContent(this.props.tableData[56])}
            {this.renderCellContent(this.props.tableData[57])}
            {this.renderCellContent(this.props.tableData[58])}
            {this.renderCellContent(this.props.tableData[59])}
            {this.renderCellContent(this.props.tableData[60])}
            {this.renderCellContent(this.props.tableData[61])}
            {this.renderCellContent(this.props.tableData[62])}
            {this.renderCellContent(this.props.tableData[63])}
            {this.renderCellContent(this.props.tableData[64])}
            {this.renderCellContent(this.props.tableData[65])}
            {this.renderCellContent(this.props.tableData[66])}
            {this.renderCellContent(this.props.tableData[67])}
            {this.renderCellContent(this.props.tableData[68])}
            {this.renderCellContent(this.props.tableData[69])}
            {this.renderCellContent(this.props.tableData[70])}
            {this.renderCellContent(this.props.tableData[71])}
          </div>
          <div className="periodic-row">
            {this.renderCellContent(this.props.tableData[72])}
            {this.renderCellContent(this.props.tableData[73])}
            {this.renderCellContent(this.props.tableData[74])}
            {this.renderCellContent(this.props.tableData[75])}
            {this.renderCellContent(this.props.tableData[76])}
            {this.renderCellContent(this.props.tableData[77])}
            {this.renderCellContent(this.props.tableData[78])}
            {this.renderCellContent(this.props.tableData[79])}
            {this.renderCellContent(this.props.tableData[80])}
            {this.renderCellContent(this.props.tableData[81])}
            {this.renderCellContent(this.props.tableData[82])}
            {this.renderCellContent(this.props.tableData[83])}
            {this.renderCellContent(this.props.tableData[84])}
            {this.renderCellContent(this.props.tableData[85])}
            {this.renderCellContent(this.props.tableData[86])}
            {this.renderCellContent(this.props.tableData[87])}
            {this.renderCellContent(this.props.tableData[88])}
            {this.renderCellContent(this.props.tableData[89])}
          </div>
          <div className="periodic-row--empty" />
          <div className="periodic-row">
            <div className="cell" />
            <div className="cell" />
            {this.renderCellContent(this.props.tableData[90])}
            {this.renderCellContent(this.props.tableData[91])}
            {this.renderCellContent(this.props.tableData[92])}
            {this.renderCellContent(this.props.tableData[93])}
            {this.renderCellContent(this.props.tableData[94])}
            {this.renderCellContent(this.props.tableData[95])}
            {this.renderCellContent(this.props.tableData[96])}
            {this.renderCellContent(this.props.tableData[97])}
            {this.renderCellContent(this.props.tableData[98])}
            {this.renderCellContent(this.props.tableData[99])}
            {this.renderCellContent(this.props.tableData[100])}
            {this.renderCellContent(this.props.tableData[101])}
            {this.renderCellContent(this.props.tableData[102])}
            {this.renderCellContent(this.props.tableData[103])}
            <div className="cell" />
            <div className="cell" />
          </div>
          <div className="periodic-row">
            <div className="cell" />
            <div className="cell" />
            {this.renderCellContent(this.props.tableData[104])}
            {this.renderCellContent(this.props.tableData[105])}
            {this.renderCellContent(this.props.tableData[106])}
            {this.renderCellContent(this.props.tableData[107])}
            {this.renderCellContent(this.props.tableData[108])}
            {this.renderCellContent(this.props.tableData[109])}
            {this.renderCellContent(this.props.tableData[110])}
            {this.renderCellContent(this.props.tableData[111])}
            {this.renderCellContent(this.props.tableData[112])}
            {this.renderCellContent(this.props.tableData[113])}
            {this.renderCellContent(this.props.tableData[114])}
            {this.renderCellContent(this.props.tableData[115])}
            {this.renderCellContent(this.props.tableData[116])}
            {this.renderCellContent(this.props.tableData[117])}
            <div className="cell" />
            <div className="cell" />
          </div>
        </div>
      </div>
    );
  }

  renderCellContent(cellData) {
    const { isDull, hightlightGroup } = this.state;

    return cellData ? (
      <a className="cell" href={`/search?${cellData.name}`}>
        <div
          className={`element ${
            isDull && hightlightGroup !== cellData.group ? 'dull' : ''
          }`}
        >
          <div className="at_num">{cellData.number}</div>
          <div className="symbol">{cellData.displayName}</div>
          <div className={`at_details_${cellData.group}`} />
        </div>
      </a>
    ) : (
      <div className="cell" />
    );
  }

  renderGroupCells(groups) {
    const { isDull, hightlightGroup } = this.state;

    const handleGroupMouseOver = (evt, key) => {
      evt.preventDefault();
      this.highlightSection(key);
    };

    const handleGroupMouseLeave = evt => {
      evt.preventDefault();
      this.unhighlight();
    };

    return (
      groups &&
      groups.map((group, index) => (
        <div
          key={`group${index}`}
          className="cell"
          onMouseOver={evt => handleGroupMouseOver(evt, index)}
          onMouseLeave={evt => handleGroupMouseLeave(evt)}
        >
          <div
            className={`element ${
              isDull && hightlightGroup !== group.name ? 'dull' : ''
            }`}
          >
            <div className="at_num">{group.total}</div>
            <div className="symbol">{group.displayName}</div>
            <div className={`legend_${group.name}`} />
          </div>
        </div>
      ))
    );
  }
}

export default PeriodicTable;
