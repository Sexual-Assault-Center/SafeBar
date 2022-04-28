from django.shortcuts import render
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.serializers import ResourceSerializer


class ResourceViews():
    def run(self, request, action="list"):
        action_func = getattr(self, action)
        return action_func(request)

    def create(self, request):
        pass

    def list(self, request):
        resources = Resource.objects.all()
        data = ResourceSerializer(resources, many=True).data
        print(data)
        return render(request, "resources/list.html", {'resources': data})

    def delete(self, request):
        pass

    def update(self, request):
        pass
