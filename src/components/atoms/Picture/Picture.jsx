import PropTypes from "prop-types"; //solo en jsx
import { getClasses } from "/helpers/stylesHelpers";
import styles from "./Picture.module.css";

const Picture = ({ src, width, height, isRounded, title }) => {
	const getStyles = getClasses(styles)({
		width,
		height,
		isRounded,
	});
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
	width: PropTypes.number,
	height: PropTypes.number || "auto",
	isRounded: PropTypes.bool,
};

Picture.defaultProps = {
	height: "auto",
};

export default Picture;
