from django.core.management.base import BaseCommand
from django.contrib.auth.models import Group, Permission

class Command(BaseCommand):
    help = 'Create user groups and assign permissions'

    def handle(self, *args, **kwargs):
        groups_permissions = {
            'Admin': ['add_user', 'change_user', 'delete_user', 'view_user', 'add_product', 'change_product', 'delete_product', 'view_product'],
            'Operator': ['add_product', 'change_product', 'delete_product', 'view_product'],
            'Customer': ['view_product']
        }

        for group_name, perms in groups_permissions.items():
            group, created = Group.objects.get_or_create(name=group_name)
            if created:
                for perm in perms:
                    permission = Permission.objects.get(codename=perm)
                    group.permissions.add(permission)
                self.stdout.write(self.style.SUCCESS(f'{group_name} group created with permissions'))
            else:
                self.stdout.write(self.style.WARNING(f'{group_name} group already exists'))
