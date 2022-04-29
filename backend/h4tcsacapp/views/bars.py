from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.bar_report import BarReport
from h4tcsacapp.serializers import BarSerializer
from h4tcsacapp.serializers import BarReportSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer


class BarViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing Bars
    """
    queryset = Bar.objects.all()
    serializer_class = BarSerializer
    http_method_names = ['get']

    def list(self, request):
        bars = Bar.objects.filter(is_approved=True)
        barOutput = []
        for bar in bars:
            serializedBar = BarSerializer(bar).data
            serializedBar["bar_report_count"] = BarReport.objects.filter(bar_id=bar.uuid).count()
            barOutput.append(serializedBar)

        return Response(barOutput)