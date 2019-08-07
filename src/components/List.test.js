import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe("List", () => {
  it("should render my component", () => {
  const component = (item) => {<div>{item.name}</div>};
    const wrapper = shallow(<List listItems={[{name: "Tesla"}]} itemKeyProperty="name" itemComponent={component}/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});