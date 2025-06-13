import Homepage from "@/components/main/Homepage";
import CoursePage from "@/components/main/StudentAllCourse";
import CourseLandingPage from "@/components/main/CouseDetail";
import StudentDashboard from "@/components/main/StudentDashboard";
import StudentCourses from "@/components/main/StudentCourses";
import Wishlist from "@/components/main/StudentWishtlist";
import StudentProfile from "@/components/main/StudentProfile";
import StudentReviews from "@/components/main/StudentReview";
import QuizAttemptsDashboard from "@/components/main/StudentQuiz";
import Order from "@/components/main/StudentOrder";

import InstructorDashboard from "@/components/instructor/InstructorDashboard";
export default function Home() {
  return (
    <div>
      <Homepage/>
      <CoursePage/>
      <CourseLandingPage/>
      {/* <StudentDashboard/> */}
      <StudentProfile/>
      {/* <StudentCourses/>
      <Wishlist/>
      <StudentReviews/>
      <QuizAttemptsDashboard/>
      <Order/> */}

    <InstructorDashboard/>
    </div>
  );
}