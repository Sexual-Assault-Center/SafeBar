from h4tcsacapp.models.faq import FAQ
from h4tcsacapp.serializers import FAQSerializer
from rest_framework.viewsets import ModelViewSet


class FAQViewSet(ModelViewSet):
    """
    A simple ViewSet for viewing FAQ's
    """
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
    http_method_names = ['get']
