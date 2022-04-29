from h4tcsacapp.models.landing_content import LandingContent
from h4tcsacapp.serializers import LandingContentSerializer
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response


class LandingContentViewSet(ViewSet):
    """
    A simple ViewSet for viewing Contacts
    """

    def list(self, request):
        try:
            queryset = LandingContent.objects.all()[0]
            serializer = LandingContentSerializer(queryset)
            response = Response(serializer.data)
        except IndexError:
            response = Response({})
        return response
