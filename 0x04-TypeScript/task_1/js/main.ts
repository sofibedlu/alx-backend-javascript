interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors extends Teacher {
	numberOfReports: number;
}

interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

interface StudentClassInterface {
	new (firstName: string, lastName: string): StudentClass;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
	if (firstName) {
		return `${firstName.charAt(0)}. ${lastName}`;
	}
}

class StudentClass implements StudentClassInterface {

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}
