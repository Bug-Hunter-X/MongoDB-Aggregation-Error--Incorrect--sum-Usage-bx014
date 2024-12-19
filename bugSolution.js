```javascript
//Correct aggregation pipeline
db.collection.aggregate([
  {$match: { /* some criteria */ } },
  {$group: {_id: "$field", sum: {$sum: {$toDouble: "$anotherField"}}}},
  {$sort: {sum: -1}},
]);
```