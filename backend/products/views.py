from rest_framework import generics, permissions
from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer
from .permissions import IsAdmin, IsOperatorOrAdmin, IsCustomer
from rest_framework.response import Response

# Category views
class CategoryListView(generics.ListCreateAPIView):
    queryset = Category.objects.filter(is_deleted=False)
    serializer_class = CategorySerializer
    
    def get_permissions(self):
        if self.request.method == 'POST':
            return [permissions.IsAuthenticated(), IsOperatorOrAdmin()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class CategoryDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.filter(is_deleted=False)
    serializer_class = CategorySerializer
    
    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return [permissions.IsAuthenticated(), IsOperatorOrAdmin()]
        return [permissions.AllowAny()]

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()


# List and Create View
class CategoryListCreateView(generics.ListCreateAPIView):
    queryset = Category.objects.filter(is_deleted=False)
    serializer_class = CategorySerializer

    def get_permissions(self):
        # Allow listing for all, but restrict creation based on permissions
        if self.request.method == 'POST':
            return [permissions.IsAuthenticated(), IsOperatorOrAdmin()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        # Assign the creator of the category to the request user
        serializer.save(created_by=self.request.user)

# Retrieve, Update, and Delete (Soft Delete) View
class CategoryRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Category.objects.filter(is_deleted=False)
    serializer_class = CategorySerializer

    def get_permissions(self):
        # Allow read-only access for all, restrict updates and deletes
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return [permissions.IsAuthenticated(), IsOperatorOrAdmin()]
        return [permissions.AllowAny()]

    def perform_update(self, serializer):
        # Only allow operators to update their own categories
        if self.request.user.groups.filter(name='Operator').exists() and serializer.instance.created_by != self.request.user:
            raise permissions.PermissionDenied("You can only update categories you created.")
        serializer.save()

    def perform_destroy(self, instance):
        # Soft delete by marking the is_deleted flag
        instance.is_deleted = True
        instance.save()

# Product views
class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.filter(is_deleted=False)
    serializer_class = ProductSerializer

    def get_permissions(self):
        if self.request.method == 'POST':
            return [permissions.IsAuthenticated(), IsOperatorOrAdmin()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.filter(is_deleted=False)
    serializer_class = ProductSerializer

    def get_permissions(self):
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return [permissions.IsAuthenticated(), IsOperatorOrAdmin()]
        return [permissions.AllowAny()]

    def perform_destroy(self, instance):
        instance.is_deleted = True
        instance.save()

# List and Create View
class ProductListCreateView(generics.ListCreateAPIView):
    queryset = Product.objects.filter(is_deleted=False)
    serializer_class = ProductSerializer

    def get_permissions(self):
        # Allow listing for all, but restrict creation based on permissions
        if self.request.method == 'POST':
            return [permissions.IsAuthenticated(), IsOperatorOrAdmin()]
        return [permissions.AllowAny()]

    def perform_create(self, serializer):
        # Assign the creator of the product to the request user
        serializer.save(created_by=self.request.user)

# Retrieve, Update, and Delete (Soft Delete) View
class ProductRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.filter(is_deleted=False)
    serializer_class = ProductSerializer

    def get_permissions(self):
        # Allow read-only access for all, restrict updates and deletes
        if self.request.method in ['PUT', 'PATCH', 'DELETE']:
            return [permissions.IsAuthenticated(), IsOperatorOrAdmin()]
        return [permissions.AllowAny()]

    def perform_update(self, serializer):
        # Only allow operators to update their own products
        if self.request.user.groups.filter(name='Operator').exists() and serializer.instance.created_by != self.request.user:
            raise permissions.PermissionDenied("You can only update products you created.")
        serializer.save()

    def perform_destroy(self, instance):
        # Soft delete by marking the is_deleted flag
        instance.is_deleted = True
        instance.save()

