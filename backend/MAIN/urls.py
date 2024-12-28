from django.conf import settings
from django.urls import path

from.views import TeacherViewList, TeacherDetail, CategoryViewList, AddCourseList,TeacherCourseList, ChapterLIstview, ChapterperCourseLIstview,AllCourseList,StudentViewRegisterList, CourseListView, StudentEnrollCourse,courseEnrollmentCourseLIstview, Student_login
from.import views

urlpatterns = [
    path('teacher/', TeacherViewList.as_view()),
    path('teacherLogin/', views.teacher_login),
    path('teacher_detail/<int:pk>/', TeacherDetail.as_view()),
    path('category/', CategoryViewList.as_view()),
    path('addCourse/', AddCourseList.as_view()),
    path('chapterlist/', ChapterLIstview.as_view()),
    path('chapterpertcular/<int:course_id>/', ChapterperCourseLIstview.as_view()),
    path('allCourseList/', AllCourseList.as_view()),
    path('CourseListView/<int:pk>/', CourseListView.as_view()),
    path('courseEnrollmentCourseLIstview/<int:course_id>/', courseEnrollmentCourseLIstview.as_view()),
    # path('techCourseView/<slug:techs>/', TechCourseView.as_view()),
    
    path('teachercourse/<int:teacher_id>/', TeacherCourseList.as_view()),
    
    # STUDENT REGISTER
    path('studentLogin/', views.Student_login),
    path('studentViewRegisterList/', StudentViewRegisterList.as_view()),
    path('studentEnrollCourse/', StudentEnrollCourse.as_view()),
    path('fetch_student_status/<int:course_id>/<int:student_id>/', views.fetch_student_status),
    
]
