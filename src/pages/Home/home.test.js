/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ReactQueryClientWrapper } from "../../components/ReactQueryClientWrapper";
import Home from "./index";

test("renders page snapshot", () => {
  const history = createMemoryHistory();

  if (typeof window !== "undefined") {
    const matchMediaPolyfill = function matchMediaPolyfill() {
      return {
        matches: false,
        addListener() {},
        removeListener() {}
      };
    };
    window.matchMedia = window.matchMedia || matchMediaPolyfill;
  }
  render(
    <Router history={history}>
      <ReactQueryClientWrapper>
        <Home />
      </ReactQueryClientWrapper>
    </Router>
  );
  const asFragment = render(
    <Router history={history}>
      <ReactQueryClientWrapper>
        <Home />
      </ReactQueryClientWrapper>
    </Router>
  ).asFragment;
  expect(asFragment()).toMatchSnapshot();
});
