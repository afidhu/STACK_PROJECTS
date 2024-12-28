import logo from './logo.svg';
import './App.css';
import Home from './component/home';
import Nav from './component/nav';
import Footer from './component/footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/about';
import Coursedetail from './component/coursedetail';

import Login from './component/user/login';
import Register from './component/user/register';
import Userdashboard from './component/user/userdashboard';
import MyCourses from './component/user/myCourses';
import Profileseting from './component/user/profileseting';
import Recommendedcourse from './component/user/recommendedcourse';
import Favorritecousrse from './component/user/favorritecousrse';
import Changepassword from './component/user/changepassword';

// teacher
import TeacherLogin from './component/teacher/teacherlogin';
import TeacherRegister from './component/teacher/teacherregister';
import Teacherdashboard from './component/teacher/teacherdashboard'
import TeacherMyCourses from './component/teacher/teachermyCourses';
import TeacherProfileseting from './component/teacher/teacherprofileseting';
import TeacherRecommendedcourse from './component/teacher/teacherrecommendedcourse';
import TeacherFavorritecousrse from './component/teacher/teacherfavorritecousrse';
import TeacherChangepassword from './component/teacher/teacherchangepassword';
import Addcourse from './component/teacher/addcourse';
import Myuser from './component/teacher/myuser';
import Teacherdetail from './component/teacher/teacherdetail';
import Allcourses from './component/allcourses';
import Popularcourse from './component/popularcourse';
import Popularteacher from './component/popularteacher';
import Categorycourse from './component/categorycourse';
import Teacherlogout from './component/teacher/teacherlogout'

import Addchapter from './component/teacher/addchapter';
import CourseChapter from './component/teacher/courseChapter';
import Logout from './component/user/logout';
import StudentEnroll from './component/student_enroll';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Nav/>
        <Routes>

        {/* list page */}
          <Route exact path='/' element={<Home/>}  ></Route>
          <Route exact path='/popularteacher/' element={<Popularteacher/>}  ></Route>
          <Route exact path='/about/' element={<About/>}  ></Route>
          <Route exact path='/categorycourse/:category_id/' element={<Categorycourse/>}  ></Route>
          <Route exact path='/popular/' element={<Popularcourse/>}  ></Route>
          <Route exact path='/allcourse/' element={<Allcourses/>}  ></Route>
          <Route exact path='/coursedetail/:id_course/' element={<Coursedetail/>}  ></Route>
          <Route exact path='/courseChapter/:courseChapter_id/' element={<CourseChapter/>}  ></Route>


            {/* user/ student */}
          <Route exact path='/login/' element={<Login/>}  ></Route>
          <Route exact path='/logout/' element={<Logout/>}  ></Route>
          <Route exact path='/register/' element={<Register/>}  ></Route>
          <Route exact path='/mycourses/' element={<MyCourses/>}  ></Route>
          <Route exact path='/profilesetting/' element={<Profileseting/>}  ></Route>
          <Route exact path='/recommened/' element={<Recommendedcourse/>}  ></Route>
          <Route exact path='/favoritecourse/' element={<Favorritecousrse/>}  ></Route>
          <Route exact path='/changepsw/' element={<Changepassword/>}  ></Route>
          <Route exact path='/student-dashboard/' element={<Userdashboard/>}  ></Route>


            {/* tearcher */}
          <Route exact path='/teacher-logout/' element={<Teacherlogout/>}  ></Route>
          <Route exact path='/teacher-login/' element={<TeacherLogin/>}  ></Route>
          <Route exact path='/teacher-register/' element={<TeacherRegister/>}  ></Route>
          <Route exact path='/teacher-mycourses/' element={<TeacherMyCourses/>}  ></Route>
          <Route exact path='/teacher-profilesetting/' element={<TeacherProfileseting/>}  ></Route>
          <Route exact path='/teacher-recommened/' element={<TeacherRecommendedcourse/>}  ></Route>
          <Route exact path='/teacher-favoritecourse/' element={<TeacherFavorritecousrse/>}  ></Route>
          <Route exact path='/teacher-changepsw/' element={<TeacherChangepassword/>}  ></Route>
          <Route exact path='/teacher-addcourse/' element={<Addcourse/>}  ></Route>
          <Route exact path='/teacher-myuser/' element={<Myuser/>}  ></Route>
          <Route exact path='/teacherdetail/:teacher_id/' element={<Teacherdetail/>}  ></Route>
          <Route exact path='/teacher-dashboard/' element={<Teacherdashboard/>}  ></Route>

          <Route exact path='/addchapter/:course_id/' element={<Addchapter/>}  ></Route>
          <Route exact path='/enroll_student/:course_id/' element={<StudentEnroll/>}  ></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
