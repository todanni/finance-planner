import { DateTime } from 'luxon';

export type DateRange = {
	firstDay: Date;
	lastDay: Date;
};

const getTaxYearRange = () => {
	const startDate = DateTime.fromISO('2023-04-06').toJSDate();
	const endDate = DateTime.fromISO('2024-04-05').toJSDate();
	return { startDate, endDate };
};

const getCurrentMonthRange = () => {
	const startDate = DateTime.now().startOf('month').toJSDate();
	const endDate = DateTime.now().endOf('month').toJSDate();
	return { startDate, endDate };
};

const getCurrentMonthDates = () => {
	const startDate = DateTime.now().startOf('month').toJSDate();
	const endDate = DateTime.now().endOf('month').toJSDate();
	return { startDate, endDate };
};

const getCurrentYearRange = () => {
	const startDate = DateTime.now().startOf('year').toJSDate();
	const endDate = DateTime.now().endOf('year').toJSDate();
	return { startDate, endDate };
};

export {
	getCurrentMonthRange,
	getCurrentYearRange,
	getTaxYearRange,
	getCurrentMonthDates,
};
