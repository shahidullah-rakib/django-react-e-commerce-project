from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .models import UserProfile
from .serializers import (
    SuperUserRegistrationSerializer,
    OperatorRegistrationSerializer,
    CustomerRegistrationSerializer,
    CustomerProfileSerializer,
    CustomTokenObtainPairSerializer
)
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.exceptions import NotFound


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
class SuperAdminRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SuperUserRegistrationSerializer
    permission_classes = [AllowAny]

class OperatorRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = OperatorRegistrationSerializer
    permission_classes = [AllowAny]

class CustomerRegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = CustomerRegistrationSerializer
    permission_classes = [AllowAny]

class CustomerProfileView(generics.RetrieveUpdateAPIView):
    serializer_class = CustomerProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        try:
            # Attempt to retrieve the UserProfile associated with the logged-in user
            return UserProfile.objects.get(user=self.request.user)
        except UserProfile.DoesNotExist:
            raise NotFound("UserProfile does not exist.")

    def put(self, request, *args, **kwargs):
        # This method handles profile updates
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        return Response(serializer.data)

    def get(self, request, *args, **kwargs):
        # This method retrieves the user profile
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)
