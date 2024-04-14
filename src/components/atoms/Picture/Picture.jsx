import classNames from "classnames";
import PropTypes from "prop-types"; //solo en jsx
import { getClasses } from "/helpers/stylesHelpers";
import styles from "./Picture.module.css";

const Picture = ({ getStyles, src, width, height, isRounded, title }) => {
	return (
		<picture
			className={getStyles("picture", {
				"is-rounded": isRounded,
			})}
		>
			<img src={src} alt={title} style={{ height, maxWidth: width }} />
		</picture>
	);
};

Picture.propTypes = {
	src: PropTypes.string.isRequired,
	getStyles: PropTypes.func.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	isRounded: PropTypes.bool,
};

Picture.defaultProps = {
	height: "auto",
	getStyles: () => {},
};

export default Picture;
