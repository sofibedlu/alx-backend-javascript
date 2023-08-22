const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');

    const headers = lines[0].split(',');

    const fieldCounts = {};
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',');
      const field = values[headers.indexOf('field')];

      if (!fieldCounts[field]) {
        fieldCounts[field] = {
          count: 0,
          names: []
        };
      }
      fieldCounts[field].count++;
      fieldCounts[field].names.push(values[headers.indexOf('firstname')]);
    }

    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in fieldCounts) {
      console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
