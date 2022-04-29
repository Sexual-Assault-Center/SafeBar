from django.http import HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import path, reverse


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

    def list(self, request):
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
            "header_text": "All %ss" % self.title
        })

    def update(self, request, uuid):
        model_instance = self.model.objects.get(pk=uuid)
        success = False
        if request.method == 'POST':
            form = self.form(request.POST, instance=model_instance)
            if form.is_valid():
                form.save()
            success = True
        else:
            form = self.form(instance=model_instance)

        return render(request, 'admin/update.html', {
            'form': form,
            'success': success,
            'name': self.title,
            "update_url": "myadmin:%s-update" % self.base_path,
            'uuid': uuid,
            "delete_url": "myadmin:%s-delete" % self.base_path,
            "header_text": "Updating %s" % self.title
        })

    def delete(self, request, uuid):
        resource = get_object_or_404(self.model, pk=uuid)
        resource.delete()
        return HttpResponseRedirect("%s?%s" % (reverse('myadmin:%s-list' % self.base_path), "success_delete=True"))

    def create(self, request):
        success = False
        if request.method == 'POST':
            form = self.form(request.POST)
            if form.is_valid():
                form.save()
            success = True
            return HttpResponseRedirect("%s?%s" % (reverse('myadmin:%s-list' % self.base_path), "success_create=True"))

        else:
            form = self.form()

        return render(request, 'admin/create.html', {
            'form': form,
            'success': success,
            'name': self.title,
            "update_url": "myadmin:%s-create" % self.base_path,
            "header_text": "Creating %s" % self.title
        })
