import Footer from './components/Footer';
import Navbar from './components/Navbar';
import data from '../../students.json';

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow container mx-auto p-4">
        <ul>
          {data.map(student => (
            <li key={student.id}>
              {student.firstName} {student.lastName} - DOB: {student.dateOfBirth} - Grade: {student.grade}
            </li>
          ))}
        </ul>
        {/* TODO: Add the form here */}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
