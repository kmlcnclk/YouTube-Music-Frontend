import React, { Component } from 'react';
import Icon from '../src/Icon';
class LibraryComponent extends Component {
  render() {
    return (
      <div className="bg-black pt-24 mx-[45px]">
        <div className="flex items-end space-x-4">
          <p className="font-bold text-2xl">Recent activity</p>
          <Icon name="seeAll" size={24} color="#aaa" />
        </div>
      </div>
    );
  }
}

export default LibraryComponent;
