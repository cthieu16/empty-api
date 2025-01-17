import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User } from '@prisma/client';
import { META_ROLES } from 'src/auth/decorators/rol-protected.decorator';

@Injectable()
export class UserRoleGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const validRol: string[] = this.reflector.get(
      META_ROLES,
      context.getHandler(),
    );

    if (!validRol || validRol.length === 0) return true;

    const req = context.switchToHttp().getRequest();
    const user = req.user as User;

    if (validRol.includes(user.role)) return true;

    throw new ForbiddenException(
      `${user.email} is not authorized for this resource.`,
    );
  }
}
