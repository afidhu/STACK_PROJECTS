from django.contrib import admin
from.models import Student, Course,CourseCategory, Teacher, Addchapter,CourseRating, StudentCourseEnrollment
# Register your models here.

admin.site.register(Student)
admin.site.register(Course)
admin.site.register(CourseCategory)
admin.site.register(Teacher)
admin.site.register(Addchapter)
admin.site.register(StudentCourseEnrollment)
admin.site.register(CourseRating)
