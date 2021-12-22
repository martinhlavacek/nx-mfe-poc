import { Injectable } from '@angular/core';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  login(username: string, password: string): Observable<string> {
    const username$ = of(username);
    const password$ = of(password);

    return username$.pipe(
      map(user => user.toLocaleLowerCase()),
      switchMap(user => password$.pipe(
        map(pass => pass.toLocaleLowerCase()),
        map(pass => pass ==='demo' && user === 'demo'),
        switchMap(val => val
          ? of('eyJraWQiOiJvU2xPR3p1cmFhRWZtUUlCSmJBXC84Wm9sR1FNU3lRUzN4WmYySDFZbW40TT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI0ZmMxZmVkYy1hOWJmLTRlZmMtYTE1Yy04MGZiODg3YTU3N2QiLCJldmVudF9pZCI6IjRhZjVlNThkLTliZDgtNDAyNC05ZDBlLWIwZWRjNWM0MTYxNyIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2NDAxMjIyODAsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbVwvZXUtd2VzdC0xX1FMSHM4enRWRCIsImV4cCI6MTY0MDEyNTg4MCwiaWF0IjoxNjQwMTIyMjgwLCJqdGkiOiIwYjAyMTE5ZS0wOTY2LTQ4MTEtOTYwZi05MGNiZTUwMzhmOGUiLCJjbGllbnRfaWQiOiIxaDE4bXEzaGo1aGtvamFqM2IwbzNuMWhkaSIsInVzZXJuYW1lIjoiY3VzdG9tZXIwMiJ9.WNJywh5Z-yC8mz3pyHAJM_x2GKX2l1D7zvAtZ8AoFfezEKuZjqMvlyPAgMDKcCpBoMwTram6AdQSxLKx6cSiDbGdrckSkLP6A-C1A6gRA3p2s0vsCHeSI7RgNU-axzVZoHrMvQFLws19p6HAQOQrKxXMe4aq-6dcgqO1--CHYC2h0QKUAI0_1e6Nmiw9JVEtT_yvaYpZskTH1uzXKxJLrhXbO4Vvp043gr9OixJatVZuN-bKq2Br0SIerbSi0ZclO7N1GNT2BBru9rVJnsfRkm2_1T4U9LKWYCaRUwbj8LIdNG1McUf8WBMfyvUbZOUjuEY5hABXuSiUywyBde5Ivw')
          : throwError(() => new Error('bad credentials')))
      ))
    )
  }
}
