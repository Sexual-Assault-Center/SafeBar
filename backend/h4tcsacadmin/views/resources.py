from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import path, reverse
from h4tcsacapp.models.resource import Resource
from django.forms import ModelForm


class AuthorForm(ModelForm):
    class Meta:
        model = Resource
        fields = "__all__"


class CustomDjangoViews():

    def __init__(self, model, serializer, base_path, admin_view, title):
        self.base_path = base_path
        self.admin_view = admin_view
        self.model = model
        self.serializer = serializer
        self.title = title

    def urls(self):
        urls = [
            path(
                r'%s/' % self.base_path,
                self.admin_view(self.list),
                name="%s-list" % self.base_path
            ),
            path(
                r'%s/create/' % self.base_path,
                self.admin_view(self.create),
                name="%s-create" % self.base_path
            ),
            path(
                r'%s/delete/<slug:uuid>' % self.base_path,
                self.admin_view(self.delete),
                name="%s-delete" % self.base_path
            ),
            path(
                r'%s/update/<slug:uuid>' % self.base_path,
                self.admin_view(self.update),
                name="%s-update" % self.base_path
            )
        ]
        return urls

    def list(self, request, success=False):
        query_set = self.model.objects.all()
        success_delete = request.GET.get('success_delete', '')
        success_create = request.GET.get('success_create', '')
        data = self.serializer(query_set, many=True).data
        return render(request, "admin/list.html", {
            'success_create': success_create,
            'success_delete': success_delete,
            'data': data,
            "headers": list(data[0].keys()),
            'name': self.title,
            'create_url': 'myadmin:%s-create' % self.base_path,
            "header_text": "All %s" % self.title
        })

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
            "delete_url": "myadmin:resources-delete",
            "header_text": "Updating Resource"
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
            "header_text": "Creating Resource"

        })


class ResourceViews(CustomDjangoViews):
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
            "delete_url": "myadmin:resources-delete",
            "header_text": "Updating Resource"
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
            "header_text": "Creating Resource"

        })
