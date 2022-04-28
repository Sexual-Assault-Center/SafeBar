from django.urls import path

from .views import recertify_bar, success_redirect, error_redirect

urlpatterns = [
    path('', recertify_bar, name='submitBar'),
    path('success/', success_redirect, name='success'),
    path('error/', error_redirect, name='error')
]