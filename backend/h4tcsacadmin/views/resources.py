from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from h4tcsacapp.models.resource import Resource
from h4tcsacapp.serializers import ResourceSerializer
from django.forms import ModelForm


class AuthorForm(ModelForm):
    class Meta:
        model = Resource
        fields = "__all__"


class ResourceViews():
    def run(self, request, action="list", uuid=None):
        action_func = getattr(self, action)
        return action_func(request, uuid)

    def update(self, request, uuid):
        resource = Resource.objects.get(pk=uuid)
        success = False
        if request.method == 'POST':
            form = AuthorForm(request.POST, instance=resource)
            if form.is_valid():
                form.save()
            success = True
        else:
            form = AuthorForm(instance=resource)

        return render(request, 'admin/update.html', {
            'form': form,
            'success': success,
            'name': "Resource",
            "update_url": "myadmin:resources-update",
            'uuid': uuid,
            "delete_url": "myadmin:resources-delete"})

    def list(self, request, success=False):
        resources = Resource.objects.all()
        success_delete = request.GET.get('success_delete', '')
        success_create = request.GET.get('success_create', '')
        print(success, "asdasdadasdadadasda")
        data = ResourceSerializer(resources, many=True).data
        return render(request, "admin/list.html", {
            'success_create': success_create,
            'success_delete': success_delete,
            'data': data,
            "headers": list(data[0].keys()),
            'name': "Resource",
            'create_url': 'myadmin:resources-create'
        })

    def delete(self, request, uuid):
        resource = get_object_or_404(Resource, pk=uuid)
        resource.delete()
        return HttpResponseRedirect("%s?%s" % (reverse('myadmin:resources-list'), "success_delete=True"))

    def create(self, request):
        success = False
        if request.method == 'POST':
            form = AuthorForm(request.POST)
            if form.is_valid():
                form.save()
            success = True
            return HttpResponseRedirect("%s?%s" % (reverse('myadmin:resources-list'), "success_create=True"))

        else:
            form = AuthorForm()

        return render(request, 'admin/create.html', {
            'form': form,
            'success': success,
            'name': "Resource",
            "update_url": "myadmin:resources-create",
        })
