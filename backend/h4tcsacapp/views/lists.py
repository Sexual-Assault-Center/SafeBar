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
      
  def update(self, request, pk=None):
    try:
      list = List.objects.get(pk=pk)
      list.uid = request.data['uid']
      list.name = request.data['name']
      list.save()
      return Response(None, status=status.HTTP_204_NO_CONTENT)
    except ValidationError as ex:
            return Response({'message': ex.args[0]}, status=status.HTTP_400_BAD_REQUEST)
    except List.DoesNotExist as ex:
            return Response({'message': ex.args[0]}, status=status.HTTP_404_NOT_FOUND)
          
  def list(self, request):
    list = List.objects.all()
   
    serializer = ListSerializer(
      list, many=True, context={'request': request}
      )
    return Response(serializer.data)
