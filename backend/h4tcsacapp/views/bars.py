from h4tcsacapp.models.bar import Bar
from h4tcsacapp.serializers import BarSerializer
from rest_framework.viewsets import ModelViewSet


class BarViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing Bars
    """
    queryset = Bar.objects.all()
    serializer_class = BarSerializer
    http_method_names = ['get']
