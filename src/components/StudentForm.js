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
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">ID #</label>
                    <input type="number" id="id" name="id" required min="1" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" placeholder="Enter ID" />
                </div>
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" placeholder="Enter first name" />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" placeholder="Enter last name" />
                </div>
                <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                    <input type="date" id="dateOfBirth" name="dateOfBirth" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" placeholder="Select date of birth" />
                </div>
                <div>
                    <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Grade</label>
                    <input type="number" id="grade" name="grade" required min="1" max="12" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black" placeholder="Enter grade" />
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Add Student
                </button>
            </form>
        </div>
    );    
};

export default StudentForm;
