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

puts "#{Position.count} positions créées"

MISSIONS = ['Photographier la cible', 'Identification de la cible sur la photo par le maitre du jeu',
'Agent K identifie la cible sur la photographie', 'Récuperer un objet appartenant à la cible',
'Installer un dispositif spécial sur la cible', 'Réperer la cible sur le terrain', 'Trouver un indice sur le terrain',
'Enregistrer une vidéo de la cible', 'Enregistrer une vidéo de la cible identifiable', 'Enregistrer la voix de la cible',
'Transmettre 40 géopositions de la cible']

MISSIONS.each do |mission|
  Mission.create!(name: mission)
end

puts "#{Mission.count} missions créées"

