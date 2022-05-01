from h4tcsacapp.models.favorite import Favorite
from h4tcsacapp.serializers import FavoriteSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework.decorators import action


class FavoriteViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing Favorites
    """
    queryset = Favorite.objects.all()
    serializer_class = FavoriteSerializer
    http_method_names = ['get', 'post', 'delete']

    def retrieve(self, request, pk=None):
        favorites = Favorite.objects.filter(uid=pk)
        output = []
        for favorite in favorites:
            serialized = FavoriteSerializer(favorite).data
            output.append(serialized)
        return Response(output)
    
    @action(detail=False, methods=['get','delete'], url_path='by-uuid/(?P<uuid>[^/.]+)')
    def by_uuid(self, request, uuid):
        if(request.method == "GET"):
            return Response(FavoriteSerializer(Favorite.objects.get(uuid=uuid)).data)
        elif(request.method == "DELETE"):
            Favorite.objects.get(uuid=uuid).delete()
            return Response(True)
    
    @action(detail=False, methods=['post'], url_path='new-favorite/(?P<uid>[^/.]+)/(?P<bar_id>[^/.]+)')
    def new_favorite(self, request, uid, bar_id):
        favorite = Favorite(uid=uid, bar_id=bar_id)
        favorite.save()
        return Response(FavoriteSerializer(favorite).data)
