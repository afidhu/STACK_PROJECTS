from django.db import models
from rest_framework import serializers
# Create your models here.

# teacher register
class Teacher(models.Model):
    full_name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password =models.CharField(max_length=100)
    qualification=models.CharField(max_length=100)
    phone=models.IntegerField()
    skills=models.CharField(max_length=100)
    
    def __str__(self):
        return self.full_name 
    
    def teacher_skills(self):
        all_skill=self.skills.split(',')
        return all_skill
    
    class Meta:
        verbose_name = 'Tearcher'
        verbose_name_plural = '1.Tearchers'


class CourseCategory(models.Model):
    title=models.CharField(max_length=100)
    description=models.TextField()
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'CourseCategory'
        verbose_name_plural = '2.CourseCategorys'
 
  

class Course(models.Model):
    category=models.ForeignKey(CourseCategory, on_delete=models.CASCADE, default='1')
    teacher=models.ForeignKey(Teacher, on_delete=models.CASCADE, related_name='teacher_course')
    title=models.CharField(max_length=100)
    description=models.TextField()
    tech=models.TextField()
    image =models.ImageField(upload_to='image/')

    def __str__(self):
        return self.title
   
    class Meta:
        verbose_name = 'Course'
        verbose_name_plural = '3.Courses'
    # def relatedvideo(self): #here find related video, then add to serizer
    #     related_video=Course.objects.filter(tech__icontains=self.tech).exclude(id=self.id) 
    #     return serializers.Serializer('json',related_video)

    def tech_lists(self):
        tech_list=self.tech.split(',')
        return tech_list
    
    def total_enroll(self):
        total_enroll_student=StudentCourseEnrollment.objects.filter(course=self).count()
        return total_enroll_student
    
# chaper
class Addchapter(models.Model):
    Course=models.ForeignKey(Course, on_delete=models.CASCADE, default='1', related_name='course_chapter')
    title=models.CharField(max_length=100)
    description=models.TextField()
    tech=models.TextField()
    video =models.ImageField(upload_to='video_chapter/')
    
    def __str__(self):
        return self.title

# student register5
class Student(models.Model):
    full_name=models.CharField(max_length=100)
    email=models.EmailField(max_length=100)
    password=models.CharField(max_length=100)
    username=models.CharField(max_length=100)
    interest=models.TextField()
    
    def __str__(self):
        return self.full_name
    
    class Meta:
        verbose_name = 'Student'
        verbose_name_plural = '4.Students'
        
        
        
# student course enrollment

class StudentCourseEnrollment(models.Model):
    course=models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrolled_course')
    student=models.ForeignKey(Student, on_delete=models.CASCADE, related_name='enrolled_student') 
    enrolled_tims=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.student.full_name
    