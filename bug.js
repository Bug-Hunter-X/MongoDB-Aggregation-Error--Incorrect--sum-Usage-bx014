```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection.aggregate([
  {$match: { /* some criteria */ } },
  {$group: {_id: "$field", sum: {$sum: "$anotherField"}}}, //this line is wrong
  {$sort: {sum: -1}},
]);
```