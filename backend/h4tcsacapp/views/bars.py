import logging
from h4tcsacapp.models.bar import Bar
from h4tcsacapp.models.favorite import Favorite
from h4tcsacapp.serializers import BarSerializer
from h4tcsacapp.models.bar_report import BarReport
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action


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
            barOutput.append(serializedBar)

        return Response(barOutput)

    @action(detail=False, methods=['get'], url_path='by-uid/(?P<uid>[^/.]+)')
    def by_uid(self, request, uid):
        bars = Bar.objects.filter(is_approved=True)
        barOutput = []
        for bar in bars:
            serializedBar = BarSerializer(bar).data
            serializedBar["favoriteId"] = ""
            favorited = Favorite.objects.filter(uid=uid).filter(bar=bar)
            if(favorited):
                serializedBar["favoriteId"] = favorited.first().uuid            
            barOutput.append(serializedBar)

        return Response(barOutput)
