import PropTypes from "prop-types"; //solo en jsx
import { getClasses } from "/helpers/stylesHelpers";
import Picture from "../../atoms/Picture";
import styles from "./Avatar.module.css";
import { options } from "./constants";
import { mapSize } from "./helpers";

const Avatar = ({ src, size }) => {
	const getStyles = getClasses(styles)({});

	return (
		<div className={getStyles("avatar", {})}>
			<Picture
				src={src}
				width={mapSize(size)}
				height={mapSize(size)}
				isRounded
			/>
		</div>
	);
};

Avatar.propTypes = {
	src: PropTypes.string.isRequired,
	size: PropTypes.oneOf(options.sizes),
};

Avatar.defaultProps = {
	size: "md",
};

export default Avatar;
