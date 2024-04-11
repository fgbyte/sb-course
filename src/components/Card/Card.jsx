import PropTypes from "prop-types";
import { getClasses } from "../../../helpers/stylesHelpers";
import styles from "./Card.module.css";
import { options } from "./constants";

const Card = ({
	children,
	color = "primary",
	size = "sm",
	isClickable = false,
	isDragable = false,
}) => {
	const getStyles = getClasses(styles)({
		color,
		size,
		"is-clickable": isClickable,
		"is-dragable": isDragable,
	});

	return (
		<div
			className={getStyles("card", ["color", "size"], {
				"is-clickable": isClickable,
				"is-dragable": isDragable,
			})}
		>
			{children}
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.string.isRequired,
	color: PropTypes.oneOf(options.colors),
	size: PropTypes.oneOf(options.sizes),
	isClickable: PropTypes.bool,
	isDragable: PropTypes.bool,
};

export default Card;
