import './styles/formula-constructor.pcss';
import {create} from './documentsUtils';
import {Formula} from './formula';

const CSS = {
  editor: 'tc-editor',
  toolBarHor: 'tc-toolbar--hor',
  toolBarVer: 'tc-toolbar--ver',
  inputField: 'tc-table__inp'
};

/**
 * Entry point. Controls formula and give API to user
 */
export class FormulaConstructor {

  constructor(data, config, api) {
    /** creating formula */
    this._formula = new Formula();


    /** creating container around formula */
    this._container = create('div', [CSS.editor, api.styles && api.styles.block], null, [
      this._formula.htmlElement
    ]);
  }

  get htmlElement() {
    return this._container;
  }

  get formula() {
    return this._formula;
  }
}