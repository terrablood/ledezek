from django.shortcuts import render

# Create your views here.
def index(request):
    template = 'app_ledkapcsolas/index.html'
    context = {

    }
    return render(request,template,context)