import { useAuth } from '@/contexts/AuthContext';
import { hasRole, hasMinimumRole, Role } from '@/lib/utils';

interface WithRoleProps {
  children: React.ReactNode;
  roles?: Role[];
  minimumRole?: Role;
  fallback?: React.ReactNode;
}

export function WithRole({ children, roles, minimumRole, fallback }: WithRoleProps) {
  const { profile } = useAuth();

  if (!profile?.role) {
    return fallback || null;
  }

  const hasAccess = roles 
    ? hasRole(profile.role, roles)
    : minimumRole 
    ? hasMinimumRole(profile.role, minimumRole)
    : true;

  if (!hasAccess) {
    return fallback || null;
  }

  return <>{children}</>;
}