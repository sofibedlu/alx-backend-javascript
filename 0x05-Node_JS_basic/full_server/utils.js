import fs from 'fs';

function readDatabase (filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) {
        reject(error); // Reject the promise with the error
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const headers = lines[0].split(',');
      const fieldIndex = headers.indexOf('field');
      const firstnameIndex = headers.indexOf('firstname');

      const studentData = {};

      for (let i = 1; i < lines.length; i += 1) {
        const values = lines[i].split(',');
        const field = values[fieldIndex];
        const firstname = values[firstnameIndex];

        if (!studentData[field]) {
          studentData[field] = [];
        }
        studentData[field].push(firstname);
      }

      resolve(studentData); // Resolve the promise with the student data object
    });
  });
}

export default readDatabase;
