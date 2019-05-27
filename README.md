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
