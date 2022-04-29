from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.serializers import BarReportSerializer
from rest_framework.viewsets import ModelViewSet


class BarReportViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing and creating Bar Reports
    """
    queryset = BarReport.objects.all()
    serializer_class = BarReportSerializer
    http_method_names = ['get', 'post']
