# API - Inlamningsuppgift1

br/>br/>

## Purpose
The purpose is








# Instructions
```
npm init
npm install --save express

npm install --save mongoose

npm install
npm start
```

# /students

## POST
### Request
```
  curl -i -X POST -H "Content-Type:application/json" localhost:3000/students -d '{
    "_id": "", 
    "email": "fatme.mustafa@ecut.com",
    "name": "Fatme Mustafa", 
    "address": { 
      "street": "Prästgatan 191",
      "city": "Nybro",
      "zipcode": "382 44" 
     } 
  }'
```
### Response
`Status code: 201 (Created)`

## GET
### Request
`curl -i -X GET localhost:3000/students`
### Response
`Status code: 200 (OK)`
```
[
  {
    "address": {
      "street": "Framtidsvägen 10A",
      "city": "Växjö",
      "zipcode": "352 57"
     },
     "_id": "5cebbb855c4e72054c585f63",
     "email": "pelle.kanin@ecut.com",
     "name": "Pelle Kanin",
     "__v":0
  },
  {
    "address": {
      "street": "Prästgatan 191",
      "city": "Nybro",
      "zipcode": "382 44"
      },
      "_id": "5cebbd3d71597f0570bf0dc6",
      "email": "fatme.mustafa@ecut.com",
      "name": "Fatme Mustafa",
      "__v":0
   }
]
```

# /students/{name}

## GET
### Request
`curl -i -X GET localhost:3000/students/?name=Fatme%20Mustafa`
### Response
`Status code: 200 (OK)`
```
{
  "address": {
    "street": "Prästgatan 191",
    "city": "Nybro",
    "zipcode": "382 44"
    },
    "_id": "5cebbd3d71597f0570bf0dc6",
    "email": "fatme.mustafa@ecut.com",
    "name": "Fatme Mustafa"
}
```

# /students/{id}

## GET
### Request
`curl -i -X GET localhost:3000/students/5cebbd3d71597f0570bf0dc6`
### Response
`Status code: 200 (OK)`
```
{
  "address": {
    "street": "Prästgatan 191",
    "city": "Nybro",
    "zipcode": "382 44"
    },
    "_id": "5cebbd3d71597f0570bf0dc6",
    "email": "fatme.mustafa@ecut.com",
    "name": "Fatme Mustafa"
}
```

## PUT
### Request
```
curl -i -X PUT localhost:3000/students/5cebbd3d71597f0570bf0dc6 -H "Content-type:application/json" -d '{
  "address": {
    "street": "Prästgatan 200",
    "city": "Nybro",
    "zipcode": "382 44"
    },
    "_id": "5cebbd3d71597f0570bf0dc6",
    "email": "fatima.mustafa@ecut.com",
    "name": "Fatima Mustafa"
}'
```
### Response
`Status code: 200 (OK)`

## DELETE
### Request
`curl -i -X DELETE localhost:3000/students/5cebbd3d71597f0570bf0dc6`
### Response
`Status code: 200 (OK)`
