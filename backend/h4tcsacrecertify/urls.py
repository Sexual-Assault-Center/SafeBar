from django.urls import path

from .views import recertify_bar, success_redirect

urlpatterns = [
    path('', recertify_bar, name='submitBar'),
    path('success/', success_redirect, name='success')
]