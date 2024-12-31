from django.shortcuts import render
from.serializers import TeacherSerializer, CategorySerializer, CourseRatingSerializer, AddCourseSerializer, AddChapterSerializer, AllCourseSerializer,StudentSerializer, CourseSerializer, StudentCourseEnrollmentSerilizer
from rest_framework import generics, viewsets
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from.models import Teacher, CourseCategory, CourseRating, Course, Addchapter, Student, StudentCourseEnrollment

# Create your views here.
# here full teacher register
class TeacherViewList(generics.ListCreateAPIView):
    permission_classs=[permissions.IsAuthenticated]
    queryset=Teacher.objects.all()
    serializer_class=TeacherSerializer
    
    
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Teacher.objects.all()
    serializer_class=TeacherSerializer
    
    
class CategoryViewList(generics.ListCreateAPIView):
    queryset =CourseCategory.objects.all()
    serializer_class =CategorySerializer
    
    
    
class AddCourseList(generics.ListCreateAPIView):
    queryset =Course.objects.all()
    serializer_class =AddCourseSerializer
    

    
class AllCourseList(generics.ListCreateAPIView):
    queryset =Course.objects.all()[:9]
    serializer_class =AllCourseSerializer




class CourseListView(generics.RetrieveAPIView):
    queryset =Course.objects.all()
    serializer_class =CourseSerializer

# get tech by slug
# class TechCourseView(generics.RetrieveAPIView):
#     serializer_class =CourseSerializer
#     def get_queryset(self):
#         cht=self.kwargs['techs']
#         per_tech=Course.objects.get(tech__icontains=cht)
#         return Course.objects.filter(techs=per_tech)

    
class TeacherCourseList(generics.ListAPIView):
    serializer_class = AddCourseSerializer
    
    def get_queryset(self):
        teacher_id=self.kwargs['teacher_id']
        teacher=Teacher.objects.get(pk=teacher_id)
        return Course.objects.filter(teacher=teacher)
    
    
    
    
class ChapterLIstview(generics.ListCreateAPIView):
    queryset=Addchapter.objects.all()
    serializer_class=AddChapterSerializer
    
  
  
    
    
    
class ChapterperCourseLIstview(generics.ListAPIView):
    serializer_class=AddChapterSerializer
    
    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course=Course.objects.get(pk=course_id)
        return Addchapter.objects.filter(Course=course)
  
  
  
  
# STUDENT REGISTERATION
class StudentViewRegisterList(generics.ListCreateAPIView):
    queryset=Student.objects.all()
    serializer_class=StudentSerializer
  
  
  
# student enrollemenet
class StudentEnrollCourse(generics.ListCreateAPIView):
    queryset=StudentCourseEnrollment.objects.all()
    serializer_class=StudentCourseEnrollmentSerilizer
  
 
 
  
from django.shortcuts import get_object_or_404
    
    # enroll status
def fetch_student_status(request, course_id, student_id):
    # Retrieve student and course objects, handling missing data
    student = get_object_or_404(Student, pk=student_id)
    course = get_object_or_404(Course, pk=course_id)
    enroll_status = StudentCourseEnrollment.objects.filter(course=course, student=student).exists()
    
    return JsonResponse({'bool': enroll_status})


# get enrolled student
class courseEnrollmentCourseLIstview(generics.ListAPIView):
    queryset=StudentCourseEnrollment.objects.all()
    serializer_class=StudentCourseEnrollmentSerilizer
    
    def get_queryset(self):
        course_id=self.kwargs['course_id']
        course=Course.objects.get(pk=course_id)
        return StudentCourseEnrollment.objects.filter(course=course)
  
  
  

#  course rating
class CourseRatingView(generics.ListCreateAPIView):
    queryset =CourseRating.objects.all()
    serializer_class =CourseRatingSerializer

    # def get_queryset(self):
    #     courseId=self.kwargs['course_id']
    #     course=Course.objects.get(pk=courseId)
    #     return CourseRating.objects.filter(course=course)
  
    
# here full teacher login

from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse, HttpResponse

@csrf_exempt
def teacher_login(request):
    email=request.POST['email']
    password=request.POST['password']
    
    try:
        teacherData=Teacher.objects.get(email=email, password=password)
    except Teacher.DoesNotExist:
        teacherData=None   
    if teacherData:
        return JsonResponse({'bool':True, 'teacher_id':teacherData.id, 'sirname':teacherData.full_name})
    else:
        return JsonResponse({'bool':False})

# student login
@csrf_exempt
def Student_login(request):
    email=request.POST['email']
    password=request.POST['password']
    
    try:
        studentData=Student.objects.get(email=email, password=password)
    except Student.DoesNotExist:
        studentData=None   
    if studentData:
        return JsonResponse({'bool':True, 'student_id':studentData.id, 'name':studentData.full_name})
    else:
        return JsonResponse({'bool':False})