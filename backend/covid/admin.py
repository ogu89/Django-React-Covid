from django.contrib import admin
from .models import Country, Contact

class CountryAdmin(admin.ModelAdmin):
    list_display = ['name']
# Register your models here.

class ContactAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'email', 'inquiry_txt', 'add_time')

admin.site.register(Country, CountryAdmin)

admin.site.register(Contact, ContactAdmin)


