import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import StudentForm from '../components/StudentForm';
import initialData from '../../students.json';

function HomePage() {
  // State to hold the list of students
  const [students, setStudents] = useState(initialData);

  // Function to handle new student addition
  const onNewStudent = (newStudent : any) => {
    // Check if student ID already exists
    const exists = students.some(student => student.id === newStudent.id);
    if (exists) {
      // Handle the duplicate ID case, such as notifying the user
      alert("This ID already exists. Please enter a unique ID.");
    } else {
      // Add the new student to the students array in the state
      setStudents(prevStudents => [...prevStudents, newStudent]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto p-4">
        <ul>
          {students.map(student => (
            <li key={student.id}>
              {student.firstName} {student.lastName} - DOB: {student.dateOfBirth} - Grade: {student.grade}
            </li>
          ))}
        </ul>
        {/* Add StudentForm and pass the onNewStudent function */}
        <StudentForm onNewStudent={onNewStudent} />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
