import React from 'react';
import ReactDOM from 'react-dom';
import { render, shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a form with 3 inputs', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find('form').children().length).toBe(3)
})

it("renders an input with name='first-name'", () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find("input[name='first-name']").length).toBe(1)
})

it("renders an input with name='last-name'", () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find("input[name='last-name']").length).toBe(1)
})

it('renders a table with two th one for Nombre and the other for Apellido', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.find("table tr th").lenght).toBe(2)
})
