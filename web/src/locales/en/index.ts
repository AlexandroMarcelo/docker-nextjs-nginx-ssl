import dot from "dot-object";

import Home from "./home";
import Common from "./common";

export default {
  ...dot.dot(Home),
  ...dot.dot(Common),
};
