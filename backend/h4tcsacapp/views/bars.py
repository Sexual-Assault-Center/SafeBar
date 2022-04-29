from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.rating import Rating
from h4tcsacapp.serializers import BarSerializer, RatingSerializer
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

    @action(methods=['get'], detail=False, url_path='highlight/(?P<uid>[^/.]+)')
    def highlight(self, request, uid):
        print(uid)
        ratings = Rating.objects.all()
        return JSONRenderer.render(RatingSerializer(ratings).data)

# Grab all bars
# Grab ratings by user
# Structure response by safe or other
# Join user ratings 
