export const formatCurrency = (value: number | undefined | null) => {
	if (!value) {
		return '£0.00';
	}

	return (
		'£' +
		value.toLocaleString('en-GB', {
			maximumFractionDigits: 2,
			minimumFractionDigits: 2,
		})
	);
};
