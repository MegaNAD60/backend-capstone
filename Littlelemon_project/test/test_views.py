from django.test import TestCase
from restuarant.models import *
from restuarant.serializer import *


class MenuViewTest(TestCase):
    def setUp(self):
        Menu(title='Cake', price=15, inventory=50).save()
        Menu(title='Snack', price=6, inventory=100).save()

    def test_getall(self):
        items = Menu.objects.get()
        serializer = MenuSerializer(items, many=True)
        self.assertEqual(serializer.data)
