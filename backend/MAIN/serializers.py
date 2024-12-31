from rest_framework import serializers
from.models import Student, Course, CourseCategory, Teacher, Addchapter,CourseRating ,StudentCourseEnrollment

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model=Teacher
        fields=["id","full_name","email", "password","qualification","phone","skills", "teacher_course","teacher_skills"]
        depth=1
        
class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        fields='__all__'
        
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model =CourseCategory
        fields= "__all__"
        
class AddCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model =Course
        fields= ["id","category","teacher", "title","description","tech","image", "course_chapter","tech_lists","total_enroll"]
        
class AllCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model =Course
        fields= "__all__"

        
class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model =Course
        fields= ["id","category","teacher", "title","description","tech","image", "course_chapter","tech_lists","total_enroll"]
        depth=1

        
class AddChapterSerializer(serializers.ModelSerializer):
    class Meta:
        model =Addchapter
        fields= "__all__"
        

class StudentCourseEnrollmentSerilizer(serializers.ModelSerializer):
    class Meta:
        model =StudentCourseEnrollment
        fields= "__all__"
        depth=1


class CourseRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model=CourseRating
        fields="__all__"
        # depth=1