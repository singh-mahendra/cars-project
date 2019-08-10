import React from 'react';
import { shallow } from 'enzyme';
import LoadingSkeleton from './LoadingSkeleton';

describe("LoadingSkeleton", () => {
  it("should render my component", () => {
    const wrapper = shallow(<LoadingSkeleton/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});