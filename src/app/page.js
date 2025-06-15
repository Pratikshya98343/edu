import Homepage from "@/components/main/Homepage";
import CoursePage from "@/components/main/StudentAllCourse";
import CourseLandingPage from "@/components/main/CouseDetail";
import StudentProfile from "@/components/main/StudentProfile";
import InstructorDashboard from "@/components/instructor/InstructorDashboard";

export default function Home() {
  return (
    <div>
      <Homepage />
      <CoursePage />
      <CourseLandingPage />
      <StudentProfile />
      <InstructorDashboard />
    </div>
  );
}
