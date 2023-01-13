from django.db import models
from django_countries.fields import CountryField
from django.core.mail import send_mail

import environ
# Initialise environment variables
env = environ.Env()
environ.Env.read_env()

# Create your models here.
class Country(models.Model):
    name = CountryField()
    
class Contact(models.Model):
    full_name=models.CharField(max_length=200)
    email=models.EmailField()
    inquiry_txt=models.TextField()
    add_time=models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.inquiry_txt
        
    def save(self, *args, **kwargs):
        # send email
        send_mail(
            'Covid Inquiry',
            'Here is the message.',
            env('YOUR_EMAIL'),
            [env('TO_EMAIL')],
            fail_silently=False,
            html_message=f'<p>Name: {self.full_name}</p><p>Email: {self.email}</p><p>Inquiry: {self.inquiry_txt}</p>'
        )
        return super(Contact,self).save(*args, **kwargs)