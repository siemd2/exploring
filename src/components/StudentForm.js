import React from 'react';

const StudentForm = ({ onNewStudent }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
  
        // Get the data from the form.
        const formData = new FormData(event.target);
        const newStudent = Object.fromEntries(formData);
  
        // Convert ID and grade to numbers.
        newStudent.id = Number(newStudent.id);
        newStudent.grade = Number(newStudent.grade);
  
        // Call the onNewStudent function passed as a prop.
        onNewStudent(newStudent);
  
        // Reset the form fields.
        event.target.reset();
    };
  
    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input type="number" name="id" required placeholder="ID #" min="1" className="input" />
            <input type="text" name="firstName" required placeholder="First Name" className="input" />
            <input type="text" name="lastName" required placeholder="Last Name" className="input" />
            <input type="date" name="dateOfBirth" required placeholder="Date of Birth" className="input" />
            <input type="number" name="grade" required placeholder="Grade" min="1" max="12" className="input" />
            <button type="submit" className="button">Add Student</button>
        </form>
    );
};

export default StudentForm;