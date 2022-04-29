from h4tcsacapp.models.landing_content import LandingContent
from h4tcsacapp.serializers import LandingContentSerializer
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response


class LandingContentViewSet(ViewSet):
    """
    A simple ViewSet for viewing Contacts
    """

    def list(self, request):
        queryset = LandingContent.objects.all()
        serializer = LandingContentSerializer(queryset, many=True)
        try:
            response = Response(serializer.data[0])
        except IndexError:
            response = Response({})
        return response
