from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import path, reverse
from django.contrib import messages


class CustomDjangoViews():

    def __init__(self, model, serializer, base_path, admin_view, title, form):
        self.base_path = base_path
        self.admin_view = admin_view
        self.model = model
        self.serializer = serializer
        self.title = title
        self.form = form

    def urls(self):
        urls = [
            path(
                '%s/' % self.base_path,
                self.admin_view(self.list),
                name="%s-list" % self.base_path
            ),
            path(
                '%s/create/' % self.base_path,
                self.admin_view(self.create),
                name="%s-create" % self.base_path
            ),
            path(
                '%s/delete/<slug:uuid>' % self.base_path,
                self.admin_view(self.delete),
                name="%s-delete" % self.base_path
            ),
            path(
                '%s/update/<slug:uuid>' % self.base_path,
                self.admin_view(self.update),
                name="%s-update" % self.base_path
            )
        ]
        return urls

    def list(self, request):
        query_set = self.model.objects.all()
        data = self.serializer(query_set, many=True).data
        return render(request, "admin/list.html", {
            'data': data,
            "headers": self.serializer.Meta.fields,
            'name': self.title,
            'create_url': 'myadmin:%s-create' % self.base_path,
            "header_text": "All %ss" % self.title,
            "links": True
        })

    def update(self, request, uuid):
        model_instance = self.model.objects.get(pk=uuid)
        if request.method == 'POST':
            serializer = self.serializer(model_instance, data=request.POST)
            if serializer.is_valid():
                serializer.save()
                messages.success(request, '%s updated!' % self.title)
            else:
                messages.error(request, '%s failed to update. Try again!' % self.title)
                form = self.form(request.POST, instance=model_instance)

        form = self.form(instance=model_instance)

        return render(request, 'admin/update.html', {
            'form': form,
            'name': self.title,
            "update_url": "myadmin:%s-update" % self.base_path,
            'uuid': uuid,
            "delete_url": "myadmin:%s-delete" % self.base_path,
            "header_text": "Updating %s" % self.title
        })

    def delete(self, request, uuid):
        resource = get_object_or_404(self.model, pk=uuid)
        resource.delete()
        messages.error(request, '%s failed to be deleted! Try deleting it again!' % self.title)

        return HttpResponseRedirect(reverse('myadmin:%s-list' % self.base_path))

    def create(self, request):
        if request.method == 'POST':
            serializer = self.serializer(data=request.POST)
            if serializer.is_valid():
                serializer.save()
                messages.success(request, '%s Created!' % self.title)
                return HttpResponseRedirect(reverse('myadmin:%s-list' % self.base_path))
            else:
                messages.error(request, '%s failed to be created! Try submitting again!' % self.title)
                form = self.form(request.POST)
        else:
            form = self.form()

        return render(request, 'admin/create.html', {
            'form': form,
            'name': self.title,
            "update_url": "myadmin:%s-create" % self.base_path,
            "header_text": "Creating %s" % self.title
        })


class CustomDjangoListViews():

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
            )
        ]
        return urls

    def list(self, request):
        query_set = self.model.objects.all()
        data = self.serializer(query_set, many=True).data
        return render(request, "admin/list.html", {
            'data': data,
            "headers": self.serializer.Meta.fields,
            'name': self.title,
            "header_text": "All %ss" % self.title,
            "links": False
        })
