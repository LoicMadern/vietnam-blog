import { cleanup, render, screen } from "@testing-library/react";
import PostText from "../post/PostText";

function generateComponent() {
  render(<PostText title={"titre"} />);
}

describe("initial component rendering", () => {
  beforeEach(() => {
    generateComponent();
  });

  afterEach(cleanup);

  test("title rendering", () => {
    const title_expected = "titre";
    const linkElement = screen.getByText(title_expected);
    expect(linkElement).toBeInTheDocument();
  });
});
