# Spring-Blog

## Frontend Preview

<img src="https://github.com/neelbavarva/Spring-Blog/blob/main/Images/frontend-image.png" />

## Backend

*For Developmental Tracking* 

## APIs

#### Auth APIs

- [x] Login ( /api/auth/login )
- [x] Signup ( /api/auth/signup )

#### User APIs

- [x] Get All Users ( /api/user/getAll )
- [x] Extract Username from jwtToken ( /api/user/getUser )

#### Post APIs

- [x] Add Post ( /api/post/addPost )
- [x] Get All Posts ( /api/post/view/all )
- [x] Get All Posts of a User ( /api/post/view/user/{username} )
- [x] Update Post ( /api/post/update/{id} )
- [x] Delete Post ( /api/post/delete/{id} )

### How to Run this application

1 Should already have installed mysql and mysqlworkbench <br/>
2 Create 'springblog' schema in your local instance through mysqlworkbench <br/>
3 Run both the application ( Frontend serving on localhost:3000 and Backend serving on localhost:5000 )

For running frontend
```
npm start
```

For running backend ( or just use IntelliJ to run directly )

```
mvn spring-boot:run
```

