use("contact9");

db.contactlist.insertMany([
  {
    "Last name": "Ben",
    "First name": "Moris",
    Email: "ben@gmail.com",
    age: 26,
  },
  {
    "Last name": "Kefi",
    "First name": "Seif",
    Email: "kefi@gmail.com",
    age: 15,
  },
  {
    "Last name": "Emilie",
    "First name": "brouge",
    Email: "emilie.b@gmail.com",
    age: 40,
  },
  { "Last name": "Alex", "First name": "brown", age: 4 },
  { "Last name": "Denzel", "First name": "Washington", age: 3 },
]);

db.contactlist.find();

db.contactlist.find({
  _id: ObjectId("671d4dbc3e361276c506725c"),
});

db.contactlist.findOneAndUpdate(
  { "First name": "Seif" },
  { $set: { "First name": "Anis" } }
);
db.contactlist.find({
  "First name": "Anis",
});

db.contactlist.deleteMany({
  age: { $lt: 5 },
});
db.contactlist.find();
