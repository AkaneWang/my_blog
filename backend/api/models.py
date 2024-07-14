from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinLengthValidator


class Post(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField(validators=[MinLengthValidator(10)])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    