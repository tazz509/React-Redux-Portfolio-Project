import React from 'react'
import { shallow, mount } from 'enzyme';
import About from "../../containers/About.js";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing the About container',() => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<About />);
  })
  
  it('contains three links', () => {
    expect(wrapper.find('Link').length).toEqual(3)
  });
  
});