const validations = (values) => {
	let errors = {};
	//VALIDATE INPUT FIELDS

	//validate name input
	const nameRe = /^[a-zA-Z]{2,15}$/;
	if (!nameRe.test(values.businessName)) {
		errors.businessName = "Name must be between 2 to 15 characters long";
		// return errors.businessName;
	}
	//validate address input
	const addressRe = /^[a-zA-Z]{2,30}\w$/;
	if (!addressRe.test(values.businessAddress)) {
		errors.businessAddress = "Enter a valid address";
		// return errors.businessAddress;
	}
	//validate city input
	const cityRe = /^[a-zA-Z]{2,10}\w$/;
	if (!cityRe.test(values.businessCity)) {
		errors.businessCity = "Enter a valid city";
		// return errors.businessCity;
	}
	return errors;
};

export default validations;
