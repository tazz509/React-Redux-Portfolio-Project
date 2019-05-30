import React from 'react'
import { shallow, mount } from 'enzyme';
import Rules from "../../components/About/Rules.js";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing the Home container',() => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Rules />);
  })
  
  it('renders a component', () => {
    expect(wrapper.length).toEqual(1)
  });
  
  it('contains header - h1', () => {
    expect(wrapper.contains(<h1>Rules of Sudoku</h1>)).toBe(true)
  });
  
});