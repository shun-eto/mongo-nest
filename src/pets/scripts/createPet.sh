curl http://localhost:3000/pets \
  -X POST \
  -H "content-type: application/json" \
  -d '{ "name": "Garfield", "animalType": "cat" }'
