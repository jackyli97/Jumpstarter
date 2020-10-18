# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
# ActiveRecord::Base.connection.reset_pk_sequence!('users')

user1 = User.create!(name: 'Demo User', email: 'demouser@aa.io', password: 'password', biography: "An entrepreneur from the Bay Area", location: "San Francisco, CA")
user2 = User.create!(name: 'JD Buendia', email: 'buns@aa.io', password: 'password', biography: "cheetahs for life")
user3 = User.create!(name: 'Tri Ta', email: 'mamba@aa.io', password: 'password', biography: "cheetahs for life")
user4 = User.create!(name: 'Chris Lee', email: 'bookie@aa.io', password: 'password', biography: "cheetahs for life")
user5 = User.create!(name: 'Jon Siu', email: '@uber.io', password: 'password', biography: "cheetahs for life")
user6 = User.create!(name: 'Peter Min', email: '@catlover.io', password: 'password', biography: "cheetahs for life")

Project.destroy_all

project1 = Project.create!(title: "Rap Academy", 
    description: "We develop best-in-class rappers. Join the most respected hip-hop school. Learn in-demand skills. Pay no tuition until you're signed.",
    faq: "Q: Who are some rappers that have attended your school? A: We have had many students who have gone on to have have success in the music industry,
    including, Lil Big, NFL Youngboy.", 
    amount_pledged: 1000,
    funding_goal: 200000, end_date: Date.new(2021,3,12), location: "San Francisco, CA", 
    risks_and_challenges: "Our school has been proven to help artists find success, but a challenge will be gaining and having the resources and
    infrastructure to hold them.",
    author_id: user2.id, category_id: 1,
    campaign: "Free Until You're Signed. Learn how to be a successful rapper In 16 Weeks. The Top Ranked Hip-Hop School by Record Companies. Grads Earn An Average of $101,000/Yr and 100,000 views/videos."
)

project2 = Project.create!(title: "The Flying Skateboard",
        description: "Just like the one in Back to the Future! For the first time, every person will be able to fly anytime, anywhere. The world, your world, will change forever.",
        risks_and_challenges: "Getting it approved for commercial use and passing states tests.",
        author_id: user3.id,
        amount_pledged: 500,
        funding_goal: 10000,
        end_date: Date.new(2021,3,2),
        category_id: 3,
        location: "Austin, TX",
        campaign: "Ever Imagined about flying skateboards?
We recently came up with a hoverboard that works with superconducters, liquid nitrogen and magnets."
)

project3 = Project.create!(title: "NightPods",
        description: "Experience sleep like never before: Immersive, intelligent audio to help you improve and enjoy your sleep",
        risks_and_challenges: "As with any hardware product - particularly when mass manufacturing - there is always a risk of delays, with possible issues arising in any point of the design, manufacturing and certification processes.",
        author_id: user3.id,
        amount_pledged: 35000,
        funding_goal: 26000,
        end_date: Date.new(2021,1,20),
        category_id: 3,
        location: "Palo Alto, CA",
        campaign: "NightBuds are tiny, sleep sensing headphones that work with an app to intelligently look after your sleep. 
Developed with sleep scientists, NightBuds help you transform your sleep and relaxation naturally through audio. 
Escape stress, an active mind, snoring, noisy neighbours and find the perfect, peaceful sanctuary to enjoy your sleep & relaxation."
)

project4 = Project.create!(title: "The Smile Book",
        description: "Celebrate the smiley face’s impact on art, music, pop and alternative culture with The Sm;)e Book.",
        risks_and_challenges: "Spreading the word about this exciting book and raising funds for production, printing & transporting the books is being addressed through this campaign, emails, and our Instagram.",
        author_id: user5.id,
        amount_pledged: 10700,
        funding_goal: 16000,
        end_date: Date.new(2021,5,20),
        category_id: 1,
        location: "Indianapolis, IN",
        campaign: "Art- and graphic design-focused, this campaign is to publish a book at the start of the new year intended for anyone who appreciates this iconic image of joy (as well as those who love cheeky culture jamming & logo flipping). With your help, we can bring this book to life—after all, the world could use a few more smiles right now ;)"
)

project5 = Project.create!(title: "The Gravity Jacket",
        description: "The most versatile performance jacket for outdoor, travel, and every day.",
        risks_and_challenges: "Spreading the word about this exciting book and raising funds for production, printing & transporting the books is being addressed through this campaign, emails, and our Instagram.",
        author_id: user6.id,
        amount_pledged: 324876,
        funding_goal: 10000,
        end_date: Date.new(2021,5,15),
        category_id: 5,
        location: "Detroit, MI",
        campaign: "The Gravity Jacket is the next generation of insulated jacket. Built from the fiber up by chemists and tested by athletes, the Gravity Jacket is designed to solve all the performance issues of other insulated jackets with a style you can wear anywhere, no matter the weather, season, or occasion.
         This jacket is temperature regulating, breathable, stain-proof, water resistant, durable, packable, and versatile. Providing ultimate freedom, you’ll forget you’re wearing it"
)

file1 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/rap_academy.jpeg")
project1.photo.attach(io: file1, filename: "img_#{project1.id}.jpg")

file2 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/flying_skateboard.jpg")
project2.photo.attach(io: file2, filename: "img_#{project2.id}.jpg")

file3 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/nightbuds.jpg")
project3.photo.attach(io: file3, filename: "img_#{project3.id}.jpg")

file4 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/smile_book.jpg")
project4.photo.attach(io: file4, filename: "img_#{project4.id}.jpg")

file5 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/gravityjacket.jpg")
project5.photo.attach(io: file5, filename: "img_#{project5.id}.jpg")

