from h4tcsacapp.models.resource import Resource
from h4tcsacapp.serializers import ResourceSerializer
from rest_framework.viewsets import ModelViewSet


class ResourceViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing resoures
    """
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    http_method_names = ['get']
