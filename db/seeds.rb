# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
latitude_min = 47.0871
latitude_max = 47.0778

longitude_min = 2.3890
longitude_max = 2.4078

game = Game.create!(name: "test")

10.times do
  Position.create!(
    latitude: latitude_min + rand((latitude_max - latitude_min)*100000)*0.00001,
    longitude: longitude_min + rand((longitude_max - longitude_min)*10000)*0.0001,
    device: "test",
    game: game
  )
end
