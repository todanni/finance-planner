export type DateRange = {
	firstDay: Date;
	lastDay: Date;
};

const getCurrentMonthRange = () => {
	const date = new Date();
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	return {
		firstDay: firstDay,
		lastDay: lastDay,
	};
};

const getPreviousMonthRange = () => {
	const date = new Date();
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	return {
		firstDay: firstDay,
		lastDay: lastDay,
	};
};

const getCurrentYearRange = () => {
	const date = new Date();
	const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
	const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

	return {
		firstDay: firstDay,
		lastDay: lastDay,
	};
};

export { getCurrentMonthRange, getCurrentYearRange, getPreviousMonthRange };
