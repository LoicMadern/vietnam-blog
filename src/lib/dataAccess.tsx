import json from "../lib/descriptions.json";

export default function filterByName(nameSearched: string) {
  if (nameSearched) {
    let description =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    for (let i = 0; i < json.elements.length; i++) {
      let currentElement = json.elements[i];
      if (currentElement.name === nameSearched) {
        description = currentElement.description;
      }
    }

    return description;
  }
  throw new Error();
}
