from django.forms import ValidationError
from h4tcsacapp.models.list import List
from h4tcsacapp.serializers import ListSerializer
from rest_framework.viewsets import ModelViewSet
from rest_framework.response import Response
from rest_framework import status



class ListViewSet(ModelViewSet):
  def create(self, request):
    try:
      list = List.objects.create(
        uid = request.data['uid'],
        name = request.data['name'] 
        )
      
      serializer = ListSerializer(list)
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    except ValidationError as ex:
      return Response({"reason": ex.message}, status=status.HTTP_400_BAD_REQUEST)
      