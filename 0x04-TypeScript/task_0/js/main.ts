interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const student1: Student = {
	firstName: "sofy",
	lastName: "bedu",
	age: 31,
	location: "addis ababa",
};

const student2: Student = {
        firstName: "hala",
	lastName: "kusem",
	age: 13,
	location: "girar",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');

studentsList.forEach((student) => {
	const row = document.createElement('tr');
	const firstNameCell = document.createElement('td');
	firstNameCell.textContent = student.firstName;

	const locationCell = document.createElement('td');
	locationCell.textContent = student.location;

	row.appendChild(firstNameCell);
	row.appendChild(locationCell);

	table.appendChild(row);
});
