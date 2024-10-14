from rest_framework.permissions import BasePermission

class IsOperatorOrAdmin(BasePermission):
    def has_permission(self, request, view):
        return request.user.groups.filter(name__in=['Admin', 'Operator']).exists()
