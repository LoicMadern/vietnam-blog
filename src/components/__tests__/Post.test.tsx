import { cleanup, render, screen } from "@testing-library/react";
import Post from "../post/Post";

const mock_post = {
  id: 1,
  title: "Bird Valley",
  description: "Natural bird reserve",
  author: "Loic",
  image: "valley",
};

function generateComponent() {
  render(<Post post={mock_post} />);
}

describe("initial component rendering", () => {
  beforeEach(() => {
    generateComponent();
  });

  afterEach(cleanup);

  test("title rendering", () => {
    const title_expected = mock_post.title;
    const linkElement = screen.getByText(title_expected);
    expect(linkElement).toBeInTheDocument();
  });

  test("description rendering", () => {
    const description_expected = mock_post.description;
    const linkElement = screen.getByText(description_expected);
    expect(linkElement).toBeInTheDocument();
  });

  test("author rendering", () => {
    const author_expected = mock_post.title;
    const linkElement = screen.getByText(author_expected);
    expect(linkElement).toBeInTheDocument();
  });

  test("image rendering", () => {
    const endpoint_expected = mock_post.image + ".jpg";
    const landscape = screen.getByRole("img");
    expect(landscape).toHaveAttribute("src", endpoint_expected);
  });
});
