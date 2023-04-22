from django.db import models

# Create your models here.
class Bookings(models.Model):
    name = models.CharField(max_length=255)
    guest_number = models.IntegerField()
    date = models.DateTimeField()

    def __str__(self):
        return self.name

class Menu(models.Model):
    title = models.CharField(max_length=200)
    price = models.IntegerField(null=False)
    inventory = models.IntegerField()

    def __str__(self):
        return f'{self.title} : {str(self.price)}'
