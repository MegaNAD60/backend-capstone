from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),

#USER PATH
    path('user/', views.user, name='user'),
    path('user/<int:pk>', views.user_detail, name='user-detail'),

#MENU PATH
    path('menu', views.menuitem, name='menu'),
    path('menu/<int:pk>', views.single_item, name='single-item')
]