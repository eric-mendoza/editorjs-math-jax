import {create, createTextNode} from './documentsUtils';
import './styles/formula.pcss';

const CSS = {
  formula: 'tc-formula',
  textarea: 'tc-formula__textarea',
  inputField: 'tc-formula__inp',
  wrapper: 'tc-formula__wrap',
  area: 'tc-formula__area',
  highlight: 'tc-formula__highlight'
};

/**
 * Generates and manages _formula contents.
 */
export class Formula {
  /**
   * Creates
   */
  constructor() {
    this._element = this._createFormulaWrapper();
    this._formula = this._element.querySelector('formula');
    this._attachEvents();
  }


  get htmlElement() {
    return this._element;
  }


  get body() {
    return this._formula;
  }


  _createFormulaWrapper() {
    return create('div', null, null, [

      /* Text Area*/
      create(
        'textarea',
        [ CSS.wrapper, CSS.textarea ],
        {
          id: 'FormulaInput',
        }
      ),
      create('p', null, null, [
        createTextNode('\\[x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.\\]')
      ])
    ]);
  }


  _attachEvents() {

  }
}