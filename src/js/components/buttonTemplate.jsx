// accountBanner.jsx
// created by the Mea Ola Team
// React Class for rendering the account banner

var React = require('react');

var ButtonTemplate = React.createClass({
  render: function() {
    this.props.size = this.props.size || 22
    var buttonSize = (this.props.size) + "px";
    var xPos = this.props.position*(this.props.size*1.2);
    return (
      <g>
        <rect className="mea-ola-button" height={buttonSize} width={buttonSize} x={xPos}></rect>
      </g>
    );
  }
});

module.exports = ButtonTemplate;
