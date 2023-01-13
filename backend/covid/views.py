from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import generics

from .serializers import CountrySerializer,ContactSerializer
from .models import Country, Contact

# Create your views here.

class CountryView(viewsets.ModelViewSet):
    serializer_class = CountrySerializer
    queryset = Country.objects.all()
    
class ContactList(generics.ListCreateAPIView):
    queryset=Contact.objects.all()
    serializer_class = ContactSerializer

# class CountryView(APIView):
#     def get(self, request, format=None):
#         country=Country.objects.all()
#         serializer=CountrySerializer(country, many=True)
#         return Response(serializer.data, request)
    
    
#     serializer_class = CountrySerializer
#     queryset = Country.objects.all()


    
# class ContactList(CreateView):
#     queryset=Contact.objects.all()
#     serializer_class = ContactSerializer