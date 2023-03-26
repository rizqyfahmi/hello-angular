import { Injectable } from '@angular/core';
import { course } from '../types/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: course[] = [
    {
      id: 101, name: 'JavaScript for beginners', author: 'John Heikela', duration: 48, type: 'Free',
      price: 0.00, ratings: 3.5, image: 'https://placehold.co/600x400/5D3891/FFF',
      description: 'In this course you will learn the fundamentals of JavaScript. This course is purely designed for beginners and teaches you all the concepts of javascript step by step'
    },
    {
      id: 102, name: 'Angular for beginners', author: 'Mark Vought', duration: 28, type: 'Premium',
      price: 129.00, ratings: 4.5, image: 'https://placehold.co/600x400/5D3891/FFF',
      description: 'In this course you will learn the fundamentals of Angular framework. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step'
    },
    {
      id: 103, name: 'React for beginners', author: 'Steve Smith', duration: 18.5, type: 'Free',
      price: 0.00, ratings: 4.0, image: 'https://placehold.co/600x400/5D3891/FFF',
      description: 'In this course you will learn the fundamentals of React. This course is purely designed for beginners and teaches you all the basic concepts of React step by step'
    },
    {
      id: 104, name: 'Advance Angular Course', author: 'Steve Smith', duration: 19.5, type: 'Premium',
      price: 145.50, ratings: 4.8, image: 'https://placehold.co/600x400/5D3891/FFF',
      description: 'In this course you will learn all the concepts of Angular from basic to advance. This course will start teaching you from basics of Angular and as you progress, you will learn all the advance concepts.'
    },
    {
      id: 105, name: 'Advance JavaScript Course', author: 'John Heikela', duration: 60, type: 'Premium',
      price: 150.00, ratings: 4.5, image: 'https://placehold.co/600x400/5D3891/FFF',
      description: 'In this course you will learn the complete modern JavaScript step by step. This course is purely designed for beginners and teaches you all the concepts of javascript from beginner to advance level.'
    },
    {
      id: 106, name: 'Angular with .NET Core', author: 'Mark Vought', duration: 68, type: 'Premium',
      price: 129.00, ratings: 4.5, image: 'https://placehold.co/600x400/5D3891/FFF',
      description: 'In this course you will learn the fundamentals of Angular framework with .NET Core. This course is purely designed for beginners and teaches you all the basic concepts of Angular step by step and how to use it with back-end framework like .NET Core.'
    },
    {
      id: 107, name: 'Advance React Course', author: 'Merry Smith', duration: 18.5, type: 'Free',
      price: 0.00, ratings: 4.0, image: 'https://placehold.co/600x400/5D3891/FFF',
      description: 'In this course you will learn the fundamentals and advance concepts of React. This course is purely designed for beginners and teaches you all the concepts of React step by step'
    },
    {
      id: 108, name: 'UX Design Course', author: 'Steve Smith', duration: 19.0, type: 'Premium',
      price: 115.50, ratings: 4.8, image: 'https://placehold.co/600x400/5D3891/FFF',
      description: 'In this course you will learn about reactive web development using HTML & CSS. This course will start teaching you from basics of HTML & CSS and as you progress, you will learn all the advance concepts.'
    },
    {
      id: 109, name: 'UX Design Course: Advance', author: 'Steve Smith', duration: 20.0, type: 'Premium',
      price: 115.50, ratings: 4.8, image: 'https://placehold.co/600x400/5D3891/FFF',
      description: 'In this course you will learn about reactive web development using HTML & CSS. This course will start teaching you from basics of HTML & CSS and as you progress, you will learn all the advance concepts.'
    }
  ];

  getAllCourses(): Promise<course[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.courses);
      }, 5000);
    })
  }
}
