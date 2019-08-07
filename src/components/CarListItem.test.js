import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';
import CarsListItem from './CarsListItem';

describe("Carlistitem", () => {
  it("should render my component", () => {
    const id = 1;
    const wrapper = shallow(<CarsListItem id={id} manufacturerName="Tesla" pictureUrl="#" modelName="X" mileage={{unit: "KM", number:"1"}}/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});