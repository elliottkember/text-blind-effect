import React, { Component } from 'react';
import './blind.css'
import PropTypes from 'prop-types';

export default class Blind extends Component {
  static propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    msPerLine: PropTypes.number
  }

  container = React.createRef();

  state = {
    lines: false,
    moving: false,
  }

  readLines = (container, text) => {
    container.innerText = '';

    const lines = [];
    let line = '';
    let word = '';
    let lastHeight = 0;

    for (let i = 0; i < text.length; i++) {
      word += text[i];
      this.container.current.innerHTML += text[i];

      if (lastHeight === 0) {
        lastHeight = container.offsetHeight;
      }

      if (container.offsetHeight !== lastHeight && lastHeight !== 0) {
        lines.push(line);
        line = word;
        word = '';
        lastHeight = container.offsetHeight;
      } else if ([' ', '-', '–', '—'].indexOf(text[i]) > -1) {
        console.log(word);
        line += word;
        word = '';
      }
    }
    line += word;
    lines.push(line);
    return lines;
  }

  componentDidMount() {
    const lines = this.readLines(this.container.current, this.props.text);
    this.setState({ lines });

    setTimeout(() => {
      this.setState({ moving: true });
    }, 1);

    const totalDuration = this.props.msPerLine * 2 * lines.length;

    setTimeout(() => {
      this.setState({ done: true });
    }, totalDuration);
  }

  renderLines() {
    const { msPerLine } = this.props;
    const { moving, done, lines } = this.state;

    return lines.map((line, i) =>
      <span className="blind-blind" key={line}>
        <span className={`blind-text ${moving ? 'blind-moving' : ''}`} style={{
          transition: `ease transform ${msPerLine}ms ${i * msPerLine}ms`
        }}>
          {line}
        </span>
      </span>
    )
  }

  render() {
    const { text, className, msPerLine } = this.props;
    const { moving, done, lines } = this.state;

    return (
      <div className={className} ref={this.container}>
        {!done && lines ? this.renderLines() : text}
      </div>
    );
  }
}
