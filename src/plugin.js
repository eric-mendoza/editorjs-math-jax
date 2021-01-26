const { FormulaConstructor } = require("./formulaConstructor");
const toolboxIcon = require("./img/toolboxIcon.svg");

const Icons = {
  Toolbox: toolboxIcon
};

const CSS = {
  input: "tc-formula__inp",
};

class Formula {
  static get toolbox() {
    return {
      title: 'Formula',
      icon: Icons.Toolbox,
    };
  }


  constructor({ data, config, api }) {
    this.api = api;
    this.wrapper = undefined;
    this.config = config;
    this.data = data;
    this._formulaConstructor = new FormulaConstructor(data, config, api);

    this.actions = [

    ];
  }

  performAction(actionName) {
    switch (actionName) {
      // case "InsertColBefore":
      //   this._tableConstructor.table.insertColumnBefore();
      //   break;
    }
  }

  /**
   * render actions toolbar
   * @returns {HTMLDivElement}
   */
  renderSettings() {
    const wrapper = document.createElement("div");

    this.actions.forEach(({ actionName, label, icon }) => {
      const title = this.api.i18n.t(label);
      const button = document.createElement("div");

      button.classList.add("cdx-settings-button");
      button.innerHTML = icon;
      button.title = actionName;

      this.api.tooltip.onHover(button, title, {
        placement: "top",
      });
      button.addEventListener(
        "click",
        this.performAction.bind(this, actionName)
      );
      wrapper.appendChild(button);
    });
    return wrapper;
  }

  render() {
    this.wrapper = document.createElement("div");

    this._createFormulaConfiguration();

    return this.wrapper;
  }

  _createFormulaConfiguration() {
    this.wrapper.innerHTML = "";
    this._formulaConstructor = new FormulaConstructor(
      this.data,
      this.config,
      this.api
    );
    this.wrapper.appendChild(this._formulaConstructor.htmlElement);
  }

  save(blockContent){
    return {
      url: blockContent.value
    }
  }
}
module.exports = Formula;
