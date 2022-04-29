from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.serializers import ReportTypeSerializer
from rest_framework.viewsets import ModelViewSet


class ReportTypeViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing Contacts
    """
    queryset = ReportType.objects.all()
    serializer_class = ReportTypeSerializer
    http_method_names = ['get']
