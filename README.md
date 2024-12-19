# MongoDB Aggregation Error: Incorrect $sum Usage

This repository demonstrates a common error in MongoDB aggregation pipelines: incorrect usage of the `$sum` operator within the `$group` stage.

The error occurs when attempting to sum a field that is not of numeric type.  The provided code snippet shows the incorrect implementation, and a solution is given.

## How to Reproduce

1. Clone this repository.
2. Start a MongoDB instance.
3. Create a collection and insert documents with a sample `anotherField` (that may have a string value).
4. Run the provided Javascript code.

## Solution

The solution involves ensuring that the field passed to `$sum` is of numeric type.  This can be achieved through validation rules during data insertion or by using operators like `$toDouble` within the aggregation pipeline to convert the field to a numeric type before summing.