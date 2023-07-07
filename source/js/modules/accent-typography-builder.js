export default class AccentTypographyBuild {
  constructor(
    elementSelector,
    timer,
    timingFunction,
    classForText,
    nameAnimation,
    timeOffset,
    offset
  ) {
    this._elementSelector = elementSelector;
    this._timer = timer;
    this._nameAnimation = nameAnimation;
    this._timingFunction = timingFunction;
    this._timingFunction = timingFunction;
    this._classForText = classForText;
    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = timeOffset;
    this._offset = offset;
    this.prePareText();
  }

  createElement(letter, index) {
    const span = document.createElement(`span`);
    index++
    span.textContent = letter;
    this._timeOffset += this._offset;
    let currentOffset;
    if (index % 3 === 1) {
      currentOffset = this._timeOffset;
    } else if (index % 3 === 2) {
      currentOffset = this._timeOffset + this._offset;
    } else {
      currentOffset = this._timeOffset - this._offset;
    }

    span.style.animation = `${this._nameAnimation} ${this._timer}ms both ${this._timingFunction} ${currentOffset}ms`;

    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent.trim().split(` `).filter((latter)=>latter !== '');
    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter, index) => {
        fragment.appendChild(this.createElement(latter, index));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(this._classForText);
      wordContainer.appendChild(wordElement);
      wordContainer.style.display = `flex`;
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }
};
