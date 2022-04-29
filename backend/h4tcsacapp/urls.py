from rest_framework import routers
from h4tcsacapp.views.contacts import ContactViewSet
from h4tcsacapp.views.faq import FAQViewSet
from h4tcsacapp.views.landing_content import LandingContentViewSet
from h4tcsacapp.views.report_types import ReportTypeViewSet
from h4tcsacapp.views.resources import ResourceViewSet
from h4tcsacapp.views.bars import BarViewSet
from h4tcsacapp.views.bar_report import BarReportViewSet
from h4tcsacapp.views.favorite import FavoriteViewSet

router = routers.DefaultRouter()
router.register(r'faqs', FAQViewSet, basename="faq")
router.register(r'contacts', ContactViewSet, basename="contact")
router.register(r'resources', ResourceViewSet, basename="resource")
router.register(r'reporttypes', ReportTypeViewSet, basename="reporttype")
router.register(r'landingcontent', LandingContentViewSet, basename="landingcontent")
router.register(r'bars', BarViewSet, basename="bar")
router.register(r'bar-report', BarReportViewSet, basename="barreport")
router.register(r'favorite', FavoriteViewSet, basename="favorite")