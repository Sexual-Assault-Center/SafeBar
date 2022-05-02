from django.urls import path

from .views import submit_bar, success_redirect, error_redirect, check_bars_for_recert_status, recertify_bar, recertify_succcess_redirect

urlpatterns = [
    path('', submit_bar, name='submit-bar'),
    path('success/', success_redirect, name='success'),
    path('error/', error_redirect, name='error'),
    path('check-bars/', check_bars_for_recert_status, name='check-bars'),
    path('recertify/<str:id>/', recertify_bar, name='recertify-bar'),
    path('recertify/<str:id>/success/', recertify_succcess_redirect, name='recertify-success')
]
