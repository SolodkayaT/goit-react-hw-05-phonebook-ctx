import React, { Component } from "react";
import ThemeContext from "../context/themeContext";
import { themeConfig } from "../context/themeContext";

const withTheme = WrappedComponent => {
  return class withTheme extends Component {
    constructor() {
      super();
      this.state = {
        theme: "light"
      };
      this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme(newTheme) {
      this.setState({
        theme: this.state.theme === "dark" ? "light" : "dark"
      });
    }

    render() {
      return (
        <ThemeContext.Provider value={themeConfig[this.state.theme]}>
          <WrappedComponent {...this.props} toggle={e => this.toggleTheme(e)} />
        </ThemeContext.Provider>
      );
    }
  };
};

export default withTheme;
