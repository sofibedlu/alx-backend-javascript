import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const databaseFilePath = process.argv[2];
      const studentData = await readDatabase(databaseFilePath);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write('This is the list of our students\n');

      const fieldNames = Object.keys(studentData).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));

      fieldNames.forEach((field, index) => {
        const count = studentData[field].length;
        const list = studentData[field].join(', ');
        res.write(`Number of students in ${field}: ${count}. List: ${list}`);
        if (index !== fieldNames.length - 1) {
          res.write('\n');
        }
      });

      res.end();
    } catch (error) {
      res.write('This is the list of our students\n');
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Major parameter must be CS or SWE');
      return;
    }

    try {
      const databaseFilePath = process.argv[2];
      const studentData = await readDatabase(databaseFilePath);
      const studentsInMajor = studentData[major] || [];
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.write(`List: ${studentsInMajor.join(', ')}`);
      res.end();
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  }
}

export default StudentsController;
