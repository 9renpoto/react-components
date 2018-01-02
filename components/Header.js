"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const classnames = require("classnames");
const React = require("react");
const NAVBAR = 'navbar';
const ID = `navMenu`;
class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        };
    }
    render() {
        const { Logo, titles, baseUrl } = this.props;
        return (React.createElement("header", { className: `${NAVBAR}` },
            React.createElement("div", { className: `${NAVBAR}-brand` },
                Logo(`${NAVBAR}-item`),
                React.createElement("div", { className: classnames({
                        [`${NAVBAR}-burger burger`]: true,
                        'is-active': this.state.isActive
                    }), "data-target": ID, onClick: _ => this.setState({ isActive: !this.state.isActive }) },
                    React.createElement("span", null),
                    React.createElement("span", null),
                    React.createElement("span", null))),
            React.createElement("div", { className: classnames({
                    [`${NAVBAR}-menu`]: true,
                    'is-active': this.state.isActive
                }), id: ID },
                React.createElement("div", { className: `${NAVBAR}-end` }, titles.map((title, index) => (React.createElement("a", { className: `${NAVBAR}-item`, href: `${baseUrl}/${title}/`, key: index }, title)))))));
    }
}
exports.Header = Header;
//# sourceMappingURL=Header.js.map