import classNames from "classnames";

//** for strings */
const getModuleClasses = (cssModule, classKey) => {
	// Verificamos si el objeto cssModule (que es el objeto de clases CSS)
	// tiene una propiedad con el mismo nombre que classKey (que es el nombre de la clase)
	const hasClassKey = cssModule?.[classKey] !== undefined;
	// Si el objeto cssModule tiene una propiedad con el nombre de la clase,
	// retornamos el valor de esa propiedad. De lo contrario, retornamos el nombre de la clase tal cual.
	return hasClassKey ? cssModule[classKey] : classKey;
};

//** for objects */
const getObjectClasses = (cssModule, object) => {
	return Object.keys(object).reduce((classes, classKey) => {
		// Para cada clave en el objeto, verificamos si hay un nombre de clase en el CSS module correspondiente
		const className = cssModule[classKey];
		// Si existe un nombre de clase en el CSS module, agregamos el nombre de clase al objeto de clase con el valor correspondiente
		if (className) {
			classes[className] = object[classKey];
		}
		// Finalmente, devolvemos el objeto de clase acumulado en cada iteración
		return classes;
		// El objeto inicial es un objeto vacío, {}
	}, {});
};

//** for arrays */
const getDynamicClasses = (cssModule, props, classes) => {
	return classes.reduce((classesObject, classKey) => {
		// Para cada clave en el array de clases dinámicas, verificamos
		// si esa clave existe como propiedad en props
		const propValue = props[classKey];
		// Si existe, verificamos si hay un nombre de clase en el CSS module correspondiente
		const className = cssModule[`${classKey}-${propValue}`];

		// Si existe nombre de clase en el CSS module y el valor de la propiedad
		// es verdadero, agregamos el nombre de clase al objeto de clase con el valor
		// correspondiente. De lo contrario, devolvemos el objeto de clase acumulado
		return className && propValue
			? Object.assign(classesObject, { [className]: propValue })
			: classesObject;
	}, {});
};

//** main function */
export const getClasses =
	(cssModule) =>
	(props) =>
	(...args) => {
		// Mapeamos sobre cada argumento que recibimos en los paréntesis de invocación
		// para retornar un array de nombres de clase
		return classNames(
			args.map((arg) => {
				// Si el argumento es un array
				if (Array.isArray(arg)) {
					// Devolvemos la función getDynamicClasses con el CSS module, las props y el array de clases dinámicas
					return getDynamicClasses(cssModule, props, arg);
				}
				// Si el argumento es un string
				if (typeof arg === "string") {
					// Devolvemos la función getModuleClasses con el CSS module y el nombre de la clase
					return getModuleClasses(cssModule, arg);
				}
				// Si el argumento es un objeto
				if (typeof arg === "object") {
					// Devolvemos la función getObjectClasses con el CSS module y el objeto de clases estáticas
					return getObjectClasses(cssModule, arg);
				}
				// Si el argumento no es un array, string o objeto, lo ignoramos
				return undefined;
			}),
		);
	};
