from rest_framework import serializers
from .models import Category, Product

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name', 'description', 'created_by', 'created_at', 'updated_at', 'is_deleted']
        read_only_fields = ['created_by']  # Mark 'created_by' as read-only

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'description', 'price', 'stock', 'category', 'created_by', 'created_at', 'updated_at', 'is_deleted']
        read_only_fields = ['created_by']  # Mark 'created_by' as read-only

# class ProductSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Product
#         fields = '__all__'
