/*  ---------------------------------------------------
    Template Name: Sona
    Description: Sona Hotel Html Template
    Author: Colorlib
    Author URI: https://colorlib.com
    Version: 1.0
    Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Offcanvas Menu
    $(".canvas-open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".canvas-close, .offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("show-offcanvas-menu-wrapper");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    // Search model
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Hero Slider
    --------------------*/
   $(".hero-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        mouseDrag: false
    });

    /*------------------------
		Testimonial Slider
    ----------------------- */
    $(".testimonial-slider").owlCarousel({
        items: 1,
        dots: false,
        autoplay: true,
        loop: true,
        smartSpeed: 1200,
        nav: true,
        navText: ["<i class='arrow_left'></i>", "<i class='arrow_right'></i>"]
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /*------------------
		Date Picker
	--------------------*/
    $(".date-input").datepicker({
        minDate: 0,
        dateFormat: 'dd MM, yy'
    });

    /*------------------
		Nice Select
	--------------------*/
    $("select").niceSelect();

})(jQuery);


    /*------------------
		Blog Post Picture Name
	--------------------*/
  function showFileName(input) {
    const fileName = input.files.length > 0 ? input.files[0].name : "No file selected";
    document.getElementById("file-name").textContent = fileName;
  };

  
    /*------------------
		Services
	--------------------*/  
    // 1) Our “database”
    const roomData = {
      services: {
        head:      "Restaurant Services",
        leader:     "Makindo Caffeteria",
        one:      "At the heart of Makindo Hotel lies more than a hotel—it’s a culinary destination designed to delight every guest. Our in-house restaurant blends local Tanzanian flavors with international flair, offering a refined yet welcoming dining experience for travelers, families, and event guests alike.Whether you’re starting your morning with a fresh, farm-to-table breakfast or winding down with a candlelit dinner, our chefs are passionate about crafting dishes that tell a story. Each plate is made with care, featuring locally sourced ingredients, bold spices, and inventive pairings that celebrate culture and comfort. Enjoy al fresco meals on our garden-view terrace, relax indoors with attentive table service, or request personalized catering for special gatherings and private functions. From rich stews and grilled delicacies to vegetarian creations and gourmet desserts, there’s something for every palate. At LuxeStay, dining isn’t just about eating—it’s about savoring. It’s the aroma that greets you at the door, the clink of glasses in celebration, and the warm smiles that make every guest feel like family.",
        two:  "Our restaurant isn’t just a place to dine—it’s a space where connections are deepened, traditions are honored, and new memories are made around every table. We believe food is one of the sincerest forms of hospitality, and through our carefully curated menus and attentive service, we aim to create moments that linger long after the last bite. Whether you're enjoying an intimate dinner for two, sharing a meal with family, or hosting a group celebration, our restaurant transforms every visit into a meaningful experience. We listen closely to your preferences, accommodate your dietary needs with grace, and bring creativity to every course. It’s our way of saying: you’re not just a guest—you’re part of our story. So come with an appetite, and leave with a sense of belonging. Because at LuxeStay, every dish is a tribute to the people we serve, the culture we celebrate, and the memories we help create.",
      },
      camping: {
        head:      "Gym And Workout Training",
        leader:     "1st Buiding Penthouse",
        one:      "Our state of the art fitness center is designed to help you maintain your workout routine even while you're away from home. Open 24/7 for your convenience, our gym features modern cardio machines, free weights, strength training equipment, and yoga mats. Weather you're looking for a quick morning workout or a full training session, you'll find everthing you nedd in a clean spacious and air-conditioned environment. Complimentary towels, water and realaxing post-workout lounge are are also available to enhance your fitness experience.",
        two:  "Weather you're an avid fitness enthusiast or simply looking to stretch and unwind after a day of travel or work, our hotel gym offers the perfect environment to meet your wellness goal. We understand that staying active plays a vital role in your overall comfort and well-being, which is why we've gone the extra mile to create a space that combines functionality, cleaniness, and comfort. Our commitment to provide a comprehesive guest experience extends beyond just accomodation. We believe in supporting your lifestyle, no matter where your journey takes you. So weather you're squeezing in a quick session before breakfast or dedicating  time to a full-body workout, you'll find our gym, re-energize your body, clear your mind, and make the most of your stay because your health never takes a vacation",
      },
      party: {
        head:      "Event and Party",
        leader:     "Halls lvl 1&2",
        one:      "Our hotel offers two beautifully designed halls, perfect for hosting a wide range of events, from intimate gatherings to grand celebrations. Each hall is equipped with state-of-the-art audio-visual technology, ensuring seamless presentations, performances, or entertainment. The spacious layouts can be customized to suit your needs, whether it’s a wedding, corporate meeting, or birthday party. Our professional event team works closely with you to plan every detail, from seating arrangements to décor, ensuring your vision comes to life. With ample parking and easy accessibility, your guests will enjoy a hassle-free experience. Additionally, our in-house catering service provides delicious menu options tailored to your preferences. Whether you’re hosting 50 or 500 guests, our halls provide the perfect backdrop for unforgettable moments.",
        two:  "Let us take the stress out of party planning with our end-to-end hosting services, designed to make your event flawless. From the initial consultation to the final cleanup, our dedicated team handles everything, including venue setup, catering, and entertainment coordination. Both halls feature elegant interiors and modern amenities, creating a sophisticated atmosphere for any occasion. We offer customizable lighting and sound systems to match the mood of your event, whether it’s a lively dance party or a formal dinner. Our expert chefs craft exquisite menus, with options for plated meals, buffets, or cocktail-style receptions. Guests will also appreciate our convenient location and attentive staff, ensuring a seamless experience. Whether it’s a milestone celebration or a corporate gala, we provide the perfect blend of luxury and convenience to make your event truly special.",
      },
    };

    // 2) Helper to read ?room=xxx
    function getQueryParam(key) {
      return new URLSearchParams(window.location.search).get(key);
    }

    // 3) Populate on load
    document.addEventListener("DOMContentLoaded", () => {
      const key  = getQueryParam("service");
      const data = roomData[key];

      if (!data) {
        document.querySelector(".service .container")
                .innerHTML = "<p>Sorry, we couldn't find that service.</p>";
        return;
      }

      document.getElementById("heading").textContent      = data.head;           
      document.getElementById("person").textContent     = data.leader;
      document.getElementById("text1").textContent      = data.one;
      document.getElementById("text2").textContent  = data.two;
    });

    
    /*------------------
		Rooms Details
	--------------------*/

    // 1) Our “database”
    const roomsData = {
      double: {
        roomBanner: "img/room/room-details2.jpg",
        name:      "Double Room",
        price:     "Tsh 49,999",
        size:      "30 ft²",
        capacity:  "2 Guests",
        gname:    "Mwanaidi Suleiman",
        sname:    "James Msuya",
        bedLabel:  "Bed",
        bed:       "King Bed",
        services:  "Television, Ensuite Bathroom",
        narration: "Cozy yet spacious, our Double Room is perfect for couples or solo travelers seeking comfort and style.",
        reviews: [
          "“Immaculate room with plush bedding—made our weekend getaway perfect.”",
          "“Great value, friendly staff, and that breakfast! Highly recommend.”"
        ]
      },
      family: {
        roomBanner: "img/room/room-details.jpg",
        name:      "Family Room",
        price:     "Tsh 84,999",
        size:      "45 ft²",
        capacity:  "Up to 7 Guests",
        gname:    "Victor Kagose",
        sname:    "Salome Saguda",
        bedLabel:  "Beds",
        bed:       "2 King Beds + Sofa Bed",
        services:  "Wi-Fi, TV, Mini-Fridge, Ensuite Bathroom",
        narration: "Ideal for families, this room offers extra space and flexible sleeping arrangements to keep everyone happy.",
        reviews: [
          "“Our kids loved the extra space. Super comfortable and great views!”",
          "“We could all stretch out—and the staff even set up a crib for our baby.”"
        ]
      },
      premium: {
        roomBanner: "img/room/room-details3.jpg",
        name:      "Premium Room",
        price:     "Tsh 69,999",
        size:      "35 ft²",
        capacity:  "2 Guests",
        gname:    "Edson",
        sname:    "Elisha Ibrahim",
        bedLabel:  "Bed",
        bed:       "King Bed + Lounge Chair",
        services:  "Smart TV, Mini-Bar, Rainfall Shower",
        narration: "Our Premium Room elevates every detail—from luxe linens to high-tech comforts—for an indulgent stay.",
        reviews: [
          "“Best shower I’ve ever had in a hotel—plus the minibar was stocked with local treats.”",
          "“Sleek design, flawless service, and blackout curtains that actually block light.”"
        ]
      },
      luxury: {
        roomBanner: "img/room/room-details5.jpg",
        name:      "Luxury Room",
        price:     "Tsh 99,999",
        size:      "50 ft²",
        capacity:  "Up to 5 Guests",
        gname:    "Alicia Maro",
        sname:    "Helena Mathew",
        bedLabel:  "Beds",
        bed:       "2 King Beds + Daybed",
        services:  "Wi-Fi, TV, AC, Jacuzzi Tub",
        narration: "For those who want it all—space, style, and that little extra touch. The Luxury Room spoils you at every turn.",
        reviews: [
          "“We felt pampered from check-in to check-out—Jacuzzi was divine.”",
          "“Truly luxurious. The perfect base for our city tour and business meetings.”"
        ]
      },
      hall1: {
        roomBanner: "img/room/room-details1.jpg",
        name:      "Event Hall Level One",
        price:     "Tsh 700,000",
        size:      "450 ft²",
        capacity:  "Up to 200 Guests",
        gname:    "Michael Felix",
        sname:    "Big 5 BS",
        bedLabel:  "Seating",
        bed:       "Luxury Sofa Seating",
        services:  "Wi-Fi, AC, In-house Catering, AV Equipment",
        narration: "A versatile space with elegant décor—ideal for weddings, banquets, and corporate gatherings of up to 200 people.",
        reviews: [
          "“Our engagement party was flawless. The lighting and sound were perfect.”",
          "“Top-notch service and the catering team went above and beyond.”"
        ]
      },
      hall2: {
        roomBanner: "img/room/room-details6.jpg",
        name:      "Event Hall Level Two",
        price:     "Tsh 800,000",
        size:      "450 ft²",
        capacity:  "Up to 200 Guests",
        gname:    "Rachel Pamba",
        sname:    "Zephania Abdallah",
        bedLabel:  "Seating",
        bed:       "King-style Sofa Seating",
        services:  "Wi-Fi, AC, Stage, AV Support",
        narration: "An elevated venue with panoramic views—perfect for upscale receptions, gala dinners, and concerts.",
        reviews: [
          "“The view from level two stole the show. Fantastic ambience.”",
          "“Great acoustics and the team made planning a breeze.”"
        ]
      }
    };
document.addEventListener("DOMContentLoaded", () => {
  const key  = getQueryParam("room");
  const data = roomsData[key];

  if (!data) {
    document.querySelector(".room-details .container")
            .innerHTML = "<p>Sorry, we couldn't find that room.</p>";
    return;
  }

  document.getElementById("room-name").textContent      = data.name;
  document.getElementById("guest1").textContent          = data.gname;
  document.getElementById("guest2").textContent          = data.sname;
  document.getElementById("room-price").textContent      = data.price;
  document.getElementById("room-size").textContent       = data.size;
  document.getElementById("room-capacity").textContent   = data.capacity;

  document.getElementById("bed-or-seats-label").textContent = data.bedLabel + ":";
  document.getElementById("room-bed").textContent           = data.bed;

  document.getElementById("room-services").textContent  = data.services;
  document.getElementById("room-narration").textContent = data.narration;

  document.getElementById("review-1").textContent = data.reviews[0];
  document.getElementById("review-2").textContent = data.reviews[1];

  // 🖼️ Now updating the <img> banner
  document.getElementById("bannerRoom").src = data.roomBanner;
});    
    /*------------------
		Blog Details
	  --------------------*/
    
  const blogs = {
    traveling: {
      event: "Travelling Tip",
      heading: "The Freedom of Traveling Light:",
      date: "17th January, 2025",
      author: "David M.",
      narration: "Packing less isn’t just about saving space—it’s about freeing yourself from unnecessary stress and unlocking a smoother, more enjoyable travel experience. When you travel light, you move faster, think clearer, and stay more present in every moment of your journey. Imagine arriving at the airport without the dread of checked baggage fees or the fear of lost luggage. Picture yourself breezing past crowds waiting at the carousel while you head straight to your adventure. With just a carry-on or a well-packed backpack, you eliminate delays, reduce decision fatigue, and keep your belongings secure and within reach at all times. Traveling light also means less physical strain. Dragging heavy suitcases through cobblestone streets, up narrow staircases, or onto crowded trains can turn a dream trip into an exhausting chore. A lighter load keeps you agile—whether you’re hopping on a last-minute bus, navigating a bustling market, or changing accommodations on a whim. Beyond convenience, minimal packing encourages mindfulness. You learn to prioritize what truly matters, letting go of 'just in case' items that only add weight. Instead of fussing over outfits or gadgets, you focus on experiences—the people you meet, the flavors you taste, the unexpected detours that become the best memories. And when you return home, you won’t face the usual mountain of unused clothes and forgotten souvenirs. Instead, you’ll carry only what you needed—and the lightness of a trip well spent. So next time you pack, ask yourself: Do I really need this? The less you bring, the more space you leave for adventure.",
      heading2: "A Journey Unburdened",
      narration2: "There’s a certain magic in stepping off a plane, train, or bus without the burden of heavy luggage. No waiting at baggage claim, no struggling through crowded streets with an oversized roller bag, no panic when an airline misplaces your suitcase. Just you, your small backpack or carry-on, and the open road ahead. Traveling with less isn’t just about convenience—it’s a mindset shift. When your belongings fit into a single compact bag, you move differently. You’re faster, more flexible, and strangely… lighter, in every sense of the word. Here’s why downsizing your luggage might be the best travel decision you ever make.",
      heading3: "Final Thoughts",
      narration3: "Switching to a small backpack or suitcase may require some adjustment, but the benefits far outweigh the challenges. From saving money to reducing stress, traveling light enhances convenience and freedom. Next time you pack, ask yourself: Do I really need all this? You might be surprised at how little you actually need for a great trip!",
      person1: "Leah Juma",
      comment1: "This place looks unreal! Definitely on my bucket list.",
      person2: "Aisha Selemani",
      comment2: "Loved the cultural touches in the narration!",
      person3: "Balili",
      comment3: "Thanks for the tip 👍👍",
      bannerImage: "img/blog/blog-details/blog-details-hero1.jpg"
    },
    golden: {
      event: "Gold Ratio",
      heading: "Choosing A Perfect Scale",
      date: "4th April, 2025",
      author: "Kija Deus",
      narration: "Dhahabu ni moja kati ya metali nadra na ya thamani zaidi duniani, na kipimo chake kina mchango mkubwa katika mifumo ya kiuchumi, utamaduni, na hata siasa. Tangu enzi za kale, watu wameiamini dhahabu kama kipimo cha utajiri na dhamana thabiti ya thamani. Lakini kwa nini hasa dhahabu inathaminiwa hivyo, na kwa nini mifumo mingi ya fedha ya leo bado inaunganisha thamani yake na sarafu za kisasa? Kwanza, dhahabu ina sifa za kipekee zinazofanya iwe bora kwa kipimo cha thamani. Haichakiki, haioshi, na inaweza kuhifadhiwa kwa muda mrefu bila kuharibika. Tofauti na fedha za karatasi au sarafu za metali nyingine, dhahabu haipotezi thamani yake kwa urahisi, hivyo kwa karne nyingi, imekuwa dhamana salama ya mali. Pia, inakubalika kimataifa—thamani yake iko sawa karibu kila sehemu, hivyo ni rahisi kuitumia kama kigezo cha bei au kifaa cha kubadilishana. Pili, katika historia, dhahabu imekuwa kipimo cha utajiri na nguvu. Misri ya Kale ilitumia dhahabu kwa mapambo ya wafalme na miamala muhimu. Warumi walizenga sarafu za dhahabu (aureus) kuimarisha mfumo wao wa pesa. Wakati wa Ukoloni, nchi za Ulaya zilitegemea dhahabu kutoka Amerika na Afrika kuimarisha mifumo yao ya kiuchumi.",
      heading2: "Thamani Yake Na Historia",
      narration2: "Hii inathibitisha kwamba dhahabu imekuwa kitu cha thamani kwa takriban miaka 5,000. Tatu, leo hii, dhahabu bado ina jukumu muhimu katika uchumi. Inatumika kama kinga dhidi ya mfumuko wa bei na kushuka kwa thamani ya sarafu. Watu huinunua dhahabu wakati wa mazingira ya kiuchumi yasiyo na uhakika, kwani thamani yake haidanganyiki kwa urahisi. Benki kuu za dunia zinaweka akiba ya dhahabu kwa dhamana ya utulivu wa sarafu zao, na wewekezaji wanaitumia kwa ajili ya kupunguza hatari katika soko la hisa na mabenki. Kwa ujumla, kipimo cha dhahabu ni muhimu kwa sababu ya uthabiti wake, umilikaji wa kimataifa, na uwezo wake wa kudumisha thamani kwa muda mrefu. Hata teknolojia na mifumo mpya ya fedha ikiendelea kukua, dhahabu bado ina nafasi yake kama kioo cha utajiri na dhamana salama katika uchumi wa dunia.",
      heading3: "Thamani ya Dhahabu Katika Uchumi na Biashara",
      narration3: "Dhahabu ina sifa kadhaa zinazofanya iwe bora kwa ajili ya kutumika kama kipimo cha thamani: Haichakiki kwa urahisi: Tofauti na fedha au sarafu nyingine, dhahabu haipati kutu na haiharibiki kwa urahisi, hivyo inaweza kuhifadhiwa kwa muda mrefu. Inadumu: Dhahabu haipotei kwa urahisi, hivyo inaweza kutumika kama dhamana ya thamani kwa miongo kadhaa. Inakubalika kimataifa: Dhahabu ina thamani sawa karibu kila sehemu duniani, hivyo ni rahisi kuitumia kama kigezo cha bei au kubadilishana kimataifa.",
      person1: "Eliakim Chona",
      comment1: "Fascinating read—never thought math could be this artistic!",
      person2: "Jonathan",
      comment2: "Loved the examples from famous art pieces.",
      person3: "Zuhura",
      comment3: "Excited to apply this to my next project!",
      bannerImage: "img/blog/blog-details/blog-details-hero2.jpg"
    },
    event: {
      event: "Event",
      heading: "Daniel And Rose Wedding",
      date: "6th June, 2025",
      author: "Deus K.",
      narration: "The grand Hall Level 2 was bathed in golden light, its high ceilings draped with twinkling fairy lights and delicate white flowers. The air was filled with the sweet scent of roses and the soft hum of excited chatter. Tonight was the long-awaited wedding celebration of Daniel and Rose, a couple whose love story had captured the hearts of everyone who knew them. As the clock struck eight, the grand doors swung open, and the newlyweds made their entrance. Daniel, looking dashing in his midnight-blue tuxedo, held Rose’s hand as she glided in, her ivory gown shimmering under the chandeliers. The crowd erupted in cheers, clapping and raising their glasses to the radiant couple. The DJ kicked off the night with a romantic slow dance—Daniel and Rose swayed to Perfect by Ed Sheeran, their eyes locked in a silent promise of forever. The dance floor soon filled with guests, laughter and music blending into the night. Rose’s best friend, Lisa, gave a heartfelt toast that had everyone tearing up, while Daniel’s brother, Mark, lightened the mood with funny childhood stories that left the room in stitches. The cake—a towering masterpiece of vanilla and red velvet—was cut amidst cheers and flashing cameras.",
      heading2: "The Night Wedding Party",
      narration2: "Surrounded by scenic trails, hikers often spot moose and deer...But the real surprise came when the couple had their first dance as husband and wife under a shower of glowing sparklers. Then, as if by magic, the DJ switched to an upbeat Afrobeat rhythm, and the party truly began. Guests danced until their feet ached, the open bar kept the drinks flowing, and even the shyest attendees were pulled into the celebration. At midnight, as the last song played, Daniel lifted Rose into his arms, whispering, 'Best night of my life.'' She laughed, kissing him as the crowd cheered one last time. And just like that, under the stars and the shimmering lights of Hall Level 2, Daniel and Rose’s night wedding party became a memory no one would ever forget.",
      heading3: "Cultural Encounters",
      narration3: "Easly one of the best and memorable wedding party...",
      person1: "Magambo R",
      comment1: "This place looks unreal! Definitely on my bucket list.",
      person2: "Chichi",
      comment2: "Loved the cultural touches in the narration!",
      person3: "Isack",
      comment3: "Thanks for the travel tip!",
      bannerImage: "img/blog/blog-details/blog-details-hero3.jpg"
    },
    affirm: {
      event: "Event",
      heading: "The Day of Unity and Commitment",
      date: "15th June, 2025",
      author: "Daniel H.",
      narration: "The atmosphere was charged with reverence and determination as the senior members of the Army of JWTS (Jehovah’s Witnesses Training School) gathered for their highly anticipated Affirmation Meeting. Held in the grand assembly hall of the JWTS headquarters, the event was a powerful display of faith, unity, and renewed dedication to their spiritual mission. A Gathering of Leaders.The meeting brought together seasoned elders, ministerial servants, and pioneering members who have dedicated years to shepherding and training fellow believers. Dressed in their dignified attire, the seniors entered the hall with a sense of purpose, exchanging warm greetings and words of encouragement. Opening Devotion and Encouraging Words. The program began with an uplifting prayer and song (Psalm 133:1 – 'Look! How good and how pleasant it is for brothers to dwell together in unity!'). The keynote speaker, Brother Samuel Owusu, a longtime servant in the organization, delivered a stirring discourse on 'Standing Firm in Faith Amidst Challenges.'' He emphasized the importance of endurance, humility, and reliance on Jehovah’s guidance in their leadership roles. Affirmation of Commitment. The highlight of the evening was the affirmation ceremony, where each senior member stood to reaffirm their dedication to Jehovah’s work. One by one, they shared brief experiences, expressing gratitude for divine direction and pledging to continue supporting the congregation with zeal. Sister Grace Mensah, a pioneer of over 20 years, moved the audience when she said, 'No matter how old we get, our service to Jehovah never retires. We must keep running the race with endurance!",
      heading2: "Special Recognition and Fellowship",
      narration2: "The organizing committee honored several seniors who had reached significant milestones in their service. A heartfelt video presentation showcased their decades of preaching, shepherding, and training younger members—an emotional moment that drew applause and tears. After the formal program, attendees enjoyed a fellowship meal, strengthening bonds and sharing memories. Laughter and deep conversations filled the room as the seniors exchanged practical advice for overcoming modern-day challenges in the ministry.",
      heading3: "Closing with a Renewed Resolve",
      narration3: "The night ended with a final prayer and song (Isaiah 40:31 – 'Those hoping in Jehovah will regain power... they will run and not grow weary.''). As the seniors departed, there was a renewed sense of purpose—a collective determination to keep leading with love, wisdom, and unshakable faith. This Affirmation Meeting was more than just an event; it was a reminder that in Jehovah’s army, experience, loyalty, and brotherly love remain the strongest weapons.",
      person1: "Kikale",
      comment1: "This place looks unreal! Definitely on my bucket list.",
      person2: "Nassoro Mdach",
      comment2: "🙄🙄🙄🙄",
      person3: "Carlos",
      comment3: "Eti Commitment 🤣🤣",
      bannerImage: "img/blog/blog-details/blog-details-hero7.jpg"
    },
    train: {
      event: "Training",
      heading: "The Surprising Benefits of Working Out at Night",
      date: "15th June, 2025",
      author: "D Machumu.",
      narration: "For many people, finding time to exercise can be a challenge—especially with busy work schedules, family responsibilities, and daily commitments. While morning workouts are often praised for jumpstarting metabolism, nighttime exercise has its own unique advantages. If you're a night owl or simply struggle to fit fitness into your day, here’s why hitting the gym (or your home workout routine) at night might be the perfect solution.",
      heading2: "Health Benefits",
      narration2: "Contrary to the myth that evening workouts disrupt sleep, moderate exercise at night can actually help you unwind. Physical activity releases endorphins, which combat stress and anxiety. A 2019 study in Sports Medicine found that people who exercised in the evening experienced deeper, more restful sleep—as long as the workout wasn’t too intense right before bed. Also it Improved Performance & Strength Your body’s core temperature peaks in the late afternoon and early evening, which means your muscles are more flexible, reaction times are quicker, and strength output is higher compared to mornings. This makes nighttime ideal for weightlifting, HIIT, or sports training.",
      heading3: "The Bottom Line",
      narration3: "Whether you’re burning off the day’s stress or maximizing strength gains, nighttime workouts offer flexibility and unique benefits. Listen to your body—if evenings keep you consistent, embrace the night sweat!",
      person1: "Yusuphu Kulwa",
      comment1: "Kwakweli mi siwezi acha uxingizi. never",
      person2: "Daniel Sawa",
      comment2: "Hauko pekeyako",
      person3: "Rachel Pamba",
      comment3: "Ngazi ni zoezi tosha 😅😅",
      bannerImage: "img/blog/blog-details/blog-details-hero11.jpg"
    },
    tips: {
      event: "Travelling Tip",
      heading: "How to Travell With Kids",
      date: "22th May, 2025",
      author: "David M.",
      narration: "Traveling with kids can be a rewarding experience if planned well, but it can also be challenging if not managed properly. Here’s a step-by-step guide to help you travel smoothly with children. Choose Kid-Friendly Destinations – Opt for places with activities for kids (beaches, parks, zoos, or theme parks).Involve Them in Planning – Let kids help pick activities to keep them excited. Check Travel Requirements – Ensure passports, visas, and vaccinations (if needed) are up-to-date. Pack Smart – Bring essentials (diapers, wipes, snacks, medications, favorite toys, and comfort items) .Book Kid-Friendly Accommodations – Look for family hotels/apartments with kitchens, cribs, or play areas.",
      heading2: "Packing Strategically for Kids’ Needs",
      narration2: "Packing efficiently can make or break your trip with kids. Start by making a checklist of essentials, including extra clothes, diapers, wipes, and weather-appropriate gear. Always pack more snacks than you think you’ll need—hungry kids lead to meltdowns. Bring comfort items like a favorite stuffed animal or blanket to help them sleep in unfamiliar places. Entertainment is key: tablets with downloaded shows, coloring books, and small toys keep them occupied during long journeys. A lightweight stroller or baby carrier is essential for toddlers who tire easily. Don’t forget a basic first-aid kit with band-aids, fever reducers, and motion sickness medication. Labeling bags with your contact info can help if luggage gets lost. Rolling clothes instead of folding saves space and reduces wrinkles. A well-packed bag ensures you’re prepared for any situation.",
      heading3: "Maintaining Routines & Handling Meltdowns",
      narration3: "Kids thrive on routine, so maintaining some structure helps prevent tantrums. Stick to regular meal and nap times as much as possible, even if it means adjusting your itinerary. Bring familiar bedtime items like pajamas and storybooks to ease nighttime transitions. When meltdowns happen, stay calm and address their needs—hunger, tiredness, or overstimulation are common triggers. Distraction works wonders; a small toy or snack can quickly shift their mood. Avoid overscheduling and allow downtime for relaxation. Positive reinforcement, like praising good behavior, encourages cooperation. Teach older kids simple coping strategies, like deep breathing, if they feel overwhelmed. Flexibility is key—sometimes, skipping an activity is better than forcing a miserable experience. A balanced approach keeps the trip enjoyable for everyone.",
      person1: "Donkwashi",
      comment1: "Ambao hatuna watoto 🙄🙄",
      person2: "Tammy",
      comment2: "Haujalazimishwa kufungua",
      person3: "Mansoor Kiyoka",
      comment3: "Formula ya watoto hauelewekegi.",
      bannerImage: "img/blog/blog-details/blog-details-hero6.jpg"
    },
    world: {
      event: "Event",
      heading: "Meeting With the Prime Minister of Tanzania",
      date: "13th May, 2025",
      author: "Asia M.",
      narration: "The atmosphere was electric as executives from World Pay Center (WPC), a leading global fintech firm, gathered in the opulent ballroom of the Luxury Grand Hotel for a high-profile meeting with the Prime Minister. The event, meticulously planned for weeks, was a strategic move to discuss digital payment innovations, financial inclusion policies, and cybersecurity collaborations. The Prime Minister arrived with a delegation of senior officials, underscoring the government’s interest in WPC’s cutting-edge financial solutions. The hotel’s grand chandeliers and polished marble floors set the stage for what would be a pivotal discussion on economic digitization. WPC’s CEO delivered a compelling presentation on how their platform could reduce transaction costs, combat fraud, and expand cashless economies. The Prime Minister praised WPC’s vision, signaling potential policy support for fintech growth.",
      heading2: "Key Discussion Points: WPC’s Proposals to the Government",
      narration2: "During the closed-door session, WPC’s leadership outlined three major initiatives: 1) A nationwide digital wallet rollout to boost financial access in rural areas, 2) A blockchain-based security system to prevent payment fraud, and 3) A public-private partnership to train citizens in digital finance literacy. The Prime Minister engaged deeply, asking about scalability, data privacy, and regulatory compliance. WPC’s CTO demonstrated their AI-driven fraud detection software, which impressed the officials with its real-time threat analysis. The conversation also touched on tax incentives for fintech startups and how WPC could help modernize government payment systems. By the end, both sides agreed to form a joint task force to explore implementation strategies.",
      heading3: "What’s Next for WPC After the Prime Minister’s Endorsement?",
      narration3: "With the government’s tentative support, WPC is now accelerating its Phase Two plans: piloting their digital wallet in select regions, expanding their cybersecurity R&D lab, and lobbying for fintech-friendly legislation. Industry experts predict that WPC’s stock could surge if these policies materialize. Meanwhile, competitors are closely watching how this alliance unfolds, knowing it could reshape the payments landscape. The Prime Minister’s office has scheduled a follow-up summit in three months, where WPC will present a progress report. If all goes well, this partnership could become a case study in how governments and fintech giants can drive economic transformation together.",
      person1: "Diana",
      comment1: "Bigup xana👍👍👍",
      person2: "Aisha",
      comment2: "👍👍",
      person3: "Carlos",
      comment3: "Nimefurahi sana",
      bannerImage: "img/blog/blog-details/blog-details-hero12.jpg"
    },
    party: {
      event: "Event",
      heading: "The Enchanting Wedding of Monroe and Denis Night: A Fairytale Affair",
      date: "20th April, 2025",
      author: "Iddi Mbikilwa",
      narration: "The grand ballroom of the Crystal Aurora Hotel was transformed into a scene straight from a storybook for the breathtaking wedding of Monroe and Denis Night. Every corner of the hall shimmered with cascading crystal chandeliers, their delicate light reflecting off the gilded mirrors and ivory silk drapery. The centerpiece was a floating floral arch, adorned with thousands of blush roses and trailing ivy, under which the couple exchanged vows. The aisle was lined with candlelit lanterns and petals, creating a soft, romantic glow as Monroe made her entrance in a hand-beaded lace gown. The hall’s soaring ceilings and floor-to-ceiling windows allowed golden sunset light to spill in, making the entire space feel like a dream suspended in time. Guests gasped as they took their seats, murmuring about the sheer majesty of the setting—this was no ordinary wedding, but a masterpiece of elegance and love. No detail was overlooked in crafting the perfect ambiance for Monroe and Denis’s special day. The Crystal Aurora’s grand hall was draped in soft champagne satin, with tables covered in pearl-embroidered linens and towering centerpieces of hydrangeas and orchids. Overhead, fairy lights twinkled like stars against a canopy of sheer fabric, creating an illusion of an indoor celestial garden. The dance floor, inlaid with mother-of-pearl tiles, caught the light with every step, while a live orchestra played from a raised dais framed by cascading white blooms. Even the chairs were upholstered in velvet, adding a regal touch to the already breathtaking scene. The hall’s ornate marble pillars were wrapped in delicate vines and fairy lights, making the entire space feel like an enchanted palace. It was clear that every element had been chosen to reflect the couple’s timeless love and impeccable taste.",
      heading2: "The Ceremony: A Moment of Pure Magic Under the Floral Canopy",
      narration2: "As the string quartet began playing a sweeping orchestral rendition of a classic love song, all eyes turned to Monroe, who appeared at the end of the aisle like a vision in white. The floral arch above the altar seemed to glow with an ethereal light, as if nature itself was blessing the union. Denis, waiting beneath it in a tailored midnight-blue tuxedo, looked overcome with emotion as she approached. The hall’s acoustics carried their vows perfectly, each word resonating with heartfelt sincerity. When they kissed, sparklers ignited along the aisle, and golden confetti rained from above, drawing cheers from their guests. The way the candlelight flickered against the crystal décor made the entire moment feel suspended in time—a perfect fusion of grandeur and intimacy. Even the most seasoned wedding planners admitted this was one of the most stunning ceremonies they had ever witnessed.",
      heading3: "The Reception: A Night of Celebration in a Dazzling Wonderland",
      narration3: "After the vows, the hall was effortlessly transformed into a festive wonderland for the reception. The tables now gleamed with gold-rimmed china, crystal glassware, and miniature silver candelabras casting a warm glow over each setting. The newlyweds made their grand entrance through a sparkling curtain of suspended prisms, which scattered rainbows across the dance floor as they took their first steps as a married couple. A five-tiered cake, adorned with sugar flowers and edible gold leaf, stood as a centerpiece, while waiters circulated with champagne flutes and gourmet hors d’oeuvres. The live band’s upbeat melodies had guests dancing beneath a ceiling of hanging garden lanterns, their soft light blending with the chandeliers’ brilliance. As the night wore on, fireworks erupted over the hotel’s gardens, visible through the grand windows and capping off the evening in spectacular fashion. It was a celebration that didn’t just shine—it blazed with beauty, love, and unforgettable glamour.",
      person1: "Asnath Seif",
      comment1: "Nawatakia harusi njema rafiki zangu ❤❤❤",
      person2: "Monroe",
      comment2: "Asante chimama bado ww😅😅",
      person3: "Karlos",
      comment3: "🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣🤣",
      bannerImage: "img/blog/blog-details/blog-details-hero8.jpg"
    },
    hall: {
      event: "Event",
      heading: " Building Champions with Discipline & Passion",
      date: "1th April, 2025",
      author: "David M.",
      narration: "Ashton Hall, training isn’t just about physical endurance—it’s a mindset, a lifestyle, and a science. Our philosophy revolves around precision, consistency, and mental resilience, ensuring every athlete reaches their peak potential. Whether you're a beginner or an elite competitor, our programs are tailored to push limits while preventing burnout. We emphasize proper form over reckless intensity, because longevity in sports requires smart training, not just hard training. Every drill, every rep, and every recovery session is meticulously planned to align with your goals. At Ashton Hall, we don’t just train bodies—we forge champions. Strength is the foundation of every great athlete, and at Ashton Hall, we take a structured, periodized approach to building it. Our weight room is equipped with elite-level gear, but it’s our methodology that sets us apart. We focus on compound lifts (squats, deadlifts, bench press) to build raw power, complemented by explosive plyometrics for speed and agility. Recovery is just as critical—mobility drills, foam rolling, and cryotherapy are integrated to keep muscles supple and injury-free. Whether you're training for football, boxing, or track, our strength programs are custom-built to maximize performance.",
      heading2: "Endurance Training: Stamina That Lasts Beyond the Final Bell",
      narration2: "Endurance isn’t just about running longer—it’s about sustaining peak performance under fatigue. At Ashton Hall, we blend high-intensity interval training (HIIT), long-distance runs, and sport-specific cardio drills to build unshakable stamina. Our altitude training chamber simulates high-elevation conditions, forcing the body to adapt and increase red blood cell production. We also incorporate breathwork techniques to optimize oxygen efficiency, because endurance is as much about lung capacity as it is about leg strength. Whether you're a marathoner, fighter, or soccer player, our endurance protocols will ensure you outlast the competition.",
      heading3: "Mental Toughness: Training the Mind Like a Muscle",
      narration3: "The body quits when the mind allows it—that’s why Ashton Hall prioritizes psychological conditioning just as much as physical training. Through visualization exercises, pressure simulations, and meditation, we teach athletes to stay calm under fire. Our sports psychologists work with competitors to overcome self-doubt, fear of failure, and performance anxiety. We also use biofeedback technology to monitor stress responses, helping athletes control adrenaline and focus under pressure. Because at the highest levels, the strongest mind wins. And No training program is complete without optimal recovery and nutrition. At Ashton Hall, we treat recovery as active, not passive—incorporating contrast baths, percussion therapy, and yoga to accelerate muscle repair. Our in-house sports nutritionists design meal plans that maximize energy, reduce inflammation, and promote lean muscle growth. Supplements are used strategically, not recklessly, with an emphasis on whole foods, hydration, and timed macronutrient intake. Because real champions aren’t made in the gym alone—they’re built in the kitchen, the recovery room, and the mind.",
      person1: "Mikomwngwa",
      comment1: "Hata mimi natoa kozi za kujenga mwili kama jizi",
      person2: "Okeyo Kokinda",
      comment2: "Unatoa kozi kwa beigani",
      person3: "Manji",
      comment3: "Wengine tunapenda vitambi!",
      bannerImage: "img/blog/blog-details/blog-details-hero9.jpg"
    },
  };

// Grab the 'blog' parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const blogKey = urlParams.get("blog");

if (blogKey && blogs[blogKey]) {
  const data = blogs[blogKey];
  for (let key in data) {
    const el = document.getElementById(key);
    if (el) {
      // Handle background image via data-setbg
      if (el.hasAttribute("data-setbg")) {
        el.setAttribute("data-setbg", data[key]);
        el.style.backgroundImage = `url('${data[key]}')`; // Apply it immediately
      }
      // Handle <img> elements
      else if (el.tagName.toLowerCase() === "img") {
        el.src = data[key];
        el.alt = key;
      }
      // Handle other text-based elements
      else {
        el.innerText = data[key];
      }
    }
  }
} else {
  console.warn("Blog content not found.");
}
    
    /*------------------
		       Sign in
	  --------------------*/

  document.addEventListener('DOMContentLoaded', () => {
  const form      = document.getElementById('login-form');
  const nameInput = document.getElementById('full-name');
  const pwInput   = document.getElementById('password');
  const messageEl = document.getElementById('login-message');

  function showMessage(msg) {
    messageEl.textContent = msg;
    messageEl.classList.add('show');
  }

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const pw   = pwInput.value.trim();

    messageEl.classList.remove('show'); // hide old messages

    if (!name || !pw) {
      showMessage('Please fill in Name and Password.');
      return;
    }

    if (name.toLowerCase() === 'deus makindo' && pw === 'Hitman_47') {
      window.location.href = 'blog-post.html';
    } else {
      showMessage('Invalid credentials. Try again.');
    }
  });
});

    
    /*------------------
		    Services Images
	  --------------------*/


  const bgImages = {
    services: 'img/blog/blog-details/blog-details-hero10.jpg',
    camping: 'img/blog/blog-details/blog-details-hero11.jpg',
    party: 'img/blog/blog-details/blog-details-hero12.jpg'
  };

  const detailImages = {
    services: [
      'img/blog/blog-details/blog-details-1.png',
      'img/blog/blog-details/blog-details-2.png',
      'img/blog/blog-details/blog-details-3.png'
    ],
    camping: [
      'img/blog/blog-details/blog-details-4.png',
      'img/blog/blog-details/blog-details-5.png',
      'img/blog/blog-details/blog-details-6.png'
    ],
    party: [
      'img/blog/blog-details/blog-details-7.png',
      'img/blog/blog-details/blog-details-8.png',
      'img/blog/blog-details/blog-details-9.png'
    ]
  };



  const params = new URLSearchParams(window.location.search);
  const selectedService = params.get('service');

  // Update hero background image
  const hero = document.querySelector('.service-details-hero');
  if (hero && bgImages[selectedService]) {
    const bg = bgImages[selectedService];
    hero.setAttribute('data-setbg', bg);
    hero.style.backgroundImage = `url(${bg})`;
  }

  // Update normal images
  const detailImgs = detailImages[selectedService];
  if (detailImgs) {
    const img2 = document.getElementById('img2');
    const img3 = document.getElementById('img3');
    const img4 = document.getElementById('img4');

    if (img2) img2.src = detailImgs[0];
    if (img3) img3.src = detailImgs[1];
    if (img4) img4.src = detailImgs[2];
  };


// Popup animation  
function openPopup() {
  document.getElementById("popupOverlay").classList.add("active");
}

function closePopup() {
  document.getElementById("popupOverlay").classList.remove("active");
}