# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!(name: 'Demo User', email: 'demouser@aa.io', password: 'password', biography: "cheetahs for life", location: "bay area")
user2 = User.create!(name: 'JD Buendia', email: 'buns@aa.io', password: 'password', biography: "cheetahs for life", location: "so cal")
user3 = User.create!(name: 'Tri Ta', email: 'mamba@aa.io', password: 'password', biography: "cheetahs for life", location: "so cal")
user4 = User.create!(name: 'Chris Lee', email: 'bookie@aa.io', password: 'password', biography: "cheetahs for life", location: "bay area")
user5 = User.create!(name: 'Jon Sui', email: '@uber.io', password: 'password', biography: "cheetahs for life", location: "bay area")
user6 = User.create!(name: 'Peter Min', email: '@catlover.io', password: 'password', biography: "cheetahs for life", location: "so cal")



