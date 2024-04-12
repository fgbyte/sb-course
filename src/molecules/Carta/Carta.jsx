import classNames from "classnames";
import PropTypes from "prop-types"; //solo en jsx
import styles from "./Carta.module.css";

const Carta = ({ children }) => {
	return <div className={classNames(styles.carta)}>{children}</div>;
};

Carta.propTypes = {
	children: PropTypes.node.isRequired,
};

Carta.defaultProps = {};

export default Carta;
