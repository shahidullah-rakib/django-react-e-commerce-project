from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/users/', include('users.urls')),     # Routes for users app
    path('api/products/', include('products.urls'))  # Routes for products app
]
