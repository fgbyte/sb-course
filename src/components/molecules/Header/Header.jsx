import classNames from "classnames";
import PropTypes from "prop-types"; //solo en jsx
import styles from "./Header.module.css";

const Header = ({ children }) => {
	return <div className={classNames(styles.header)}>{children}</div>;
};

Header.propTypes = {
	children: PropTypes.node.isRequired,
};

Header.defaultProps = {};

export default Header;
