from rest_framework import routers
from h4tcsacapp.views.contacts import ContactViewSet
from h4tcsacapp.views.faq import FAQViewSet
from h4tcsacapp.views.report_types import ReportTypeViewSet
from h4tcsacapp.views.resources import ResourceViewSet
from h4tcsacapp.views.lists import ListViewSet

router = routers.DefaultRouter()
router.register(r'faqs', FAQViewSet, basename="faq")
router.register(r'contacts', ContactViewSet, basename="contact")
router.register(r'resources', ResourceViewSet, basename="resource")
router.register(r'lists', ListViewSet, basename="list")
router.register(r'reporttypes', ReportTypeViewSet, basename="reporttype")
