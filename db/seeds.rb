# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Project.destroy_all
Backing.destroy_all
Reward.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('projects')
ActiveRecord::Base.connection.reset_pk_sequence!('backings')
ActiveRecord::Base.connection.reset_pk_sequence!('rewards')


user1 = User.create!(name: 'Demo User', email: 'demouser@aa.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area", location: "San Francisco, CA")
user2 = User.create!(name: 'JD Buendia', email: 'buns@aa.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area")
user3 = User.create!(name: 'Tri Ta', email: 'mamba@aa.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area")
user4 = User.create!(name: 'Chris Lee', email: 'bookie@aa.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area")
user5 = User.create!(name: 'Jon Siu', email: '@uber.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area")
user6 = User.create!(name: 'Peter Min', email: '@catlover.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area")


project1 = Project.create!(title: "Rap Academy", 
    campaign: "We develop best-in-class rappers. Join the most respected hip-hop school. Learn in-demand skills. Pay no tuition until you're signed.",
    faq: "Q: Who are some rappers that have attended your school? A: We have had many students who have gone on to have have success in the music industry,
    including, Lil Big, NFL Youngboy.", 
    amount_pledged: 3223,
    funding_goal: 200000, end_date: Date.new(2021,8,12), location: "San Francisco, CA", 
    risks_and_challenges: "Our school has been proven to help artists find success, but a challenge will be gaining and having the resources and
    infrastructure to hold them.",
    author_id: user2.id, category_id: 10,
    description: "Free Until You're Signed. Learn how to be a successful rapper In 16 Weeks. The Top Ranked Hip-Hop School by Record Companies. Grads Earn An Average of $101,000/Yr and 100,000 views/videos."
)

project2 = Project.create!(title: "The Flying Skateboard",
        campaign: "Introducing the world's first REAL hoverboard and hover developer kit. We are putting hover technology in YOUR hands..",
        risks_and_challenges: "We have already built a working hoverboard, so the principle risk of not being able to deliver on our big promise is nil. However, there is the possibility we do not add as much functionality as we would like by the delivery date.",
        author_id: user3.id,
        amount_pledged: 30232,
        funding_goal: 250000,
        end_date: Date.new(2021,3,2),
        category_id: 13,
        location: "Austin, TX",
        description: "Fire. The wheel. Sliced bread. The microprocessor. Transformative inventions and discoveries that changed lives. And now, ideally, our Arx Pax Maglev technology. We've just found out that the Hendo Hoverboard is one of Time magazine's 25 Best Inventions of 2020. We're thrilled to share and happy you're a part of it. Thank you."
)

project3 = Project.create!(title: "NightPods",
        campaign: "Experience sleep like never before: Immersive, intelligent audio to help you improve and enjoy your sleep",
        risks_and_challenges: "As with any hardware product - particularly when mass manufacturing - there is always a risk of delays, with possible issues arising in any point of the design, manufacturing and certification processes.",
        author_id: user3.id,
        amount_pledged: 25032,
        funding_goal: 26000,
        end_date: Date.new(2021,1,20),
        category_id: 13,
        location: "Palo Alto, CA",
        description: "NightBuds are tiny, sleep sensing headphones that work with an app to intelligently look after your sleep. 
        Developed with sleep scientists, NightBuds help you transform your sleep and relaxation naturally through audio. 
        Escape stress, an active mind, snoring, noisy neighbours and find the perfect, peaceful sanctuary to enjoy your sleep & relaxation."
)

project4 = Project.create!(title: "The Smile Book",
        campaign: "Celebrate the smiley face’s impact on art, music, pop and alternative culture with The Sm;)e Book.",
        risks_and_challenges: "Spreading the word about this exciting book and raising funds for production, printing & transporting the books is being addressed through this campaign, emails, and our Instagram.",
        author_id: user5.id,
        amount_pledged: 1323,
        funding_goal: 16000,
        end_date: Date.new(2021,5,20),
        category_id: 0,
        location: "Indianapolis, IN",
        description: "Art- and graphic design-focused, this campaign is to publish a book at the start of the new year intended for anyone who appreciates this iconic image of joy (as well as those who love cheeky culture jamming & logo flipping). With your help, we can bring this book to life—after all, the world could use a few more smiles right now ;)"
)

project5 = Project.create!(title: "The Gravity Jacket",
        campaign: "The most versatile performance jacket for outdoor, travel, and every day.",
        risks_and_challenges: "Spreading the word about this exciting book and raising funds for production, printing & transporting the books is being addressed through this campaign, emails, and our Instagram.",
        author_id: user6.id,
        amount_pledged: 12023,
        funding_goal: 10000,
        end_date: Date.new(2021,5,15),
        category_id: 2,
        location: "Detroit, MI",
        description: "The Gravity Jacket is the next generation of insulated jacket. Built from the fiber up by chemists and tested by athletes, the Gravity Jacket is designed to solve all the performance issues of other insulated jackets with a style you can wear anywhere, no matter the weather, season, or occasion.
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

reward1 = Reward.create!(project_id: project1.id, title: "You are the BEST", description: "You will have a branded t-shirt with school logo", estimated_delivery: Date.new(2021,5,12), shipping_loc: "Anywhere in the world", cost: 50)
reward2 = Reward.create!(project_id: project2.id, title: "FULLED-SIZED REPLICA HOVERBOARD", description: "Display it how you like - prominently on a wall, proudly on a stand, just don't throw it in the basement or attic!", estimated_delivery: Date.new(2021,6,12), shipping_loc: "Anywhere in the world", cost: 449)
reward3 = Reward.create!(project_id: project3.id, title: "EarlyBird - NightPods", description: "Limited Earlybird discount. A pair of NightPods. RRP $279 (saving $130)", estimated_delivery: Date.new(2021,2,12), shipping_loc: "Only certain countries", cost: 115)
reward4 = Reward.create!(project_id: project4.id, title: "Early Bird Special", description: "Get a special discounted price on our book celebrating the impact of the smiley face. You'll get the $20 book for $15 in advance of general release. Perfect for your night stand, coffee table, or book shelf.", estimated_delivery: Date.new(2021,6,1), shipping_loc: "Anywhere in the world", cost: 15)
reward5 = Reward.create!(project_id: project5.id, title: "Launch Special | 1x Gravity Jacket", description: "Get ONE Gravity Jacket in the size and color of your choice (you'll choose later).", estimated_delivery: Date.new(2021,7,12), shipping_loc: "Anywhere in the world", cost: 149)

backing1 = Backing.create!(backing_amount: 149, backer_id: user1.id, reward_id: reward5.id, project_id: project5.id)
backing2 = Backing.create!(backing_amount: 449, backer_id: user6.id, reward_id: reward2.id, project_id: project2.id)
backing3 = Backing.create!(backing_amount: 100, backer_id: user6.id, reward_id: reward4.id, project_id: project4.id)
backing4 = Backing.create!(backing_amount: 20, backer_id: user5.id, reward_id: reward2.id, project_id: project1.id)
backing5 = Backing.create!(backing_amount: 20, backer_id: user2.id, reward_id: reward4.id, project_id: project4.id)
backing6 = Backing.create!(backing_amount: 25, backer_id: user2.id, project_id: project2.id)
backing7 = Backing.create!(backing_amount: 50, backer_id: user1.id, project_id: project3.id)
backing8 = Backing.create!(backing_amount: 449, backer_id: user4.id, reward_id: reward2.id, project_id: project2.id)
backing9 = Backing.create!(backing_amount: 10, backer_id: user4.id, project_id: project3.id)
backing10 = Backing.create!(backing_amount: 50, backer_id: user3.id, reward_id: reward1.id, project_id: project1.id)
backing11 = Backing.create!(backing_amount: 149, backer_id: user1.id, reward_id: reward1.id, project_id: project5.id)
