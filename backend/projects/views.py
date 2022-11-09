from django.shortcuts import render
from django.http import HttpResponse

dummy = [{"title": "Rolling Cigs", "writer": "Kevin"}, {"title": "cthulu", "writer": "someone else"}]

def home(request):
    context = {"films": dummy, "title": "yay"}
    return render(request, "projects/home.html", context)