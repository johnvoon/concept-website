import React, { Component } from 'react';

export default class PageLengthMenu extends Component {
  render() {
    const { 
      pageLength,
      pageLengthOptions, 
      onPageLengthChange,
    } = this.props;

    return (
      <div>
        <label htmlFor="page-menu">Results per page: </label> 
        <select
          id="page-menu"
          value={pageLength}
          onChange={onPageLengthChange}
        >
          {pageLengthOptions.map(opt =>
            <option key={opt} value={opt}>
              {opt === 0 ? 'All' : opt}
            </option>
          )}
        </select>
      </div>    
    );
  }
}
