import "minireset.css";
import "../styles/global.css";
import "../styles/tokens.css";

//** Global Decorator */
//agrega estilos personalizados al SB para mostrar las Stories de mejor forma
const dynamicStyles = ({ __sb }) => ({
	display: "flex",
	flexDirection: __sb?.fd || "column",
	maxHeight: __sb?.mh || "auto",
	justifyContent: "flex-start",
	alignContent: "flex-start",
	flexWrap: __sb?.fw || "wrap",
	height: "100%",
	gap: "10px 30px",
	backgroundColor: "#2222",
	padding: "30px",
});

export const decorators = [
	(Story, { parameters }) => (
		<div style={dynamicStyles(parameters)}>
			<Story />
		</div>
	),
];

//** Global Decorator End */

/** @type { import('@storybook/react').Preview } */
const preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
};

export default preview;