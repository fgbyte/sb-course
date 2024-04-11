import { getClasses } from "./stylesHelpers";

export const getTemplate = (Component, styles) => (args) => {
	const allProps = { ...Component.defaultProps, ...args };
	return <Component {...args} getStyles={getClasses(styles)(allProps)} />;
};

export const getListTemplate =
	(Component, styles) =>
	({ items, ...args }) => {
		return items.map((item, index) => {
			const allProps = { ...Component.defaultProps, ...args, ...item };

			return (
				<Component
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					key={index}
					{...args}
					{...item}
					getStyles={getClasses(styles)(allProps)}
				/>
			);
		});
	};

export const getOptionsArgTypes = (options) => ({
	description: "**options**",
	table: {
		type: {
			summary: options.map((option) => `'${option}'`).join("|"),
		},
	},
	control: { type: "select", options },
});
