import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { CoursesService } from "../services/courses.service";
import { course } from "../types/course";

export const CourseResolve: ResolveFn<course[]> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
): Observable<course[]> | Promise<course[]> | course[] => {
    const courseService = inject(CoursesService);
    return courseService.getAllCourses().then((data: course[]) => data);
}