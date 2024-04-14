import PropTypes from "prop-types"; //solo en jsx
import { getClasses } from "/helpers/stylesHelpers";
import styles from "./Component.module.css";

const Component = ({ children }) => {
	const getStyles = getClasses(styles)({});

	return <div className={getStyles("component", {})}>{children}</div>;
};

Component.propTypes = {
	children: PropTypes.node.isRequired,
};

Component.defaultProps = {};

export default Component;
