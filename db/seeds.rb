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
user5 = User.create!(name: 'Jon Siu', email: '@uber.io', password: 'password', biography: "cheetahs for life", location: "bay area")
user6 = User.create!(name: 'Peter Min', email: '@catlover.io', password: 'password', biography: "cheetahs for life", location: "so cal")

Project.destroy_all

project1.Project.create

project1 = Project.create!(title: "Rap Academy", 
    description: "We develop best-in-class rappers. Join the most respected hip-hop school. Learn in-demand skills. Pay no tuition until you're signed.",
    faq: "Q: Who are some rappers that have attended your school? A: We have had many students who have gone on to have have success in the music industry,
    including, Lil Big, NFL Youngboy.", 
    amount_pledged: 1000,
    funding_goal: 200000, end_date: 05/04/2021, location: "San Francisco, CA", 
    risks_and_challenges: "Our school has been proven to help artists find success, but a challenge will be gaining and having the resources and
    infrastructure to hold them.",
    author_id: 6, cateogry_id: 1

project2 = Project.create!(title: "The Flying Skateboard",
        description: "Just like the one in Back to the Future! Take flight on your commute, avoid the traffic, and be part of the next big transportation innovation",
        risks_and_challenges: "Getting it approved for commercial use and passing states tests.",
        author_id: 3,
        amount_pledged: 500,
        funding_goal: 10000,
        end_date: 01/01/2021,
        category_id: 3,
        location: "San Francisco, CA"
)

project2 = Project.create!(
        title: "The Flying Skateboard",
        description: "Just like the one in Back to the Future! Take flight on your commute, avoid the traffic, and be part of the next big transportation innovation",
        risks_and_challenges: "Getting it approved for commercial use and passing states tests.",
        author_id: 3,
        amount_pledged: 500,
        funding_goal: 10000,
        end_date: 01/01/2021,
        category_id: 3,
        location: "San Francisco, CA"
)



