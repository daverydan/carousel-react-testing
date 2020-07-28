import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import image1 from "./image1.jpg";

it("renders w/out crashing", () => {
  render(<Card caption="Hodwy" src={image1} currNum={1} totalNum={3} />);
});

test("it matches snapshot", () => {
  const { asFragment } = render(
    <Card caption="Hello" src={image1} currNum={1} totalNum={3} />
  );
  expect(asFragment()).toMatchSnapshot();
});
