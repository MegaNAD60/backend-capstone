import math
from datetime import date
#DJANGO IMPORTS
from django.contrib.auth.models import User, Group
from django.shortcuts import render, get_object_or_404
from django.core.paginator import Paginator, EmptyPage
from django.http import *

#REST FRAMEWORK IMPORTS
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status, generics, viewsets
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import permission_classes, throttle_classes
from rest_framework.throttling import AnonRateThrottle, UserRateThrottle

#local file imports
from .serializer import *


# Create your views here.
def home(request):
    return render(request, 'index.html')

#USERS
@api_view(['GET', 'POST'])
def user(request):
   if request.method == 'GET':
        users = User.objects.all()
        serialized_item = UserSerializer(users, many=True, context={'request': request})
        return Response(serialized_item.data, status.HTTP_200_OK)

   if request.method == "POST":
        serialized_item = UserSerializer(data=request.data)
        serialized_item.is_valid(raise_exception=True)
        serialized_item.save()
        return Response(status.HTTP_201_CREATED)

#USER DETAILS
@api_view()
def user_detail(request, pk):
     users = get_object_or_404(User, pk=pk)
     serialized_item = UserSerializer(users, context={'request': request})
     return Response(serialized_item.data, status.HTTP_200_OK)

#MENU ITEMS
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])

#GET ALL MENU ITEMS
def menuitem(request):
    if request.method == "GET":
         menu = Menu.objects.all()
         serialized_item = MenuSerializer(menu, many=True)
         return Response(serialized_item.data, status.HTTP_200_OK)

#POST MENU ITEMS
    if request.method == "POST":
          serialized_item = MenuSerializer(data=request.data)
          serialized_item.is_valid(raise_exception=True)
          serialized_item.save()
          return Response(status.HTTP_201_CREATED)


#SINGLE MENU ITEMS
@api_view(['GET', 'PUT', 'PATCH', 'DELETE'])
def single_item(request, pk):
     if request.method == 'GET':
          menu = get_object_or_404(Menu, pk=pk)
          serialized_item = MenuSerializer(menu)
          return Response(serialized_item.data, status.HTTP_200_OK)

#COMPLETE UPDATE OF MENU ITEMS
     if request.method == 'PUT':
          menu = get_object_or_404(Menu, pk=pk)
          serialized_item = MenuSerializer(menu, data=request.data)
          serialized_item.is_valid(raise_exception=True)
          serialized_item.save()
          return Response(status.HTTP_200_OK)

#PARTIAL UPDATE OF MENU ITEMS
     if request.method == 'PATCH':
          menu = get_object_or_404(Menu, pk=pk)
          serialized_item = MenuSerializer(menu, data=request.data, partial=True)
          serialized_item.is_valid(raise_exception=True)
          serialized_item.save()
          return Response(serialized_item.data, status.HTTP_200_OK)

#DELETE MENU ITEMS
     if request.method == 'DELETE':
          menu = get_object_or_404(Menu, pk=pk)
          menu.delete()
          return Response(status.HTTP_204_NO_CONTENT)

#BOOKING TABLES
class BookingViewSet(viewsets.ModelViewSet):
     queryset = Bookings.objects.all()
     serializer_class = BookingSerializer
     permission_classes = [IsAuthenticated]