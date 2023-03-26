import { inject } from "@angular/core"
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router"
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

/**
 * - CanActivateFn is used to decides wether a user can navigate to a route or not
 */
export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated()) {
        return true;
    }

    return router.parseUrl("/")
}