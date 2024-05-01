export const assign = (source: any, ...targets: any) => {
	for (const target of targets) {
		for (const key of Object.keys(target)) {
			source[key] = target[key];
		}
	}

	return source;
};

export const arrayOfLength = (length: any, defaultValue: any) => {
	const array = new Array(length);
	for (let i = 0; i < length; i++) {
		array[i] = defaultValue;
	}
	return array;
};

export const uniqueArray = (array: any[]) => {
	const duplicates = [];
	const result = [];

	for (const item of array) {
		if (duplicates.indexOf(item) < 0) {
			duplicates.push(item);
			result.push(item);
		}
	}

	return result;
};
