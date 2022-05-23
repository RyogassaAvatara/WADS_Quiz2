# from rest_framework import viewsets
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from myapi.serializers import HeroSerializer
from myapi.models import Hero


@csrf_exempt
def herosApi(request, id=0):
    
    if request.method=='GET':
        heros = Hero.objects.all()
        heroesSerializer = HeroSerializer(heros, many=True)
        return JsonResponse(heroesSerializer.data, safe=False)

    elif request.method=='POST':
        heroesData = JSONParser().parse(request)
        heroesSerializer = HeroSerializer(data=heroesData)
        if heroesSerializer.is_valid():
            heroesSerializer.save()
            return JsonResponse("Added Succesfully", safe=False)
        return JsonResponse("Failed to Add", safe=False)
    
    elif request.method=='PUT':
        heroesData = JSONParser().parse(request)
        heros = Hero.objects.get(heros_id=heroesData["heros_id"])
        heroesSerializer = HeroSerializer(heros, data = heroesData)
        if heroesSerializer.is_valid():
            heroesSerializer.save()
            return JsonResponse("Succesfully Updated", safe=False)
        return JsonResponse("Update Failed")
    
    elif request.method=="DELETE":
        heros = Hero.objects.get(heros_id=id)
        heros.delete()
        return JsonResponse("Deleted Successfully", safe = False)