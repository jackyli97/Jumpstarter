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
Category.destroy_all
ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('projects')
ActiveRecord::Base.connection.reset_pk_sequence!('backings')
ActiveRecord::Base.connection.reset_pk_sequence!('rewards')
ActiveRecord::Base.connection.reset_pk_sequence!('categories')


user1 = User.create!(name: 'Demo User', email: 'demouser@aa.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area", location: "San Francisco, CA")
user2 = User.create!(name: 'JD Buendia', email: 'buns@aa.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area")
user3 = User.create!(name: 'Tri Ta', email: 'mamba@aa.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area")
user4 = User.create!(name: 'Chris Lee', email: 'bookie@aa.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area")
user5 = User.create!(name: 'Jon Siu', email: 'uber@aa.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area")
user6 = User.create!(name: 'Peter Min', email: 'catlover@aa.io', password: 'password', biography: "An innovative entrepreneur from the Bay Area")
user7 = User.create!(name: 'Yasano Tasui', email: 'yasano@aa.io', password: 'password', biography: "Hello! My name is Yasano and I'm an artist out of the Bay Area in California and owner of the small brand Tokyo Rejects.")
user8 = User.create!(name: 'Charles Pittman', email: 'charles@aa.io', password: 'password', biography: "I write all them good-looking comics")
user9 = User.create!(name: 'Rafi Junaid', email: 'rafi@aa.io', password: 'password', biography: "Knife maker Timless. Crafted with Honor and integrity.")
user10 = User.create!(name: 'Leroy Bernardo', email: 'leroy@aa.io', password: 'password', biography: "Leroy is a professional dancer and entrepreneur based out of Los Angeles, CA.")
user11 = User.create!(name: 'Cleve Oines', email: 'cleve@aa.io', password: 'password', biography: "A guy who cooks. Appreciator of good kitchen tools.")
user12 = User.create!(name: 'Desiree Dupuis', email: 'desiree@aa.io', password: 'password', biography: "I created VOES as a platform to showcase the love I feel for humanity and the love I feel for animals.")
user13 = User.create!(name: 'The Garage Learning', email: 'garage@aa.io', password: 'password', biography: "The Garage Learning is an NYC-based Online Education company.")
user14 = User.create!(name: 'Jim Lam', email: 'jim@aa.io', password: 'password', biography: "Jim is a lifelong lover of great food and drink and avid outdoorsman.")
user15 = User.create!(name: 'Bragelonne Games', email: 'bragelonne@aa.io', password: 'password', biography: "Founded in 2000, Bragelonne is the curious story of a bunch of friends who, rich of nothing but their passion for the genre, a coffee machine and an addiction to Warcraft : Frozen Throne, became in just a handful of years the first independent publishers of fantasy fiction in French language.")
user16 = User.create!(name: 'Kingston Wire', email: 'kingston@aa.io', password: 'password', biography: "Kingston Wire is a non-partisan, independent news publication covering the people, news and events of the city Kingston, New York.")
user17 = User.create!(name: 'Sam Cornwell', email: 'sam@aa.io', password: 'password', biography: "Artist | Photographer | Astronomer")
user18 = User.create!(name: 'Raster Scroll', email: 'raster@aa.io', password: 'password', biography: "Raster Scroll is a book publisher focusing on Japanese video game history.")
user19 = User.create!(name: 'Gavin Polkinghorne', email: 'gavin@aa.io', password: 'password', biography: "Next to working in hospitality, he is currently pursuing his dream of writing and performing a musical.")

category0 = Category.create!(category_name: "Art");
category1 = Category.create!(category_name: "Comics");
category2 = Category.create!(category_name: "Crafts");
category3 = Category.create!(category_name: "Dance");
category4 = Category.create!(category_name: "Design");
category5 = Category.create!(category_name: "Fashion");
category6 = Category.create!(category_name: "Film");
category7 = Category.create!(category_name: "Food");
category8 = Category.create!(category_name: "Games");
category9 = Category.create!(category_name: "Jouranlism");
category10 = Category.create!(category_name: "Music");
category11 = Category.create!(category_name: "Photography");
category12 = Category.create!(category_name: "Publishing");
category13 = Category.create!(category_name: "Technology");
category14 = Category.create!(category_name: "Theater");

project1 = Project.create!(title: "Rap Academy", 
    campaign: "We develop best-in-class rappers. Join the most respected hip-hop school. Learn in-demand skills. Pay no tuition until you're signed.",
    faq: "Q: Who are some rappers that have attended your school? A: We have had many students who have gone on to have have success in the music industry,
    including, Lil Big, NFL Youngboy.", 
    amount_pledged: 3223,
    funding_goal: 200000, end_date: Date.new(2021,8,12), location: "San Francisco, CA", 
    risks_and_challenges: "Our school has been proven to help artists find success, but a challenge will be gaining and having the resources and
    infrastructure to hold them.",
    author_id: user2.id, category_id: category10.id,
    description: "Free Until You're Signed. Learn how to be a successful rapper In 16 Weeks. The Top Ranked Hip-Hop School by Record Companies. Grads Earn An Average of $101,000/Yr and 100,000 views/videos."
)

project2 = Project.create!(title: "The Flying Skateboard",
        campaign: "Introducing the world's first REAL hoverboard and hover developer kit. We are putting hover technology in YOUR hands..",
        risks_and_challenges: "We have already built a working hoverboard, so the principle risk of not being able to deliver on our big promise is nil. However, there is the possibility we do not add as much functionality as we would like by the delivery date.",
        author_id: user3.id,
        amount_pledged: 30232,
        funding_goal: 250000,
        end_date: Date.new(2021,3,2),
        category_id: category13.id,
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
        category_id: category13.id,
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
        category_id: category0.id,
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
        category_id: category2.id,
        location: "Detroit, MI",
        description: "The Gravity Jacket is the next generation of insulated jacket. Built from the fiber up by chemists and tested by athletes, the Gravity Jacket is designed to solve all the performance issues of other insulated jackets with a style you can wear anywhere, no matter the weather, season, or occasion.
        This jacket is temperature regulating, breathable, stain-proof, water resistant, durable, packable, and versatile. Providing ultimate freedom, you’ll forget you’re wearing it"
)
project6 = Project.create!(title: "Bat Purse",
        campaign: "A spooky bat purse makes a wonderful addition for any Chiroptera lovers!",
        risks_and_challenges: "There may be delays in shipping due to my manufacturer being located in Beijing, including but not limited to: the current COVID-19 pandemic, holidays, or weather.",
        author_id: user7.id,
        amount_pledged: 531,
        funding_goal: 2750,
        end_date: Date.new(2021,8,15),
        category_id: category0.id,
        location: "Danville, CA",
        description: "This purse is made out of high-quality PU leather (non-animal product!) and features bat ear handles, detachable and adjustable crossbody strap, PU leather wings, two feet, and blood-red accent colors on the sides and inside of the purse adorned with a star-shipped zipper pull to complete the look!💕"
)

project7 = Project.create!(title: "BEEF BROS: The aspirational superhero comic",
        campaign: "Two happy-go-lucky himbo bodybuilders stand up for their community, pushing back against sadistic cops and greedy landlords!",
        risks_and_challenges: "I know the many challenges of putting a comic together and getting it into the hands of readers and will always meet those challenges with proper planning and communication.",
        author_id: user8.id,
        amount_pledged: 24084,
        funding_goal: 15000,
        end_date: Date.new(2021,5,19),
        category_id: category1.id,
        location: "Los Angeles, CA",
        description: "In the beginning, superheroes were all about one thing: Protecting the little guy, gal, or nonbinary pal. But somewhere along the way that got lost, as capes transformed from populist defenders of the working class to glorified supercops. Enter BEEF BROS, a revolutionary, leftist take on superheroes by Aubrey Sitterson (No One Left to Fight, The Comic Book Story of Professional Wrestling) and Tyrell Cannon (Eris, Speculative Relationships)."
)

project8 = Project.create!(title: "PENLIK V10",
        campaign: "Penlik v10 Made for Everyday Carry Slim Gentelman Knife using innovative technology.",
        risks_and_challenges: "We have made many amendments to every detail to ensure that the uses are practical and you could use it with confidence. The version you see is already a finish and 100% tested sample of the production stage.",
        author_id: user9.id,
        amount_pledged: 24084,
        funding_goal: 15000,
        end_date: Date.new(2021,1,19),
        category_id: category2.id,
        location: "Milano, Italy",
        description: "My idea behind this PENLIK V10 was to make a traditional pocket knife that is based on old European grand dads pocket knife in a new style. What I like about these knives is its elegant lines and often large handle in relation to the small VG10 damascus blade."
)

project9 = Project.create!(title: "Temper Tantrum",
        campaign: "Two Short Films About Dance",
        risks_and_challenges: "The biggest challenge of this project is booking the venues, rehearsal space, choreographers, production team, and paying the dancers what they deserve for this shoot.",
        author_id: user10.id,
        amount_pledged: 4221,
        funding_goal: 12000,
        end_date: Date.new(2021,4,1),
        category_id: category3.id,
        location: "Pasadena, CA",
        description: "The purpose of this Jumpstarter is to fully realize the potential of these short films while being able to pay the dancers, crew, and venue the amount they deserv"
)

project10 = Project.create!(title: "MÄNNKITCHEN Pepper Cannon: The Pepper Mill for Pepper Lovers",
        campaign: "Pepper your steak in 7 cranks instead of 70.",
        risks_and_challenges: "There is a risk that suppliers will experience production delays. In our experience, production delays are expected.",
        author_id: user11.id,
        amount_pledged: 84912,
        funding_goal: 10000,
        end_date: Date.new(2021,4,5),
        category_id: category4.id,
        location: "Seattle, WA",
        description: "Two years ago it took 73 cranks on my pepper mill to season steak.  I wondered if the same job could be done with less cranking. 786 days, 54 revisions, 11 prototypes,  82 tests, and 4,673 sneezes later, the MÄNNKITCHEN Pepper Cannon was born."
)

project11 = Project.create!(title: "VOES & CO: Vegan boots made from Cactus Leather",
        campaign: "Designer chelsea boots that are both ethically sourced and sustainably made. Vegan shoes made from 100% plant-based Cactus Leather.",
        risks_and_challenges: "Production of the boots at the factory can take up to 90 days as these are hand-made and require time, attention and detail. They are handled with love.",
        author_id: user12.id,
        amount_pledged: 6176,
        funding_goal: 7637,
        end_date: Date.new(2021,7,5),
        category_id: category5.id,
        location: "Vancouver, Canada",
        description: "Two years ago it took 73 cranks on my pepper mill to season steak.  I wondered if the same job could be done with less cranking. 786 days, 54 revisions, 11 prototypes,  82 tests, and 4,673 sneezes later, the MÄNNKITCHEN Pepper Cannon was born."
)

project12 = Project.create!(title: "THE GARAGE LEARNING: The Next Generation Online Film School",
        campaign: "Create Amazing Commercial Videos and Learn Creative Problem Solving with our Online Courses, fun Learning Toolkits & Expert Workshops.",
        risks_and_challenges: "We need to carry out the execution on all these plans, go from prototype to more mass production on the kits, and build the final website. ",
        author_id: user13.id,
        amount_pledged: 247409,
        funding_goal: 399200,
        end_date: Date.new(2021,7,5),
        category_id: category6.id,
        location: "New York, NY",
        description: "We are creating THE GARAGE LEARNING  with one fundamental idea in mind, to teach you how to make amazing commercial videos from start to finish. We will do this through Online Courses, Fun Learning Kits, and robust in-person weekend workshops."
)

project13 = Project.create!(title: "Cusa Coffee - Mocha and Dirty Chai",
        campaign: "Cold Brew instant coffee using a patented new dehydration technology. We are adding Mocha and Dirty Chai flavors.",
        risks_and_challenges: "I don't anticipate many risks for this project because we have already done dozens of rounds of production for Cusa Coffee.",
        author_id: user14.id,
        amount_pledged: 8356,
        funding_goal: 5000,
        end_date: Date.new(2021,8,7),
        category_id: category7.id,
        location: "Boulder, CO",
        description: "What do you get when you mix amazing coffee beans with revolutionary botanical extraction technology? You get one of the best cups of coffee you've ever had!

Hi everyone! My name is Jim Lam, the founder and CEO of Cusa Coffee and Tea. I developed the world’s first cold-brew instant coffee because I wanted to create an instant coffee that doesn’t taste burnt, bitter or acidic, but rather as smooth as a fresh cup of gourmet coffee. The best part? My instant coffee mixes beautifully with water of any temperature - hot or iced."
)

project14 = Project.create!(title: "Cthulhu Dark Arts Tarot 🐙",
        campaign: "A complete lavish Cthulhu Mythos tarot deck!",
        risks_and_challenges: "This is our first Kickstarter campaign. As rookies, we knew that we needed support to propose a well-builded campaign and answer to backers expectations. That's why we decided to teamed with veterans as The Crowdfunding Agency who provide us great help and advises in this exciting first project.",
        author_id: user15.id,
        amount_pledged: 180409,
        funding_goal: 41498,
        end_date: Date.new(2021,2,7),
        category_id: category8.id,
        location: "Issoire, France",
        description: "This complete tarot contains 78 illustrated cards including 22 major and 56 minor arcana. Each card will be composed of an illustration and its name in english, with as reference the divinatory Tarot of Marseille."
)

project15 = Project.create!(title: "The Kingston Wire",
        campaign: "A new digital publication all about the City of Kingston, New York.",
        risks_and_challenges: "For any reader supported publication, the biggest risk is the most basic — not enough subscribers. Building and sustaining a paying readership is the central challenge of any digital publication, with success dependent on the quality of the content and the nature of the market.",
        author_id: user16.id,
        amount_pledged: 3576,
        funding_goal: 11947,
        end_date: Date.new(2021,2,11),
        category_id: category9.id,
        location: "Kingston, NY",
        description: "This complete tarot contains 78 illustrated cards including 22 major and 56 minor arcana. Each card will be composed of an illustration and its name in english, with as reference the divinatory Tarot of Marseille."
)

project16 = Project.create!(title: "ALCHEMYSTIC - A new album from Dan Bailey Tribe",
        campaign: "A full length studio album with some of the Tribe's best songs ft special guests Chad Smith, G. Love and Bakithi Kumalo",
        risks_and_challenges: "At first the pandemic gave us the time and space to focus on these songs during the lockdown, allowing us to take the project as far as we could on our own. As independent artists, we have funded all the recording and studio costs ourselves and spent countless hours working on it in our own home studios.",
        author_id: user1.id,
        amount_pledged: 14765,
        funding_goal: 12345,
        end_date: Date.new(2021,3,11),
        category_id: category10.id,
        location: "Montauk, NY",
        description: "ALCHEMYSTIC can be thought of as a spiritual transformation from darkness into lightness through the healing vibrations of music"
)

project17 = Project.create!(title: "Solarcan Colours",
        campaign: "A colorful trio of the world's simplest camera, capable of capturing the path of the Sun over days, weeks, months or years.",
        risks_and_challenges: "We have already sourced and put on hold enough stock to run the first 1000 Solarcan Colours packs and don't believe this to be an issue.",
        author_id: user17.id,
        amount_pledged: 16752,
        funding_goal: 6642,
        end_date: Date.new(2021,10,3),
        category_id: category11.id,
        location: "The Scottish Borders, UK",
        description: "Solarcan Colours took the original concept and turbo-charged it! We've redesigned the look of Solarcan for a more colourful appearance and made some adjustments inside, with each one producing a different result."
)

project18 = Project.create!(title: "Legends of 16-Bit Game Development",
        campaign: "A book that celebrates the history of Japanese video game developer Treasure and their games on the Sega Mega Drive / Genesis.",
        risks_and_challenges: "There are risks associated with any project like this, especially related to maintaining the time schedule to get the books in backers’ hands.",
        author_id: user18.id,
        amount_pledged: 3485,
        funding_goal: 15000,
        end_date: Date.new(2021,6,3),
        category_id: category12.id,
        location: "Louisville, KY",
        description: "Legends of 16-Bit Game Development tells the remarkable story of a small Japanese development studio finding its way in the 1990s video game industry. "
)

project19 = Project.create!(title: "A Walls Tale Musical",
        campaign: "A Musical following the rise of a reluctant hero and the fall of a divide.",
        risks_and_challenges: "There are plenty of risks and challenges with putting on a musical and telling a story. The main one being will people like our story and will they come to see it.",
        author_id: user19.id,
        amount_pledged: 54,
        funding_goal: 7113,
        end_date: Date.new(2021,1,3),
        category_id: category14.id,
        location: "Munich, Germany",
        description: "The Musical is about a divide within a Town, which we believe can be translated to what's happening in the world at this very moment. The Musical follows Ethan who has to fight his own battles and beliefs in order to lead the uprising and rebellion. When a wall is built in his town overnight, He and the people from his side of the wall start to plan how they are going to break this divide. What they all don’t realize in doing this is that their own beliefs will be challenged; beliefs like war, fear, love, and racism. Will the Wall Stand or Will It Fall?"
)

project20 = Project.create!(title: "Ensure MoMI’s Future",
        campaign: "Help MoMI reopen and continue its programs dedicated to all aspects of the moving image for audiences around the world.",
        risks_and_challenges: "As with any endeavor in the age of COVID-19, we remain cognizant of the numerous obstacles and challenges to the realization of these goals. ",
        author_id: user1.id,
        amount_pledged: 32569,
        funding_goal: 35000,
        end_date: Date.new(2021,2,3),
        category_id: category0.id,
        location: "New York, NY",
        description: "We need your support for our array of online activities while we prepare to reopen the Museum so that we can bring movies, live events, exhibitions, and media education back to our local and international communities. With your help, we can continue doing the work we’ve been committed to for almost 40 years—curating, enhancing, and creating an ongoing dialogue with the history of film, television, online, and other moving image media—and further develop our existing digital platforms to expand upon this work."
)

project21 = Project.create!(title: "Tasty! A Short Comic Anthology",
        campaign: "A scrumptious anthology of short comics by nine Chicago-based artists.",
        risks_and_challenges: "There’s always a chance we’ll run into print problems -- formatting mistakes on our end, production errors on the printer’s end, etc -- there’s a bunch of stuff that could could slow down delivery.",
        author_id: user2.id,
        amount_pledged: 2738,
        funding_goal: 2400,
        end_date: Date.new(2021,3,2),
        category_id: category1.id,
        location: "Chicago, IL",
        description: "Tasty! is a comic anthology by Let’s Make Comics!, a Chicago-based comic collective. Once a year we pull a theme out of a hat and turn our members loose on it, with weird and wonderful results. This year we explore gustatory experiences! Mm-MM!"
)

project22 = Project.create!(title: "Tin Shed Soap - Natural, ethical soaps",
        campaign: "Scaling up Tin Shed Soap production to bring beautiful, natural and ethical soaps to everyone!",
        risks_and_challenges: "I already make a ton of soap, and the recipes have been refined and chemically tested so your rewards are pretty much guaranteed.",
        author_id: user3.id,
        amount_pledged: 2202,
        funding_goal: 1997,
        end_date: Date.new(2021,4,12),
        category_id: category2.id,
        location: "Penmachno, UK",
        description: "Yes indeedy, when it's going well it is both super slow and yet all about precise timings -  it's messy, there are hazardous chemicals involved, but I love it. And so do lots of you it seems, which has led to Tin Shed Soap inching that bit further towards being an actual proper real life business, but to get properly set up and Go big or go home I'm going to need your help!"
)

project23 = Project.create!(title: "Supporting Change. Spreading Kindness, Love & Positivity!",
        campaign: "This is a movement of positivity. The ChadChange is accepting of all races, genders, ethnicity and orientations. We pass no judgement.",
        risks_and_challenges: "Legal documentation to setup a foundation and cover all liabilities that could be encountered.
Facility that would be used as base of operations.",
        author_id: user4.id,
        amount_pledged: 1,
        funding_goal: 5000,
        end_date: Date.new(2021,4,22),
        category_id: category3.id,
        location: "Chattanooga, TN",
        description: "Our goal is that, through this movement, we will be able to create a foundation whose purpose will be to offer opportunities to support those that are suffering from anxiety and depression that could lead to suicide and childhood cancer."
)

project24 = Project.create!(title: "Elephant Cuppa | An Eco Tumbler For Boba and Smoothie Lovers",
        campaign: "A reusable, portable & boba friendly eco tumbler designed to replace single-use plastic for good.",
        risks_and_challenges: "We've spent months perfecting the design. In order to bring this project to reality, we've already invested in the tooling. We are confident that as soon as the campaign ends, we'll be able to go ahead with production without any delay.",
        author_id: user5.id,
        amount_pledged: 33638,
        funding_goal: 7500,
        end_date: Date.new(2021,5,22),
        category_id: category4.id,
        location: "Taipei City, Taiwan",
        description: "At Elephant Cuppa, we design our products with convenience of use and durability in mind. We aim to help reduce the use of disposable products, minimize pollution and damage to the environment caused by plastic waste"
)

project25 = Project.create!(title: "Dinner Party Darling Cloth Napkins",
        campaign: "A collection of luxury sustainable cloth napkins made in USA",
        risks_and_challenges: "The main risk to this project is the COVID pandemic, which could affect timelines depending on production schedules/closures. ",
        author_id: user6.id,
        amount_pledged: 101,
        funding_goal: 1700,
        end_date: Date.new(2021,6,5),
        category_id: category5.id,
        location: "Greenville, SC",
        description: "The goal is to create a sustainable and ethical business from start to finish. The fabric is printed in North Carolina, and all prints come from small independent print designers, who earn a commission from every fabric purchase. The fabric is then shipped to my production partner in Florida, a fantastic woman-owned facility outside of Fort Lauderdale."
)

project26 = Project.create!(title: "Commando Ninja II: Invasion America",
        campaign: "Commando Ninja II: Invasion America is an indie over-the-top Action / Comedy feature, a tribute to the Action Hero Movies of the 1980s.",
        risks_and_challenges: "COMMANDO NINJA 2 is a very ambitious project. The good news is that everything is already written and planned, we just need the money to do it!
Casting, Locations, Crew, Script, it's READY!",
        author_id: user1.id,
        amount_pledged: 27300,
        funding_goal: 59365,
        end_date: Date.new(2021,7,5),
        category_id: category6.id,
        location: "Montpellier, France",
        description: "Our movie was screened all over the world in theaters, festivals, and was acclaimed as a true and sincere tribute to the classic Action Heroes era."
)

project27 = Project.create!(title: "Cooking with Alcohol",
        campaign: "Discover over 100 easily accessible recipes where alcohol is the key ingredient, and learn why it deserves a firm place in your kitchen",
        risks_and_challenges: "This is a low risk project: we have already signed a contract with Lendal Press to publish this book. With a publisher secured it's one of the most substantial hurdles passed that many books face.",
        author_id: user2.id,
        amount_pledged: 13219,
        funding_goal: 5592,
        end_date: Date.new(2021,8,5),
        category_id: category7.id,
        location: "Bath, UK",
        description: "We've written and photographed over 100 recipes where alcohol is the main ingredient, and we can't wait to share them with you! "
)

project28 = Project.create!(title: "Cocktail Cards: 52 Classic Cocktail Recipe Deck
",
        campaign: "All the cocktails you need to know in a proper deck of playing cards.

",
        risks_and_challenges: "The graphic design work has all been done in-house so we have control over that. Our manufacturer is a well-regarded and established business making a product they know better than anyone so that minimises any risk in the manufacturing process. We have also confirmed that they are still operating normally given the latest COVID-19 restrictions in the UK.",
        author_id: user3.id,
        amount_pledged: 35577,
        funding_goal: 1597,
        end_date: Date.new(2021,9,7),
        category_id: category8.id,
        location: "London, UK",
        description: "The ultimate cocktail reference guide. All the cocktails you need to know, and how to make them, in one deck of quality playing cards. "
)

project29 = Project.create!(title: "W*MEN",
        campaign: "A book about good female representation in videogames",
        risks_and_challenges: "The book, except a few changes, is done. The design and printing shouldn't be a problem as I already know the printing shop I'll use to get the best result as possible.",
        author_id: user4.id,
        amount_pledged: 249,
        funding_goal: 3086,
        end_date: Date.new(2021,10,17),
        category_id: category9.id,
        location: "Milan, Italy",
        description: " W*men was created as a thesis project for the end of my Graphic Design and Art Direction program at the Nuova Accademia di Belle Arti in Milan, Italy. It's a book about the good side of female representation in videogames."
)

project30 = Project.create!(title: "Firewatch Original Soundtrack on Vinyl
",
        campaign: "Help me do a new manufacturing run of the Firewatch soundtrack vinyl, which has been out of print for years!",
        risks_and_challenges: "The biggest risk I can imagine is simply that there isn't enough demand to justify a print run—which is exactly why I'm doing this through Kickstarter. I want to ensure the interest is there.",
        author_id: user5.id,
        amount_pledged: 41804,
        funding_goal: 3000,
        end_date: Date.new(2021,11,17),
        category_id: category10.id,
        location: "Seatle, WA",
        description: "In 2016, I was part of the small Campo Santo team that released Firewatch, a first-person narrative suspense game set in the Wyoming wilderness. In addition to working on its game design, story, and audio, I was the composer and performer of its original soundtrack, which we released digitally as well as on vinyl record featuring beautiful cover art by the talented Olly Moss."
)

project31 = Project.create!(title: "The Swiss Alps
",
        campaign: "Black and white calendar

",
        risks_and_challenges: "The layout is ready to be printed by a printer based in Switzerland.",
        author_id: user6.id,
        amount_pledged: 2,
        funding_goal: 2196,
        end_date: Date.new(2021,12,9),
        category_id: category11.id,
        location: "Sion, Switzerland",
        description: "The Alps are a symbol of the Swiss landscapes. I want you to discover them through my lens. With this desk calendar, I hope you will travel, dream, escape or simply take a break from your daily routine or work. I believe that the contemplation of his photographs will provide you a brief time of thinking or relaxation."
)

project32 = Project.create!(title: "Blockchain Unchained: The Ultimate Crypto-Culture Bible
",
        campaign: "Fun. Irreverent. Offbeat. Inspirational. We're putting together the ultimate book democratizing blockchain and cryptocurrencies ⛓",
        risks_and_challenges: "Our main challenge is to create a book that appeals to both blockchain-cryptocurrency enthusiasts as well as newbies who have not yet been able to grasp the issues in their entirety.",
        author_id: user1.id,
        amount_pledged: 16752,
        funding_goal: 6642,
        end_date: Date.new(2021,5,19),
        category_id: category12.id,
        location: "Paris, France",
        description: "FUN. IRREVERENT. OFFBEAT. INSPIRATIONAL.
WE'RE PUTTING TOGETHER THE ULTIMATE BOOK DEMOCRATIZING BLOCKCHAIN AND CRYPTOCURRENCIES"
)

project33 = Project.create!(title: "Light Speaker — A portable sound and light experience.",
        campaign: "Glows like a real flame together with your music. A Bluetooth speaker, built to last a lifetime.",
        risks_and_challenges: "Both our previous campaigns were delayed but finally delivered to great praise. It has really taught us about transparency and the bottlenecks of producing something great (without compromising anything) at scale.",
        author_id: user1.id,
        amount_pledged: 104851,
        funding_goal: 44000,
        end_date: Date.new(2022,6,18),
        category_id: category13.id,
        location: "Stockholm, Sweden",
        description: "The Light Speaker is a portable bluetooth speaker inspired by a traditional lantern. It has a simple and functional form. The light feels like a real flame, glowing together with your music."
)

project34 = Project.create!(title: "My Little Caucasian Heart
",
        campaign: "A play about justice, love and revolution Help us to fulfill this dream!

",
        risks_and_challenges: "Risks and challenges. One of the risks that our production has is that we return to a red light and we cannot premiere.",
        author_id: user1.id,
        amount_pledged: 1525,
        funding_goal: 1246,
        end_date: Date.new(2022,7,8),
        category_id: category14.id,
        location: "Mexico City, Mexico",
        description: "Since 2017 when we entered the race, we decided to create a theater company when we graduated ... the time to do it came. My Little Caucasian Heart is an adaptation written by Servando Anacarsis Ramos of the original work The Caucasian Chalk Circle by Ruth Berlau and Bertolt Brecht. We have identified a lot with this work because we are aware of what is happening in the world, especially in our country, and we refuse to sit around and do nothing about it. "
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

file6 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/batpurse.png")
project6.photo.attach(io: file6, filename: "img_#{project6.id}.png")

file7 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/beef_bros.jpg")
project7.photo.attach(io: file7, filename: "img_#{project7.id}.png")

file8 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/knife.jpeg")
project8.photo.attach(io: file8, filename: "img_#{project8.id}.png")

file9 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/temper_tantrum.jpg")
project9.photo.attach(io: file9, filename: "img_#{project9.id}.png")

file10 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/pepper.jpg")
project10.photo.attach(io: file10, filename: "img_#{project10.id}.png")

file11 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/boots.png")
project11.photo.attach(io: file11, filename: "img_#{project11.id}.png")

file12 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/garage.gif")
project12.photo.attach(io: file12, filename: "img_#{project12.id}.png")

file13 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/coffee.jpg")
project13.photo.attach(io: file13, filename: "img_#{project13.id}.png")

file14 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/tarot.jpeg")
project14.photo.attach(io: file14, filename: "img_#{project14.id}.png")

file15 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/kingston.png")
project15.photo.attach(io: file15, filename: "img_#{project15.id}.png")

file16 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/alchemystic.jpg")
project16.photo.attach(io: file16, filename: "img_#{project16.id}.png")

file17 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/solarcan.jpg")
project17.photo.attach(io: file17, filename: "img_#{project17.id}.png")

file18 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/16bit.jpg")
project18.photo.attach(io: file18, filename: "img_#{project18.id}.png")

file19 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/wall.jpg")
project19.photo.attach(io: file19, filename: "img_#{project19.id}.png")

file20 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/museum.jpg")
project20.photo.attach(io: file20, filename: "img_#{project20.id}.png")

file21 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/tasty.jpg")
project21.photo.attach(io: file21, filename: "img_#{project21.id}.png")

file22 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/soap.jpg")
project22.photo.attach(io: file22, filename: "img_#{project22.id}.png")

file23 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/kindness.jpeg")
project23.photo.attach(io: file23, filename: "img_#{project23.id}.png")

file24 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/barista.png")
project24.photo.attach(io: file24, filename: "img_#{project24.id}.png")

file25 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/napkin.jpeg")
project25.photo.attach(io: file25, filename: "img_#{project25.id}.png")

file26 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/ninja.jpg")
project26.photo.attach(io: file26, filename: "img_#{project26.id}.png")

file27 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/alcohol.png")
project27.photo.attach(io: file27, filename: "img_#{project27.id}.png")

file28 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/cocktail.png")
project28.photo.attach(io: file28, filename: "img_#{project28.id}.png")

file29 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/women.jpg")
project29.photo.attach(io: file29, filename: "img_#{project29.id}.png")

file30 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/vinyl.png")
project30.photo.attach(io: file30, filename: "img_#{project30.id}.png")

file31 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/swissalps.jpg")
project31.photo.attach(io: file31, filename: "img_#{project31.id}.png")

file32 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/blockchain.jpg")
project32.photo.attach(io: file32, filename: "img_#{project32.id}.png")

file33 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/speaker.jpg")
project33.photo.attach(io: file33, filename: "img_#{project33.id}.png")

file34 = open("https://jumpstarter-seed.s3-us-west-1.amazonaws.com/caucasian.jpeg")
project34.photo.attach(io: file34, filename: "img_#{project34.id}.png")

reward1 = Reward.create!(project_id: project1.id, title: "You are the BEST", description: "You will have a branded t-shirt with school logo", estimated_delivery: Date.new(2021,5,12), shipping_loc: "Anywhere in the world", cost: 50)
reward2 = Reward.create!(project_id: project2.id, title: "FULLED-SIZED REPLICA HOVERBOARD", description: "Display it how you like - prominently on a wall, proudly on a stand, just don't throw it in the basement or attic!", estimated_delivery: Date.new(2021,6,12), shipping_loc: "Anywhere in the world", cost: 449)
reward3 = Reward.create!(project_id: project3.id, title: "EarlyBird - NightPods", description: "Limited Earlybird discount. A pair of NightPods. RRP $279 (saving $130)", estimated_delivery: Date.new(2021,2,12), shipping_loc: "Only certain countries", cost: 115)
reward4 = Reward.create!(project_id: project4.id, title: "Early Bird Special", description: "Get a special discounted price on our book celebrating the impact of the smiley face. You'll get the $20 book for $15 in advance of general release. Perfect for your night stand, coffee table, or book shelf.", estimated_delivery: Date.new(2021,6,1), shipping_loc: "Anywhere in the world", cost: 15)
reward5 = Reward.create!(project_id: project5.id, title: "Launch Special | 1x Gravity Jacket", description: "Get ONE Gravity Jacket in the size and color of your choice (you'll choose later).", estimated_delivery: Date.new(2021,7,12), shipping_loc: "Anywhere in the world", cost: 149)
reward6 = Reward.create!(project_id: project6 .id, title: "Bat Purse", description: "One bat purse perfectly wrapped and shipped to you + a free bat sticker!.", estimated_delivery: Date.new(2021,9,12), shipping_loc: "Anywhere in the world", cost: 75)
reward7 = Reward.create!(project_id: project7.id, title: "BEEF BROS #1 physical copy (early bird)", description: "Physical copy of BEEF BROS #1, inclusion on THANK YOU page.", estimated_delivery: Date.new(2021,6,12), shipping_loc: "Anywhere in the world", cost: 8)
reward8 = Reward.create!(project_id: project8.id, title: "1 X Penlik V10 ((Single Pack))", description: "- Blade VG10 Damascus twisted, -Choose handle matrial after the campaign(Rose,Olive wood, Camel Bone)", estimated_delivery: Date.new(2021,3,12), shipping_loc: "Anywhere in the world", cost: 60)
reward9 = Reward.create!(project_id: project9.id, title: "Digital Download", description: "Get early viewing of the film PLUS a digital download.", estimated_delivery: Date.new(2021,5,21), shipping_loc: "Anywhere in the world", cost: 25)
reward10 = Reward.create!(project_id: project10.id, title: "$31 OFF the Pepper Cannon", description: "Get $31 OFF the Pepper Cannon MSRP of $199 for only $169 with FREE SHIPPING anywhere in the US (international shipping is $22).", estimated_delivery: Date.new(2021,5,23), shipping_loc: "Anywhere in the world", cost: 25)
reward11 = Reward.create!(project_id: project11.id, title: "Early Bird VIP Pricing", description: "Special VIP pricing of our designer boots made from vegan Cactus Leather for the first 25 backers.", estimated_delivery: Date.new(2021,8,23), shipping_loc: "Anywhere in the world", cost: 150)
reward12 = Reward.create!(project_id: project12.id, title: "1 Yr Intermediate/Advanced Subscription", description: "For The Garage Learning's first year, you'll have access to all Beginner & Intermediate/Advanced level classes.", estimated_delivery: Date.new(2021,8,23), shipping_loc: "Anywhere in the world", cost: 199)
reward13 = Reward.create!(project_id: project13.id, title: "14 Servings of Coffee", description: "Get 14 total cups of coffee, 7 Mocha and 7 Dirty Chai. That's $1.07 per cup!", estimated_delivery: Date.new(2021,9,23), shipping_loc: "Anywhere in the world", cost: 15)
reward14 = Reward.create!(project_id: project14.id, title: "INNSMOUTH EDITION", description: "All 78 cards printed in colors (85 x 165 mm / 3.34 x 6.49) packed in an tuck box + a booklet", estimated_delivery: Date.new(2021,3,23), shipping_loc: "Anywhere in the world", cost: 30)
reward15 = Reward.create!(project_id: project15.id, title: "One Year Digital Subscription", description: "Read all of Kingston Wire on your desktop or mobile device for one year, with optional daily alerts and an email digest.", estimated_delivery: Date.new(2021,3,23), shipping_loc: "Anywhere in the world", cost: 55)
reward16 = Reward.create!(project_id: project16.id, title: "ALCHEMYSTIC CD", description: "Be the first to get your hands on a physical copy of the new ALCHEMYSTIC album on CD. Also included in all physical rewards over $22.", estimated_delivery: Date.new(2021,4,23), shipping_loc: "Anywhere in the world", cost: 22)
reward17 = Reward.create!(project_id: project17.id, title: "The Solarcan Classic", description: "The Solarcan Classic. The original retail packaged extreme time exposure camera. Everything you need if you're a beginner!", estimated_delivery: Date.new(2021,11,23), shipping_loc: "Anywhere in the world", cost: 15)
reward18 = Reward.create!(project_id: project18.id, title: "Gaming Fanatic", description: "Get one copy of the book, a 7x10-inch premium softcover book with approximately 250 full-color glossy pages.", estimated_delivery: Date.new(2021,8,23), shipping_loc: "Anywhere in the world", cost: 30)
reward19 = Reward.create!(project_id: project19.id, title: "Signed Copy of the Script.", description: "Get a signed copy of the Script.", estimated_delivery: Date.new(2021,1,23), shipping_loc: "Anywhere in the world", cost: 25)
reward20 = Reward.create!(project_id: project20.id, title: "MoMI Zoom background and Twitch emotes", description: "Bring MoMI’s atmosphere to your device with a virtual Zoom background of our Redstone Theater and MoMI emotes for Twitch for your next video chat.", estimated_delivery: Date.new(2021,1,23), shipping_loc: "Anywhere in the world", cost: 15)
reward21 = Reward.create!(project_id: project21.id, title: "All The PDFs", description: "PDFs of TASTY! as well as our last five anthologies: THIS MAKES ME SAD, OUT OF THE DEEP, FORGOTTEN HISTORY, MYSTERY, and MARS!", estimated_delivery: Date.new(2021,3,26), shipping_loc: "Anywhere in the world", cost: 15)
reward22 = Reward.create!(project_id: project22.id, title: "Get a full set of 8 sample size (50g) vegetarian soaps plus a sisal shower scrub bag and a 15g vegan organic lip balm.", description: "Get a full set of 8 sample size (50g) vegetarian soaps plus a sisal shower scrub bag and a 15g vegan organic lip balm.", estimated_delivery: Date.new(2021,2,13), shipping_loc: "Anywhere in the world", cost: 15)
reward23 = Reward.create!(project_id: project23.id, title: "$100 Donation -Tik Tok Shout Out", description: "For this reward when you donation $100 you will receive a shoutout by Chad during his next live that he has. These donations go towards fund to later help establish this movement into a working foundation.", estimated_delivery: Date.new(2021,4,3), shipping_loc: "Anywhere in the world", cost: 100)
reward24 = Reward.create!(project_id: project24.id, title: "Pledge HK$ 224 or more", description: "Get 1 Elephant Cuppa basic pack!
US$ 29
26% off the retail price ($39)!
You'll select your size and color in a post-campaign survey.", estimated_delivery: Date.new(2021,5,15), shipping_loc: "Anywhere in the world", cost: 224)
reward25 = Reward.create!(project_id: project25.id, title: "Thank You!", description: "Pledge $5 just to help support this business without a reward. Your support is greatly appreciated!", estimated_delivery: Date.new(2021,6,5), shipping_loc: "Anywhere in the world", cost: 5)
reward26 = Reward.create!(project_id: project26.id, title: "Your Name in the End Credits", description: "Welcome to the Club! You'll be able to say to your friends 'I contributed to create the sequel of the most epic love letter to the 80's Action Movies!'
And prove it by showing them your name in the closing credits of the movie!", estimated_delivery: Date.new(2021,7,7), shipping_loc: "Anywhere in the world", cost: 10)
reward27 = Reward.create!(project_id: project27.id, title: "Cooking with Alcohol e-book", description: "Way more transportable, same amazing recipes!", estimated_delivery: Date.new(2021,8,27), shipping_loc: "Anywhere in the world", cost: 25)
reward28 = Reward.create!(project_id: project28.id, title: "1 pack of Cocktail Cards", description: "Deck of cards, including 52 cocktail recipes and 2 jokers", estimated_delivery: Date.new(2021,9,28), shipping_loc: "Anywhere in the world", cost: 13)
reward29 = Reward.create!(project_id: project29.id, title: "W*MEN - Early Bird", description: "The book at a discounted price!", estimated_delivery: Date.new(2021,10,30), shipping_loc: "Anywhere in the world", cost: 35)
reward30 = Reward.create!(project_id: project30.id, title: "Firewatch Soundtrack on Vinyl
", description: "A copy of the Firewatch original soundtrack on high-quality vinyl.", estimated_delivery: Date.new(2021,11,2), shipping_loc: "Anywhere in the world", cost: 30)
reward31 = Reward.create!(project_id: project31.id, title: "Calender", description: "Desk Calendar", estimated_delivery: Date.new(2021,12,4), shipping_loc: "Anywhere in the world", cost: 33)
reward32 = Reward.create!(project_id: project32.id, title: "CRYPTO CURIOUS", description: "Our eternal gratitude (and your name on our thank you webpage!)", estimated_delivery: Date.new(2021,4,14), shipping_loc: "Anywhere in the world", cost: 10)
reward33 = Reward.create!(project_id: project33.id, title: "Early Bird: Light Speaker
", description: "Receive one Light Speaker
Retail price $370", estimated_delivery: Date.new(2021,5,22), shipping_loc: "Anywhere in the world", cost: 230)
reward34 = Reward.create!(project_id: project34.id, title: "Thanks in our networks!", description: "Some of the members of our collective will thank you on our social networks, both on facebook and on the official instagram of Montón de Irreverentes!", estimated_delivery: Date.new(2021,6,21), shipping_loc: "Anywhere in the world", cost: 100)

projects = Project.all.to_a
backers = User.all.to_a
backings_hash = Hash.new {|h,k| h[k] = []}

projects.each do |project|
        until backings_hash[project.id].length == 2
                backer = backers.sample
                if !backings_hash[project.id].include?(backer.id) && project.author_id != backer.id
                        backings_hash[project.id] << backer.id
                end
        end
        backings_hash[project.id].each do |backer|
                Backing.create!(backing_amount: project.rewards[0].cost, backer_id: backer, reward_id: project.rewards[0].id, project_id: project.id)
        end
        backer = backers.sample
        amount = rand(1..1000)
        Backing.create!(backing_amount: amount, backer_id: backer.id, project_id: project.id)
end

# backing1 = Backing.create!(backing_amount: 149, backer_id: user1.id, reward_id: reward5.id, project_id: project5.id)
# backing2 = Backing.create!(backing_amount: 449, backer_id: user6.id, reward_id: reward2.id, project_id: project2.id)
# backing3 = Backing.create!(backing_amount: 100, backer_id: user6.id, reward_id: reward4.id, project_id: project4.id)
# backing4 = Backing.create!(backing_amount: 20, backer_id: user5.id, reward_id: reward2.id, project_id: project1.id)
# backing5 = Backing.create!(backing_amount: 20, backer_id: user2.id, reward_id: reward4.id, project_id: project4.id)
# backing6 = Backing.create!(backing_amount: 25, backer_id: user2.id, project_id: project2.id)
# backing7 = Backing.create!(backing_amount: 50, backer_id: user1.id, project_id: project3.id)
# backing8 = Backing.create!(backing_amount: 449, backer_id: user4.id, reward_id: reward2.id, project_id: project2.id)
# backing9 = Backing.create!(backing_amount: 10, backer_id: user4.id, project_id: project3.id)
# backing10 = Backing.create!(backing_amount: 50, backer_id: user3.id, reward_id: reward1.id, project_id: project1.id)
# backing11 = Backing.create!(backing_amount: 149, backer_id: user1.id, reward_id: reward1.id, project_id: project5.id)