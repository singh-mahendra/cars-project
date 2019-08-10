import React from 'react';
import { shallow } from 'enzyme';
import Filterer from './Filterer';

describe("Filterer", () => {
  it("should render my component", () => {
    const wrapper = shallow(<Filterer allColors={["red", "green"]} allManufacturers={[{name: "Tesla"}]}/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});