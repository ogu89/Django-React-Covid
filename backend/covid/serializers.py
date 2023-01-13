from dataclasses import fields
from pyexpat import model
from rest_framework import serializers
from django_countries.serializer_fields import CountryField
from .models import Contact

# get country data
class CountrySerializer(serializers.Serializer):
    country = CountryField()
    
class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields=['id','full_name', 'email', 'inquiry_txt']