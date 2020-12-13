import React from "react";
import { shallow } from "enzyme";
import Description from "../Components/Description";

test('Description', () => {
  const component = shallow(<Description body="test description" />)

  expect(component.text()).toEqual('test description');

  expect(component).toMatchSnapshot();
})