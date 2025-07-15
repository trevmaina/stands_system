import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Role-based access control utilities
export enum Role {
  SUPER_ADMIN = 'super_admin',
  LEAD_PASTOR = 'lead_pastor', 
  CHURCH_ADMIN = 'church_admin',
  MINISTRY_HEAD = 'ministry_head',
  MEDIA_TEAM = 'media_team',
  FINANCE_OFFICER = 'finance_officer',
  EVENTS_COORDINATOR = 'events_coordinator',
  CONTENT_CONTRIBUTOR = 'content_contributor',
  VOLUNTEER_COORDINATOR = 'volunteer_coordinator',
  MEMBER = 'member'
}

export const roleHierarchy = {
  [Role.SUPER_ADMIN]: 10,
  [Role.LEAD_PASTOR]: 9,
  [Role.CHURCH_ADMIN]: 8,
  [Role.MINISTRY_HEAD]: 7,
  [Role.MEDIA_TEAM]: 6,
  [Role.FINANCE_OFFICER]: 5,
  [Role.EVENTS_COORDINATOR]: 4,
  [Role.CONTENT_CONTRIBUTOR]: 3,
  [Role.VOLUNTEER_COORDINATOR]: 2,
  [Role.MEMBER]: 1
}

export function hasRole(userRole: string, requiredRoles: Role[]): boolean {
  return requiredRoles.includes(userRole as Role)
}

export function hasMinimumRole(userRole: string, minimumRole: Role): boolean {
  const userLevel = roleHierarchy[userRole as Role] || 0
  const requiredLevel = roleHierarchy[minimumRole] || 0
  return userLevel >= requiredLevel
}
