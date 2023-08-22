const fs = require('fs');

function countStudents (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');

      const headers = lines[0].split(',');
      const fieldIndex = headers.indexOf('field');

      const fieldCounts = {};
      for (let i = 1; i < lines.length; i++) {
        const values = lines[i].split(',');
        const field = values[fieldIndex];
        if (!fieldCounts[field]) {
          fieldCounts[field] = {
            count: 0,
            names: []
          };
        }
        fieldCounts[field].count++;
        fieldCounts[field].names.push(values[0]); // Assuming 'firstname' is at index 0
      }

      console.log(`Number of students: ${lines.length - 1}`);
      for (const field in fieldCounts) {
        console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].names.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
