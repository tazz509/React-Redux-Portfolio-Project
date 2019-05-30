import React from 'react'
import { shallow, mount } from 'enzyme';
import Home from "../components/Home.js";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Home container',() => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Home />);
  })
  
  it('contains three links', () => {
    expect(wrapper.find('Link').length).toEqual(3)
  });
  
  it('contains header - h1', () => {
    expect(wrapper.contains("Click Play to get started or about to learn more about Sudoku.")).toBe(true)
  });
});