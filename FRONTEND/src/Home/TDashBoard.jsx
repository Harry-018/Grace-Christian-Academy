import { useState, useEffect } from 'react'
import SectionCard from "../Components/TeacherDashboard/SectionCard"
import StudentTable from '../Components/TeacherDashboard/StudentTable';

const STUDENTS = [
  {
    id: 1,
    sectionId: "sampaguita",
    lrn: "1204567891011",
    fullName: "Rosaline Romasanta",
    gender: "Female",
    birthdate: "10/20/2021",
    age: 4,
  },
  {
    id: 2,
    sectionId: "gumamela",
    lrn: "1345698721234",
    fullName: "Jake Macasinag",
    gender: "Male",
    birthdate: "09/15/2022",
    age: 3,
  },
  {
    id: 3,
    sectionId: "waling-waling",
    lrn: "1232173271321",
    fullName: "Harold Mendez",
    gender: "Male",
    birthdate: "09/25/2022",
    age: 3,
  },
];

const MOCK_API = {
  getSections: () =>
    new Promise((resolve) =>
      setTimeout(() => resolve([
        { id: "sampaguita", name: "Sampaguita", level: "Nursery" },
        { id: "gumamela", name: "Gumamela", level: "Nursery" },
        { id: "waling-waling", name: "Waling - Waling", level: "Nursery" },
      ]), 500)
    ),
  getStudents: (sectionId) =>
    new Promise((resolve) =>
      setTimeout(() => resolve(
        STUDENTS.filter((student) => student.sectionId === sectionId)
      ), 500)
    ),
};

const TDashBoard = () => {
  const [sections, setSections] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    MOCK_API.getSections()
      .then((response) => {
        setSections(response);
        setSelectedId(response[0].id);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (!selectedId) return;

    MOCK_API.getStudents(selectedId)
      .then((response) => {
        setStudents(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-[#ebe9e4] px-5 py-6 font-[Poppins] cursor-default">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">

      <SectionCard 
        sections={sections}
        selectedId={selectedId}
        onSelect={setSelectedId}
      />

      <StudentTable 
        students={students} 
      />

      </div>
    </div>
  )
}

export default TDashBoard;
