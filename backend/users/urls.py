from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
# from .custom_auth_views import CustomTokenObtainPairView
from .views import SuperAdminRegisterView, OperatorRegisterView, CustomerRegisterView, CustomerProfileView, CustomTokenObtainPairView

urlpatterns = [
    path('admin/register/', SuperAdminRegisterView.as_view(), name='admin-register'),
    path('operator/register/', OperatorRegisterView.as_view(), name='operator-register'),
    path('customer/register/', CustomerRegisterView.as_view(), name='customer-register'),
    # path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),  # Custom login with role detection
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('customer/profile/', CustomerProfileView.as_view(), name='customer-profile'),
]
