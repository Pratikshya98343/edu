import Homepage from "@/components/main/Homepage";
import CoursePage from "@/components/main/StudentCourse";
import CourseLandingPage from "@/components/main/CouseDetail";
import StudentDashboard from "@/components/main/StudentDashboard";
export default function Home() {
  return (
    <div>
      <Homepage/>
      <CoursePage/>
      <CourseLandingPage/>
      <StudentDashboard/>
    </div>
  );
}