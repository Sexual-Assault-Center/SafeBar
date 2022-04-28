from django.shortcuts import render
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.serializers import ResourceSerializer


class ResourceViews():
    def run(self, request, action="list", uuid=None):
        action_func = getattr(self, action)
        return action_func(request, uuid)

    def create(self, request, uuid):
        resources = Resource.objects.all()
        data = ResourceSerializer(resources, many=True).data
        return render(request, "admin/list.html", {'data': data, "headers": list(data[0].keys())})

    def list(self, request, uuid):
        resources = Resource.objects.all()
        data = ResourceSerializer(resources, many=True).data
        return render(request, "admin/list.html", {'data': data, "headers": list(data[0].keys())})

    def delete(self, request, uuid):
        pass

    def update(self, request, uuid):
        pass
