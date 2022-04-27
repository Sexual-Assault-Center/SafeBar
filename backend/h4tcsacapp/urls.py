from rest_framework import routers
from h4tcsacapp.views.contacts import ContactViewSet
from h4tcsacapp.views.faq import FAQViewSet
from h4tcsacapp.views.resources import ResourceViewSet

router = routers.DefaultRouter()
router.register(r'faqs', FAQViewSet, basename="faq")
router.register(r'contacts', ContactViewSet, basename="contact")
router.register(r'resources', ResourceViewSet, basename="resource")
