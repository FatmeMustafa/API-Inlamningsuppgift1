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

## /students/{id}

## GET
### Request
`curl -i -X GET api.softhouse.rocks/posts/3`
