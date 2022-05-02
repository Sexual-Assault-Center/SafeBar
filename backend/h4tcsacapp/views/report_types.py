from h4tcsacapp.models.report_type import ReportType
from h4tcsacapp.serializers import ReportTypeSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action


class ReportTypeViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing Contacts
    """
    queryset = ReportType.objects.all()
    serializer_class = ReportTypeSerializer
    http_method_names = ['get']

    @action(detail=False, methods=['get'])
    def negative(self, request):
        report_types = ReportType.objects.filter(is_positive=False)
        data = ReportTypeSerializer(report_types, many=True).data
        return Response(data)

    @action(detail=False, methods=['get'])
    def positive(self, request):
        report_types = ReportType.objects.filter(is_positive=True)
        data = ReportTypeSerializer(report_types, many=True).data
        return Response(data)
