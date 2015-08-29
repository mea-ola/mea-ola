// accountBanner.jsx
// created by the Mea Ola Team
// React Class for rendering the account banner

var React = require('react');

var ButtonTemplate = React.createClass({
  render: function() {
    this.props.size = this.props.size || "22"
    this.props.string = this.props.string || " ";
    var buttonSize = (this.props.size) + "px";
    var xPos = this.props.position*(this.props.size);
    return (
      <g className="mea-ola-button">
        <rect height={buttonSize} width={buttonSize} x={xPos}></rect>
      </g>
    );
  }
});

module.exports = ButtonTemplate;
