from rest_framework.permissions import BasePermission

class IsAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name='Admin').exists()

class IsOperatorOrAdmin(BasePermission):
    def has_permission(self, request, view):
        return (request.user and request.user.groups.filter(name='Operator').exists()) or request.user.is_superuser

class IsCustomer(BasePermission):
    def has_permission(self, request, view):
        return request.user and request.user.groups.filter(name='Customer').exists()
