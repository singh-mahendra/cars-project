import React from 'react';
import { shallow } from 'enzyme';
import Paginator from './Paginator';

describe("Paginator", () => {
  it("should render my component", () => {
    const pageNumber = 1;
    const navigateToPage = () => {}
    const wrapper = shallow(<Paginator pageNumber={pageNumber} totalPages={pageNumber} navigateToPage={navigateToPage}/>);
    expect(wrapper.getElements()).toMatchSnapshot();
  });
});