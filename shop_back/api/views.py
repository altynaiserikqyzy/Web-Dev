from itertools import product

from django.shortcuts import render
from django.http import JsonResponse
from .models import Product, Category
def product_list(request):
    products = Product.objects.all()
    data = [
        {
            "id": p.id,
            "name" : p.name,
            "price":p.price,
            "description":p.description,
            "count":p.count,
            "is_active":p.is_active,
            "category_id":p.category.id,
        }
        for p in products
    ]
    return JsonResponse(data , safe = False)
def product_detail(request, id):
    p = Product.objects.get(id=id)
    data={
        "id": p.id,
        "name": p.name,
        "price": p.price,
        "description": p.description,
        "count": p.count,
        "is_active": p.is_active,
        "category_id": p.category.id
    }
    return JsonResponse(data)
def category_list(request):
    categories=Category.objects.all()
    data = [{
        "id":c.id , "name" : c.name}for c in categories]
    return JsonResponse(data , safe = False)
def category_detail(request, id):
    c = Category.objects.get(id=id)
    data = {"id": c.id, "name": c.name}
    return JsonResponse(data)


def category_products(request, id):
    products = Product.objects.filter(category_id=id)
    data = [
        {
            "id": p.id,
            "name": p.name,
            "price": p.price,
            "description": p.description,
            "count": p.count,
            "is_active": p.is_active,
        }
        for p in products
    ]
    return JsonResponse(data, safe=False)
