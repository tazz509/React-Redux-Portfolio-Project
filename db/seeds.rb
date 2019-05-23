# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#Events
Event.create(
  name: "Pizza Party",
  location: "My House",
  date: "2018-09-11",
  time: "08:00:00",
  notes: "Don't forget to make pizza!"
)
Event.create(
  name: "Taco Party",
  location: "My House",
  date: "2018-09-12",
  time: "08:00:00",
  notes: "Don't forget to make tacos!"
)
Event.create(
  name: "Ice Cream Party",
  location: "My House",
  date: "2018-09-13",
  time: "08:00:00",
  notes: "Don't forget to bring the ice cream!"
)
Event.create(
  name: "Whiskey Party",
  location: "My House",
  date: "2018-09-14",
  time: "08:00:00",
  notes: "Don't drink ALL the whiskey!"
)

