from h4tcsacapp.models.favorite import Favorite
from h4tcsacapp.serializers import FavoriteSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response


class FavoriteViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing Favorites
    """
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
    http_method_names = ['get', 'post']

    def retrieve(self, request, pk=None):
        favorites = Favorite.objects.filter(uid=pk)
        output = []
        for favorite in favorites:
            serialized = FavoriteSerializer(favorite).data
            output.append(serialized)
        return Response(output)