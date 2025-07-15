import { Outlet } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { RequireAuth } from '@/components/auth/RequireAuth';
import { WithRole } from '@/components/auth/WithRole';
import { Role } from '@/lib/utils';

export function AdminLayout() {
  return (
    <RequireAuth>
      <WithRole 
        minimumRole={Role.CONTENT_CONTRIBUTOR}
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
              <p className="text-muted-foreground">You don't have permission to access the admin panel.</p>
            </div>
          </div>
        }
      >
        <div className="min-h-screen bg-background">
          <AdminHeader />
          <div className="flex">
            <AdminSidebar />
            <main className="flex-1 p-6">
              <Outlet />
            </main>
          </div>
        </div>
      </WithRole>
    </RequireAuth>
  );
}