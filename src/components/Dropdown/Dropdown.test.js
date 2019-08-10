import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

describe("Dropdown", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Dropdown items={[]}/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});