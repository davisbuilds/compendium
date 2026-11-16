import type { InfluenceArchive } from "./types";

export const archive: InfluenceArchive = {
  "categories": [
    {
      "id": "industry",
      "name": "Industry and invention",
      "short": "Industry",
      "color": "#eea96b",
      "body": "How people turned new products and processes into industries. Follow the machinery behind electric power, telephones, flight, oil refining, steel, instant photography, warehouse retail, and consumer brands."
    },
    {
      "id": "technology",
      "name": "Technology and platforms",
      "short": "Technology",
      "color": "#79d5b5",
      "body": "How products became platforms, and how hardware, software, and distribution reinforced one another. The profiles cover personal computing, the commercial web, e-commerce, social networks, rockets, chips, and virtual reality."
    },
    {
      "id": "capital",
      "name": "Capital and venture",
      "short": "Capital",
      "color": "#e7cf77",
      "body": "How investors and founders decided where to put money, attention, and risk. The cases range from statistical arbitrage and company ownership to early-stage networks and platform bets."
    },
    {
      "id": "science",
      "name": "Science and AI",
      "short": "Science and AI",
      "color": "#afa4f1",
      "body": "How ideas in physics, computation, information theory, and AI became tools for others. The profiles trace scientific results and the organizations that carried them into use."
    },
    {
      "id": "media",
      "name": "Media and influence",
      "short": "Media",
      "color": "#f1979d",
      "body": "How people built audiences, brokered access, or made an information product people returned to. The cases span entertainment, journalism, books, communications, and long-form interviews."
    },
    {
      "id": "performance",
      "name": "Sport and performance",
      "short": "Performance",
      "color": "#8bc9ee",
      "body": "How athletes and leaders built durable practices under pressure, and what happened when their influence extended beyond competition."
    },
    {
      "id": "philosophy",
      "name": "Ancient philosophy",
      "short": "Philosophy",
      "color": "#edb9a5",
      "body": "Greek and Roman thinkers on how to examine a belief, live well, and exercise power."
    }
  ],
  "people": [
    {
      "slug": "heraclitus",
      "name": "Heraclitus",
      "category": "philosophy",
      "role": "Greek philosopher of change and order",
      "intro": "Heraclitus of Ephesus wrote in compressed, often paradoxical sayings. The surviving fragments ask how a world that constantly changes can still have a recognizable order.",
      "milestones": [
        {
          "year": -500,
          "approx": true,
          "text": "Active in Ephesus, in what is now western Türkiye. Later authors preserve fragments from the work attributed to him."
        }
      ],
      "impact": "His account of change became a touchstone for Plato and later philosophers. The river fragment still raises a precise question about identity: what makes something the same across changes in what composes it?",
      "tags": [
        "Change",
        "Identity",
        "Logos",
        "Opposites"
      ],
      "sources": [
        {
          "label": "Stanford Encyclopedia of Philosophy on Heraclitus",
          "url": "https://plato.stanford.edu/archives/spr2024/entries/heraclitus/"
        },
        {
          "label": "Internet Encyclopedia of Philosophy on Heraclitus",
          "url": "https://iep.utm.edu/heraclit/"
        }
      ],
      "ideas": [
        {
          "title": "Persistence through change",
          "text": "The river keeps its identity while different waters flow through it. Some things endure precisely because their parts are continually replaced."
        },
        {
          "title": "Order behind disagreement",
          "text": "The fragments invoke a common logos, an intelligible account of the world that people regularly overlook when they trust their own impressions."
        }
      ],
      "motivation": "Little is known about his life. The opening fragments suggest a philosophical aim: get readers to notice an order they already encounter, by giving them sayings that make familiar experience hard to take for granted.",
      "quote": {
        "text": "On those stepping into rivers staying the same other and other waters flow.",
        "context": "Fragment B12, translated by Daniel W. Graham. The wording survives through a chain of later authors, including Eusebius.",
        "label": "Heraclitus, fragment B12 in the Stanford Encyclopedia of Philosophy",
        "url": "https://plato.stanford.edu/archives/spr2024/entries/heraclitus/#Flu"
      },
      "ideaSources": [
        {
          "label": "Heraclitus on the logos and the river fragments",
          "url": "https://plato.stanford.edu/archives/spr2024/entries/heraclitus/"
        }
      ],
      "portraitNote": "An editorial reconstruction of an ancient philosopher.",
      "id": 52,
      "funFact": "His prose gave Aristotle punctuation trouble. In Rhetoric, Aristotle uses his opening sentence as an example because readers cannot tell which clause the word “always” belongs to.",
      "funFactSource": {
        "label": "Aristotle, Rhetoric III.5, translated by W. Rhys Roberts",
        "url": "https://classics.mit.edu/Aristotle/rhetoric.3.iii.html"
      }
    },
    {
      "slug": "socrates",
      "name": "Socrates",
      "category": "philosophy",
      "role": "Athenian philosopher and public questioner",
      "intro": "Socrates questioned Athenians about courage, justice, and other virtues they claimed to understand. He left no writings, so much of what survives comes from accounts by Plato, Xenophon, and Aristophanes.",
      "milestones": [
        {
          "year": -432,
          "text": "Deployed as an Athenian infantryman to Potidaea, a campaign later recalled in Plato’s dialogues."
        },
        {
          "year": -399,
          "text": "Was tried in Athens for impiety and corrupting the youth, convicted, and executed."
        }
      ],
      "impact": "His questioning made the examination of how to live a central subject of philosophy. The practice of testing beliefs through dialogue remains influential in teaching and legal reasoning.",
      "tags": [
        "Socratic Method",
        "Virtue",
        "Epistemic Humility",
        "Dialogue"
      ],
      "sources": [
        {
          "label": "Stanford Encyclopedia of Philosophy on Socrates",
          "url": "https://plato.stanford.edu/entries/socrates/"
        },
        {
          "label": "Plato’s Apology, translated by Benjamin Jowett",
          "url": "https://www.gutenberg.org/files/1656/1656-h/1656-h.htm"
        }
      ],
      "ideas": [
        {
          "title": "Test a definition against its consequences",
          "text": "Ask someone to define a virtue, then follow the implications until a contradiction or counterexample shows what the definition misses."
        },
        {
          "title": "Know what you don’t know",
          "text": "In the Apology, the crucial distinction is whether people can recognize the limits of their knowledge, especially when expertise earns them prestige."
        }
      ],
      "motivation": "In Plato’s Apology, Socrates describes questioning his fellow citizens as a duty and urges them to care for the quality of their character. That account gives us Plato’s portrayal of his purpose.",
      "quote": {
        "text": "the unexamined life is not worth living",
        "context": "Socrates speaking in Plato’s account of his defense at trial, Apology 38a, translated by Benjamin Jowett.",
        "label": "Plato, Apology 38a, translated by Benjamin Jowett",
        "url": "https://www.gutenberg.org/files/1656/1656-h/1656-h.htm"
      },
      "ideaSources": [
        {
          "label": "Stanford Encyclopedia of Philosophy on the Socratic problem",
          "url": "https://plato.stanford.edu/entries/socrates/"
        }
      ],
      "portraitNote": "An editorial reconstruction of an ancient philosopher.",
      "id": 53,
      "funFact": "In Plato’s Symposium, Alcibiades recalls Socrates standing in one spot thinking from dawn until the following sunrise. Other soldiers brought out their bedding to watch whether he would stay there all night.",
      "funFactSource": {
        "label": "Plato, Symposium 220c–d, translated by W. R. M. Lamb",
        "url": "https://adfonteslibrary.org/work-plato-symposium"
      }
    },
    {
      "slug": "plato",
      "name": "Plato",
      "category": "philosophy",
      "role": "Greek philosopher and founder of the Academy",
      "intro": "Plato made philosophical inquiry into a literary form. His dialogues put incompatible views in conversation and ask what makes a belief knowledge, a life good, or a city just.",
      "milestones": [
        {
          "year": -399,
          "text": "Socrates was tried and executed. Plato later made the defense and its aftermath subjects of the Apology, Crito, and Phaedo."
        },
        {
          "year": -387,
          "approx": true,
          "text": "Founded the Academy in Athens, where Aristotle later studied."
        }
      ],
      "impact": "The Academy gave inquiry a durable institutional home, while the dialogues gave readers a way to participate in arguments long after the original setting disappeared.",
      "tags": [
        "Forms",
        "Justice",
        "Education",
        "Dialogue"
      ],
      "sources": [
        {
          "label": "Stanford Encyclopedia of Philosophy on Plato",
          "url": "https://plato.stanford.edu/entries/plato/"
        },
        {
          "label": "University of Minnesota Duluth chronology of Plato",
          "url": "https://www.d.umn.edu/cla/faculty/tbacig/hmcl3230/3230anth/repgud.html"
        },
        {
          "label": "Plato’s Republic, translated by Benjamin Jowett",
          "url": "https://www.gutenberg.org/files/1497/1497-h/1497-h.htm"
        }
      ],
      "ideas": [
        {
          "title": "Forms and changing particulars",
          "text": "Many different things can count as beautiful or just. Plato asks what stable object of understanding makes those judgments possible."
        },
        {
          "title": "Education as reorientation",
          "text": "In the cave allegory, learning means changing what one attends to and can see. Giving someone the correct answer would leave their habits of attention intact."
        }
      ],
      "motivation": "The Republic opens with a demand to explain why justice is worth choosing even when injustice pays. That challenge drives its inquiry into education, political power, and the structure of character.",
      "quote": {
        "text": "the power and capacity of learning exists in the soul already",
        "context": "Plato’s character Socrates explains the educational point of the cave allegory in Republic VII, 518c, translated by Benjamin Jowett.",
        "label": "Plato, Republic VII, 518c, translated by Benjamin Jowett",
        "url": "https://www.gutenberg.org/files/1497/1497-h/1497-h.htm"
      },
      "ideaSources": [
        {
          "label": "Stanford Encyclopedia of Philosophy on Plato’s forms and dialogues",
          "url": "https://plato.stanford.edu/entries/plato/"
        },
        {
          "label": "Republic, Books II and VII, translated by Benjamin Jowett",
          "url": "https://www.gutenberg.org/files/1497/1497-h/1497-h.htm"
        }
      ],
      "portraitNote": "An editorial reconstruction of an ancient philosopher.",
      "id": 54,
      "funFact": "His Timaeus contains the story of Atlantis, a powerful island empire. The dialogue describes its destruction by earthquakes and floods in a single day and night, followed by its disappearance beneath the sea.",
      "funFactSource": {
        "label": "Plato, Timaeus, translated by Benjamin Jowett",
        "url": "https://classics.mit.edu/Plato/timaeus.html"
      }
    },
    {
      "slug": "aristotle",
      "name": "Aristotle",
      "category": "philosophy",
      "role": "Greek philosopher, logician, and naturalist",
      "intro": "Aristotle studied at Plato’s Academy and later founded the Lyceum. He worked across logic, ethics, politics, and biology, changing how people organized observations and asked for explanations.",
      "milestones": [
        {
          "year": -367,
          "approx": true,
          "text": "Joined Plato’s Academy in Athens, where he remained for roughly twenty years."
        },
        {
          "year": -343,
          "text": "Went to Macedon to tutor the young Alexander at Philip II’s invitation. Little is known about the teaching itself."
        },
        {
          "year": -335,
          "text": "Returned to Athens and established the Lyceum, where scholars pursued research across many subjects."
        }
      ],
      "impact": "His syllogistic logic shaped the study of argument for centuries. His work on animal life and character also showed how systematic inquiry could proceed in areas that call for different kinds of evidence.",
      "tags": [
        "Causation",
        "Logic",
        "Virtue Ethics",
        "Biology"
      ],
      "sources": [
        {
          "label": "Stanford Encyclopedia of Philosophy on Aristotle",
          "url": "https://plato.stanford.edu/entries/aristotle/"
        },
        {
          "label": "Aristotle’s Metaphysics I, translated by W. D. Ross",
          "url": "https://classics.mit.edu/Aristotle/metaphysics.1.i.html"
        }
      ],
      "ideas": [
        {
          "title": "Four kinds of explanation",
          "text": "An explanation can identify what something is made of, what form it takes, what produced it, or what end it serves."
        },
        {
          "title": "Character grows through practice",
          "text": "The Nicomachean Ethics treats virtues as dispositions formed by repeated action and guided by practical judgment about particular situations."
        }
      ],
      "motivation": "In the Metaphysics, Aristotle traces inquiry to curiosity and wonder. He distinguishes knowing that something happens from knowing why, a distinction that helps explain the range of questions pursued at the Lyceum.",
      "quote": {
        "text": "ALL men by nature desire to know.",
        "context": "The opening of Metaphysics I.1, 980a, in W. D. Ross’s translation. Aristotle then connects the desire to know with our enjoyment of perception.",
        "label": "Aristotle, Metaphysics I.1, translated by W. D. Ross",
        "url": "https://classics.mit.edu/Aristotle/metaphysics.1.i.html"
      },
      "ideaSources": [
        {
          "label": "Stanford Encyclopedia of Philosophy on Aristotle’s four causes and ethics",
          "url": "https://plato.stanford.edu/entries/aristotle/"
        },
        {
          "label": "Aristotle’s Nicomachean Ethics II, translated by W. D. Ross",
          "url": "https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html"
        }
      ],
      "portraitNote": "An editorial reconstruction of an ancient philosopher.",
      "id": 55,
      "funFact": "In History of Animals, he describes a chicken embryo’s heart as a moving speck of blood after three days of incubation, then tracks how its eyes and organs develop.",
      "funFactSource": {
        "label": "Aristotle, History of Animals VI.3, translated by D’Arcy Wentworth Thompson",
        "url": "https://classics.mit.edu/Aristotle/history_anim.6.vi.html"
      }
    },
    {
      "slug": "cicero",
      "name": "Cicero",
      "category": "philosophy",
      "role": "Roman statesman, orator, and philosopher",
      "intro": "Marcus Tullius Cicero brought Greek philosophy into Latin and applied it to the problems of Roman public life. His speeches, dialogues, and letters illuminate the final decades of the Roman Republic.",
      "milestones": [
        {
          "year": -63,
          "text": "As consul, delivered the Catilinarian speeches in response to a conspiracy against the Roman government."
        },
        {
          "year": -44,
          "text": "Wrote On Duties for his son and began his Philippics against Mark Antony after Caesar’s assassination."
        },
        {
          "year": -43,
          "text": "Was killed during the proscriptions of the Second Triumvirate."
        }
      ],
      "impact": "He helped build a Latin vocabulary for philosophy and transmitted Greek debates to later readers. On Duties became a durable account of how public and private conduct should be judged.",
      "tags": [
        "Republican Government",
        "Rhetoric",
        "Civic Duty",
        "Skepticism"
      ],
      "sources": [
        {
          "label": "Oxford Bibliographies on Cicero",
          "url": "https://academic.oup.com/reference/62365/reference-article-abstract/574486739"
        },
        {
          "label": "Oxford Bibliographies on Cicero’s Catilinarian Orations",
          "url": "https://academic.oup.com/reference/62365/reference-article-abstract/554601996"
        },
        {
          "label": "Internet Encyclopedia of Philosophy on Cicero",
          "url": "https://iep.utm.edu/cicero-roman-philosopher/"
        }
      ],
      "ideas": [
        {
          "title": "Duty and apparent advantage",
          "text": "On Duties asks whether a profitable act can truly be advantageous when it violates justice or undermines the trust on which society depends."
        },
        {
          "title": "Act on the best available judgment",
          "text": "Cicero’s Academic skepticism allowed him to weigh opposing arguments and act on what seemed most credible, while leaving room for revision."
        }
      ],
      "motivation": "Political exclusion gave Cicero time to write, and Roman public life supplied his problems. Addressing On Duties to his son gave him a reason to work through questions of character, obligation, and public office in concrete terms.",
      "quote": {
        "text": "Ollis salus populi suprema lex esto.",
        "context": "On the Laws III.8, where Cicero gives instructions to consuls in a proposed law code. The sense is that the people’s welfare should be their highest law.",
        "label": "Cicero, De Legibus III.8, Latin text",
        "url": "https://ww1.thelatinlibrary.com/cicero/leg3.shtml"
      },
      "ideaSources": [
        {
          "label": "Internet Encyclopedia of Philosophy on Cicero’s Academic skepticism and ethics",
          "url": "https://iep.utm.edu/cicero-roman-philosopher/"
        }
      ],
      "portraitNote": "An editorial reconstruction of an ancient philosopher.",
      "id": 56,
      "funFact": "Plutarch says Cicero once had a chickpea engraved on a silver offering in place of his surname. The joke depended on cicer, the Latin word for chickpea, from which his family name derived.",
      "funFactSource": {
        "label": "Plutarch, Life of Cicero 1.4–6, translated by Bernadotte Perrin",
        "url": "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/Plutarch/Lives/Cicero%2A.html"
      }
    },
    {
      "slug": "marcus-aurelius",
      "name": "Marcus Aurelius",
      "category": "philosophy",
      "role": "Roman emperor and Stoic writer",
      "intro": "Marcus Aurelius governed Rome through war and plague. In the private notes now called the Meditations, he used Stoic philosophy to rehearse how he wanted to respond under pressure.",
      "milestones": [
        {
          "year": 161,
          "text": "Succeeded Antoninus Pius as emperor and initially shared imperial rule with Lucius Verus."
        },
        {
          "year": 175,
          "approx": true,
          "text": "During the later years of his military campaigns, wrote at least part of the Greek notes now known as the Meditations."
        },
        {
          "year": 180,
          "text": "Died after nineteen years as emperor. His son Commodus succeeded him as sole ruler."
        }
      ],
      "impact": "The Meditations preserved a rare ancient example of a person using philosophy to correct his own habits of judgment. The book remains a major source for reading Stoicism as a daily practice.",
      "tags": [
        "Stoicism",
        "Judgment",
        "Civic Duty",
        "Self Examination"
      ],
      "sources": [
        {
          "label": "Stanford Encyclopedia of Philosophy on Marcus Aurelius",
          "url": "https://plato.stanford.edu/archives/sum2024/entries/marcus-aurelius/"
        },
        {
          "label": "Oxford Bibliographies on the Meditations",
          "url": "https://academic.oup.com/reference/62365/reference-article-abstract/571491510"
        },
        {
          "label": "The Metropolitan Museum of Art on Marcus Aurelius and Lucius Verus",
          "url": "https://www.metmuseum.org/art/collection/search/248783"
        }
      ],
      "ideas": [
        {
          "title": "Examine the judgment before acting",
          "text": "An impression can feel immediate and certain. Marcus repeatedly asks what happened and which evaluative judgment he has added to it."
        },
        {
          "title": "Justice as a duty to others",
          "text": "A person belongs to a larger human community. That makes cooperation and the common good part of virtue, even when other people are difficult."
        }
      ],
      "motivation": "The Meditations were a way to keep principles ready for use. Marcus repeatedly rehearses patience, fair judgment, and public duty in terms he could recall when he was angry, tired, or distracted.",
      "quote": {
        "text": "That which is not good for the swarm, neither is it good for the bee.",
        "context": "Meditations VI.54, translated by George Long. The image expresses Marcus’s view that individual welfare depends on the larger community.",
        "label": "Marcus Aurelius, Meditations VI.54, translated by George Long",
        "url": "https://classics.mit.edu/Antoninus/meditations.6.six.html"
      },
      "ideaSources": [
        {
          "label": "Stanford Encyclopedia of Philosophy on Marcus Aurelius’s practices and account of justice",
          "url": "https://plato.stanford.edu/archives/sum2024/entries/marcus-aurelius/"
        }
      ],
      "portraitNote": "An editorial reconstruction of an ancient philosopher.",
      "id": 57,
      "funFact": "A letter to his teacher Fronto reads like a student’s diary. Marcus reports picking grapes, chatting with his mother, and enjoying the farmworkers’ banter over dinner before writing up his day.",
      "funFactSource": {
        "label": "Correspondence with Fronto IV.6, translated by C. R. Haines",
        "url": "https://en.wikisource.org/wiki/The_Correspondence_of_Marcus_Cornelius_Fronto/Volume_1/The_Correspondence"
      }
    },
    {
      "id": 1,
      "name": "John D. Rockefeller",
      "slug": "john-d-rockefeller",
      "category": "industry",
      "role": "Standard Oil cofounder and philanthropist",
      "intro": "Rockefeller built Standard Oil by acquiring refineries and bringing more of the work around refining under one roof. Its operations extended from barrel making and storage to selling products made from refinery byproducts.",
      "milestones": [
        {
          "year": 1870,
          "text": "Organized Standard Oil with partners including William Rockefeller, Samuel Andrews, and Henry Flagler. Within two years it had purchased nearly all of Cleveland’s refining firms."
        },
        {
          "year": 1882,
          "text": "Consolidated the company’s holdings under the Standard Oil Trust."
        },
        {
          "year": 1913,
          "text": "Established the Rockefeller Foundation, which extended his earlier hookworm work into international public health programs."
        }
      ],
      "impact": "Standard Oil helped organize petroleum refining on an industrial scale. Rockefeller’s fortune later funded the University of Chicago and helped build the field of public health through research, field programs, and professional training.",
      "tags": [
        "Vertical Integration",
        "Antitrust",
        "Public Health"
      ],
      "sources": [
        {
          "label": "Rockefeller Archive Center biography",
          "url": "https://rockarch.org/resources/about-the-rockefellers/john-d-rockefeller-sr/"
        },
        {
          "label": "U.S. Supreme Court opinion via the Library of Congress",
          "url": "https://tile.loc.gov/storage-services/service/ll/usrep/usrep221/usrep221001/usrep221001.pdf"
        }
      ],
      "ideas": [
        {
          "title": "Ask for matching commitments",
          "text": "Rockefeller pledged $600,000 toward the University of Chicago’s first $1 million only if other donors put up the balance within 90 days."
        },
        {
          "title": "Compare needs before making grants",
          "text": "His General Education Board studied colleges’ locations, finances, and educational work across the country before allocating funds, and made its records open."
        }
      ],
      "motivation": "Rockefeller had recorded small, regular gifts in his ledger since boyhood. In his memoir, he argued that carefully chosen investments of time or money could create lasting opportunities for work.",
      "quote": {
        "text": "No mere money-giving is comparable to this in its lasting and beneficial results.",
        "context": "In Random Reminiscences of Men and Events, Rockefeller argued for putting time and money into developing local resources and creating paid work.",
        "label": "Rockefeller’s Random Reminiscences via Project Gutenberg",
        "url": "https://www.gutenberg.org/files/17090/17090-h/17090-h.htm"
      },
      "ideaSources": [
        {
          "label": "Rockefeller Archive Center on the University of Chicago pledge",
          "url": "https://rockarch.org/resources/about-the-rockefellers/john-d-rockefeller-sr/"
        },
        {
          "label": "Rockefeller’s account of the General Education Board",
          "url": "https://www.gutenberg.org/files/17090/17090-h/17090-h.htm"
        }
      ],
      "funFact": "Rockefeller celebrated September 26 as Job Day for the rest of his life. It marked the day in 1855 when, aged 16, he landed his first job at Hewitt & Tuttle.",
      "funFactSource": {
        "label": "PBS American Experience timeline of the Rockefellers",
        "url": "https://www.pbs.org/wgbh/americanexperience/features/rockefellers-timeline/"
      }
    },
    {
      "id": 2,
      "name": "Andrew Carnegie",
      "slug": "andrew-carnegie",
      "category": "industry",
      "role": "Steel industrialist and library patron",
      "intro": "Carnegie moved from telegraphy and railroad management into steelmaking. At Braddock, Pennsylvania, his team used the Bessemer process in a mill built primarily to supply steel rails to the growing railroad network.",
      "milestones": [
        {
          "year": 1875,
          "text": "The Edgar Thomson Works began production. Its integrated design became a model for steel plants in the Pittsburgh region."
        },
        {
          "year": 1889,
          "text": "Published the essay now known as The Gospel of Wealth, arguing that people with great fortunes should put them to public use during their lifetimes."
        },
        {
          "year": 1901,
          "text": "Sold Carnegie Steel to J. P. Morgan in the deal that formed U.S. Steel."
        }
      ],
      "impact": "Carnegie’s steel business helped turn the Monongahela Valley into an integrated manufacturing district. His philanthropy funded 2,509 libraries worldwide and established institutions for science, education, and peace.",
      "tags": [
        "Steelmaking",
        "Labor Relations",
        "Philanthropy"
      ],
      "sources": [
        {
          "label": "Library of Congress record of the Edgar Thomson Works",
          "url": "https://www.loc.gov/item/pa3380/"
        },
        {
          "label": "Carnegie Corporation biography and library figures",
          "url": "https://carnegie.org/about/andrew-carnegie-story/"
        },
        {
          "label": "PBS American Experience on the Homestead strike",
          "url": "https://www.pbs.org/wgbh/americanexperience/features/carnegie-strike-homestead-mill/"
        }
      ],
      "ideas": [
        {
          "title": "Measure the cost of each step",
          "text": "Carnegie installed scales at points in his ironworks so managers could see which processes wasted material before the year’s accounts closed."
        },
        {
          "title": "Fund construction with upkeep agreed",
          "text": "Carnegie’s typical library grant paid for a building after a town provided a site and committed to an annual budget for upkeep."
        }
      ],
      "motivation": "In his autobiography, Carnegie traced his library giving to Colonel James Anderson, who lent books to working boys. Carnegie had been one of them and wanted others to have the same chance to learn.",
      "quote": {
        "text": "I felt as if we were moles burrowing in the dark, and this to me was intolerable.",
        "context": "In his autobiography, Carnegie recalled discovering that Pittsburgh ironmakers often had little visibility into costs until the annual accounts were closed.",
        "label": "Autobiography of Andrew Carnegie via Project Gutenberg",
        "url": "https://www.gutenberg.org/cache/epub/17976/pg17976-images.html"
      },
      "ideaSources": [
        {
          "label": "Carnegie’s autobiography on cost accounting and Colonel Anderson",
          "url": "https://www.gutenberg.org/cache/epub/17976/pg17976-images.html"
        },
        {
          "label": "PBS American Experience on library grant terms",
          "url": "https://www.pbs.org/wgbh/americanexperience/features/carnegie-philanthropy-101/"
        }
      ],
      "funFact": "Carnegie has a dinosaur namesake, Diplodocus carnegii. After King Edward VII requested a replica, Carnegie’s museum supplied plaster casts that carried Dippy into natural history museums around the world.",
      "funFactSource": {
        "label": "Carnegie Museum of Natural History on Carnegie and Dippy",
        "url": "https://carnegiemnh.org/oh-say-can-you-dippy-andrew-carnegie-and-his-dinosaurs/"
      }
    },
    {
      "id": 3,
      "name": "Henry Ford",
      "slug": "henry-ford",
      "category": "industry",
      "role": "Automaker and mass-production pioneer",
      "intro": "Ford and his team made the automobile a mass-market product by redesigning how it was made. Moving the chassis past stations let workers repeat a narrow task and cut the time needed to assemble a Model T.",
      "milestones": [
        {
          "year": 1908,
          "text": "Introduced the Model T, the car Ford would put at the center of its mass-production strategy."
        },
        {
          "year": 1913,
          "text": "Introduced moving assembly at Highland Park. Experiments into 1914 cut Model T assembly time from roughly 12½ hours to 93 minutes."
        },
        {
          "year": 1914,
          "text": "Announced the five-dollar day, a profit-sharing plan that helped address the high turnover associated with assembly-line work."
        }
      ],
      "impact": "Higher output and falling Model T prices brought car ownership within reach of many more households. Ford’s manufacturing methods and compensation practices pushed competitors to adapt.",
      "tags": [
        "Mass Production",
        "Process Design",
        "Labor Relations"
      ],
      "sources": [
        {
          "label": "Library of Congress on Ford’s moving assembly line",
          "url": "https://guides.loc.gov/this-month-in-business-history/october/ford"
        },
        {
          "label": "The Henry Ford on the five-dollar day",
          "url": "https://www.thehenryford.org/collections/explore/articles/fords-five-dollar-day"
        },
        {
          "label": "U.S. Holocaust Memorial Museum on Ford’s newspaper",
          "url": "https://encyclopedia.ushmm.org/content/en/article/antisemitism-and-henry-fords-international-jew"
        }
      ],
      "ideas": [
        {
          "title": "Put variety on a common chassis",
          "text": "Ford sold touring cars, roadsters, and town cars on the same Model T chassis, keeping one basic design underneath several body styles."
        },
        {
          "title": "Keep older cars repairable",
          "text": "Ford wrote that improvements should preserve compatibility with earlier cars wherever possible so owners could repair or update what they already owned."
        }
      ],
      "motivation": "In his account of the Model T, Ford remembered the car being sold as a luxury. He wanted a family to be able to afford one and an individual to be able to maintain it.",
      "quote": {
        "text": "The public should always be wondering how it is possible to give so much for the money.",
        "context": "In My Life and Work, published in 1922 with Samuel Crowther, Ford argued for passing manufacturing savings on to buyers.",
        "label": "My Life and Work via Project Gutenberg",
        "url": "https://www.gutenberg.org/cache/epub/7213/pg7213.html"
      },
      "ideaSources": [
        {
          "label": "Ford’s account of the Model T and interchangeable parts",
          "url": "https://www.gutenberg.org/cache/epub/7213/pg7213.html"
        }
      ],
      "funFact": "Before his first automobile could take its maiden drive in 1896, Ford faced a practical snag. The Quadricycle was too wide for the workshop door, so he hacked away at the frame with a hatchet.",
      "funFactSource": {
        "label": "Ford Heritage Vault’s Quadricycle centenary release",
        "url": "https://fordheritagevaultmedia.com/api/links/c29a9048c4864d89915b29f4f39330e4/uuid/e4bd4f9fa263458ea0d94bcad4808264/access"
      }
    },
    {
      "id": 4,
      "name": "Walt Disney",
      "slug": "walt-disney",
      "category": "industry",
      "role": "Animation producer and theme park creator",
      "intro": "Disney built an animation studio with his brother Roy and made its characters recognizable across film, merchandise, television, and places people could visit. Artists and engineers turned those characters’ worlds into experiences that could survive a single film’s run.",
      "milestones": [
        {
          "year": 1928,
          "text": "Mickey Mouse, developed with lead animator Ub Iwerks, reached audiences in Steamboat Willie, which synchronized sound with the action."
        },
        {
          "year": 1937,
          "text": "Snow White and the Seven Dwarfs premiered and demonstrated the commercial potential of feature-length animation."
        },
        {
          "year": 1955,
          "text": "Disneyland opened after an ABC television series had introduced audiences to the park’s four themed areas."
        }
      ],
      "impact": "Disney’s studio made feature animation a durable format and showed how stories could draw audiences across media. Disneyland gave visitors a way to walk through worlds they had encountered on screen.",
      "tags": [
        "Animation",
        "Intellectual Property",
        "Worldbuilding"
      ],
      "sources": [
        {
          "label": "Walt Disney Family Museum biography",
          "url": "https://www.waltdisney.org/sites/default/files/walt-disney/walt-disney.html"
        },
        {
          "label": "PBS American Experience on Disney’s studio, strike, and park",
          "url": "https://www.pbs.org/wgbh/americanexperience/features/walt-disneys-empire/"
        },
        {
          "label": "AFI catalog entry for Snow White and the Seven Dwarfs",
          "url": "https://catalog.afi.com/Film/5865-SNOW-WHITEANDTHESEVENDWARFS"
        }
      ],
      "ideas": [
        {
          "title": "Build something you can revise in public",
          "text": "Disney could use visitors’ reactions to improve Disneyland as it operated. A released film could only inform what he made next."
        },
        {
          "title": "Trade programming for park financing",
          "text": "ABC invested in Disneyland and guaranteed loans for it, gaining a stake in the park alongside the Disney programming it wanted."
        }
      ],
      "motivation": "Disney told journalist Pete Martin that a completed film was out of his hands, even when he could see things he wanted to fix. He wanted a project that could keep growing and changing in response to visitors.",
      "quote": {
        "text": "It will be a live, breathing thing that will need changes.",
        "context": "Disney told Pete Martin around 1956 why Disneyland appealed to him as a project he could keep developing. The Walt Disney Family Museum published the excerpt.",
        "label": "Walt Disney Family Museum’s excerpt of the Pete Martin interview",
        "url": "https://www.waltdisney.org/blog/walts-own-words-plussing-disneyland"
      },
      "ideaSources": [
        {
          "label": "Disney on continuing to change the park",
          "url": "https://www.waltdisney.org/blog/walts-own-words-plussing-disneyland"
        },
        {
          "label": "ABC executive Leonard Goldenson’s account of the financing deal",
          "url": "https://www.latimes.com/archives/la-xpm-1991-02-03-ca-693-story.html"
        }
      ],
      "funFact": "Disney wanted his backyard miniature railroad to run through Lillian’s planned flower garden. Their compromise was a 90-foot tunnel beneath the flowers and a formal right-of-way agreement between husband and wife.",
      "funFactSource": {
        "label": "Walt Disney Family Museum on Lillian Disney’s garden",
        "url": "https://www.waltdisney.org/blog/giving-lillian-her-flowers-lillian-disneys-window-main-street-usa"
      }
    },
    {
      "id": 5,
      "name": "Edwin Land",
      "slug": "edwin-land",
      "category": "industry",
      "role": "Optics researcher and Polaroid founder",
      "intro": "Land turned research in light and chemistry into products. At Polaroid, he and his colleagues moved the work of a darkroom into the camera and film, letting people see a finished print almost immediately.",
      "milestones": [
        {
          "year": 1937,
          "text": "Founded Polaroid Corporation, whose early business used synthetic polarizing material to control glare."
        },
        {
          "year": 1948,
          "text": "Polaroid sold the Model 95 Land Camera. Rollers broke open a pod and spread developer between the sheets to produce a peel-apart print."
        },
        {
          "year": 1972,
          "text": "Introduced the SX-70 system, which ejected a sealed color print that developed in daylight."
        }
      ],
      "impact": "Instant photography let people share a physical picture during the event they had just photographed. Polaroid also offered artists a medium for experimentation that combined photography with immediate feedback.",
      "tags": [
        "Optics",
        "Product Design",
        "Applied Research"
      ],
      "sources": [
        {
          "label": "National Academy of Engineering memorial biography",
          "url": "https://www.nationalacademies.org/read/4779/chapter/28"
        },
        {
          "label": "Harvard Business School Polaroid archive",
          "url": "https://www.library.hbs.edu/special-collections-and-archives/exhibits/polaroid-from-concept-to-product/instant-photography-is-launched"
        },
        {
          "label": "Baker Library on Polaroid’s artist program",
          "url": "https://www.library.hbs.edu/special-collections-and-archives/exhibits/polaroid-from-concept-to-product/artist-support"
        }
      ],
      "ideas": [
        {
          "title": "Test with demanding practitioners",
          "text": "Land recruited Ansel Adams to test Polaroid prototypes. Adams scrutinized everything from the tonal range of prints to the wording of instructions."
        },
        {
          "title": "Develop chemistry and hardware in parallel",
          "text": "Polaroid developed the chemistry and camera separately, then made them work together through a reagent pod and rollers that spread developer evenly."
        }
      ],
      "motivation": "In a 1949 talk, Land described instant photography as a simpler medium for artistic expression. Seeing a picture while its subject was still in front of the photographer made it easier to try again.",
      "quote": {
        "text": "removing most of the manipulative barriers between the photographer and photograph",
        "context": "Land used this phrase in a 1949 talk to the Royal Photographic Society, published in The Photographic Journal and excerpted by Baker Library.",
        "label": "Baker Library excerpt of Land’s One-Step Photography",
        "url": "https://www.library.hbs.edu/special-collections-and-archives/exhibits/polaroid-from-concept-to-product/instant-photography-is-launched"
      },
      "ideaSources": [
        {
          "label": "Baker Library on Ansel Adams’s prototype tests",
          "url": "https://www.library.hbs.edu/special-collections-and-archives/exhibits/polaroid-from-concept-to-product/ansel-adams-polaroid-rd"
        },
        {
          "label": "Baker Library on instant film and camera development",
          "url": "https://www.library.hbs.edu/special-collections-and-archives/exhibits/polaroid-from-concept-to-product/instant-photography-is-launched"
        }
      ],
      "funFact": "A biography published by Harvard recounts young Land reaching a Columbia laboratory by climbing along a sixth-floor ledge and through a window, before he had permission to use its electromagnet.",
      "funFactSource": {
        "label": "Rowland Institute at Harvard’s biography of Edwin Land",
        "url": "https://www.rowland.harvard.edu/edwin-h-land-1909-1991"
      }
    },
    {
      "id": 6,
      "name": "J. Robert Oppenheimer",
      "slug": "robert-oppenheimer",
      "category": "science",
      "role": "Physicist and Los Alamos director",
      "intro": "Oppenheimer directed the Manhattan Project laboratory at Los Alamos. He recruited researchers from across the country and brought theoretical physics, engineering, and testing together at one site under wartime pressure.",
      "milestones": [
        {
          "year": 1943,
          "text": "Los Alamos began operating under his scientific leadership, with teams pursuing both uranium and plutonium weapon designs."
        },
        {
          "year": 1945,
          "text": "The Trinity test demonstrated the plutonium implosion design. The United States used weapons developed at Los Alamos against Hiroshima and Nagasaki that August."
        },
        {
          "year": 1954,
          "text": "The Atomic Energy Commission revoked his security clearance after a hearing. The Department of Energy vacated the decision in 2022, citing procedural violations."
        }
      ],
      "impact": "Los Alamos showed how a government could marshal science and engineering around a single technical objective. Its work also ushered in the nuclear age, with consequences that extended far beyond the lab.",
      "tags": [
        "Nuclear Physics",
        "Research Leadership",
        "Governance"
      ],
      "sources": [
        {
          "label": "National Park Service biography",
          "url": "https://www.nps.gov/people/manhattan-project-scientists-j-robert-oppenheimer.htm"
        },
        {
          "label": "National Park Service on Los Alamos",
          "url": "https://www.nps.gov/articles/000/manhattan-project-science-at-los-alamos.htm"
        },
        {
          "label": "Department of Energy clearance order",
          "url": "https://www.energy.gov/sites/default/files/2022-12/S1%20Oppenheimer%20Order%2012.12.22%20signed%20by%20S1%2012-16-2022.pdf"
        }
      ],
      "ideas": [
        {
          "title": "Put expertise inside the regulator",
          "text": "He proposed an international atomic authority that would conduct its own research, giving it the technical knowledge to oversee dangerous nuclear activities."
        },
        {
          "title": "Build in a second decision",
          "text": "He proposed making initial arms agreements provisional and scheduling a review so countries could revise them as the technology and risks changed."
        }
      ],
      "motivation": "Looking back in 1945, Oppenheimer recalled fear that an enemy would build the bomb first and a scientist’s impulse to find out what was possible. After the war, he argued that atomic weapons required a shared international response.",
      "quote": {
        "text": "I think one cannot be too careful to be honest.",
        "context": "Speaking to the Association of Los Alamos Scientists in November 1945 about their responsibility when giving technical advice.",
        "label": "Los Alamos farewell speech transcript",
        "url": "https://www.atomicarchive.com/resources/documents/manhattan-project/oppenheimer-farewell.html"
      },
      "ideaSources": [
        {
          "label": "Oppenheimer’s 1946 memorandum on atomic controls",
          "url": "https://history.state.gov/historicaldocuments/frus1946v01/d411"
        },
        {
          "label": "Los Alamos farewell speech transcript",
          "url": "https://www.atomicarchive.com/resources/documents/manhattan-project/oppenheimer-farewell.html"
        }
      ],
      "funFact": "As a twelve-year-old mineral enthusiast, Oppenheimer corresponded so knowledgeably with the New York Mineralogical Club that it invited him to lecture before discovering his age.",
      "funFactSource": {
        "label": "National Museum of Nuclear Science & History biography",
        "url": "https://ahf.nuclearmuseum.org/ahf/profile/j-robert-oppenheimer/"
      }
    },
    {
      "id": 7,
      "name": "Estée Lauder",
      "slug": "estee-lauder",
      "category": "industry",
      "role": "Prestige beauty entrepreneur",
      "intro": "Estée Lauder built a cosmetics company by letting customers try products and learn how to use them at the counter. She paired that approach with selective placement in prestigious department stores.",
      "milestones": [
        {
          "year": 1946,
          "text": "Founded Estée Lauder Cosmetics with her husband Joseph. She led product development and sales while he handled finance and operations."
        },
        {
          "year": 1947,
          "text": "Won the company's first department-store order from Saks Fifth Avenue."
        },
        {
          "year": 1953,
          "text": "Introduced Youth-Dew, a scented bath oil customers could also wear as perfume."
        }
      ],
      "impact": "Lauder helped establish free samples, personal consultations, and gifts with purchases as tools of prestige beauty retail. Youth-Dew gave customers a reason to buy a fragrance for their own everyday use.",
      "tags": [
        "Retail",
        "Product Sampling",
        "Brand Building",
        "Distribution"
      ],
      "sources": [
        {
          "label": "The Estée Lauder Companies heritage timeline",
          "url": "https://www.elcompanies.com/en/who-we-are/our-heritage"
        },
        {
          "label": "The Estée Lauder Companies on sampling and consultations",
          "url": "https://www.elcompanies.com/en/who-we-are/our-heritage/the-lauder-family"
        },
        {
          "label": "Harvard Business School leadership profile",
          "url": "https://www.hbs.edu/leadership/20th-century-leaders/details?profile=estee_lauder"
        }
      ],
      "ideas": [
        {
          "title": "Test packaging where it will live",
          "text": "Lauder recalled taking sample jars to bathrooms and checking their colors against different wallpapers before settling on a pale turquoise."
        },
        {
          "title": "Make a store opening a training session",
          "text": "Lauder said she set a rule to attend counter openings herself, spending a week training salespeople and arranging merchandise."
        }
      ],
      "motivation": "In her memoir, Lauder described selling the hope that a customer could look and feel more confident. She thought the counter staff should use the products themselves so shoppers could see their effects.",
      "quote": {
        "text": "We were selling jars of hope.",
        "context": "Lauder wrote this in her 1985 memoir while explaining her rules for opening new cosmetics counters. The Washington Post quoted the line in its review.",
        "label": "The Washington Post’s review of Estée A Success Story",
        "url": "https://www.washingtonpost.com/archive/entertainment/books/1985/11/24/estee-lauder-and-the-business-of-beauty/e0659750-60c4-4717-9940-b2f2f8edae2a/"
      },
      "ideaSources": [
        {
          "label": "Lauder’s memoir on packaging and counter openings",
          "url": "https://www.scribd.com/document/731052433/Estee-a-Success-Story-nodrm"
        },
        {
          "label": "The Washington Post obituary on Lauder blue and counter sales",
          "url": "https://www.washingtonpost.com/archive/local/2004/04/26/estee-lauder-dies-at-age-97/241e8056-8d42-472a-a5e8-035bdcef4b25/"
        }
      ],
      "funFact": "Her son Leonard recalled Lauder putting callers on hold, then changing her voice to impersonate whatever company department they wanted to reach.",
      "funFactSource": {
        "label": "The Guardian obituary of Estée Lauder",
        "url": "https://www.theguardian.com/news/2004/apr/27/guardianobituaries.usa"
      }
    },
    {
      "id": 8,
      "name": "Sol Price",
      "slug": "sol-price",
      "category": "industry",
      "role": "FedMart and Price Club founder",
      "intro": "Price made the warehouse itself the store. A paid membership, self-service, and a narrow assortment concentrated sales on fewer items and let the business pass some of its operating savings to shoppers.",
      "milestones": [
        {
          "year": 1954,
          "text": "Opened FedMart in San Diego, where members shopped a smaller, mostly self-service assortment than they would find in department stores."
        },
        {
          "year": 1976,
          "text": "Opened Price Club with his son Robert in a converted airplane hangar, initially serving small businesses."
        },
        {
          "year": 1993,
          "text": "Price Club merged with Costco, which former Price Club executive Jim Sinegal had cofounded with Jeff Brotman."
        }
      ],
      "impact": "Price Club brought wholesale-style buying to households and provided the model that Costco scaled. The membership fee gave customers a reason to return and gave the retailer a revenue stream beyond its merchandise margins.",
      "tags": [
        "Warehouse Clubs",
        "Membership",
        "Discount Retail"
      ],
      "sources": [
        {
          "label": "Robert Price’s FedMart history in the Journal of San Diego History",
          "url": "https://www.sandiegohistory.org/journal/v56-4/v56-4price.pdf"
        },
        {
          "label": "Los Angeles Times reporting on Price Club’s early years",
          "url": "https://www.latimes.com/archives/la-xpm-1986-05-20-fi-6885-story.html"
        },
        {
          "label": "Costco history and merger timeline",
          "url": "https://www.costco.com/f/-/company-information"
        }
      ],
      "ideas": [
        {
          "title": "Price up from the cost to serve",
          "text": "Price started with what he paid for an item and added enough to cover selling costs and earn a small profit."
        },
        {
          "title": "Work around price floors through assortment",
          "text": "FedMart left out items subject to minimum resale prices, preserving the ability to discount what it chose to put on shelves."
        }
      ],
      "motivation": "In a 2003 interview, Price recalled that manufacturers’ control over postwar retail prices prompted him to look for room underneath. He saw conventional stores’ advertising, delivery, credit, and assortment costs as opportunities to lower prices.",
      "quote": {
        "text": "We just always tried to carry honest merchandise at an honest price.",
        "context": "Supermarket News quoted Price looking back on why Price Club skipped advertised sales and focused on the price members could expect every day.",
        "label": "Supermarket News profile quoting Sol Price",
        "url": "https://www.supermarketnews.com/grocery-operations/2012-hall-of-fame-sol-price"
      },
      "ideaSources": [
        {
          "label": "Supermarket News on Price’s markup and Fortune interview",
          "url": "https://www.supermarketnews.com/grocery-operations/2012-hall-of-fame-sol-price"
        },
        {
          "label": "Robert Price on FedMart and fair trade laws",
          "url": "https://www.sandiegohistory.org/journal/v56-4/v56-4price.pdf"
        }
      ],
      "funFact": "Price recalled Sam Walton visiting to explain how much FedMart had influenced Walmart’s success. After Walton said he owed it all to him, Price joked that he should receive a finder’s fee.",
      "funFactSource": {
        "label": "Supermarket News recounting Price’s 2003 Fortune interview",
        "url": "https://www.supermarketnews.com/grocery-operations/2012-hall-of-fame-sol-price"
      }
    },
    {
      "id": 9,
      "name": "Edward O. Thorp",
      "slug": "edward-thorp",
      "category": "capital",
      "role": "Mathematician and quantitative investing pioneer",
      "intro": "Thorp used probability and computation to find small, measurable advantages in blackjack and financial markets. His work linked two distinct questions: whether a bet has an edge and how much capital to put behind it.",
      "milestones": [
        {
          "year": 1962,
          "text": "Published Beat the Dealer, showing how the composition of the remaining cards could give blackjack players a mathematical advantage."
        },
        {
          "year": 1967,
          "text": "Published Beat the Market with Sheen Kassouf, explaining hedges that paired warrants with positions in their underlying stocks."
        },
        {
          "year": 1969,
          "text": "Launched Convertible Hedge Associates with Jay Regan, later renamed Princeton/Newport Partners, an early quantitative hedge fund."
        }
      ],
      "impact": "Thorp helped demonstrate that computers and mathematical models could make relative-value trading systematic. His teaching on Kelly sizing also made the interaction between edge and bet size concrete.",
      "tags": [
        "Quantitative Investing",
        "Risk Management",
        "Probability",
        "Compounding"
      ],
      "sources": [
        {
          "label": "UC Irvine Libraries exhibition on Thorp’s career",
          "url": "https://www.lib.uci.edu/sites/default/files/2021-01/Thorp-checklist.pdf"
        },
        {
          "label": "Thorp’s books on blackjack, markets, and Kelly sizing",
          "url": "https://www.edwardothorp.com/books/"
        }
      ],
      "ideas": [
        {
          "title": "Look for relative moves",
          "text": "Thorp’s team tested whether recent laggards subsequently outperformed recent winners, an example of a trade built around relative prices and reversals."
        },
        {
          "title": "Trade growth for a shallower drawdown",
          "text": "Thorp showed with a simplified example how staking half the Kelly amount reduced the chance of severe losses while preserving much of the growth."
        }
      ],
      "motivation": "Thorp recalled teaching himself about securities markets and finding warrants he could model. Their prices offered a chance to test whether the same habits of mathematical reasoning that had served him in gambling could uncover an edge in investing.",
      "quote": {
        "text": "apply mathematics and logical thinking and maybe get an edge in the market.",
        "context": "An excerpt from Thorp’s 2017 interview with Tim Melvin, describing why evaluating warrants first interested him. Melvin edited the published interview for length and clarity.",
        "label": "Tim Melvin’s interview with Edward Thorp",
        "url": "https://thunderclapresearch.com/a-conversaation-with-ed-thorp/"
      },
      "ideaSources": [
        {
          "label": "Thorp on early statistical arbitrage",
          "url": "https://thunderclapresearch.com/a-conversaation-with-ed-thorp/"
        },
        {
          "label": "Thorp’s paper on Kelly sizing and drawdowns",
          "url": "https://sites.oxy.edu/lengyel/M330/thorp/paper1.pdf"
        }
      ],
      "funFact": "During a 1961 casino test, Thorp recalled a woman looking horrified when his hidden earpiece poked out. The device fed him roulette predictions from a computer he had built with Claude Shannon.",
      "funFactSource": {
        "label": "Thorp’s account in The Invention of the First Wearable Computer",
        "url": "https://www.cs.columbia.edu/~feiner/courses/mobwear/resources/thorp-iswc98.pdf"
      }
    },
    {
      "id": 10,
      "name": "Sam Walton",
      "slug": "sam-walton",
      "category": "industry",
      "role": "Walmart and Sam’s Club founder",
      "intro": "Walton built Walmart around everyday low prices in markets that large retailers often overlooked. As the chain grew, regional distribution and better information about store sales helped it supply more stores at lower cost.",
      "milestones": [
        {
          "year": 1962,
          "text": "Opened the first Walmart in Rogers, Arkansas, after operating variety stores."
        },
        {
          "year": 1983,
          "text": "Opened the first Sam’s Club in Oklahoma, adding a membership warehouse format to the retail business."
        },
        {
          "year": 1987,
          "text": "Walmart linked its operations with a private satellite system carrying voice, video, and data."
        }
      ],
      "impact": "Walmart made broad assortments and consistently low prices available in many smaller communities. Its scale made logistics and store-level data central to competition in discount retail.",
      "tags": [
        "Discount Retail",
        "Logistics",
        "Economies of Scale"
      ],
      "sources": [
        {
          "label": "Walmart corporate history",
          "url": "https://corporate.walmart.com/about/history"
        },
        {
          "label": "Panle Jia’s Econometrica study of discount retail",
          "url": "https://panlebarwick.github.io/papers/WalMart_ECTA_Nov_2008.pdf"
        },
        {
          "label": "Hausman and Leibtag on Walmart food prices",
          "url": "https://www.nber.org/papers/w10712"
        }
      ],
      "ideas": [
        {
          "title": "Open the books to the stores",
          "text": "Walton shared operating figures with associates so the people working on the floor could see how their stores performed and contribute ideas."
        },
        {
          "title": "Give associates a stake",
          "text": "Walton advocated sharing profits with associates, pairing a financial stake with goals and feedback on how the business was doing."
        }
      ],
      "motivation": "Walton believed store workers would take better care of shoppers if the company took care of its workers. He framed customer service as the point of the business when colleagues became preoccupied with the wealth it generated.",
      "quote": {
        "text": "Set high goals, encourage competition, and then keep score.",
        "context": "Walmart reproduces this line from Walton’s business rules, published in his 1992 book Made in America. It appears under his rule for motivating associates.",
        "label": "Walmart’s publication of Sam Walton’s business rules",
        "url": "https://corporate.walmart.com/about/sam-walton/10-rules-for-building-a-better-business"
      },
      "ideaSources": [
        {
          "label": "Walton’s rules on profit sharing and communication",
          "url": "https://corporate.walmart.com/about/sam-walton/10-rules-for-building-a-better-business"
        },
        {
          "label": "Harvard Business School case on Walmart’s store management",
          "url": "https://www.srushtisystems.com/acme/wp-content/uploads/2022/03/2.-Wal-Mart-Stores-Inc.pdf"
        }
      ],
      "funFact": "Walton did the hula on Wall Street in 1984. He was keeping a promise to associates after Walmart achieved a pretax profit of 8% for the previous fiscal year.",
      "funFactSource": {
        "label": "Walmart corporate history, 1984 entry",
        "url": "https://corporate.walmart.com/about/history"
      }
    },
    {
      "id": 11,
      "name": "Richard Feynman",
      "slug": "richard-feynman",
      "category": "science",
      "role": "Theoretical physicist and teacher",
      "intro": "Feynman helped put quantum electrodynamics on a practical footing. His diagrams organize terms in calculations of how light and matter interact, giving other physicists a method they could reuse.",
      "milestones": [
        {
          "year": 1963,
          "text": "The first of three volumes of The Feynman Lectures on Physics appeared, based on his introductory Caltech course."
        },
        {
          "year": 1965,
          "text": "Shared the Nobel Prize in Physics with Julian Schwinger and Shin’ichirō Tomonaga for fundamental work in quantum electrodynamics."
        },
        {
          "year": 1986,
          "text": "On the Challenger commission, examined the shuttle’s O-ring failures and documented a wide gap between engineers’ and managers’ estimates of reliability."
        }
      ],
      "impact": "Feynman diagrams became a standard tool in particle physics. His lectures gave students a second kind of tool: explanations that start from a physical picture and lead to the mathematics.",
      "tags": [
        "Quantum Physics",
        "Teaching",
        "Safety Engineering"
      ],
      "sources": [
        {
          "label": "National Museum of Nuclear Science & History biography",
          "url": "https://ahf.nuclearmuseum.org/ahf/profile/richard-feynman/"
        },
        {
          "label": "Caltech lecture archive",
          "url": "https://www.feynmanlectures.caltech.edu/info/notes.html"
        },
        {
          "label": "NASA Challenger commission appendix",
          "url": "https://history.nasa.gov/rogersrep/v2appf.htm"
        }
      ],
      "ideas": [
        {
          "title": "Repeat the baseline yourself",
          "text": "Before changing a variable in someone else’s experiment, he advised reproducing their result in your own setup so the comparison isolates the change."
        },
        {
          "title": "Report what weakens your case",
          "text": "Scientific integrity, for Feynman, meant telling readers about rival explanations, discarded measurements, and other details that could change how they interpret the result."
        }
      ],
      "motivation": "Feynman told Caltech graduates that researchers can persuade themselves with results that look rigorous. He wanted them to learn habits that expose errors and to work somewhere they could practice those habits without putting their jobs at risk.",
      "quote": {
        "text": "The first principle is that you must not fool yourself",
        "context": "From his 1974 Caltech commencement address, in which he explained why conventional honesty falls short of scientific integrity.",
        "label": "Caltech’s original printing of Cargo Cult Science",
        "url": "https://calteches.library.caltech.edu/3043/1/CargoCult.pdf"
      },
      "ideaSources": [
        {
          "label": "1974 Caltech commencement address",
          "url": "https://calteches.library.caltech.edu/3043/1/CargoCult.pdf"
        }
      ],
      "funFact": "Feynman and artist Jirayr Zorthian made a deal to teach each other their specialties. Zorthian taught him drawing, and Feynman taught Zorthian physics. The physics lessons petered out, while Feynman kept making art.",
      "funFactSource": {
        "label": "Armory Center for the Arts exhibition archive",
        "url": "https://www.armoryarts.org/exhibitions/2008/jirayr-zorthian-richard-feynman-a-conversation-in-art"
      }
    },
    {
      "id": 12,
      "name": "Charlie Munger",
      "slug": "charlie-munger",
      "category": "capital",
      "role": "Investor and Berkshire Hathaway vice chairman",
      "intro": "A lawyer turned investor, Munger helped redirect Berkshire toward businesses with durable economics. Buffett credited him with seeing earlier that paying up for quality could beat repeatedly hunting for the cheapest assets.",
      "milestones": [
        {
          "year": 1965,
          "text": "Urged Buffett to use Berkshire as a vehicle for buying better businesses at fair prices, according to Buffett's later account."
        },
        {
          "year": 1972,
          "text": "Backed Blue Chip Stamps' purchase of See's Candies, whose customer loyalty supported pricing power with modest additional capital needs."
        },
        {
          "year": 1978,
          "text": "Became Berkshire Hathaway's vice chairman and remained Buffett's partner in running the company until his death in 2023."
        }
      ],
      "impact": "See's showed why a business's ability to send cash back to its owner can matter more than its size. Berkshire could reinvest those proceeds in businesses with more room to grow.",
      "tags": [
        "Capital Allocation",
        "Compounding",
        "Pricing Power",
        "Judgment"
      ],
      "sources": [
        {
          "label": "Buffett’s tribute to Munger in Berkshire’s 2023 annual report",
          "url": "https://www.berkshirehathaway.com/2023ar/2023ar.pdf"
        },
        {
          "label": "Berkshire’s 50-year retrospective and the See’s purchase",
          "url": "https://www.berkshirehathaway.com/letters/2014ltr.pdf"
        },
        {
          "label": "Los Angeles Times obituary",
          "url": "https://www.latimes.com/obituaries/story/2023-11-28/charles-munger-warren-buffett-dead"
        }
      ],
      "ideas": [
        {
          "title": "Concentrate practice",
          "text": "Repeated work on a small set of decisions builds judgment. Munger compared Buffett’s selective focus to Roger Federer’s sustained practice at tennis."
        },
        {
          "title": "Make autonomy attract better operators",
          "text": "Munger saw a loop at Berkshire. Autonomy attracted capable managers, their results attracted more, and headquarters could spend less time supervising them."
        }
      ],
      "motivation": "In Berkshire’s 50-year retrospective, Munger wanted other companies to try parts of its management system. He argued for giving able leaders time to improve at their jobs and keeping headquarters small enough to let them work.",
      "quote": {
        "text": "Buffett succeeded for the same reason Roger Federer became good at tennis.",
        "context": "From Munger’s signed contribution to Berkshire’s 2014 shareholder letter, explaining the cumulative effect of narrowing one’s focus for decades.",
        "label": "Munger’s Berkshire retrospective, page 40",
        "url": "https://www.berkshirehathaway.com/letters/2014ltr.pdf#page=40"
      },
      "ideaSources": [
        {
          "label": "Munger on the Berkshire system and its lessons, pages 38–42",
          "url": "https://www.berkshirehathaway.com/letters/2014ltr.pdf#page=38"
        }
      ],
      "funFact": "As boys, Munger and Buffett both worked in Buffett’s grandfather’s Omaha grocery store. They only met in 1959, when Munger was 35 and Buffett was 28, after a doctor introduced them.",
      "funFactSource": {
        "label": "Buffett recalls meeting Munger in his 2014 letter",
        "url": "https://www.berkshirehathaway.com/letters/2014ltr.pdf"
      }
    },
    {
      "id": 13,
      "name": "Warren Buffett",
      "slug": "warren-buffett",
      "category": "capital",
      "role": "Investor and Berkshire Hathaway builder",
      "intro": "Buffett turned a struggling textile manufacturer into a holding company for operating businesses and public equities. With Charlie Munger, he shifted from buying cheap assets toward owning businesses that could earn strong returns on capital over long periods.",
      "milestones": [
        {
          "year": 1965,
          "text": "Took control of Berkshire Hathaway, inheriting a textile business with persistent competitive disadvantages."
        },
        {
          "year": 1967,
          "text": "Bought National Indemnity, giving Berkshire an insurance operation whose float could be invested before claims came due."
        },
        {
          "year": 2010,
          "text": "Joined Bill and Melinda Gates in launching the Giving Pledge, which asks wealthy individuals and families to commit a majority of their wealth to philanthropy."
        }
      ],
      "impact": "Berkshire made long-horizon ownership, decentralized operations, and centralized capital allocation a prominent model. Its shareholder letters taught generations of investors to think about the business behind a ticker.",
      "tags": [
        "Capital Allocation",
        "Compounding",
        "Insurance",
        "Philanthropy"
      ],
      "sources": [
        {
          "label": "Berkshire Hathaway 2024 annual report",
          "url": "https://www.berkshirehathaway.com/2024ar/2024ar.pdf"
        },
        {
          "label": "Buffett on closing the textile business",
          "url": "https://www.berkshirehathaway.com/letters/1985.html"
        },
        {
          "label": "Buffett’s Giving Pledge letter",
          "url": "https://www.givingpledge.org/pledger/warren-buffett/"
        }
      ],
      "ideas": [
        {
          "title": "Judge growth per share",
          "text": "An acquisition should raise intrinsic value per share. Bigger earnings can leave each owner worse off if the purchase requires issuing too much stock."
        },
        {
          "title": "Make retained earnings earn their keep",
          "text": "Berkshire tested whether every dollar it kept added at least a dollar of market value over a rolling five years."
        }
      ],
      "motivation": "Buffett described Berkshire shareholders as long-term partners who had entrusted him with their money. His stated goal was to grow their underlying business value per share, and he put most of his own wealth alongside theirs.",
      "quote": {
        "text": "when we own portions of outstanding businesses with outstanding managements, our favorite holding period is forever.",
        "context": "From Berkshire’s 1988 shareholder letter, discussing how long he expected to hold the newly acquired Coca-Cola and Freddie Mac positions.",
        "label": "Berkshire Hathaway 1988 shareholder letter",
        "url": "https://www.berkshirehathaway.com/letters/1988.html"
      },
      "ideaSources": [
        {
          "label": "Berkshire Hathaway Owner’s Manual",
          "url": "https://www.berkshirehathaway.com/owners.html"
        }
      ],
      "funFact": "In his 2010 shareholder letter, Buffett ranked his Omaha home as his third-best investment. Ahead of the house, which had cost $31,500, he placed the two wedding rings he had bought.",
      "funFactSource": {
        "label": "Buffett’s 2010 shareholder letter",
        "url": "https://www.berkshirehathaway.com/letters/2010ltr.pdf"
      }
    },
    {
      "id": 14,
      "name": "Dee Hock",
      "slug": "dee-hock",
      "category": "industry",
      "role": "Founding CEO of the network that became Visa",
      "intro": "Hock helped independent banks make their cards work across a common payment network. He gave competing banks a stake in the organization while letting them keep their own customer and merchant relationships.",
      "milestones": [
        {
          "year": 1970,
          "text": "Became the first CEO of National BankAmericard Inc., which took over the BankAmericard system as a member-owned organization."
        },
        {
          "year": 1976,
          "text": "The system adopted the Visa name, giving participating banks a common brand that could work across countries."
        }
      ],
      "impact": "The network helped make it ordinary for a card issued by one bank to work at a merchant served by another. Shared electronic infrastructure replaced much of the work of coordinating by paper and phone.",
      "tags": [
        "Payments",
        "Interoperability",
        "Governance"
      ],
      "sources": [
        {
          "label": "Federal Reserve History on electronic payments",
          "url": "https://www.federalreservehistory.org/essays/electronic-point-of-sale-payments"
        },
        {
          "label": "Harvard Business School leadership profile",
          "url": "https://www.hbs.edu/leadership/20th-century-leaders/details?profile=dee_ward_hock"
        },
        {
          "label": "Dee Hock’s firsthand account",
          "url": "https://www.deewhock.com/biography"
        }
      ],
      "ideas": [
        {
          "title": "Break a deadlock into defined problems",
          "text": "When a meeting of BankAmericard licensees broke down, Hock proposed committees to investigate the problems and bring back workable options."
        },
        {
          "title": "Give agreements room to evolve",
          "text": "Hock argued that a shared purpose and principles of conduct could guide decisions when the details were too numerous to settle in advance."
        }
      ],
      "motivation": "Hock’s account describes growing credit and operating losses at BankAmericard. He believed the card could become a general means of exchanging value across borders, a possibility that required rethinking how participating banks worked together.",
      "quote": {
        "text": "Agreement is always dynamic, imperfect and malleable.",
        "context": "In his essay Agreement as Organization, Hock described reaching and sustaining agreement as continuing work because people bring different experiences and assumptions.",
        "label": "Dee Hock’s essay Agreement as Organization",
        "url": "https://www.deewhock.com/essays/agreement-as-organization"
      },
      "ideaSources": [
        {
          "label": "Dee Hock’s account of BankAmericard’s reorganization",
          "url": "https://www.deewhock.com/biography"
        },
        {
          "label": "Hock’s essay on shared intent and trust",
          "url": "https://www.deewhock.com/essays/agreement-as-organization"
        }
      ],
      "funFact": "After leaving Visa in 1984, Hock spent years on a California ranch. His own career chronology describes 1984–1992 as a period spent as a ranch owner, recluse, student, and philosopher.",
      "funFactSource": {
        "label": "Dee Hock’s biographical chronology",
        "url": "https://www.deewhock.com/biography"
      }
    },
    {
      "id": 15,
      "name": "Bill Gates",
      "slug": "bill-gates",
      "category": "technology",
      "role": "Microsoft co-founder and philanthropist",
      "intro": "Bill Gates built Microsoft around software that could ship on computers made by other companies. The strategy turned the operating system into a common platform for hardware makers, developers, and PC users.",
      "milestones": [
        {
          "year": 1975,
          "text": "Started Microsoft with Paul Allen to develop software for the Altair 8800, an early personal computer."
        },
        {
          "year": 1981,
          "text": "IBM shipped its PC with Microsoft’s MS-DOS available as an operating system. Microsoft later released Windows on top of DOS."
        },
        {
          "year": 2010,
          "text": "Started the Giving Pledge with Melinda French Gates and Warren Buffett to encourage wealthy people to commit most of their wealth to philanthropy."
        }
      ],
      "impact": "Microsoft helped make compatible software available across a broad PC market. Through the Gates Foundation, he later made global health and vaccine access major philanthropic priorities.",
      "tags": [
        "Software Licensing",
        "Personal Computing",
        "Platform Power",
        "Philanthropy"
      ],
      "sources": [
        {
          "label": "Microsoft • Company history",
          "url": "https://news.microsoft.com/about/"
        },
        {
          "label": "U.S. Department of Justice • Court findings in Microsoft case",
          "url": "https://www.justice.gov/atr/us-v-microsoft-courts-findings-fact"
        },
        {
          "label": "Gates Foundation • Bill Gates and the Giving Pledge",
          "url": "https://www.gatesfoundation.org/about/leadership/bill-gates"
        }
      ],
      "ideas": [
        {
          "title": "Price the work behind the code",
          "text": "Gates’s 1976 letter argued that licensing revenue could fund programming, testing, and documentation. A copy was cheap to make after that work was done."
        },
        {
          "title": "Make a bare computer useful",
          "text": "Altair BASIC let owners write programs in a high-level language. Microsoft could make an unfamiliar machine more useful without designing the machine itself."
        }
      ],
      "motivation": "Gates later described widespread home and office computing as the vision he shared with Paul Allen. His 1976 letter adds a near-term motive: earn enough from software sales to hire programmers and build more tools.",
      "quote": {
        "text": "Who can afford to do professional work for nothing?",
        "context": "In his 1976 open letter to computer hobbyists, Gates asked how software developers could cover the work of making and maintaining Altair BASIC.",
        "label": "Computer History Museum · Open Letter to Hobbyists",
        "url": "https://computerhistory.org/wp-content/uploads/2019/08/core-2002-05.pdf"
      },
      "ideaSources": [
        {
          "label": "Computer History Museum · Gates’s 1976 open letter",
          "url": "https://computerhistory.org/wp-content/uploads/2019/08/core-2002-05.pdf"
        },
        {
          "label": "Gates Notes · The original Microsoft source code",
          "url": "https://www.gatesnotes.com/microsoft-original-source-code"
        }
      ],
      "funFact": "Gates recalled using a University of Washington computer in the early morning after Paul Allen noticed that its particle-physics workload left several hours free each day.",
      "funFactSource": {
        "label": "Gates Notes · Early days as a computer programmer",
        "url": "https://www.gatesnotes.com/early-days-as-a-computer-programmer"
      }
    },
    {
      "id": 16,
      "name": "Michael Ovitz",
      "slug": "michael-ovitz",
      "category": "media",
      "role": "Hollywood talent agent and CAA co-founder",
      "intro": "Michael Ovitz helped Creative Artists Agency turn a roster of talent into negotiating power. A studio could buy into a project with a script and key creative talent already attached, giving the agency influence before production began.",
      "milestones": [
        {
          "year": 1975,
          "text": "Co-founded Creative Artists Agency with four fellow William Morris agents."
        },
        {
          "year": 1989,
          "text": "Helped broker Sony's purchase of Columbia Pictures, extending the agency's reach into studio ownership deals."
        },
        {
          "year": 1995,
          "text": "Joined Disney as president. His departure in 1996 and roughly $130 million severance led to shareholder litigation."
        }
      ],
      "impact": "Under Ovitz, CAA applied a familiar television practice to feature films, bringing scripts and stars together before taking projects to studios. Studios gained a faster way to assemble projects and agencies gained leverage over which deals reached the table.",
      "tags": [
        "Talent Representation",
        "Deal Making",
        "Film",
        "Incentives"
      ],
      "sources": [
        {
          "label": "Encyclopedia of Television and Radio on Ovitz and film packaging",
          "url": "https://www.tvencyclopedia.org/tv-encyclopedia-12/ovitz-michael"
        },
        {
          "label": "Delaware Supreme Court opinion on the Disney employment and severance",
          "url": "https://courts.delaware.gov/opinions/download.aspx?id=77400"
        },
        {
          "label": "Writers Guild of America on agency packaging fees",
          "url": "https://www.wga.org/employers/agencies/agency-agreements"
        }
      ],
      "ideas": [
        {
          "title": "Make follow-up a rule",
          "text": "Ovitz says CAA expected agents to answer colleagues quickly and return every call by day’s end, even if all they could leave was a message."
        },
        {
          "title": "Rehearse the deal before the meeting",
          "text": "For major negotiations, Ovitz says CAA researched the terms and role-played discussions to identify terms both sides might accept."
        }
      ],
      "motivation": "Ovitz said he and his co-founders had watched internal competition at William Morris and chose to build CAA around cooperation. He wanted agents to share what they knew and help projects beyond their own client lists.",
      "quote": {
        "text": "We kept nothing a secret.",
        "context": "Ovitz was describing CAA’s internal practice of sharing notes and following up in a 2018 interview about how the agency worked.",
        "label": "Harvard Business Review IdeaCast interview with Michael Ovitz",
        "url": "https://hbr.org/podcast/2018/09/a-hollywood-executive-on-negotiation-talent-and-risk"
      },
      "ideaSources": [
        {
          "label": "Ovitz on negotiation preparation, response times, and collaboration at CAA",
          "url": "https://hbr.org/podcast/2018/09/a-hollywood-executive-on-negotiation-talent-and-risk"
        }
      ],
      "funFact": "Ovitz recalled a client giving him a novelty 25-hour clock because he was so obsessed with squeezing more time out of each day.",
      "funFactSource": {
        "label": "Ovitz's 2018 Harvard Business Review IdeaCast interview",
        "url": "https://hbr.org/podcast/2018/09/a-hollywood-executive-on-negotiation-talent-and-risk"
      }
    },
    {
      "id": 17,
      "name": "Steve Jobs",
      "slug": "steve-jobs",
      "category": "technology",
      "role": "Apple co-founder and product leader",
      "intro": "Steve Jobs helped bring two interface shifts into ordinary life: the Macintosh’s graphical desktop and the iPhone’s touch interface. He was particularly good at turning a collection of technologies into a product whose purpose people could grasp in a demonstration.",
      "milestones": [
        {
          "year": 1976,
          "text": "Co-founded Apple, pairing Steve Wozniak’s engineering with his own sales and product instincts."
        },
        {
          "year": 1984,
          "text": "Apple launched the Macintosh, bringing a graphical interface and mouse to a mass-market personal computer."
        },
        {
          "year": 2007,
          "text": "Introduced the iPhone, which combined a phone, music player, and web browser behind a multitouch display."
        }
      ],
      "impact": "NeXT’s software became a technical foundation for Apple after his return. At Pixar, he helped build the company that made Toy Story, the first fully computer-animated feature film.",
      "tags": [
        "Product Design",
        "Personal Computing",
        "Mobile",
        "Animation"
      ],
      "sources": [
        {
          "label": "Computer History Museum • Apple Computer",
          "url": "https://www.computerhistory.org/brochures/a-c/"
        },
        {
          "label": "Stanford • Jobs’s 2005 commencement address",
          "url": "https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says"
        },
        {
          "label": "Apple • Original iPhone announcement",
          "url": "https://www.apple.com/newsroom/2007/01/09Apple-Reinvents-the-Phone-with-iPhone/"
        }
      ],
      "ideas": [
        {
          "title": "Borrow from another craft",
          "text": "Jobs traced the Macintosh’s varied typefaces and proportional spacing to a calligraphy class. A craft outside computing supplied criteria for judging the interface."
        },
        {
          "title": "Design as a form of communication",
          "text": "At Aspen, Jobs argued that the form of a computer tells people something about it. Everyday objects can teach users what to expect."
        }
      ],
      "motivation": "At the 1983 Aspen design conference, Jobs anticipated that people would spend years around personal computers. He urged designers to shape what those objects would communicate as computing became an everyday activity.",
      "quote": {
        "text": "We’re solving the problems of injecting some liberal arts into these computers",
        "context": "In the Steve Jobs Archive’s account of the 1983 Aspen design conference, Jobs said this when asked about graphic design tools.",
        "label": "Steve Jobs Archive · Objects of Our Life",
        "url": "https://stevejobsarchive.com/stories/objects-of-our-life"
      },
      "ideaSources": [
        {
          "label": "Steve Jobs Archive · 1983 Aspen talk and commentary",
          "url": "https://stevejobsarchive.com/stories/objects-of-our-life"
        },
        {
          "label": "Stanford · Jobs’s 2005 commencement address",
          "url": "https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says"
        }
      ],
      "funFact": "After dropping out of Reed, Jobs said he returned Coke bottles for food money and walked seven miles across town on Sundays for a meal at the Hare Krishna temple.",
      "funFactSource": {
        "label": "Stanford · Jobs’s 2005 commencement address",
        "url": "https://news.stanford.edu/stories/2005/06/youve-got-find-love-jobs-says"
      }
    },
    {
      "id": 18,
      "name": "James Dyson",
      "slug": "james-dyson",
      "category": "industry",
      "role": "Inventor and appliance entrepreneur",
      "intro": "Dyson approached a vacuum that lost suction as an airflow problem. He adapted industrial cyclone separation to spin dust out of the air, replacing the bag that clogged during use.",
      "milestones": [
        {
          "year": 1978,
          "text": "Began experimenting with cyclonic separation for a household vacuum. Dyson’s foundation credits the design effort with 5,127 prototypes."
        },
        {
          "year": 1993,
          "text": "Launched the mass-produced DC01 after an earlier cyclonic model, the G-Force, was made in Japan with Apex."
        }
      ],
      "impact": "The DC01 made bagless cyclone vacuums a viable mass-market product. Dyson’s teams went on to rethink airflow in cordless vacuums, fans, and hair dryers.",
      "tags": [
        "Prototyping",
        "Product Design",
        "Commercialization"
      ],
      "sources": [
        {
          "label": "James Dyson Foundation on the first prototypes",
          "url": "https://www.jamesdysonfoundation.com/who-we-are/our-story/"
        },
        {
          "label": "Science Museum Group’s G-Force catalog record",
          "url": "https://collection.sciencemuseumgroup.org.uk/objects/co49526"
        },
        {
          "label": "Dyson’s account of commercializing the DC01",
          "url": "https://www.dyson.co.uk/james-dyson"
        }
      ],
      "ideas": [
        {
          "title": "Vary one part of the prototype",
          "text": "Dyson changed one aspect of a cyclone at a time and measured both dust capture and airflow to see what each change did."
        },
        {
          "title": "Let users see the result",
          "text": "Dyson kept the dust chamber transparent despite retailer objections. Customers could see how much the vacuum had picked up as they cleaned."
        }
      ],
      "motivation": "Dyson told Tim Ferriss that measurable progress kept him working through the years of prototypes. He was frustrated by vacuums that lost suction and wanted to solve the technical problem of separating dust without a clogging bag.",
      "quote": {
        "text": "So you must only do one change at a time.",
        "context": "Dyson explained his cyclone experiments in a 2021 interview with Tim Ferriss. Changing one variable let him tell which adjustment helped.",
        "label": "The Tim Ferriss Show transcript with James Dyson",
        "url": "https://tim.blog/2021/09/03/james-dyson-transcript/"
      },
      "ideaSources": [
        {
          "label": "Dyson’s account of prototype tests and the transparent chamber",
          "url": "https://tim.blog/2021/09/03/james-dyson-transcript/"
        }
      ],
      "funFact": "As an art student, Dyson asked engineer Jeremy Fry to finance a mushroom-shaped theater. Fry declined and instead asked him to design a high-speed landing craft, the Sea Truck.",
      "funFactSource": {
        "label": "Dyson’s biography of James Dyson",
        "url": "https://www.dyson.com/james-dyson"
      }
    },
    {
      "id": 19,
      "name": "Paul Tudor Jones",
      "slug": "paul-tudor-jones",
      "category": "capital",
      "role": "Global macro investor and philanthropist",
      "intro": "Jones built Tudor Investment Corporation around trading across global markets. He became widely known for anticipating the 1987 stock market crash and co-founded Robin Hood, a New York City antipoverty organization.",
      "milestones": [
        {
          "year": 1980,
          "text": "Founded Tudor Investment Corporation, which trades across equity, interest-rate, currency, and commodity markets."
        },
        {
          "year": 1987,
          "text": "Profited during the Black Monday crash after identifying vulnerabilities including the selling pressure that portfolio insurance could generate in a falling market."
        },
        {
          "year": 1988,
          "text": "Helped start Robin Hood to fund and support nonprofits addressing poverty in New York City."
        }
      ],
      "impact": "Jones made the discretionary global macro trader a familiar figure to a wider audience. Through Robin Hood, he also helped establish a grantmaking institution that pairs funding with support and measurement.",
      "tags": [
        "Global Macro",
        "Risk Management",
        "Market Structure",
        "Philanthropy"
      ],
      "sources": [
        {
          "label": "JUST Capital biography",
          "url": "https://justcapital.com/about/our-board/paul-tudor-jones-ll/"
        },
        {
          "label": "Jones’s account of the 1987 crash",
          "url": "https://finance.yahoo.com/news/paul-tudor-jones-heres-1987-crash-accident-waiting-happen-143801507.html"
        },
        {
          "label": "Robin Hood’s founding history and approach",
          "url": "https://robinhood.org/about/"
        }
      ],
      "ideas": [
        {
          "title": "Price the loss before entering",
          "text": "Jones described seeking roughly five dollars of plausible upside for each dollar at risk, so his process could withstand a low hit rate."
        },
        {
          "title": "Pick a rule for getting out",
          "text": "He used the 200-day average of closing prices to gauge the prevailing trend and as one signal for when to leave a position."
        }
      ],
      "motivation": "Jones told Tony Robbins that watching fortunes reverse in commodity markets, including the Hunts’ silver position, taught him how quickly capital could vanish. He traced his habit of reviewing downside risk daily to that experience.",
      "quote": {
        "text": "The whole trick in investing is: “How do I keep from losing everything?”",
        "context": "Jones’s answer to Tony Robbins about using the prevailing trend to manage risk, published in Money: Master the Game and reproduced in this excerpt.",
        "label": "Jones’s Tony Robbins interview excerpt",
        "url": "https://www.trendfollowing.com/paul-tudor-jones/"
      },
      "ideaSources": [
        {
          "label": "Tony Robbins’s interview with Jones, Money: Master the Game, chapter 6.5",
          "url": "https://icrrd.com/public/media/15-05-2021-132150Money-master-the-Game-Tony-Robbins.pdf"
        }
      ],
      "funFact": "Jones’s Greenwich Christmas display became a roadside attraction. In 2012, spectators could tune their car radios to a short-range FM station and watch the lights perform a roughly four-minute synchronized routine.",
      "funFactSource": {
        "label": "Greenwich Time’s 2012 report on Jones’s Christmas display",
        "url": "https://www.ctpost.com/news/article/paul-tudor-jones-has-flipped-the-switch-on-lights-4090889.php"
      }
    },
    {
      "id": 20,
      "name": "Michael Bloomberg",
      "slug": "michael-bloomberg",
      "category": "media",
      "role": "Financial information founder and mayor",
      "intro": "Bloomberg built a financial information company after leaving Salomon Brothers, then spent 12 years as New York City's mayor. His company bundled market information with the tools financial professionals use to analyze it, follow the news and communicate.",
      "milestones": [
        {
          "year": 1981,
          "text": "Started the company that became Bloomberg LP after losing his job in the Salomon Brothers acquisition."
        },
        {
          "year": 2002,
          "text": "Took office as New York City's 108th mayor, serving through the end of 2013."
        },
        {
          "year": 2003,
          "text": "Expanded smoke-free workplace rules to cover most bars and restaurants in New York City."
        }
      ],
      "impact": "The Bloomberg Terminal brought market data, reporting, analytics and messaging into a shared workflow. Pairing the tools with a network of subscribers gave financial professionals a reason to use the Terminal throughout the trading day.",
      "tags": [
        "Financial Media",
        "Market Data",
        "Public Policy"
      ],
      "sources": [
        {
          "label": "New York City Municipal Archives mayoral records",
          "url": "https://www.nyc.gov/assets/records/pdf/mayoral-collections/michael-r-bloomberg-2002-2013.pdf"
        },
        {
          "label": "Bloomberg Professional Services Terminal overview",
          "url": "https://professional.bloomberg.com/products/bloomberg-terminal/news/introduction/"
        },
        {
          "label": "Federal appellate record on the Floyd ruling",
          "url": "https://www.govinfo.gov/content/pkg/USCOURTS-ca2-13-03524/pdf/USCOURTS-ca2-13-03524-1.pdf"
        }
      ],
      "ideas": [
        {
          "title": "Visit your first market before you have a sale",
          "text": "Bloomberg brought coffee to people at Merrill Lynch and asked about their work. Repeated visits taught him what prospective Terminal customers needed."
        },
        {
          "title": "Put one door in front of many agencies",
          "text": "NYC311 gave residents one place to ask for non-emergency help. City staff could route requests to the appropriate agency behind that shared number."
        }
      ],
      "motivation": "Bloomberg recalled that being fired from Salomon Brothers prompted him to act on an unproven idea. He wanted to give people in finance direct access to the information they needed at their desks.",
      "quote": {
        "text": "I learned about the audience for our product and what they could really use.",
        "context": "Bloomberg recounting his early visits to Merrill Lynch in a 2013 essay on starting a company.",
        "label": "Mike Bloomberg's essay on starting a company",
        "url": "https://www.linkedin.com/pulse/20130814145719-32503052-top-5-tips-for-becoming-a-successful-entrepreneur"
      },
      "ideaSources": [
        {
          "label": "Mike Bloomberg's essay on starting a company",
          "url": "https://www.linkedin.com/pulse/20130814145719-32503052-top-5-tips-for-becoming-a-successful-entrepreneur"
        },
        {
          "label": "City of New York on the first decade of NYC311",
          "url": "https://www.nyc.gov/html/om/html/2013a/pr089-13.html"
        }
      ],
      "funFact": "Bloomberg often piloted his helicopter to Johns Hopkins trustees meetings and landed on an athletic field beside the administration building, according to the university's 1996 magazine profile.",
      "funFactSource": {
        "label": "Johns Hopkins Magazine profile of Bloomberg",
        "url": "https://pages.jh.edu/jhumag/1196web/bloombrg.html"
      }
    },
    {
      "id": 21,
      "name": "Jim Clark",
      "slug": "jim-clark",
      "category": "technology",
      "role": "Silicon Graphics and Netscape co-founder",
      "intro": "James H. Clark turned two emerging technologies into products with markets of their own. At Silicon Graphics he brought interactive 3D to workstations. At Netscape he backed a graphical browser that made the early web easier to use.",
      "milestones": [
        {
          "year": 1982,
          "text": "Founded Silicon Graphics, commercializing high-performance computer graphics based on work that grew out of his research at Stanford."
        },
        {
          "year": 1994,
          "text": "Co-founded the company that became Netscape with Marc Andreessen. Its Navigator browser offered free downloads for personal use and paid versions for commercial customers."
        }
      ],
      "impact": "Silicon Graphics put advanced visualization within reach of more engineers and creators. Navigator helped make the open web a consumer and commercial medium.",
      "tags": [
        "Computer Graphics",
        "Open Web",
        "Distribution",
        "Platform Power"
      ],
      "sources": [
        {
          "label": "Stanford Engineering • James H. Clark",
          "url": "https://engineering.stanford.edu/about/history/heroes/2013-heroes/james-h-clark"
        },
        {
          "label": "Computer History Museum • The browser wars",
          "url": "https://www.computerhistory.org/revolution/story/389"
        },
        {
          "label": "U.S. Department of Justice • Court findings in Microsoft case",
          "url": "https://www.justice.gov/atr/us-v-microsoft-courts-findings-fact"
        }
      ],
      "ideas": [
        {
          "title": "Recruit around an existing leader",
          "text": "Clark saw that the Mosaic engineers already trusted Andreessen. He backed that working relationship and gave the group a clearly defined browser project."
        },
        {
          "title": "Cross disciplines on purpose",
          "text": "Clark used the same instinct outside startups. He backed Stanford’s Bio-X center to bring engineers and researchers in biology and medicine into closer contact."
        }
      ],
      "motivation": "Clark said he had watched networking evolve for years before meeting the Mosaic team. He put his own money behind Netscape because he saw a chance to turn that shift into a product.",
      "quote": {
        "text": "The story there is that I wasn’t afraid of change.",
        "context": "Speaking to Stanford Engineering in 2013, Clark recalled that his most productive periods came when he crossed into another discipline.",
        "label": "Stanford Engineering · Interview with Jim Clark",
        "url": "https://engineering.stanford.edu/news/stanford-engineering-hero-jim-clark-talks-about-innovation-and-embracing-change"
      },
      "ideaSources": [
        {
          "label": "Computer History Museum · Jim Clark oral history",
          "url": "https://archive.computerhistory.org/resources/access/text/2020/06/102795133-05-01-acc.pdf"
        },
        {
          "label": "Stanford Engineering · Clark on innovation and change",
          "url": "https://engineering.stanford.edu/news/stanford-engineering-hero-jim-clark-talks-about-innovation-and-embracing-change"
        }
      ],
      "funFact": "After leaving high school, Clark joined the Navy at 17. He recalled doing so well in electronics-school algebra that he was assigned to teach the review class.",
      "funFactSource": {
        "label": "Computer History Museum · Jim Clark oral history",
        "url": "https://archive.computerhistory.org/resources/access/text/2020/06/102795133-05-01-acc.pdf"
      }
    },
    {
      "id": 22,
      "name": "Arnold Schwarzenegger",
      "slug": "arnold-schwarzenegger",
      "category": "performance",
      "role": "Bodybuilder, actor and governor",
      "intro": "Schwarzenegger won seven Mr. Olympia titles, became an action-film star and served as California's governor from 2003 to 2011. His physique and distinctive delivery, built in one career and put to work in another, became part of his appeal on screen.",
      "milestones": [
        {
          "year": 1984,
          "text": "Played the title character in James Cameron's The Terminator, a breakout role in his action-film career."
        },
        {
          "year": 2003,
          "text": "Won California's recall election to succeed Governor Gray Davis."
        },
        {
          "year": 2006,
          "text": "Signed AB 32, a bipartisan measure that set a target of returning California's greenhouse-gas emissions to 1990 levels by 2020."
        }
      ],
      "impact": "Schwarzenegger brought competitive bodybuilding into mainstream entertainment. As governor, he helped create a framework for statewide greenhouse-gas limits and gave California's air regulator responsibility for implementing it.",
      "tags": [
        "Bodybuilding",
        "Film",
        "Public Policy"
      ],
      "sources": [
        {
          "label": "Arnold Schwarzenegger career biography",
          "url": "https://www.schwarzenegger.com/bio"
        },
        {
          "label": "National Governors Association biography",
          "url": "https://www.nga.org/governor/arnold-schwarzenegger/"
        },
        {
          "label": "California Air Resources Board on AB 32",
          "url": "https://ww2.arb.ca.gov/resources/fact-sheets/ab-32-global-warming-solutions-act-2006"
        }
      ],
      "ideas": [
        {
          "title": "Reverse engineer a route from a role model",
          "text": "Reg Park gave Schwarzenegger a sequence he could copy. Bodybuilding offered a way to reach the United States and a foothold in film."
        },
        {
          "title": "Leave time between the input and the decision",
          "text": "Schwarzenegger credits movies and reading with widening his options. He used quiet time alone to connect those examples to choices he could make."
        }
      ],
      "motivation": "Schwarzenegger recalls wanting to reach America after seeing a film about it at school. Finding a bodybuilding champion who had made it into movies turned that distant ambition into a career path he could picture.",
      "quote": {
        "text": "Take the time to look out your own windows to the world, and sit with yourself and daydream.",
        "context": "Schwarzenegger in his newsletter, answering how he came up with goals for his life and career.",
        "label": "Arnold's Pump Club newsletter on creating a vision",
        "url": "https://arnoldspumpclub.com/blogs/newsletter/this-month-i-m-getting-straight-to-the-point"
      },
      "ideaSources": [
        {
          "label": "Arnold's Pump Club newsletter on creating a vision",
          "url": "https://arnoldspumpclub.com/blogs/newsletter/this-month-i-m-getting-straight-to-the-point"
        },
        {
          "label": "GQ interview with Arnold Schwarzenegger",
          "url": "https://www.gq.com/story/arnold-schwarzenegger-im-what-i-would-call-a-company-queen"
        }
      ],
      "funFact": "Schwarzenegger's film debut in Hercules in New York credited him as Arnold Strong. His dialogue was dubbed because executives thought his Austrian accent was too thick for audiences.",
      "funFactSource": {
        "label": "CNN profile transcript on Schwarzenegger's early films",
        "url": "https://transcripts.cnn.com/show/pitn/date/2004-08-28/segment/00"
      }
    },
    {
      "id": 23,
      "name": "Kevin Kelly",
      "slug": "kevin-kelly",
      "category": "media",
      "role": "Wired founding editor and technology writer",
      "intro": "Kelly helped make digital technology a subject for cultural journalism. He carried the Whole Earth tradition of evaluating tools into writing about networks, decentralized systems, and the economics of making things online.",
      "milestones": [
        {
          "year": 1984,
          "text": "Began editing and publishing Whole Earth Review, which covered emerging tools and ideas such as virtual reality and internet culture."
        },
        {
          "year": 1993,
          "text": "Helped launch Wired as founding executive editor. The magazine brought digital culture into a general-interest publication."
        },
        {
          "year": 2008,
          "text": "Published 1,000 True Fans, a model for making a living by selling directly to a small group of committed customers."
        }
      ],
      "impact": "Kelly gave independent creators a way to reason backward from the income they need to the customers and margin required. The revised essay later appeared in Tim Ferriss’s Tools of Titans.",
      "tags": [
        "Digital Culture",
        "Creator Economics",
        "Publishing"
      ],
      "sources": [
        {
          "label": "Kelly’s biography and timeline",
          "url": "https://kk.org/biography"
        },
        {
          "label": "1,000 True Fans",
          "url": "https://kk.org/thetechnium/1000-true-fans/"
        },
        {
          "label": "Kelly’s follow-up with counterexamples",
          "url": "https://kk.org/thetechnium/the-case-agains/"
        }
      ],
      "ideas": [
        {
          "title": "Count the uses a tool makes possible",
          "text": "Kelly judged inventions partly by the options they create for others, such as email spawning both spam and tools to filter it."
        },
        {
          "title": "Expect progress to arrive unevenly",
          "text": "His idea of protopia describes a future made slightly better through accumulated changes, with new problems arising alongside new benefits."
        }
      ],
      "motivation": "Kelly writes about technology as a way to expand what people can make and do. He coined protopia to give people a future worth imagining even when each new tool brings its own problems.",
      "quote": {
        "text": "There is more to be gained by producing more opportunities than by optimizing existing ones.",
        "context": "From New Rules for the New Economy, where Kelly argues that an invention’s downstream uses can matter more than its immediate efficiency.",
        "label": "Kevin Kelly’s Opportunities Before Efficiencies",
        "url": "https://kk.org/newrules/newrules-10.html"
      },
      "ideaSources": [
        {
          "label": "Kevin Kelly’s Opportunities Before Efficiencies",
          "url": "https://kk.org/newrules/newrules-10.html"
        },
        {
          "label": "Kevin Kelly’s original Protopia essay",
          "url": "https://kk.org/thetechnium/protopia/"
        }
      ],
      "funFact": "During a 5,000-mile bicycle ride across the United States in 1979, Kelly completed Bicycle Haiku, a book combining haiku poems and ink sketches made during the journey.",
      "funFactSource": {
        "label": "Kelly’s autobiographical timeline",
        "url": "https://kk.org/biography"
      }
    },
    {
      "id": 24,
      "name": "Michael Dell",
      "slug": "michael-dell",
      "category": "technology",
      "role": "Dell founder and direct-sales pioneer",
      "intro": "Michael Dell made the order itself part of the manufacturing system. Customers chose a configuration directly, and Dell assembled the computer once it had an order, keeping less finished inventory on hand.",
      "milestones": [
        {
          "year": 1984,
          "text": "Founded PC’s Limited while at the University of Texas, initially selling components and kits directly to customers."
        },
        {
          "year": 2013,
          "text": "Took Dell private with Silver Lake as the company moved toward a broader enterprise technology business."
        },
        {
          "year": 2016,
          "text": "Completed the EMC acquisition, adding enterprise storage and a controlling stake in VMware to Dell Technologies."
        }
      ],
      "impact": "The direct, build-to-order model made customized PCs easier to buy and showed hardware manufacturers how to compete on inventory and distribution as well as specifications.",
      "tags": [
        "Direct Sales",
        "Supply Chains",
        "Personal Computing",
        "Enterprise IT"
      ],
      "sources": [
        {
          "label": "Dell Technologies • Company timeline",
          "url": "https://www.dell.com/en-us/learn/our-company/lp/timeline"
        },
        {
          "label": "Texas State Historical Association • Dell Computer Corporation",
          "url": "https://www.tshaonline.org/handbook/entries/dell-computer-corporation"
        },
        {
          "label": "Harvard Business School • Michael Dell",
          "url": "https://www.hbs.edu/leadership/20th-century-leaders/details?profile=michael_dell"
        }
      ],
      "ideas": [
        {
          "title": "Coordinate across company boundaries",
          "text": "Dell’s model linked customer demand, assembly, and suppliers through shared information. That let separate firms coordinate some decisions as if they belonged to one operation."
        },
        {
          "title": "Track the time from lab to buyer",
          "text": "Dell treated delays between new components and store shelves as a cost. Direct selling shortened the route for a new configuration to reach buyers."
        }
      ],
      "motivation": "Dell told a Stanford audience that he loved the emerging PC and found buying one frustrating. He saw how slowly and expensively new technology reached customers and built a company around shortening that route.",
      "quote": {
        "text": "what if you sold the product directly to the customer",
        "context": "In a 2007 Stanford talk, Dell recalled the question he asked himself after seeing how PCs made their way to shoppers.",
        "label": "Stanford eCorner · The Origins of Dell, Inc.",
        "url": "https://stvp.stanford.edu/wp-content/uploads/sites/3/2024/09/the-origins-of-dell-inc-transcript.pdf"
      },
      "ideaSources": [
        {
          "label": "Stanford eCorner · Dell on why he started the company",
          "url": "https://stvp.stanford.edu/av/origins-dell-inc"
        },
        {
          "label": "Harvard Business Review · Interview on virtual integration",
          "url": "https://pubmed.ncbi.nlm.nih.gov/10177868/"
        }
      ],
      "funFact": "At 16, Dell sold newspaper subscriptions by recruiting friends to collect public marriage-license records, then mailing newlyweds trial offers. He recalled gathering prospects from 16 counties around Houston.",
      "funFactSource": {
        "label": "Academy of Achievement · Michael Dell interview",
        "url": "https://achievement.org/achiever/michael-dell/"
      }
    },
    {
      "id": 25,
      "name": "Michael Jordan",
      "slug": "michael-jordan",
      "category": "performance",
      "role": "Basketball champion and brand partner",
      "intro": "Jordan led the Chicago Bulls to six NBA titles and won Finals MVP in each of those series. The combination of two-way dominance, an Olympic stage and a signature shoe made him one of the most recognizable athletes of his era.",
      "milestones": [
        {
          "year": 1985,
          "text": "Nike brought the first Air Jordan to retail, making a signature basketball shoe a product with an identity of its own."
        },
        {
          "year": 1992,
          "text": "Won Olympic gold in Barcelona with the U.S. Dream Team, the first American men's Olympic basketball team to feature NBA stars."
        },
        {
          "year": 1998,
          "text": "Won his sixth title with Chicago, completing the team's second run of three straight championships."
        }
      ],
      "impact": "Jordan helped expand basketball's global audience. His partnership with Nike gave later athletes a prominent example of how a signature line could become a lasting business.",
      "tags": [
        "Basketball",
        "Team Systems",
        "Brand Building"
      ],
      "sources": [
        {
          "label": "NBA Legends profile of Michael Jordan",
          "url": "https://www.nba.com/news/history-nba-legend-michael-jordan"
        },
        {
          "label": "NBA history of the 1992 Dream Team",
          "url": "https://www.nba.com/news/history-top-moments-dream-team-1992"
        },
        {
          "label": "Nike history of the Air Jordan I",
          "url": "https://www.nike.com/launch/t/air-jordan-1-85/"
        }
      ],
      "ideas": [
        {
          "title": "Turn a setback into a specific rematch",
          "text": "Jordan remembered who made varsity ahead of him and used the decision as motivation to prove how much he could improve."
        },
        {
          "title": "Build a second way to change the game",
          "text": "Jordan led the league in scoring and won Defensive Player of the Year in 1987–88. He could influence possessions without touching the ball."
        }
      ],
      "motivation": "Jordan told his Hall of Fame audience that he wanted to prove he belonged with players such as Magic Johnson and Larry Bird. In the same speech, he credited his siblings with shaping his competitive drive.",
      "quote": {
        "text": "Never say never, because limits, like fears, are often just an illusion.",
        "context": "Jordan at his 2009 Hall of Fame induction after joking about playing at 50, as quoted by the Associated Press.",
        "label": "Associated Press on the Hall of Fame induction via CBS News",
        "url": "https://www.cbsnews.com/news/jordan-inducted-into-nba-hall-of-fame/"
      },
      "ideaSources": [
        {
          "label": "Transcript of Jordan's 2009 Hall of Fame speech",
          "url": "https://speakola.com/sports/michael-jordan-hall-of-fame-induction-2009"
        },
        {
          "label": "NBA Legends profile of Michael Jordan",
          "url": "https://www.nba.com/news/history-nba-legend-michael-jordan"
        }
      ],
      "funFact": "Jordan preferred Adidas. He recalled that his mother, Deloris, insisted he attend the Nike meeting he had wanted to skip.",
      "funFactSource": {
        "label": "NBC Sports on Jordan's recollection in The Last Dance",
        "url": "https://www.nbcsports.com/nba/news/give-michael-jordans-mother-deloris-the-credit-for-him-signing-with-nike"
      }
    },
    {
      "id": 26,
      "name": "Oprah Winfrey",
      "slug": "oprah-winfrey",
      "category": "media",
      "role": "Talk-show host and media owner",
      "intro": "Oprah Winfrey turned a Chicago morning show into a nationally syndicated program and used her success to secure ownership through Harpo Productions. From there she expanded into film, magazines, books, and cable television.",
      "milestones": [
        {
          "year": 1986,
          "text": "The Oprah Winfrey Show entered national syndication. In 1988, Harpo acquired ownership and took over production."
        },
        {
          "year": 1996,
          "text": "Started her on-air book club, putting novels and their authors before a national daytime audience."
        },
        {
          "year": 2007,
          "text": "Opened the Oprah Winfrey Leadership Academy for Girls near Johannesburg, South Africa."
        }
      ],
      "impact": "Winfrey built a major Black woman-led media company and turned audience trust into a way to finance stories and promote authors. The book club showed how a television host could change what bookstores stocked and readers picked up.",
      "tags": [
        "Audience Trust",
        "Ownership",
        "Publishing",
        "Philanthropy"
      ],
      "sources": [
        {
          "label": "Academy of Achievement biography and interview",
          "url": "https://achievement.org/achiever/oprah-winfrey/"
        },
        {
          "label": "American Academy of Arts and Sciences career profile",
          "url": "https://www.amacad.org/person/oprah-winfrey"
        },
        {
          "label": "Winfrey on how the book club began",
          "url": "https://www.oprahdaily.com/life/a25777945/oprah-power-of-book-club/"
        }
      ],
      "ideas": [
        {
          "title": "Give the audience a role",
          "text": "Producer Alice McGee suggested asking viewers to read along. That made the book club a shared activity viewers could join from home."
        },
        {
          "title": "Know what it costs to make the show",
          "text": "In 1991, Winfrey said she signed every check, down to routine studio expenses such as deliveries and tape repairs."
        }
      ],
      "motivation": "Winfrey said learning to read young let her imagine a life beyond the one she knew. She cited that experience as a reason to use her success to expand education for others.",
      "quote": {
        "text": "Education is what liberated me.",
        "context": "In a 1991 Academy of Achievement interview, Winfrey explained how books helped her imagine alternatives during a difficult childhood.",
        "label": "Academy of Achievement interview with Oprah Winfrey",
        "url": "https://achievement.org/achiever/oprah-winfrey/"
      },
      "ideaSources": [
        {
          "label": "Winfrey on the conversation that started Oprah's Book Club",
          "url": "https://www.oprahdaily.com/life/a25777945/oprah-power-of-book-club/"
        },
        {
          "label": "Winfrey on managing Harpo's finances and why education mattered to her",
          "url": "https://achievement.org/achiever/oprah-winfrey/"
        }
      ],
      "funFact": "Winfrey says her birth certificate reads Orpah, chosen from the Bible. People switched two letters when saying it, giving her Oprah and the handy reverse spelling Harpo.",
      "funFactSource": {
        "label": "Winfrey explains her name in her Academy of Achievement interview",
        "url": "https://achievement.org/achiever/oprah-winfrey/"
      }
    },
    {
      "id": 27,
      "name": "Jimmy Iovine",
      "slug": "jimmy-iovine",
      "category": "media",
      "role": "Music producer and Beats co-founder",
      "intro": "Jimmy Iovine went from recording engineer and producer to label executive and consumer hardware founder. His studio work with artists including Bruce Springsteen and Patti Smith preceded his role in building Interscope Records.",
      "milestones": [
        {
          "year": 1990,
          "text": "Co-founded Interscope Records with Ted Field and other partners. The label worked with acts including Nine Inch Nails, No Doubt, and Eminem."
        },
        {
          "year": 2006,
          "text": "Co-founded Beats Electronics with Dr. Dre, bringing recording-industry relationships and branding to premium headphones."
        },
        {
          "year": 2014,
          "text": "Joined Apple after it agreed to acquire Beats Electronics and Beats Music for $3 billion in total announced consideration."
        }
      ],
      "impact": "Interscope gave artists in different genres a major commercial outlet. Beats brought a record label's instincts for artists, image, and identity into a hardware category where the product could become a visible fashion accessory.",
      "tags": [
        "Music",
        "Brand Building",
        "Hardware",
        "Distribution"
      ],
      "sources": [
        {
          "label": "Television Academy career biography",
          "url": "https://www.televisionacademy.com/bios/jimmy-iovine"
        },
        {
          "label": "Rock & Roll Hall of Fame induction profile",
          "url": "https://rockhall.com/inductees/jimmy-iovine/"
        },
        {
          "label": "Apple's Beats acquisition announcement",
          "url": "https://www.apple.com/newsroom/2014/05/28Apple-to-Acquire-Beats-Music-Beats-Electronics/"
        }
      ],
      "ideas": [
        {
          "title": "Design for the listeners you want",
          "text": "Iovine says Beats emphasized bass deliberately because its intended audience wanted something different from the sound of conventional audiophile headphones."
        },
        {
          "title": "Watch for a new use in the wild",
          "text": "When LeBron James wanted headphones for his Olympic teammates, Iovine saw how athletes used music for training and shifted Beats marketing toward sports."
        }
      ],
      "motivation": "Iovine recalled watching technology and media companies profit from music while record companies depended on selling songs. He wanted to build new businesses with artists and saw an opening in the devices and services people used to listen.",
      "quote": {
        "text": "Music had to be more than just selling songs.",
        "context": "Iovine told Angela Ahrendts this in 2023 as he recalled why he wanted to expand from recorded music into headphones and streaming.",
        "label": "Masters of Scale interview with Jimmy Iovine, part two",
        "url": "https://mastersofscale.com/harness-fear-to-drive-innovation-part-2-jimmy-iovine/"
      },
      "ideaSources": [
        {
          "label": "Iovine on tuning Beats, marketing to athletes, and working with artists",
          "url": "https://mastersofscale.com/harness-fear-to-drive-innovation-part-2-jimmy-iovine/"
        }
      ],
      "funFact": "Iovine recalled preparing a mix when John Lennon arrived. Someone asked him to fetch tea, but Lennon told Iovine to keep mixing and sent the other person instead. Lennon then had the mix recorded.",
      "funFactSource": {
        "label": "Iovine recalls an early John Lennon session on Masters of Scale",
        "url": "https://mastersofscale.com/harness-fear-to-drive-innovation-part-1-jimmy-iovine/"
      }
    },
    {
      "id": 28,
      "name": "Jensen Huang",
      "slug": "jensen-huang",
      "category": "technology",
      "role": "NVIDIA co-founder and chief executive",
      "intro": "Jensen Huang grew NVIDIA from a graphics-chip company into a computing platform. The decisive move was making GPU parallelism available through a programming model, so researchers could use chips designed for graphics to tackle other workloads.",
      "milestones": [
        {
          "year": 1993,
          "text": "Co-founded NVIDIA with Chris Malachowsky and Curtis Priem to build hardware for 3D graphics."
        },
        {
          "year": 2006,
          "text": "NVIDIA unveiled CUDA, giving developers a way to program its GPUs for general-purpose parallel workloads."
        },
        {
          "year": 2012,
          "text": "AlexNet’s authors trained their image-classification network on two NVIDIA GPUs, showing what accessible parallel hardware could do for deep learning."
        }
      ],
      "impact": "CUDA made the value of a GPU depend on what developers could build on it. NVIDIA became a major supplier of the hardware and software used to train and run AI models.",
      "tags": [
        "Accelerated Computing",
        "Developer Tools",
        "AI Infrastructure",
        "Platform Power"
      ],
      "sources": [
        {
          "label": "NVIDIA • Corporate timeline",
          "url": "https://www.nvidia.com/en-us/about-nvidia/corporate-timeline/"
        },
        {
          "label": "NeurIPS • AlexNet paper",
          "url": "https://papers.neurips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf"
        },
        {
          "label": "European Commission • NVIDIA and Run:ai decision",
          "url": "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A32024M11766"
        }
      ],
      "ideas": [
        {
          "title": "Accelerate the part that costs the time",
          "text": "Profile the workload and move the expensive kernels onto specialized hardware. Much of the program can stay on the CPU while those kernels run faster."
        },
        {
          "title": "Find workloads that buy time",
          "text": "Huang recalled finding CUDA applications in CT reconstruction, seismic processing, and molecular dynamics. These smaller markets sustained the effort while demand for acceleration grew."
        }
      ],
      "motivation": "Huang told Stripe’s Patrick Collison he kept investing in CUDA because he believed accelerated computing could solve problems ordinary computers could not. The bet raised chip costs before most buyers had a reason to pay for it.",
      "quote": {
        "text": "Customers don’t value the product, and they won’t pay you a premium for it.",
        "context": "At Stripe Sessions in 2024, Huang was recalling the period when CUDA made NVIDIA’s chips more expensive and few customers had applications for it.",
        "label": "Stripe Sessions · A conversation with Jensen Huang",
        "url": "https://stripe.com/sessions/2024/a-conversation-with-nvidias-jensen-huang"
      },
      "ideaSources": [
        {
          "label": "Stripe Sessions · Huang on CUDA and new markets",
          "url": "https://stripe.com/sessions/2024/a-conversation-with-nvidias-jensen-huang"
        }
      ],
      "funFact": "NVIDIA’s founders discussed their first chip at a Denny’s in 1993. Huang had started working at the chain at 15, washing dishes and waiting tables. A plaque now commemorates the company’s diner origins.",
      "funFactSource": {
        "label": "NVIDIA · Huang returns to Denny’s",
        "url": "https://blogs.nvidia.com/blog/nvidia-dennys-trillion/"
      }
    },
    {
      "id": 29,
      "name": "Marc Andreessen",
      "slug": "marc-andreessen",
      "category": "capital",
      "role": "Web browser pioneer and venture investor",
      "intro": "Andreessen helped put the graphical web in front of a mass audience and then built a venture firm around the idea that software would reshape industries. His career spans the tools that opened the web and the capital that funded companies built on it.",
      "milestones": [
        {
          "year": 1993,
          "text": "Co-developed NCSA Mosaic with Eric Bina. Its graphical interface let readers see images alongside the text of web pages."
        },
        {
          "year": 1994,
          "text": "Co-founded Netscape with Jim Clark. The company released its own browser that year."
        },
        {
          "year": 2009,
          "text": "Co-founded Andreessen Horowitz with Ben Horowitz. His 2011 essay argued that software companies would increasingly displace incumbents across industries."
        }
      ],
      "impact": "Mosaic and Netscape helped make the web accessible beyond its technical audience. Andreessen's investing thesis gave founders and investors a vocabulary for understanding how software changes distribution and operating costs.",
      "tags": [
        "Venture Capital",
        "Web History",
        "Distribution",
        "Platforms"
      ],
      "sources": [
        {
          "label": "University of Illinois engineering profile",
          "url": "https://grainger.illinois.edu/alumni/hall-of-fame/marc-andreessen"
        },
        {
          "label": "Computer History Museum’s 1993 timeline",
          "url": "https://www.computerhistory.org/timeline/1993/"
        },
        {
          "label": "Andreessen Horowitz on the firm’s founding thesis",
          "url": "https://a16z.com/about/"
        }
      ],
      "ideas": [
        {
          "title": "Watch the cost of starting",
          "text": "Andreessen cited cloud services as a reason startups could reach global users without paying to build and staff their own infrastructure first."
        },
        {
          "title": "Look for software inside physical businesses",
          "text": "Andreessen pointed to Walmart’s distribution software and described FedEx as a software network that connects its trucks, planes, and hubs."
        }
      ],
      "motivation": "Andreessen wrote his 2011 essay as investors debated whether a new internet bubble was forming. As a venture investor in several companies he discussed, he wanted readers to examine the economics enabled by broadband, smartphones, and cheaper computing.",
      "quote": {
        "text": "Software is eating the world.",
        "context": "The opening sentence of Andreessen’s August 2011 Wall Street Journal essay, republished by his firm.",
        "label": "Andreessen’s Why Software Is Eating the World",
        "url": "https://a16z.com/why-software-is-eating-the-world/"
      },
      "ideaSources": [
        {
          "label": "Andreessen’s 2011 essay on infrastructure and industry economics",
          "url": "https://a16z.com/why-software-is-eating-the-world/"
        }
      ],
      "funFact": "When TIME put Andreessen on its cover in 1996, he posed barefoot. A year later, the magazine jokingly identified that cover as a trendsetter in shoeless publicity photos of business leaders and celebrities.",
      "funFactSource": {
        "label": "TIME’s 1997 retrospective on barefoot publicity photos",
        "url": "https://time.com/archive/6731281/notebook-aug-11-1997/"
      }
    },
    {
      "id": 30,
      "name": "Ari Emanuel",
      "slug": "ari-emanuel",
      "category": "media",
      "role": "Talent agent and sports executive",
      "intro": "Ari Emanuel started in talent representation and helped build a group that owns live sports and entertainment properties. Owning an event gives the business recurring opportunities to sell tickets, sponsorships, and media rights.",
      "milestones": [
        {
          "year": 1995,
          "text": "Co-founded Endeavor. The agency combined with William Morris in 2009 to form WME."
        },
        {
          "year": 2016,
          "text": "WME's parent group acquired UFC with a consortium including affiliates of Silver Lake and other investors."
        },
        {
          "year": 2023,
          "text": "Became CEO of TKO Group Holdings when Endeavor combined UFC and WWE under one public company."
        }
      ],
      "impact": "Emanuel helped take an agency built around representing clients into a business with rights and live events of its own. Combining UFC and WWE created a vehicle for sharing the expertise needed to sell media rights and operate large events.",
      "tags": [
        "Talent Representation",
        "Media Rights",
        "Live Events",
        "Incentives"
      ],
      "sources": [
        {
          "label": "Endeavor SEC filing on the agency, mergers, and UFC acquisition",
          "url": "https://www.sec.gov/Archives/edgar/data/1766363/000119312524236814/d872751dprer14c.htm"
        },
        {
          "label": "SEC filing announcing the UFC and WWE combination",
          "url": "https://www.sec.gov/Archives/edgar/data/1766363/000119312523233577/d495817dex991.htm"
        },
        {
          "label": "Writers Guild of America East on its WME agreement",
          "url": "https://www.wgaeast.org/what-is-the-guild/guild-history/amba/agreement-with-wme/"
        }
      ],
      "ideas": [
        {
          "title": "Make calls in blocks",
          "text": "In his memoir, Emanuel recalls setting aside several hours for successive calls, working through dozens of contacts and problems in a single morning."
        },
        {
          "title": "Share operations across distinct properties",
          "text": "TKO’s plan kept UFC and WWE distinct while using shared expertise in ticket pricing, event operations, and rights sales to serve both."
        }
      ],
      "motivation": "CBS reported that Emanuel’s love of movies and television drew him to agency work. He described the job as turning creative ambitions into projects through practical work on scripts, financing, and marketing.",
      "quote": {
        "text": "Roll calls for several hours, speak to fifty or sixty people about fifty or sixty problems",
        "context": "From Emanuel’s 2026 memoir Roll the Calls, in a passage published by CBS News where he reconstructs a workday in 1994.",
        "label": "Roll the Calls excerpt published by CBS News",
        "url": "https://www.cbsnews.com/news/book-excerpt-roll-the-calls-by-ari-emanuel/"
      },
      "ideaSources": [
        {
          "label": "CBS Sunday Morning interview on Emanuel's path to talent representation",
          "url": "https://www.cbsnews.com/news/superagent-ari-emanuel-born-to-fight/"
        },
        {
          "label": "TKO launch filing on the operations the two businesses could share",
          "url": "https://www.sec.gov/Archives/edgar/data/1766363/000119312523233577/d495817dex991.htm"
        }
      ],
      "funFact": "HBO’s fictional agent Ari Gold in Entourage was based on Emanuel, who began his Hollywood career in a mailroom, copying and delivering scripts.",
      "funFactSource": {
        "label": "CBS Sunday Morning on Emanuel and his fictional counterpart",
        "url": "https://www.cbsnews.com/news/superagent-ari-emanuel-born-to-fight/"
      }
    },
    {
      "id": 31,
      "name": "Paul Graham",
      "slug": "paul-graham",
      "category": "capital",
      "role": "Programmer, essayist, and startup accelerator co-founder",
      "intro": "Graham helped build Viaweb, an early web application for creating online stores, then co-founded Y Combinator. His essays made startup advice concrete through examples of founders recruiting and serving early users by hand.",
      "milestones": [
        {
          "year": 1995,
          "text": "Started Viaweb with Robert Morris, letting merchants build online shops through a browser. Yahoo acquired it in 1998."
        },
        {
          "year": 2005,
          "text": "Started Y Combinator with Jessica Livingston, Robert Morris, and Trevor Blackwell, funding founders in batches so teams could learn alongside each other."
        },
        {
          "year": 2013,
          "text": "Published Do Things That Don’t Scale, describing how hands-on work can reveal what early users value."
        }
      ],
      "impact": "Y Combinator helped popularize a repeatable format for seed funding, close mentorship, peer learning, and introductions to investors. Its early alumni included Reddit, Dropbox, and Airbnb.",
      "tags": [
        "Venture Capital",
        "Accelerators",
        "Customer Discovery",
        "Software"
      ],
      "sources": [
        {
          "label": "Paul Graham’s biography",
          "url": "https://paulgraham.com/bio.html"
        },
        {
          "label": "Jessica Livingston on founding Y Combinator",
          "url": "https://www.ycombinator.com/blog/jessica-livingston-shares-9-things-she-learned-from-founding-yc"
        },
        {
          "label": "Do Things That Don’t Scale",
          "url": "https://www.ycombinator.com/library/96-do-things-that-don-t-scale"
        }
      ],
      "ideas": [
        {
          "title": "Install alongside the user",
          "text": "Graham cites Stripe’s founders setting up the product on customers’ laptops. That gave them a chance to see where onboarding got stuck."
        },
        {
          "title": "Make growth a weekly question",
          "text": "Graham preferred a weekly growth rate in revenue or active users. The rate gives early teams a quick way to evaluate what changed."
        }
      ],
      "motivation": "Graham wrote that he wanted founders to take an active role in getting products off the ground. At YC, he used frequent feedback and close contact with early users to make that advice practical.",
      "quote": {
        "text": "The most common unscalable thing founders have to do at the start is to recruit users manually.",
        "context": "From Graham’s 2013 essay Do Things That Don’t Scale, in the section on getting a startup’s first users.",
        "label": "Paul Graham’s Do Things That Don’t Scale",
        "url": "https://paulgraham.com/ds.html"
      },
      "ideaSources": [
        {
          "label": "Graham on early recruiting and onboarding",
          "url": "https://paulgraham.com/ds.html"
        },
        {
          "label": "Graham’s Startup = Growth",
          "url": "https://www.paulgraham.com/growth.html"
        }
      ],
      "funFact": "Graham’s invitation to take an art-school entrance exam in Florence went to Cambridge, England, instead of Cambridge, Massachusetts. He recalled receiving it only weeks before the exam and having to learn Italian.",
      "funFactSource": {
        "label": "Graham’s autobiographical essay What I Worked On",
        "url": "https://paulgraham.com/worked.html"
      }
    },
    {
      "id": 32,
      "name": "Derek Jeter",
      "slug": "derek-jeter",
      "category": "performance",
      "role": "Yankees captain and media founder",
      "intro": "Jeter spent 20 seasons with the New York Yankees, played no field position other than shortstop, and finished with 3,465 hits and five World Series championships. After retirement he founded a platform where other athletes could tell their own stories.",
      "milestones": [
        {
          "year": 1996,
          "text": "Won American League Rookie of the Year and his first World Series. He and his father, Charles, also started the Turn 2 Foundation."
        },
        {
          "year": 2000,
          "text": "Won World Series MVP as the Yankees beat the Mets in the Subway Series."
        },
        {
          "year": 2014,
          "text": "Launched The Players' Tribune just after retiring, with first-person stories produced with athletes."
        }
      ],
      "impact": "Turn 2 built youth programs around leadership, academics and healthy choices. The Players' Tribune gave athletes editorial help and a dedicated outlet for personal accounts that often fit poorly into postgame interviews.",
      "tags": [
        "Baseball",
        "Athlete Media",
        "Youth Development"
      ],
      "sources": [
        {
          "label": "National Baseball Hall of Fame career profile",
          "url": "https://baseballhall.org/hall-of-famers/jeter-derek"
        },
        {
          "label": "Turn 2 Foundation mission and history",
          "url": "https://www.mlb.com/turn-2-foundation/mission"
        },
        {
          "label": "Jeter's launch letter for The Players' Tribune",
          "url": "https://www.theplayerstribune.com/articles/introducing-derek-jeter"
        }
      ],
      "ideas": [
        {
          "title": "Change who chooses the subject",
          "text": "At The Players' Tribune, athletes could choose what they wanted to explain and work with editors and producers to shape the story."
        },
        {
          "title": "Give youth leaders the agenda",
          "text": "After Turn 2 participants questioned who was in charge, the foundation handed them responsibility for choosing issues and running their own conference."
        }
      ],
      "motivation": "Jeter wrote that he had kept his guard up with reporters in New York to avoid distractions. His launch letter described wanting a setting where athletes could decide what to say and connect with fans directly.",
      "quote": {
        "text": "We want to have a way to connect directly with our fans, with no filter.",
        "context": "Jeter explaining why he was starting The Players' Tribune, in his October 2014 launch letter.",
        "label": "Jeter's launch letter for The Players' Tribune",
        "url": "https://www.theplayerstribune.com/articles/introducing-derek-jeter"
      },
      "ideaSources": [
        {
          "label": "Jeter's launch letter for The Players' Tribune",
          "url": "https://www.theplayerstribune.com/articles/introducing-derek-jeter"
        },
        {
          "label": "Jeter on handing control to Turn 2 participants",
          "url": "https://www.theplayerstribune.com/articles/derek-jeter-turn-2-foundation-leaders"
        }
      ],
      "funFact": "Jeter's first signed contract was with his parents. Each school year they spelled out grades, behavior and curfews. He recalled accepting most of the terms while trying to negotiate the curfew.",
      "funFactSource": {
        "label": "Karl Ravech interview with Jeter via ABC News",
        "url": "https://abcnews.com/amp/Sports/derek-jeter-interview/story?id=47409350"
      }
    },
    {
      "id": 33,
      "name": "Jeff Bezos",
      "slug": "jeff-bezos",
      "category": "technology",
      "role": "Amazon founder and infrastructure builder",
      "intro": "Jeff Bezos used online bookselling to prove that the internet could offer more selection than a physical store. Amazon then invested in the systems needed to make online shopping convenient at much greater scale.",
      "milestones": [
        {
          "year": 1997,
          "text": "Set out Amazon’s long-term approach in its first shareholder letter. The company had reached more than 1.5 million customers and planned further investment in infrastructure and selection."
        },
        {
          "year": 2006,
          "text": "Amazon Web Services launched S3, letting developers buy internet-accessible storage as a service instead of provisioning storage hardware upfront."
        }
      ],
      "impact": "Amazon helped make online shopping habitual. AWS applied a similar idea to infrastructure, lowering the upfront cost of launching and scaling internet services.",
      "tags": [
        "E-commerce",
        "Cloud Computing",
        "Long-term Investment",
        "Marketplace"
      ],
      "sources": [
        {
          "label": "Amazon • Bezos’s original 1997 shareholder letter",
          "url": "https://www.aboutamazon.com/news/company-news/amazons-original-1997-letter-to-shareholders"
        },
        {
          "label": "Amazon • Original S3 launch announcement",
          "url": "https://press.aboutamazon.com/2006/3/amazon-web-services-launches"
        },
        {
          "label": "Federal Trade Commission • Amazon marketplace case",
          "url": "https://www.ftc.gov/legal-library/browse/cases-proceedings/1910129-1910130-amazoncom-inc-amazon-ecommerce"
        }
      ],
      "ideas": [
        {
          "title": "Match the process to the decision",
          "text": "Bezos wanted lightweight approval for reversible choices and quick correction when evidence changed. Mistakes are cheaper when teams can see and undo them."
        },
        {
          "title": "Watch the goal behind the metric",
          "text": "A process can become a proxy for the outcome it was designed to improve. Bezos used customer experience to check whether the process still helped."
        }
      ],
      "motivation": "By his 2016 shareholder letter, Bezos was trying to preserve Amazon’s ability to learn as it grew. His stated aim was to keep decisions moving and use direct knowledge of customers to spot needs they could not yet articulate.",
      "quote": {
        "text": "Many decisions are reversible, two-way doors.",
        "context": "Bezos wrote this in his 2016 letter to Amazon shareholders, explaining when a lighter decision process made sense.",
        "label": "Amazon · 2016 Letter to Shareholders",
        "url": "https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders"
      },
      "ideaSources": [
        {
          "label": "Amazon · 2016 Letter to Shareholders",
          "url": "https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders"
        }
      ],
      "funFact": "Bezos built Amazon’s early desks from Home Depot doors because they cost less than desks. According to early employee Nico Lovejoy, the company’s first servers, named Bert and Ernie, sat on those wobbly creations.",
      "funFactSource": {
        "label": "Amazon · How a door became a desk",
        "url": "https://www.aboutamazon.com/news/workplace/how-a-door-became-a-desk-and-a-symbol-of-amazon"
      }
    },
    {
      "id": 34,
      "name": "Peter Thiel",
      "slug": "peter-thiel",
      "category": "capital",
      "role": "Technology founder and venture investor",
      "intro": "Thiel helped build PayPal and Palantir and made Facebook's first outside investment. As an investor and writer, he argues that a startup should create something hard to substitute and establish a foothold in a market it can serve unusually well.",
      "milestones": [
        {
          "year": 1998,
          "text": "Co-founded Confinity, whose email payments product became PayPal after a merger with X.com in 2000."
        },
        {
          "year": 2003,
          "text": "Co-founded Palantir, which began by building software for intelligence analysts working on counterterrorism."
        },
        {
          "year": 2014,
          "text": "Published Zero to One with Blake Masters, developing arguments about differentiation, distribution, and the economics of durable market power."
        }
      ],
      "impact": "PayPal helped make online payments practical for small sellers and consumers. Palantir applied a different model to data analysis by building software for institutions with complex operational and security requirements.",
      "tags": [
        "Venture Capital",
        "Market Power",
        "Distribution",
        "Payments"
      ],
      "sources": [
        {
          "label": "PayPal IPO prospectus and merger history",
          "url": "https://www.paypalobjects.com/html/PayPal_Prospectus.pdf"
        },
        {
          "label": "Palantir 2020 annual report",
          "url": "https://www.annualreports.com/HostedData/AnnualReportArchive/p/NYSE_PLTR_2020.pdf"
        },
        {
          "label": "Zero to One publication and excerpt",
          "url": "https://www.penguinrandomhouse.com/books/234730/zero-to-one-by-peter-thiel-with-blake-masters/"
        }
      ],
      "ideas": [
        {
          "title": "Start from a neglected truth",
          "text": "Thiel asks candidates what true thing few people agree with them on. For founders, the test is whether the insight reveals an overlooked business."
        },
        {
          "title": "Distinguish invention from diffusion",
          "text": "An invention creates a new capability. Diffusion brings an existing capability to more people. Thiel treats them as two kinds of progress."
        }
      ],
      "motivation": "Thiel told NPR he wanted to accelerate progress in fields such as energy, transportation, and biomedicine. He argued that rapid progress in computing had narrowed what people imagined when they talked about technology.",
      "quote": {
        "text": "what great business is nobody building?",
        "context": "Thiel posed this as the business version of his contrarian interview question while discussing Zero to One with NPR in 2014.",
        "label": "NPR’s interview with Peter Thiel",
        "url": "https://www.nhpr.org/2014-09-13/peter-thiel-in-zero-to-one-how-to-develop-the-developed-world"
      },
      "ideaSources": [
        {
          "label": "Thiel on invention and diffusion in Zero to One",
          "url": "https://www.penguinrandomhouse.com/books/234730/zero-to-one-by-peter-thiel-with-blake-masters/"
        },
        {
          "label": "NPR transcript on innovation and technological progress",
          "url": "https://www.nhpr.org/2014-09-13/peter-thiel-in-zero-to-one-how-to-develop-the-developed-world"
        }
      ],
      "funFact": "Thiel recalled ranking seventh nationally among under-13 chess players at age 12. He regarded even that as disappointing because it convinced him he would never become the next Bobby Fischer.",
      "funFactSource": {
        "label": "Thiel’s 2014 conversation with Peter Guber at Live Talks Los Angeles",
        "url": "https://www.bishoprockcap.com/assets/library/peter-thiel/October%202014%20Peter%20Thiel%20in%20conversation%20with%20Peter%20Guber%20at%20Live%20Talks%20Los%20Angeles%20%28transcript%29"
      }
    },
    {
      "id": 35,
      "name": "Bill Gurley",
      "slug": "bill-gurley",
      "category": "capital",
      "role": "Venture investor and marketplace analyst",
      "intro": "Gurley moved from engineering and Wall Street research into venture capital. At Benchmark he worked with businesses including Uber, Zillow, and OpenTable, and his Above the Crowd essays examined how technology companies convert growth into lasting economics.",
      "milestones": [
        {
          "year": 1999,
          "text": "Joined Benchmark after working as a public-market analyst, where he covered personal computing and was lead analyst on Amazon's IPO."
        },
        {
          "year": 2011,
          "text": "Published All Revenue Is Not Created Equal, outlining why retention, margins, competitive barriers, and customer concentration can change the value of the same dollar of sales."
        }
      ],
      "impact": "His writing made company economics easier to discuss across founders, investors, and operators. It invites readers to trace where revenue comes from, how reliably it returns, and what it costs to earn.",
      "tags": [
        "Venture Capital",
        "Marketplaces",
        "Unit Economics",
        "Valuation"
      ],
      "sources": [
        {
          "label": "Santa Fe Institute biography",
          "url": "https://santafe.institute/people/profile/bill-gurley"
        },
        {
          "label": "All Revenue Is Not Created Equal",
          "url": "https://abovethecrowd.com/2011/05/24/all-revenue-is-not-created-equal-the-keys-to-the-10x-revenue-club/"
        }
      ],
      "ideas": [
        {
          "title": "Calculate the margin on new revenue",
          "text": "Divide the change in operating profit by the change in revenue. Compare that incremental margin with the existing margin to see how growth behaves."
        },
        {
          "title": "Map who controls demand",
          "text": "A company may have many customers and still rely on one search or distribution partner whose policy changes can cut off traffic."
        }
      ],
      "motivation": "Gurley wrote his 2011 valuation essay as press coverage leaned on revenue multiples again. He wanted investors to ask which business traits could turn today’s sales into durable cash flows when detailed forecasts were still unreliable.",
      "quote": {
        "text": "No one wants a partner policy or algorithm change to have unpredicted negative impacts on a public company.",
        "context": "From Gurley’s 2011 Above the Crowd essay, after he quoted Demand Media’s filing on its dependence on search traffic.",
        "label": "Gurley’s All Revenue Is Not Created Equal",
        "url": "https://abovethecrowd.com/2011/05/24/all-revenue-is-not-created-equal-the-keys-to-the-10x-revenue-club/"
      },
      "ideaSources": [
        {
          "label": "Gurley’s discussion of incremental margins and distribution dependence",
          "url": "https://abovethecrowd.com/2011/05/24/all-revenue-is-not-created-equal-the-keys-to-the-10x-revenue-club/"
        }
      ],
      "funFact": "Gurley recalled buying a PalmPilot at the Agenda technology conference that came loaded with every attendee’s contact information. He later described using the list to spam the entire conference without permission.",
      "funFactSource": {
        "label": "Gurley’s interview with UT Austin’s McCombs magazine",
        "url": "https://news.mccombs.utexas.edu/magazine/an-interview-with-venture-capitalist-bill-gurley-mba-93/"
      }
    },
    {
      "id": 36,
      "name": "Tyler Cowen",
      "slug": "tyler-cowen",
      "category": "media",
      "role": "Economist, writer, and grantmaker",
      "intro": "Cowen brought economic reasoning into everyday reading through the Marginal Revolution blog, then applied his interest in finding overlooked talent to grantmaking. His work spans public education, interviews, and funding early ideas.",
      "milestones": [
        {
          "year": 2003,
          "text": "Launched Marginal Revolution with fellow George Mason economist Alex Tabarrok. They later co-founded Marginal Revolution University for online economics education."
        },
        {
          "year": 2018,
          "text": "Founded Emergent Ventures at Mercatus with a $1 million seed grant from the Thiel Foundation to support promising, high-risk projects."
        },
        {
          "year": 2020,
          "text": "Created Fast Grants as an offshoot of Emergent Ventures to get funding quickly to COVID-19 researchers."
        }
      ],
      "impact": "His projects reduced two barriers: access to economic ideas for readers outside a classroom, and access to early funding for people who could put a small grant to work quickly.",
      "tags": [
        "Economics",
        "Grantmaking",
        "Education"
      ],
      "sources": [
        {
          "label": "Mercatus Center biography",
          "url": "https://www.mercatus.org/scholars/tyler-cowen"
        },
        {
          "label": "Marginal Revolution twentieth anniversary",
          "url": "https://conversationswithtyler.com/episodes/marginal-revolution-20th-anniversary/"
        },
        {
          "label": "Mercatus Center’s Emergent Ventures announcement",
          "url": "https://www.mercatus.org/podcasts/tyler-cowen-announces-emergent-ventures"
        }
      ],
      "ideas": [
        {
          "title": "Take compounding seriously in policy",
          "text": "In Stubborn Attachments, Cowen argues for sustainable economic growth because small differences in growth rates can produce large effects across generations."
        },
        {
          "title": "Assess the person behind the proposal",
          "text": "At Emergent Ventures, he starts by judging who can carry out something new, then weighs the merits of the specific project."
        }
      ],
      "motivation": "Cowen told Rob Wiblin he wanted to connect economics and moral philosophy through the value of sustained growth. In the same interview, he described grantmaking as a way to find people capable of attempting something new.",
      "quote": {
        "text": "If you don’t have the right person, the project simply cannot come off.",
        "context": "In Rob Wiblin’s interview about Stubborn Attachments, explaining how Emergent Ventures evaluates applicants.",
        "label": "Conversations with Tyler interview transcript",
        "url": "https://conversationswithtyler.com/episodes/rob-wiblin-interviews-tyler/"
      },
      "ideaSources": [
        {
          "label": "Cowen on Stubborn Attachments and Emergent Ventures",
          "url": "https://conversationswithtyler.com/episodes/rob-wiblin-interviews-tyler/"
        }
      ],
      "funFact": "Cowen became New Jersey’s all-ages chess champion at fifteen. In a 2025 recollection, he explained that he had deliberately avoided junior-only tournaments because he wanted to test himself against adults.",
      "funFactSource": {
        "label": "Cowen’s recollection of his early chess career",
        "url": "https://marginalrevolution.com/marginalrevolution/2025/04/my-early-history-as-a-chess-player.html"
      }
    },
    {
      "id": 37,
      "name": "Elon Musk",
      "slug": "elon-musk",
      "category": "technology",
      "role": "SpaceX founder and Tesla chief executive",
      "intro": "Elon Musk built SpaceX around recovering and reusing launch hardware and led Tesla from a high-end electric sports car toward higher-volume vehicles. Both businesses depended on getting difficult hardware into production and improving it over successive generations.",
      "milestones": [
        {
          "year": 2004,
          "text": "Joined Tesla’s board two years after starting SpaceX. He became Tesla’s chief executive in 2008."
        },
        {
          "year": 2015,
          "text": "A Falcon 9 booster returned to land after a successful orbital launch, demonstrating recovery of an orbital-class rocket first stage."
        },
        {
          "year": 2020,
          "text": "SpaceX flew NASA astronauts to the International Space Station on Demo-2. NASA certified the system for operational crew missions later that year."
        }
      ],
      "impact": "SpaceX made booster recovery a routine part of orbital launch operations. Tesla demonstrated that electric vehicles could move beyond early niches into higher-volume consumer markets.",
      "tags": [
        "Electric Vehicles",
        "Spaceflight",
        "Manufacturing",
        "Reuse"
      ],
      "sources": [
        {
          "label": "Tesla • 2024 proxy statement and operating history",
          "url": "https://ir.tesla.com/_flysystem/s3/sec/000110465924048040/tm2326076d13_pre14a-gen.pdf"
        },
        {
          "label": "SpaceX • Mission and launch milestones",
          "url": "https://www.spacex.com/mission/"
        },
        {
          "label": "NASA • Crew Dragon’s human spaceflight certification",
          "url": "https://www.nasa.gov/humans-in-space/nasa-and-spacex-complete-certification-of-first-human-rated-commercial-space-system/"
        }
      ],
      "ideas": [
        {
          "title": "Find a first market that can pay",
          "text": "Tesla’s 2006 plan used a premium sports car to enter a market that could bear high early unit costs, then targeted cheaper, higher-volume models."
        },
        {
          "title": "Give the future system near-term jobs",
          "text": "In 2017, Musk proposed using the same rocket system for satellites, station resupply, and Mars missions, with Earth-orbit work helping fund development."
        }
      ],
      "motivation": "In public plans, Musk framed Tesla as a route toward sustainable energy and SpaceX as a way to extend life beyond Earth. Each aim implied a cost target that the existing industry struggled to meet.",
      "quote": {
        "text": "So reusability is absolutely fundamental.",
        "context": "Musk said this at the 2017 International Astronautical Congress while comparing expendable rockets to aircraft that could fly only once.",
        "label": "SpaceX · Making Life Multiplanetary transcript",
        "url": "https://www.spacex.com/media/making_life_multiplanetary_transcript_2017.pdf"
      },
      "ideaSources": [
        {
          "label": "Tesla · Musk’s original 2006 master plan",
          "url": "https://www.tesla.com/tr_tr/secret-master-plan"
        },
        {
          "label": "SpaceX · 2017 International Astronautical Congress talk",
          "url": "https://www.spacex.com/media/making_life_multiplanetary_transcript_2017.pdf"
        }
      ],
      "funFact": "SpaceX’s first Falcon Heavy launch carried a Tesla Roadster into solar orbit in 2018. A spacesuit-wearing mannequin called Starman sat at the wheel, turning a rocket demonstration into an interplanetary road trip.",
      "funFactSource": {
        "label": "NASA · The first flight of Falcon Heavy",
        "url": "https://www.nasa.gov/history/5-years-ago-first-flight-of-the-falcon-heavy-rocket/"
      }
    },
    {
      "id": 38,
      "name": "Mark Zuckerberg",
      "slug": "mark-zuckerberg",
      "category": "technology",
      "role": "Facebook co-founder and Meta chief executive",
      "intro": "Mark Zuckerberg helped turn Facebook from a campus directory into a network where people could keep up with friends, discover groups, and publish to an audience. The feed made those interactions something people could follow continuously.",
      "milestones": [
        {
          "year": 2004,
          "text": "Launched Facebook with co-founders while at Harvard. The site spread from campus to campus before opening more broadly."
        },
        {
          "year": 2006,
          "text": "Introduced News Feed and quickly added privacy controls after users objected to how visibly it surfaced their activity."
        },
        {
          "year": 2019,
          "text": "Facebook agreed to a $5 billion penalty and new privacy oversight to settle claims that it violated an earlier FTC privacy order."
        }
      ],
      "impact": "Facebook normalized the feed as a way to keep up with people and communities online. The same design gave the company considerable influence over whose posts those audiences saw.",
      "tags": [
        "Social Networks",
        "Distribution",
        "Privacy",
        "Platform Power"
      ],
      "sources": [
        {
          "label": "Meta • Company history",
          "url": "https://www.meta.com/about/company-info/"
        },
        {
          "label": "Facebook • 2006 News Feed privacy controls",
          "url": "https://about.fb.com/news/2006/09/facebook-launches-additional-privacy-controls-for-news-feed-and-mini-feed/"
        },
        {
          "label": "Federal Trade Commission • 2019 Facebook privacy settlement",
          "url": "https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook"
        }
      ],
      "ideas": [
        {
          "title": "Give a prototype a fair hearing",
          "text": "Facebook used hackathons to surface ideas and built a testing framework to evaluate small releases. Zuckerberg cited Timeline and chat as hackathon products."
        },
        {
          "title": "Teach managers the codebase",
          "text": "Facebook sent new engineering managers through the same bootcamp as other engineering hires, giving them firsthand experience with the code and tools their teams used."
        }
      ],
      "motivation": "Zuckerberg told prospective investors he wrote the first Facebook because he wanted the service to exist. His 2012 letter described company growth as a means to fund and recruit for a larger social mission.",
      "quote": {
        "text": "Code wins arguments.",
        "context": "In Facebook’s 2012 IPO filing, Zuckerberg quoted an internal mantra to explain why teams preferred a working prototype to prolonged debate.",
        "label": "SEC · Facebook Form S-1 founder letter",
        "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312512175673/d287954ds1a.htm"
      },
      "ideaSources": [
        {
          "label": "SEC · Facebook Form S-1 founder letter",
          "url": "https://www.sec.gov/Archives/edgar/data/1326801/000119312512175673/d287954ds1a.htm"
        }
      ],
      "funFact": "Zuckerberg conducted an entire student Q&A in Mandarin at Tsinghua in 2014. He said one reason for learning the language was to speak with his wife’s grandmother.",
      "funFactSource": {
        "label": "Tsinghua University · Zuckerberg’s Mandarin dialogue",
        "url": "https://www.tsinghua.edu.cn/en/info/1253/2350.htm"
      }
    },
    {
      "id": 39,
      "name": "Jocko Willink",
      "slug": "jocko-willink",
      "category": "performance",
      "role": "Navy veteran and leadership author",
      "intro": "John “Jocko” Willink commanded a U.S. Navy SEAL task unit in Ramadi, Iraq, and later taught leadership through books, consulting and a podcast. His best-known principle asks leaders to begin a review of failure with the decisions they could have made differently.",
      "milestones": [
        {
          "year": 2006,
          "text": "Commanded a SEAL task unit in Ramadi. The Navy awarded him the Silver Star for actions during the deployment."
        },
        {
          "year": 2015,
          "text": "Published Extreme Ownership with fellow SEAL veteran Leif Babin, pairing accounts from Iraq with examples of civilian management."
        }
      ],
      "impact": "Through their company Echelon Front and the books they wrote together, Willink and Babin gave civilian teams a vocabulary for assigning responsibility, explaining the plan and delegating decisions under pressure.",
      "tags": [
        "Leadership",
        "Decision Rights",
        "Accountability"
      ],
      "sources": [
        {
          "label": "Military Times Hall of Valor Silver Star citation",
          "url": "https://valor.militarytimes.com/recipient/recipient-315878/"
        },
        {
          "label": "Macmillan edition of Extreme Ownership",
          "url": "https://us.macmillan.com/books/9781250183866/extremeownership/"
        },
        {
          "label": "Echelon Front on The Dichotomy of Leadership",
          "url": "https://echelonfront.com/leadership-books/dichotomy-of-leadership/"
        }
      ],
      "ideas": [
        {
          "title": "Reconstruct what each team knew",
          "text": "In Ramadi, Willink mapped where units moved and which updates they missed. A shared timeline made the communication failures visible during the debrief."
        },
        {
          "title": "Pair accountability with a corrective action",
          "text": "In his manufacturing case, Willink told the executive to explain to the board what he would personally change after the plan stalled."
        }
      ],
      "motivation": "In Extreme Ownership, Willink traced the principle to a deadly friendly-fire incident under his command. He recalled taking responsibility before the group reviewed how communications and coordination had failed and how to prevent a repeat.",
      "quote": {
        "text": "I am the commander. I am responsible for the entire operation.",
        "context": "Willink's account of what he told his unit and senior officers in the debrief after the Ramadi incident.",
        "label": "Extreme Ownership excerpt from Macmillan",
        "url": "https://us.macmillan.com/books/9781250183866/extremeownership/"
      },
      "ideaSources": [
        {
          "label": "Extreme Ownership excerpt from Macmillan",
          "url": "https://us.macmillan.com/books/9781250183866/extremeownership/"
        }
      ],
      "funFact": "Willink's teenage punk band kept changing its name. He recalled calling it Rage of Discipline, Struggle and Lock and Load, with Bronson's Children, named after actor Charles Bronson, becoming its most enduring identity.",
      "funFactSource": {
        "label": "Willink on This Past Weekend episode 120",
        "url": "https://podscripts.co/podcasts/this-past-weekend/jocko-willink-this-past-weekend-120"
      }
    },
    {
      "id": 40,
      "name": "Kobe Bryant",
      "slug": "kobe-bryant",
      "category": "performance",
      "role": "Basketball champion and filmmaker",
      "intro": "Bryant won five NBA titles with the Los Angeles Lakers and became known for the preparation and competitive intensity he called Mamba Mentality. He later turned a farewell to the game into an Oscar-winning animated short.",
      "milestones": [
        {
          "year": 2006,
          "text": "Scored 81 points against the Toronto Raptors, one of the highest single-game totals in NBA history."
        },
        {
          "year": 2010,
          "text": "Won his fifth championship and his second consecutive Finals MVP award."
        },
        {
          "year": 2018,
          "text": "Shared the Academy Award for animated short film with director Glen Keane for Dear Basketball, which Bryant wrote."
        }
      ],
      "impact": "Bryant gave athletes a widely recognized name for treating preparation as a craft. Dear Basketball carried that devotion into a different medium and reached people beyond the sport.",
      "tags": [
        "Basketball",
        "Preparation",
        "Film"
      ],
      "sources": [
        {
          "label": "NBA retrospective on Bryant's career",
          "url": "https://www.nba.com/news/kobe-bryant-10-things-to-know"
        },
        {
          "label": "Academy Awards 2018 winners",
          "url": "https://www.oscars.org/oscars/ceremonies/2018"
        },
        {
          "label": "Los Angeles Times chronology of the assault case",
          "url": "https://www.latimes.com/sports/story/2020-01-26/what-happened-kobe-bryant-sexual-assault-case"
        }
      ],
      "ideas": [
        {
          "title": "Look for the play that was available",
          "text": "Bryant watched film for openings and counters a player missed. A possession became a chance to rehearse several choices from the same situation."
        },
        {
          "title": "Try the new move early",
          "text": "As a kid, Bryant practiced a move as soon as he saw it, rehearsed it again the next day and then used it in play."
        }
      ],
      "motivation": "In The Mamba Mentality, Bryant recalled wanting to be the best from childhood and finding film study fun in its own right. His account ties the hours he spent studying to curiosity about how the game worked.",
      "quote": {
        "text": "I went from watching what happened to what could have and should have happened.",
        "context": "Bryant describing how his film study changed over time, in a 2018 excerpt from The Mamba Mentality.",
        "label": "The Mamba Mentality excerpt in Sports Illustrated",
        "url": "https://www.si.com/nba/2018/10/24/kobe-bryant-photos-mamba-mentality-book-excerpt-jordan"
      },
      "ideaSources": [
        {
          "label": "The Mamba Mentality excerpt in Sports Illustrated",
          "url": "https://www.si.com/nba/2018/10/24/kobe-bryant-photos-mamba-mentality-book-excerpt-jordan"
        }
      ],
      "funFact": "While promoting Dear Basketball in 2017, Bryant wore a black turtleneck and delivered a dramatic slam poem about Steve Urkel from Family Matters on The Tonight Show.",
      "funFactSource": {
        "label": "TIME on Bryant's Tonight Show appearance",
        "url": "https://time.com/4753994/kobe-bryant-steve-urkel-poem/"
      }
    },
    {
      "id": 41,
      "name": "David Goggins",
      "slug": "david-goggins",
      "category": "performance",
      "role": "Ultrarunner and memoirist",
      "intro": "A retired Navy SEAL and ultrarunner, Goggins became known for testing how far he could continue after the first impulse to stop. He later used his own life as the case study for a philosophy of deliberate discomfort.",
      "milestones": [
        {
          "year": 2007,
          "text": "Finished third at the 135-mile Badwater ultramarathon in 25 hours, 49 minutes and 40 seconds."
        },
        {
          "year": 2013,
          "text": "Set a then-record with 4,030 pull-ups in 17 hours."
        },
        {
          "year": 2018,
          "text": "Published Can't Hurt Me, a memoir organized around challenges readers could apply to their own lives."
        }
      ],
      "impact": "He brought ultrarunning and the psychology of endurance to a wider audience through a memoir that pairs personal stories with specific exercises. The format made a largely internal skill concrete enough for readers to practice and observe.",
      "tags": [
        "Endurance",
        "Self-Discipline",
        "Memoir"
      ],
      "sources": [
        {
          "label": "Badwater race history and results",
          "url": "https://www.badwater.com/blog/badwater-135-big-fish-in-a-small-pond-beware/"
        },
        {
          "label": "David Goggins athletic records",
          "url": "https://davidgoggins.com/athletic-achievements/"
        },
        {
          "label": "Can't Hurt Me introduction and copyright page",
          "url": "https://davidgoggins.com/wp-content/uploads/2022/05/CantHurtMe-Intro.pdf"
        }
      ],
      "ideas": [
        {
          "title": "Make the obstacle specific",
          "text": "Goggins used a mirror to confront what he was avoiding. The exercise begins by naming a problem he could actually work on."
        },
        {
          "title": "Keep evidence of past effort",
          "text": "His cookie jar exercise recalls specific challenges already overcome. In a hard moment, those memories give him concrete evidence that he can persist."
        }
      ],
      "motivation": "Goggins recalls recognizing habits he disliked in himself as a teenager, including lying and avoiding school. In his telling, the mirror became a daily way to confront those habits and make changes he could respect.",
      "quote": {
        "text": "You have to face all of these things because they're now yours to own.",
        "context": "Goggins on how he responded to adversity in his childhood, during a 2018 CBS This Morning interview about Can't Hurt Me.",
        "label": "CBS News interview with David Goggins",
        "url": "https://www.cbsnews.com/news/retired-navy-seal-david-goggins-on-motivation-and-achieving-your-true-potential/"
      },
      "ideaSources": [
        {
          "label": "Rich Roll interview with Goggins, transcribed by The Tim Ferriss Show",
          "url": "https://tim.blog/2022/10/29/insights-from-dr-matthew-walker-adam-grant-atul-gawande-diana-chapman-and-rich-roll-david-goggins-transcript/"
        },
        {
          "label": "Review of the exercises in Can't Hurt Me",
          "url": "https://www.cfoselections.com/book-review-cant-hurt-me-master-your-mind-and-defy-the-odds-by-david-goggins/"
        }
      ],
      "funFact": "After leaving the Air Force, Goggins took a job spraying for cockroaches. He later recalled that he could easily have stayed an exterminator without ever discovering what he was capable of.",
      "funFactSource": {
        "label": "Outside interview with David Goggins",
        "url": "https://www.outsideonline.com/health/training-performance/david-goggins-peak-performance-cant-hurt-me/"
      }
    },
    {
      "id": 42,
      "name": "Naval Ravikant",
      "slug": "naval-ravikant",
      "category": "capital",
      "role": "AngelList co-founder and angel investor",
      "intro": "Ravikant co-founded AngelList with Babak Nivi, bringing startup fundraising and angel investing online. His writing and interviews also popularized a personal framework built around distinctive skills, ownership, judgment, and leverage.",
      "milestones": [
        {
          "year": 2007,
          "text": "Launched Venture Hacks with Nivi to explain venture financing and term sheets from a founder's perspective."
        },
        {
          "year": 2010,
          "text": "Co-founded AngelList, initially connecting startups with prospective investors."
        },
        {
          "year": 2013,
          "text": "AngelList introduced deal-by-deal syndicates that allowed backers to pool their money behind a lead investor through a dedicated vehicle."
        }
      ],
      "impact": "AngelList made the administrative work of creating and running pooled startup investments more repeatable. Ravikant's essays and podcasts supplied a parallel framework for thinking about scalable work through products, code, and media.",
      "tags": [
        "Venture Capital",
        "Syndicates",
        "Leverage",
        "Ownership"
      ],
      "sources": [
        {
          "label": "AngelList interview with Ravikant on syndicates",
          "url": "https://www.angellist.com/blog/q-a-with-angellist-co-founder-naval-ravikant"
        },
        {
          "label": "Ravikant on the origins of Venture Hacks and AngelList",
          "url": "https://www.navalmanack.com/secret-sections/the-story-of-angellist"
        },
        {
          "label": "Ravikant’s How to Get Rich transcripts",
          "url": "https://nav.al/rich"
        }
      ],
      "ideas": [
        {
          "title": "Publish the terms insiders know",
          "text": "Venture Hacks explained clauses such as liquidation preferences to first-time founders negotiating with investors who had already seen hundreds of term sheets."
        },
        {
          "title": "Make something cheap to copy",
          "text": "A program or piece of media can serve additional users at little replication cost, making it possible for one person’s work to reach many."
        }
      ],
      "motivation": "Ravikant said early founders came to him for help understanding term sheets, where experienced investors held the advantage. He and Babak Nivi started Venture Hacks to put that negotiating knowledge within founders’ reach.",
      "quote": {
        "text": "Wealth is assets that earn while you sleep",
        "context": "From Ravikant’s 2019 conversation with Babak Nivi, where he distinguished asset ownership from money and social rank.",
        "label": "Ravikant’s How to Get Rich transcript",
        "url": "https://nav.al/rich"
      },
      "ideaSources": [
        {
          "label": "Ravikant on term sheets and the origins of Venture Hacks",
          "url": "https://www.navalmanack.com/secret-sections/the-story-of-angellist"
        },
        {
          "label": "Ravikant on the replication economics of code and media",
          "url": "https://nav.al/rich#product-and-media-are-new-leverage"
        }
      ],
      "funFact": "Ravikant recalled using his local New York library as an after-school center. While his mother worked and studied, he would head there after class and keep reading until the library closed.",
      "funFactSource": {
        "label": "Ravikant’s recollections collected in The Almanack",
        "url": "https://www.navalmanack.com/almanack-of-naval-ravikant/now-here-is-naval-in-his-own-words"
      }
    },
    {
      "id": 43,
      "name": "Tim Ferriss",
      "slug": "tim-ferriss",
      "category": "media",
      "role": "Author and interviewer",
      "intro": "Tim Ferriss turned personal experiments about time, work, and learning into books and a long-form interview business. He asks accomplished guests for specifics, from books and routines to the decisions that changed their work.",
      "milestones": [
        {
          "year": 2007,
          "text": "Published The 4-Hour Workweek, making the case that entrepreneurs could structure a business around the life they wanted to lead."
        },
        {
          "year": 2014,
          "text": "Launched The Tim Ferriss Show with separate interviews featuring technology investor Kevin Rose and chess prodigy Josh Waitzkin."
        }
      ],
      "impact": "His books gave readers a vocabulary for treating time and geographic flexibility as goals in their own right. His podcast made habits and decision processes a recurring subject of interviews across sports, investing, and the arts.",
      "tags": [
        "Podcasting",
        "Experimentation",
        "Learning"
      ],
      "sources": [
        {
          "label": "Ferriss's 2007 talk introducing The 4-Hour Workweek",
          "url": "https://tim.blog/2021/11/21/sxsw-presentation-2007-the-4-hour-workweek-transcript/"
        },
        {
          "label": "The Tim Ferriss Show launch and first two interviews",
          "url": "https://tim.blog/2014/04/22/tim-ferriss-podcast/"
        },
        {
          "label": "The Tim Ferriss Show format and archive",
          "url": "https://tim.blog/podcast/"
        }
      ],
      "ideas": [
        {
          "title": "Price the life you want",
          "text": "His dreamlining worksheet translates desired activities into monthly cash flow and asks for a first step you can take right away."
        },
        {
          "title": "Audit profit against time",
          "text": "Ferriss says five of roughly 120 wholesale accounts produced 95 percent of his wholesale profit, prompting him to stop chasing the rest."
        }
      ],
      "motivation": "Ferriss traced The 4-Hour Workweek to a nutrition business that had taken over his days. He wanted to learn whether he could keep the business running and reclaim time for experiences he had postponed.",
      "quote": {
        "text": "Are you in a game worth winning, and is it scalable?",
        "context": "Ferriss asked this at SXSW in 2007 while introducing the ideas behind The 4-Hour Workweek and describing his own experience with overwork.",
        "label": "Ferriss's transcript of his SXSW 2007 talk",
        "url": "https://tim.blog/2021/11/21/sxsw-presentation-2007-the-4-hour-workweek-transcript/"
      },
      "ideaSources": [
        {
          "label": "Ferriss's dreamlining worksheet",
          "url": "https://tim.blog/dreamlining/"
        },
        {
          "label": "Ferriss on why he started the experiments and what his wholesale audit found",
          "url": "https://tim.blog/2021/11/21/sxsw-presentation-2007-the-4-hour-workweek-transcript/"
        }
      ],
      "funFact": "Ferriss and dance partner Alicia Monti set a Guinness tango record on Live with Regis and Kelly, spinning 37 times in a minute before a Guinness judge.",
      "funFactSource": {
        "label": "Princeton Alumni Weekly's 2006 report on Ferriss's tango record",
        "url": "https://www.princeton.edu/~paw/web_exclusives/alumni_spotlight/as_112206ferriss.html"
      }
    },
    {
      "id": 44,
      "name": "Joe Rogan",
      "slug": "joe-rogan",
      "category": "media",
      "role": "Long-form podcast host and comedian",
      "intro": "Joe Rogan took the loose conversational style of a comedy green room and built it into a mass-market interview show. The Joe Rogan Experience brings comedians, fighters, scientists, and politicians into the same multi-hour format.",
      "milestones": [
        {
          "year": 2009,
          "text": "Launched The Joe Rogan Experience, building an audience around conversations much longer and less structured than a television interview."
        },
        {
          "year": 2020,
          "text": "Signed a multiyear licensing deal with Spotify, where full episodes became exclusive later that year."
        },
        {
          "year": 2024,
          "text": "Renewed the Spotify partnership under terms that brought the show back to other listening and video platforms."
        }
      ],
      "impact": "Rogan demonstrated that a personality-led interview show could become a strategic asset for a global streaming platform and still reach listeners across competing services.",
      "tags": [
        "Podcasting",
        "Distribution",
        "Platform Power"
      ],
      "sources": [
        {
          "label": "Spotify on the show's launch, format, and 2024 partnership",
          "url": "https://newsroom.spotify.com/2024-02-02/the-art-of-podcasting-with-joe-rogan-and-his-new-multiyear-spotify-partnership/"
        },
        {
          "label": "Spotify's original licensing announcement",
          "url": "https://newsroom.spotify.com/2020-05-19/the-joe-rogan-experience-launches-exclusive-partnership-with-spotify/"
        },
        {
          "label": "Reuters on Spotify's 2022 content advisories",
          "url": "https://www.investing.com/news/general/spotifys-plan-to-add-advisory-to-covid-podcasts-is-a-positive-step--white-house-2754617"
        }
      ],
      "ideas": [
        {
          "title": "Learn to follow the conversation",
          "text": "Rogan describes learning through repetition to listen closely, put guests at ease, and follow an interesting answer before moving to another topic."
        },
        {
          "title": "Book around a question you care about",
          "text": "He says he books guests he wants to talk to and follows the resulting questions into books, articles, and documentaries between episodes."
        }
      ],
      "motivation": "Rogan told Spotify that conversations with people he would rarely encounter in ordinary life changed how he saw the world. He described the research and interviews as an education he had stumbled into.",
      "quote": {
        "text": "Cool conversations are a kind of mental nourishment",
        "context": "From a 2024 Spotify Q&A in which Rogan explained what he and his listeners get from hearing people with unfamiliar perspectives.",
        "label": "Spotify Newsroom Q&A with Joe Rogan",
        "url": "https://newsroom.spotify.com/2024-02-02/the-art-of-podcasting-with-joe-rogan-and-his-new-multiyear-spotify-partnership/"
      },
      "ideaSources": [
        {
          "label": "Rogan on guest selection, preparation, and learning to listen",
          "url": "https://newsroom.spotify.com/2024-02-02/the-art-of-podcasting-with-joe-rogan-and-his-new-multiyear-spotify-partnership/"
        }
      ],
      "funFact": "Rogan says Dave Chappelle inspired his backstage playlist by bringing a Bluetooth speaker to the Comedy Store. Rogan later installed a sound system in his own club’s green room.",
      "funFactSource": {
        "label": "Rogan tells Spotify how his Green Room playlist started",
        "url": "https://newsroom.spotify.com/2024-02-02/the-art-of-podcasting-with-joe-rogan-and-his-new-multiyear-spotify-partnership/"
      }
    },
    {
      "id": 45,
      "name": "Demis Hassabis",
      "slug": "demis-hassabis",
      "category": "science",
      "role": "DeepMind cofounder and AI researcher",
      "intro": "Hassabis co-founded DeepMind as an interdisciplinary AI lab. Under his leadership, its teams used games with clear measures of success to develop learning systems and later took on scientific problems such as predicting protein structures.",
      "milestones": [
        {
          "year": 2010,
          "text": "Co-founded DeepMind, bringing researchers from machine learning, neuroscience, and engineering into one lab."
        },
        {
          "year": 2016,
          "text": "DeepMind’s AlphaGo defeated professional Go champion Lee Sedol four games to one."
        },
        {
          "year": 2024,
          "text": "Shared half the Nobel Prize in Chemistry with John Jumper for protein structure prediction. David Baker received the other half for computational protein design."
        }
      ],
      "impact": "AlphaFold2 gave biologists a way to predict a protein’s three-dimensional structure from its amino acid sequence, providing starting points for experiments even when a measured structure is unavailable.",
      "tags": [
        "Artificial Intelligence",
        "Scientific Discovery",
        "Research Leadership"
      ],
      "sources": [
        {
          "label": "Google DeepMind lab history",
          "url": "https://deepmind.google/about/"
        },
        {
          "label": "Hassabis’s Nobel lecture",
          "url": "https://www.nobelprize.org/uploads/2024/12/hassabis-lecture.pdf"
        },
        {
          "label": "EMBL-EBI on AlphaFold2’s limits",
          "url": "https://www.ebi.ac.uk/training/online/courses/alphafold/an-introductory-guide-to-its-strengths-and-limitations/strengths-and-limitations-of-alphafold/"
        }
      ],
      "ideas": [
        {
          "title": "Spend compute to narrow the search",
          "text": "He frames training as expensive precomputation that a model can reuse later to narrow a search toward plausible answers."
        },
        {
          "title": "Solve problems other fields depend on",
          "text": "He looks for bottlenecks such as protein structure prediction, where solving one question opens lines of inquiry in drug discovery and disease biology."
        }
      ],
      "motivation": "Hassabis told Queens’ College that he pursued AI because he thought it could speed up scientific discovery. He described DeepMind as an attempt to combine the freedom to investigate basic questions with a startup’s engineering pace.",
      "quote": {
        "text": "There’s still a big leap from solving a conjecture to actually proposing an interesting new hypothesis.",
        "context": "In a Queens’ College interview about AI in science, distinguishing performance on existing math problems from choosing what to investigate.",
        "label": "Queens’ College interview with Demis Hassabis",
        "url": "https://www.queens.cam.ac.uk/about-us/news-events/the-future-of-ai-and-scientific-discovery-an-interview-with-sir-demis-hassabis-1994-honorary-fellow-fellow-benefactor/"
      },
      "ideaSources": [
        {
          "label": "Queens’ College interview with Demis Hassabis",
          "url": "https://www.queens.cam.ac.uk/about-us/news-events/the-future-of-ai-and-scientific-discovery-an-interview-with-sir-demis-hassabis-1994-honorary-fellow-fellow-benefactor/"
        },
        {
          "label": "American Academy dialogue on AI for science",
          "url": "https://www.amacad.org/publication/daedalus/ai-ultimate-tool-science-conversation-demis-hassabis"
        }
      ],
      "funFact": "Hassabis recalls buying his first computer, a ZX Spectrum 48K, with winnings from an under-10 chess tournament. He was about eight, and the computer cost roughly £100.",
      "funFactSource": {
        "label": "Hassabis’s Game Changer interview hosted by DeepMind",
        "url": "https://storage.googleapis.com/deepmind-media/podcast/Game%20Changer%20-%20Demis%20Hassabis%20Interview.pdf"
      }
    },
    {
      "id": 46,
      "name": "Palmer Luckey",
      "slug": "palmer-luckey",
      "category": "technology",
      "role": "Oculus and Anduril co-founder",
      "intro": "Palmer Luckey helped put virtual reality hardware in the hands of game developers through Oculus. He later took a software-centered approach to building defense systems at Anduril.",
      "milestones": [
        {
          "year": 2012,
          "text": "Oculus’s Kickstarter drew more than 9,500 backers and roughly $2.4 million in pledges for its Rift developer kit."
        },
        {
          "year": 2014,
          "text": "Facebook announced a deal to buy Oculus for about $2 billion in cash and stock, plus a possible milestone-based payout."
        },
        {
          "year": 2017,
          "text": "Co-founded Anduril Industries, which built defense systems around Lattice software and expanded into autonomous vehicles."
        }
      ],
      "impact": "Rift gave developers access to hardware that made head-tracked, immersive games practical to experiment with. Anduril applied startup financing and software development to a defense market historically dominated by large contractors.",
      "tags": [
        "Virtual Reality",
        "Hardware Prototyping",
        "Defense Technology",
        "Autonomous Systems"
      ],
      "sources": [
        {
          "label": "Kickstarter • Original Oculus Rift campaign",
          "url": "https://www.kickstarter.com/projects/1523379957/oculus-rift-step-into-the-game"
        },
        {
          "label": "Facebook • Oculus acquisition announcement",
          "url": "https://about.fb.com/news/2014/03/facebook-to-acquire-oculus/"
        },
        {
          "label": "Orange County Business Journal • Palmer Luckey and Anduril",
          "url": "https://www.ocbj.com/special-report/ocs-wealthiest-2026/palmer-luckey-4/"
        }
      ],
      "ideas": [
        {
          "title": "Correct cheap hardware in software",
          "text": "Rift used simpler lenses and pre-distorted the rendered image on the GPU. The lens then counteracted the distortion, reducing the need for costly optics."
        },
        {
          "title": "Finance the prototype before the bid",
          "text": "Luckey describes funding defense development with the company’s own capital. The approach puts early technical risk on Anduril and gives customers a product to evaluate."
        }
      ],
      "motivation": "Luckey traces his interest in defense to an Army-affiliated VR research program for veterans. He said the experience exposed him to procurement incentives that, in his view, gave suppliers too little reason to cut development time or cost.",
      "quote": {
        "text": "I was looking for defence companies that were using their own money to develop technology quickly",
        "context": "In a 2022 Defence Connect interview, Luckey recalled the kind of company he wanted to invest in before he co-founded Anduril.",
        "label": "Defence Connect · Q&A with Palmer Luckey",
        "url": "https://www.defenceconnect.com.au/geopolitics-and-policy/10538-from-facebook-to-defence-industry-q-a-with-palmer-luckey-and-david-goodrich"
      },
      "ideaSources": [
        {
          "label": "Defence Connect · Luckey on Rift’s optics and Anduril’s origins",
          "url": "https://www.defenceconnect.com.au/geopolitics-and-policy/10538-from-facebook-to-defence-industry-q-a-with-palmer-luckey-and-david-goodrich"
        },
        {
          "label": "Hoover Institution · Luckey on his experience with defense procurement",
          "url": "https://www.hoover.org/plus/research/palmer-luckey-wants-america-win"
        }
      ],
      "funFact": "Luckey says he started ModRetro with friends at 15, creating a forum for modifying vintage game consoles. Some of those friends later joined him at Oculus.",
      "funFactSource": {
        "label": "ModRetro · Luckey on his retro-gaming origins",
        "url": "https://modretro.com/blogs/blog/the-future-is-retro"
      }
    },
    {
      "id": 47,
      "name": "Sam Altman",
      "slug": "sam-altman",
      "category": "science",
      "role": "OpenAI cofounder and startup investor",
      "intro": "Altman led Y Combinator before becoming OpenAI’s CEO. At OpenAI, he helped turn an AI research organization into one that also builds products for the general public.",
      "milestones": [
        {
          "year": 2015,
          "text": "Helped found OpenAI, which launched as a nonprofit research organization with Altman and Elon Musk as co-chairs."
        },
        {
          "year": 2022,
          "text": "OpenAI released ChatGPT as a free research preview, letting people try a language model through ordinary conversation and provide feedback."
        },
        {
          "year": 2023,
          "text": "OpenAI’s board removed him as CEO in November. He returned later that month with a reconstituted board."
        }
      ],
      "impact": "ChatGPT made language models usable through a familiar interface. People could test them on their own work and see both where they helped and where they produced convincing errors.",
      "tags": [
        "Artificial Intelligence",
        "Product Adoption",
        "Governance"
      ],
      "sources": [
        {
          "label": "OpenAI’s founding announcement",
          "url": "https://openai.com/index/introducing-openai/"
        },
        {
          "label": "ChatGPT launch and limitations",
          "url": "https://openai.com/index/chatgpt/"
        },
        {
          "label": "OpenAI board’s summary of the independent review",
          "url": "https://openai.com/index/review-completed-altman-brockman-to-continue-to-lead-openai/"
        }
      ],
      "ideas": [
        {
          "title": "Choose work that compounds",
          "text": "Altman looks for work where accumulated skills, relationships, or technology make the same unit of effort more productive over time."
        },
        {
          "title": "Watch how quickly people improve",
          "text": "When looking for overlooked talent, he advises tracking who improves over successive encounters and weighing that evidence against experience or credentials."
        }
      ],
      "motivation": "In his account of ChatGPT’s launch, Altman says developers’ interest in chatting with the API model prompted the demo. The team wanted people to see what the technology could do and wanted to learn from their use.",
      "quote": {
        "text": "Be willing to let small opportunities go to focus on potential step changes.",
        "context": "From his essay How To Be Successful, in a section on how companies and careers compound over time.",
        "label": "Sam Altman’s How To Be Successful",
        "url": "https://blog.samaltman.com/how-to-be-successful"
      },
      "ideaSources": [
        {
          "label": "Sam Altman’s How To Be Successful",
          "url": "https://blog.samaltman.com/how-to-be-successful"
        },
        {
          "label": "Sam Altman’s Reflections",
          "url": "https://blog.samaltman.com/reflections"
        }
      ],
      "funFact": "Altman once served as Reddit’s CEO for eight days. In his farewell post, he noted that Reddit had added more users during his brief tenure than Hacker News had in total.",
      "funFactSource": {
        "label": "Altman’s post announcing Reddit’s new leadership",
        "url": "https://blog.samaltman.com/a-new-team-at-reddit"
      }
    },
    {
      "id": 48,
      "name": "Andrew Huberman",
      "slug": "andrew-huberman",
      "category": "science",
      "role": "Stanford neuroscientist and podcast host",
      "intro": "Huberman studies how visual circuits develop, respond to experience, and recover after injury. His podcast brought neuroscience research to a broad audience by connecting papers and expert interviews to everyday questions about sleep, stress, and behavior.",
      "milestones": [
        {
          "year": 2016,
          "text": "Co-authored a study that combined visual stimulation and a cellular growth pathway to regrow damaged retinal axons and restore some visual behaviors in mice."
        },
        {
          "year": 2021,
          "text": "Launched the Huberman Lab podcast, pairing solo explainers with long-form interviews."
        },
        {
          "year": 2023,
          "text": "Co-authored a randomized study comparing three daily breathing exercises with mindfulness meditation over 28 days."
        }
      ],
      "impact": "His vision research helped clarify when damaged adult neural circuits can reconnect. The podcast made the reasoning behind some of that work accessible well beyond academia.",
      "tags": [
        "Neuroscience",
        "Neural Plasticity",
        "Science Communication"
      ],
      "sources": [
        {
          "label": "Stanford faculty profile",
          "url": "https://profiles.stanford.edu/andrew-huberman"
        },
        {
          "label": "Retinal axon regeneration study",
          "url": "https://pubmed.ncbi.nlm.nih.gov/27399843/"
        },
        {
          "label": "Randomized breathwork study",
          "url": "https://doi.org/10.1016/j.xcrm.2022.100895"
        }
      ],
      "ideas": [
        {
          "title": "Look downstream of the injury",
          "text": "In mouse experiments, Huberman’s team found that activating particular brain cells receiving signals from the retina could promote regrowth in damaged retinal axons."
        },
        {
          "title": "Make errors small enough to learn from",
          "text": "Using prism adaptation as an example, Huberman explains how small changes in visual feedback can help adults adjust to a larger shift."
        }
      ],
      "motivation": "Huberman says he wanted to give people free access to science they could use. He told Stanford Magazine that he saw too much health content that either left people without practical tools or offered tips without explaining the biology.",
      "quote": {
        "text": "science and science-based tools for everyday life",
        "context": "How Huberman describes the show in his introduction to a 2021 episode on learning, movement, and balance.",
        "label": "Huberman Lab episode transcript",
        "url": "https://www.hubermanlab.com/episode/using-failures-movement-and-balance-to-learn-faster"
      },
      "ideaSources": [
        {
          "label": "Stanford lab publication on retinal regrowth",
          "url": "https://hubermanlab.stanford.edu/publications/retinal-ganglion-cells/postsynaptic-neuronal-activity-promotes-regeneration-retinal"
        },
        {
          "label": "Stanford Magazine profile on the podcast’s origins",
          "url": "https://stanfordmag.org/contents/the-huberman-effect"
        }
      ],
      "funFact": "Huberman’s bullmastiff, Costello, snored audibly during early podcast recordings. When listeners complained about the dog’s breathing, Huberman said they came as a package deal and kept Costello in the studio.",
      "funFactSource": {
        "label": "Stanford Magazine profile of Huberman and the podcast",
        "url": "https://stanfordmag.org/contents/the-huberman-effect"
      }
    },
    {
      "id": 49,
      "name": "David Senra",
      "slug": "david-senra",
      "category": "media",
      "role": "Business biography podcaster",
      "intro": "David Senra built Founders around a repeatable assignment: read a business biography closely and extract decisions worth studying. By returning to the same questions across careers, he makes it easier to compare entrepreneurs who worked decades apart.",
      "milestones": [
        {
          "year": 2016,
          "text": "Started Founders, which became a weekly show organized around biographies and business history."
        },
        {
          "year": 2025,
          "text": "Launched a second podcast, David Senra, to interview living founders while continuing to publish Founders."
        }
      ],
      "impact": "Founders gives listeners an entry point into business biographies they might never encounter and a way to trace recurring decisions across unrelated companies. The interview show adds accounts from people still making those decisions.",
      "tags": [
        "Biography",
        "Podcasting",
        "Learning"
      ],
      "sources": [
        {
          "label": "Founders podcast listing and archive",
          "url": "https://podcasts.apple.com/us/podcast/founders/id1141877104"
        },
        {
          "label": "Senra on his research and interview formats",
          "url": "https://www.davidsenra.com/about"
        },
        {
          "label": "September 2025 launch announcement for David Senra",
          "url": "https://podcasts.apple.com/us/podcast/david-senra/id1836497887?i=1000727573475"
        }
      ],
      "ideas": [
        {
          "title": "Return to the same book",
          "text": "Senra built a Founders episode from his third reading of Estée Lauder’s memoir, treating a familiar book as material for another investigation."
        },
        {
          "title": "Build a library of business precedents",
          "text": "Senra cites investor Sam Zell’s read of WeWork’s asset and liability mismatch as an example of using business history to examine a current deal."
        }
      ],
      "motivation": "Senra told Big Think that he would rather spend his working life talking about things he loves. He also sees business history as a way to recognize recurring behavior in companies that otherwise look unrelated.",
      "quote": {
        "text": "I feel like I’m reading about the same person over and over again.",
        "context": "Senra was answering Big Think’s question about what the entrepreneurs he studies have in common. He went on to single out focus.",
        "label": "Big Think interview with David Senra",
        "url": "https://bigthink.com/business/the-david-senra-interview-use-history-as-a-form-of-leverage/"
      },
      "ideaSources": [
        {
          "label": "Founders episode on rereading Estée Lauder's memoir",
          "url": "https://www.joincolossus.com/episode/senra-361-estee-lauder/"
        },
        {
          "label": "Senra on his reading choices and business precedents",
          "url": "https://bigthink.com/business/the-david-senra-interview-use-history-as-a-form-of-leverage/"
        }
      ],
      "funFact": "Senra launched Founders from his Miami kitchen with a $100 microphone. His earlier businesses included boat detailing and a startup tracing robocalls.",
      "funFactSource": {
        "label": "Fortune's profile of Senra and the origins of Founders",
        "url": "https://fortune.com/2026/07/05/how-david-senra-built-founders-podcast-powerful-ceos-spotify-bezos-coinbase-ramp-tbpn/"
      }
    },
    {
      "id": 50,
      "name": "Lulu Cheng Meservey",
      "slug": "lulu-cheng-meservey",
      "category": "media",
      "role": "Communications strategist and Rostra founder",
      "intro": "Lulu Cheng Meservey advocates for founders to explain their companies in their own voice through channels that reach audiences directly. She developed that approach across communications roles at Substack and Activision Blizzard before starting Rostra.",
      "milestones": [
        {
          "year": 2016,
          "text": "Co-founded TrailRunner International, a strategic communications firm."
        },
        {
          "year": 2022,
          "text": "Moved from Activision Blizzard's board into the chief communications officer role during Microsoft's proposed acquisition."
        },
        {
          "year": 2024,
          "text": "Launched Rostra with Toya Holness and Sergey Alexashenko and published her manifesto for founder-led communications."
        }
      ],
      "impact": "Meservey gave startup founders a concrete model for using public posts and direct updates to explain a product, respond to criticism, and recruit supporters. Her approach treats the founder's own explanations as part of running the company.",
      "tags": [
        "Founder Communications",
        "Distribution",
        "Public Relations"
      ],
      "sources": [
        {
          "label": "Shopify's SEC filing on Meservey's career",
          "url": "https://www.sec.gov/Archives/edgar/data/1594805/000159480526000022/yearend2025mic.htm"
        },
        {
          "label": "Meservey's Go Direct manifesto",
          "url": "https://www.getflack.com/p/go-direct-the-manifesto"
        },
        {
          "label": "Axios reporting on Rostra's launch",
          "url": "https://www.axios.com/2024/03/19/activision-blizzard-meservey-rostra-communications-firm"
        }
      ],
      "ideas": [
        {
          "title": "Keep the source close to the story",
          "text": "Meservey argues that founders should supply the explanation themselves because they know why the company exists. Others can still help sharpen and distribute it."
        },
        {
          "title": "Give people something they can inspect",
          "text": "In Standing Out, she advises showing evidence of outcomes and creating durable artifacts or events that audiences can experience for themselves."
        }
      ],
      "motivation": "Meservey launched Rostra to help founders speak more candidly and retain control over their company’s story. In her manifesto, she argues that doing this well can help a young company recruit, raise money, and find customers.",
      "quote": {
        "text": "Founders need to take their narrative as seriously as they take the rockets or robots.",
        "context": "Meservey wrote this in the March 2024 manifesto that introduced Rostra and made the case for founders to communicate in their own voice.",
        "label": "Lulu Cheng Meservey's Go Direct manifesto",
        "url": "https://www.getflack.com/p/go-direct-the-manifesto"
      },
      "ideaSources": [
        {
          "label": "Meservey on what founders should own and where others can help",
          "url": "https://www.getflack.com/p/go-direct-the-manifesto"
        },
        {
          "label": "Meservey's Standing Out essay on what to show an audience",
          "url": "https://www.getflack.com/p/standing-out"
        }
      ],
      "funFact": "Meservey recalled arriving at school in Norway in a full rabbit costume for Halloween, complete with gloves and tail. Everyone else wore normal clothes. She spent the day doing classwork in costume.",
      "funFactSource": {
        "label": "Meservey recounts her childhood Halloween mix-up on David Senra",
        "url": "https://www.davidsenra.com/episode/lulu-cheng-meservey"
      }
    },
    {
      "id": 51,
      "name": "Lex Fridman",
      "slug": "lex-fridman",
      "category": "media",
      "role": "AI researcher and long-form interviewer",
      "intro": "Fridman worked on machine learning for human–vehicle interaction before building a long-form interview show. Its early focus on artificial intelligence widened to include science, history, politics, and philosophy.",
      "milestones": [
        {
          "year": 2017,
          "text": "Co-authored an award-winning human-computer interaction paper on what drivers’ glances can reveal, using data from real-world driving."
        },
        {
          "year": 2018,
          "text": "Published an early Artificial Intelligence Podcast conversation with MIT physicist Max Tegmark about the implications of advanced AI."
        }
      ],
      "impact": "The podcast lets listeners hear technical researchers work through ideas in detail, in a format they can consume without specialist training. Its public archive includes transcripts that make individual arguments easier to revisit.",
      "tags": [
        "Podcasting",
        "Human–AI Interaction",
        "Science Communication"
      ],
      "sources": [
        {
          "label": "MIT-hosted research and publications archive",
          "url": "https://lex.mit.edu/"
        },
        {
          "label": "2018 interview with Max Tegmark",
          "url": "https://lexfridman.com/max-tegmark/"
        },
        {
          "label": "Podcast and transcript archive",
          "url": "https://lexfridman.com/podcast/"
        }
      ],
      "ideas": [
        {
          "title": "Prepare for the difficulty of the guest",
          "text": "Fridman says readiness for a difficult conversation should influence when to book it, especially when a guest’s expertise or worldview differs from his own."
        },
        {
          "title": "Make an AI lesson runnable",
          "text": "His research archive describes a traffic simulator designed to let students experiment directly with deep reinforcement learning and see its effects."
        }
      ],
      "motivation": "In a 2021 listener Q&A, Fridman said he seeks people with different backgrounds and views because the exchange might surprise both of them. He also said a poorly prepared interview could make division worse.",
      "quote": {
        "text": "I want to have really difficult conversations.",
        "context": "From his January 2021 podcast AMA, transcribed by Happy Scribe, answering a listener’s question about how he selects guests.",
        "label": "January 2021 AMA transcript",
        "url": "https://podcasts.happyscribe.com/lex-fridman-podcast-artificial-intelligence-ai/lex-fridman-ask-me-anything-ama-january-2021"
      },
      "ideaSources": [
        {
          "label": "Fridman’s January 2021 AMA recording",
          "url": "https://lexfridman.com/ama1/"
        },
        {
          "label": "MIT-hosted research and publications archive",
          "url": "https://lex.mit.edu/"
        }
      ],
      "funFact": "Away from interviews, Fridman trains in jiu-jitsu and judo and plays guitar and piano. His website links videos of his jiu-jitsu black-belt promotion and his rendition of Pink Floyd’s Comfortably Numb.",
      "funFactSource": {
        "label": "Fridman’s personal website and hobby videos",
        "url": "https://lexfridman.com/"
      }
    },
    {
      "slug": "claude-shannon",
      "name": "Claude Shannon",
      "category": "science",
      "role": "Information theorist and electrical engineer",
      "intro": "Shannon gave engineers mathematical tools for designing digital circuits and communicating through noise. His work connected the on and off states of switches to symbolic logic, then showed how to measure information and the limits of transmitting it.",
      "milestones": [
        {
          "year": 1938,
          "text": "Published A Symbolic Analysis of Relay and Switching Circuits, showing how Boolean algebra could analyze and simplify electrical switching networks."
        },
        {
          "year": 1948,
          "text": "Published A Mathematical Theory of Communication, defining a measure of information and establishing the conditions for reliable transmission over noisy channels."
        },
        {
          "year": 1949,
          "text": "Published Communication Theory of Secrecy Systems, applying mathematical communication theory to cryptography and defining perfect secrecy."
        }
      ],
      "impact": "His switching work helped make circuit design a systematic discipline. Information theory gave later engineers a target for compression and error correction, with limits they could compare their designs against.",
      "tags": [
        "Information Theory",
        "Digital Logic",
        "Cryptography"
      ],
      "sources": [
        {
          "label": "Shannon’s 1938 switching paper hosted by MIT",
          "url": "https://tubes.mit.edu/6S917/_static/2025/resources/shannon38.pdf"
        },
        {
          "label": "IEEE Information Theory Society biography",
          "url": "https://www.itsoc.org/about/shannon"
        },
        {
          "label": "1949 secrecy paper hosted by the University of Wisconsin",
          "url": "https://pages.cs.wisc.edu/~rist/642-fall-2014/shannon-secrecy.pdf"
        }
      ],
      "ideas": [
        {
          "title": "Measure the choices in a message",
          "text": "Shannon measured information through the possible messages and their probabilities, allowing engineers to analyze text, speech, and images within one framework."
        },
        {
          "title": "Design codes around a channel’s limits",
          "text": "His theory showed that suitable coding can make transmission arbitrarily reliable below channel capacity, under the model’s assumptions, despite noise."
        }
      ],
      "motivation": "In a 1982 oral history, Shannon said a problem’s elegance and interest usually drew him more strongly than its applications. His recollection presents mathematical curiosity as a reason for the work, even when practical uses followed.",
      "quote": {
        "text": "These semantic aspects of communication are irrelevant to the engineering problem.",
        "context": "In the opening of his 1948 paper, explaining why a transmission system can be analyzed without interpreting a message’s meaning.",
        "label": "Shannon’s 1948 paper hosted by MIT",
        "url": "https://web.mit.edu/6.976/www/handout/shannon.pdf"
      },
      "ideaSources": [
        {
          "label": "Shannon’s 1948 paper hosted by MIT",
          "url": "https://web.mit.edu/6.976/www/handout/shannon.pdf"
        },
        {
          "label": "Shannon’s 1982 oral history with Robert Price",
          "url": "https://ethw.org/Oral-History:Claude_E._Shannon"
        }
      ],
      "funFact": "At Bell Labs, colleagues remembered Shannon riding the corridors on a unicycle while juggling three balls. He also built a juggling machine.",
      "funFactSource": {
        "label": "MIT’s obituary and recollections of Shannon",
        "url": "https://news.mit.edu/2001/shannon"
      },
      "id": 58
    },
    {
      "slug": "alan-turing",
      "name": "Alan Turing",
      "category": "science",
      "role": "Mathematician and computing pioneer",
      "intro": "Turing made computation precise by describing a simple abstract machine and the tasks it could perform. He also helped develop wartime codebreaking methods and investigated how machines might learn and how chemical processes could produce biological patterns.",
      "milestones": [
        {
          "year": 1936,
          "text": "Developed On Computable Numbers, describing a universal machine that could simulate other such machines and proving limits to what an algorithm can decide."
        },
        {
          "year": 1940,
          "text": "Helped develop the British Bombe for searching Enigma settings, building on Polish cryptanalytic work and working with colleagues including Gordon Welchman."
        },
        {
          "year": 1952,
          "text": "Published The Chemical Basis of Morphogenesis, proposing how reacting and diffusing chemicals could generate patterns during biological development."
        }
      ],
      "impact": "The universal-machine model became a foundation of computer science. His later proposals gave AI researchers a behavioral test to debate and biologists a mathematical mechanism for studying how patterns emerge.",
      "tags": [
        "Computation",
        "Artificial Intelligence",
        "Mathematical Biology"
      ],
      "sources": [
        {
          "label": "King’s College account and original Turing archive",
          "url": "https://www.kings.cam.ac.uk/alan-mathison-turing-1912-54"
        },
        {
          "label": "GCHQ’s account of Turing’s codebreaking work",
          "url": "https://www.gchq.gov.uk/information/alan-turing"
        },
        {
          "label": "Turing’s 1952 morphogenesis paper hosted by Cambridge",
          "url": "https://www.damtp.cam.ac.uk/user/gold/pdfs/teaching/turing1952.pdf"
        }
      ],
      "ideas": [
        {
          "title": "Turn an ambiguous claim into a test",
          "text": "His imitation game replaced a debate over the word thinking with a concrete comparison of human and machine answers in conversation."
        },
        {
          "title": "Educate a simpler machine",
          "text": "Turing proposed starting with a program resembling a child’s mind and teaching it, making learning part of the design problem."
        }
      ],
      "motivation": "Turing’s papers state concrete aims for his investigations. In 1950 he wanted to examine machine intelligence through an observable test. In 1952 he sought a possible physical mechanism connecting genes to the shape of an organism.",
      "quote": {
        "text": "We may hope that machines will eventually compete with men in all purely intellectual fields.",
        "context": "Near the close of Computing Machinery and Intelligence in 1950, before considering whether to begin with chess or teaching a machine language.",
        "label": "Computing Machinery and Intelligence hosted by MIT",
        "url": "https://cbmm.mit.edu/sites/default/files/documents/turing.pdf"
      },
      "ideaSources": [
        {
          "label": "Turing’s 1950 Computing Machinery and Intelligence",
          "url": "https://cbmm.mit.edu/sites/default/files/documents/turing.pdf"
        },
        {
          "label": "Turing’s 1952 The Chemical Basis of Morphogenesis",
          "url": "https://www.damtp.cam.ac.uk/user/gold/pdfs/teaching/turing1952.pdf"
        }
      ],
      "funFact": "Turing was a competitive distance runner. His biographer Andrew Hodges records a marathon best of 2 hours, 46 minutes, 3 seconds, and reproduces a 1947 newspaper report of his racing.",
      "funFactSource": {
        "label": "Andrew Hodges’s biography update and contemporary race report",
        "url": "https://www.turing.org.uk/book/update/part6.html"
      },
      "id": 59
    },
    {
      "slug": "thomas-edison",
      "name": "Thomas Edison",
      "category": "industry",
      "role": "Inventor and builder of industrial research laboratories",
      "intro": "Edison organized teams of experimenters, machinists, and manufacturers to turn inventions into commercial systems. His laboratories helped develop recorded sound, practical incandescent lighting, and motion pictures, with substantial contributions from collaborators.",
      "milestones": [
        {
          "year": 1876,
          "text": "Moved his assistants and equipment to Menlo Park, creating a laboratory organized around developing and improving inventions."
        },
        {
          "year": 1877,
          "text": "Developed the tinfoil phonograph, which records and reproduces sound."
        },
        {
          "year": 1882,
          "text": "The Pearl Street generating station began supplying electricity to customers in lower Manhattan as part of his lighting system."
        }
      ],
      "impact": "His contribution included the equipment, manufacturing, and electrical infrastructure that made inventions usable. The combination of laboratories, specialized teams, and nearby factories helped establish a model for industrial research and development.",
      "tags": [
        "Industrial Research",
        "Electric Power",
        "Recorded Sound",
        "Systems Design"
      ],
      "sources": [
        {
          "label": "National Park Service biography of Edison",
          "url": "https://www.nps.gov/edis/learn/historyculture/edison-biography.htm?simple=True"
        },
        {
          "label": "National Park Service account of the electric lighting system",
          "url": "https://www.nps.gov/edis/learn/kidsyouth/the-electric-light-system-phonograph-motion-pictures.htm"
        },
        {
          "label": "National Park Service history of Edison's laboratories",
          "url": "https://www.nps.gov/teachers/classrooms/upload/TWHP-Lessons_25edison.pdf"
        }
      ],
      "ideas": [
        {
          "title": "Build the missing pieces",
          "text": "A useful lamp required generators, wiring, switches, and meters. Edison's team worked on the surrounding system that allowed customers to adopt it."
        },
        {
          "title": "Keep invention close to production",
          "text": "At West Orange, factories beside the laboratory shortened the route from a working prototype to manufactured products and improvements."
        }
      ],
      "motivation": "The laboratory history describes a reinforcing commercial motive: successful products financed further experiments. Edison sought inventions people would buy, giving his team resources to improve existing devices and pursue new ones.",
      "quote": {
        "text": "the rapid and cheap development of an invention and working it up into Commercial shape",
        "context": "From his November 1887 laboratory notebook, quoted by the National Park Service, describing the purpose of his West Orange facilities.",
        "label": "Edison laboratory notebook excerpt in the NPS laboratory history",
        "url": "https://www.nps.gov/teachers/classrooms/upload/TWHP-Lessons_25edison.pdf"
      },
      "ideaSources": [
        {
          "label": "National Park Service account of the electric lighting system",
          "url": "https://www.nps.gov/edis/learn/kidsyouth/the-electric-light-system-phonograph-motion-pictures.htm"
        },
        {
          "label": "National Park Service history of Edison's laboratories",
          "url": "https://www.nps.gov/teachers/classrooms/upload/TWHP-Lessons_25edison.pdf"
        }
      ],
      "funFact": "In 1890, women recorded nursery rhymes for Edison talking dolls by repeating them into phonographs. Large-scale copying was still impractical, so manufacturing the toys required a workforce of live recording performers.",
      "funFactSource": {
        "label": "National Park Service cultural history of the Edison talking doll record",
        "url": "https://www.nps.gov/edis/learn/photosmultimedia/a-cultural-history-of-the-edison-talking-doll-record.htm"
      },
      "id": 60
    },
    {
      "slug": "nikola-tesla",
      "name": "Nikola Tesla",
      "category": "industry",
      "role": "Electrical inventor and alternating-current motor pioneer",
      "intro": "Tesla developed polyphase alternating-current motors and explored high-frequency electricity and wireless control. Westinghouse manufactured his motor designs within an emerging electrical industry shaped by many inventors and engineers.",
      "milestones": [
        {
          "year": 1888,
          "text": "Westinghouse produced an AC induction motor based on his design, using phase-shifted currents to create rotation."
        },
        {
          "year": 1891,
          "text": "Demonstrated high-frequency currents and lighting experiments at an American Institute of Electrical Engineers meeting at Columbia College."
        },
        {
          "year": 1898,
          "text": "Demonstrated a model boat operated by wireless signals, an early example of remote control."
        }
      ],
      "impact": "His motor designs helped make AC electricity useful for mechanical work, alongside its use for lighting. His high-frequency experiments and remotely operated boats explored possibilities that extended beyond distributing electrical power.",
      "tags": [
        "Electric Motors",
        "Alternating Current",
        "Wireless Control",
        "Visualization"
      ],
      "sources": [
        {
          "label": "Smithsonian collection record for an 1888 Westinghouse Tesla motor",
          "url": "https://americanhistory.si.edu/collections/object/nmah_713594"
        },
        {
          "label": "Tesla's May 1891 lecture, transcribed by Tesla Universe",
          "url": "https://teslauniverse.com/nikola-tesla/lectures/experiments-alternate-currents-very-high-frequency-and-their-application"
        },
        {
          "label": "Smithsonian history of remotely controlled aircraft and Tesla's boat",
          "url": "https://airandspace.si.edu/air-and-space-quarterly/issue-12/secret-history-of-drones"
        }
      ],
      "ideas": [
        {
          "title": "Create motion with a rotating field",
          "text": "Currents offset in phase create a rotating magnetic field. Tesla's induction motor used this arrangement without a commutator or contact brushes."
        },
        {
          "title": "Rehearse a machine mentally",
          "text": "In his autobiography, Tesla described changing and operating imagined machines before constructing them. This was his reported design method, rather than a universal prescription."
        }
      ],
      "motivation": "In his 1919 autobiography, Tesla presented invention as harnessing natural forces for human needs. He also described the pleasure of sustained imaginative thought as a reward in itself, giving a personal account of his drive.",
      "quote": {
        "text": "The progressive development of man is vitally dependent on invention.",
        "context": "Opening sentence of My Inventions, published in Electrical Experimenter in February 1919. The linked page transcribes Tesla's original article.",
        "label": "Tesla's My Inventions: My Early Life",
        "url": "https://teslauniverse.com/nikola-tesla/articles/my-inventions-i-my-early-life"
      },
      "ideaSources": [
        {
          "label": "Smithsonian collection record describing the motor's operating principle",
          "url": "https://americanhistory.si.edu/collections/object/nmah_713594"
        },
        {
          "label": "Tesla's 1919 autobiography on imagination and invention",
          "url": "https://teslauniverse.com/nikola-tesla/articles/my-inventions-i-my-early-life"
        }
      ],
      "funFact": "Tesla recalled making a childhood engine powered by beetles attached to a rotating crosspiece. In his 1919 telling, the project ended after another boy began eating the insects.",
      "funFactSource": {
        "label": "Tesla's My Inventions: My First Efforts in Invention, March 1919",
        "url": "https://teslauniverse.com/nikola-tesla/articles/my-inventions-ii-my-first-efforts-invention"
      },
      "id": 61
    },
    {
      "slug": "alexander-graham-bell",
      "name": "Alexander Graham Bell",
      "category": "industry",
      "role": "Telephone pioneer and experimental researcher",
      "intro": "A teacher of speech and a researcher of acoustics, Bell developed early telephones with electrician Thomas Watson. His work emerged amid competing experiments and patent claims, then expanded into optical communication, aviation, and hydrofoils.",
      "milestones": [
        {
          "year": 1876,
          "text": "Received U.S. Patent 174,465 on March 7. Three days later, he and Watson transmitted intelligible sentences in a laboratory experiment."
        },
        {
          "year": 1880,
          "text": "Worked with Charles Sumner Tainter on the photophone, transmitting speech through variations in reflected light."
        },
        {
          "year": 1919,
          "text": "The HD-4 hydrofoil developed with Casey Baldwin set a world marine speed record of 114 kilometers per hour."
        }
      ],
      "impact": "Bell helped bring electrical speech transmission into commercial use through the Bell Telephone Company, organized in 1877. His later projects continued to connect laboratory experiments with new ways of communicating and moving.",
      "tags": [
        "Telecommunications",
        "Acoustics",
        "Optical Communication",
        "Collaborative Invention"
      ],
      "sources": [
        {
          "label": "Library of Congress timeline of Bell's teaching, telephone work, and company",
          "url": "https://www.loc.gov/collections/alexander-graham-bell-papers/articles-and-essays/timeline/1870-to-1879/"
        },
        {
          "label": "Bell's June 2, 1880 letter describing photophone experiments with Tainter",
          "url": "https://tile.loc.gov/storage-services/service/mss/magbell/036/03600502/03600502.pdf"
        },
        {
          "label": "Parks Canada historical gallery of Bell's aviation and hydrofoil work",
          "url": "https://parks.canada.ca/lhn-nhs/ns/grahambell/decouvrir-discover/galerie-gallery"
        }
      ],
      "ideas": [
        {
          "title": "Imagine the everyday use",
          "text": "After the 1876 experiment, Bell pictured wires entering homes like water or gas pipes, letting friends converse without leaving the house."
        },
        {
          "title": "Try another carrier for information",
          "text": "The photophone converted speech into variations in reflected light, then recovered sound at a receiver using light-sensitive selenium."
        }
      ],
      "motivation": "In his March 1876 letter to his father, Bell imagined friends speaking across distance from their homes. The letter connects his excitement about the experiment to a specific everyday use.",
      "quote": {
        "text": "Articulate speech was transmitted intelligibly this afternoon.",
        "context": "From Bell's March 10, 1876 letter to his father, reporting the experiment with Thomas Watson. The Library of Congress preserves this typed transcript.",
        "label": "Bell's March 10, 1876 letter to Alexander Melville Bell",
        "url": "https://tile.loc.gov/storage-services/service/mss/magbell/005/00500211/00500211.pdf"
      },
      "ideaSources": [
        {
          "label": "Bell's March 10, 1876 letter on telephones in the home",
          "url": "https://tile.loc.gov/storage-services/service/mss/magbell/005/00500211/00500211.pdf"
        },
        {
          "label": "Bell's June 2, 1880 letter on the photophone",
          "url": "https://tile.loc.gov/storage-services/service/mss/magbell/036/03600502/03600502.pdf"
        }
      ],
      "funFact": "Bell's aviation experiments included a kite large enough to carry a person. In December 1907, the boat Blue Hill towed the Cygnet into flight with Thomas Selfridge aboard.",
      "funFactSource": {
        "label": "Parks Canada photograph of the Cygnet's December 6, 1907 manned flight",
        "url": "https://parks.canada.ca/lhn-nhs/ns/grahambell/decouvrir-discover/galerie-gallery"
      },
      "id": 62
    },
    {
      "slug": "wright-brothers",
      "name": "Wright brothers",
      "category": "industry",
      "role": "Wilbur and Orville Wright, aviation pioneers",
      "intro": "The Dayton bicycle makers approached flight as a problem of lift, control, and propulsion. Building on earlier experimenters and working with mechanic Charlie Taylor, they developed the first successful powered, controlled airplane and then improved its practical endurance.",
      "milestones": [
        {
          "year": 1901,
          "text": "Built a wind tunnel after disappointing glider tests, producing their own aerodynamic data to improve wing designs."
        },
        {
          "year": 1903,
          "text": "Made four powered flights at Kill Devil Hills on December 17. Orville's first covers 120 feet in 12 seconds."
        },
        {
          "year": 1905,
          "text": "Developed the practical Flyer III in Ohio, capable of repeated circling flights lasting more than half an hour."
        }
      ],
      "impact": "They combined measured aerodynamic performance with pilot control, effective propellers, and a lightweight engine. Their achievement established a workable foundation for aviation, developed through gliders and repeated tests before and after the celebrated first flight.",
      "tags": [
        "Aeronautics",
        "Experimental Design",
        "Flight Control",
        "Iteration"
      ],
      "sources": [
        {
          "label": "National Park Service account of the Wrights' early experiments",
          "url": "https://www.nps.gov/articles/roadtofirstflight.htm"
        },
        {
          "label": "Wright Brothers National Memorial historical brochure",
          "url": "https://www.nps.gov/wrbr/planyourvisit/park-brochure.htm"
        },
        {
          "label": "Smithsonian account of the Wrights' research methods and collaborators",
          "url": "https://airandspace.si.edu/explore/stories/researching-wright-way"
        }
      ],
      "ideas": [
        {
          "title": "Measure the inherited assumptions",
          "text": "When published lift figures failed to match their glider tests, the brothers built a wind tunnel and generated replacement data."
        },
        {
          "title": "Learn control before adding power",
          "text": "They developed wing-warping and coordinated control through kites and gliders, gaining piloting experience before attempting a powered aircraft."
        }
      ],
      "motivation": "In his 1900 letter to Octave Chanute, Wilbur described a growing conviction that human flight was possible and his wish to arrange time for experiments. The letter records his commitment to making the brothers’ project work.",
      "quote": {
        "text": "For some years I have been afflicted with the belief that flight is possible to man.",
        "context": "Wilbur Wright writing to aeronautical researcher Octave Chanute on May 13, 1900, reproduced by the National Park Service.",
        "label": "Wilbur's May 13, 1900 letter excerpt in Road to First Flight",
        "url": "https://www.nps.gov/articles/roadtofirstflight.htm"
      },
      "ideaSources": [
        {
          "label": "National Park Service on the Wrights' tests and Wilbur's letter",
          "url": "https://www.nps.gov/articles/roadtofirstflight.htm"
        },
        {
          "label": "Smithsonian account of control, wind-tunnel research, and glider testing",
          "url": "https://airandspace.si.edu/explore/stories/researching-wright-way"
        }
      ],
      "funFact": "The famous first-flight photograph was taken by lifesaving-station surfman John T. Daniels, who had never used a camera before. The brothers only saw the developed photograph after returning to Dayton.",
      "funFactSource": {
        "label": "National Park Service account of the first-flight photograph",
        "url": "https://www.nps.gov/places/12-12-seconds-that-changed-the-world.htm"
      },
      "id": 63
    },
    {
      "slug": "ben-horowitz",
      "name": "Ben Horowitz",
      "category": "capital",
      "role": "Startup operator, venture investor, and management writer",
      "intro": "Ben Horowitz ran Loudcloud and Opsware before co-founding Andreessen Horowitz. His writing turns the uncomfortable work of leading a startup into concrete decisions about products, people, and whether a company can survive long enough to improve.",
      "milestones": [
        {
          "year": 1999,
          "text": "Co-founded Loudcloud, a managed infrastructure company. In 2002 it sold its services business and became the software company Opsware."
        },
        {
          "year": 2007,
          "text": "Sold Opsware to Hewlett-Packard for $1.6 billion after leading it through the aftermath of the dot-com crash."
        },
        {
          "year": 2009,
          "text": "Co-founded Andreessen Horowitz with Marc Andreessen, building a venture firm that combined investment with operating advice and access to executives and customers."
        }
      ],
      "impact": "Horowitz made startup management experience accessible through essays and books, including The Hard Thing About Hard Things. His firm helped popularize a venture model in which investors provide services and networks as well as money.",
      "tags": [
        "Venture Capital",
        "Management",
        "Founder Development",
        "Company Building"
      ],
      "sources": [
        {
          "label": "Andreessen Horowitz · Ben Horowitz biography",
          "url": "https://a16z.com/author/ben-horowitz/"
        },
        {
          "label": "Horowitz · Loudcloud and Opsware’s history",
          "url": "https://a16z.com/the-case-for-the-fat-startup/"
        },
        {
          "label": "Andreessen Horowitz · The firm’s founding and approach",
          "url": "https://a16z.com/about/"
        },
        {
          "label": "Horowitz · Lead Bullets",
          "url": "https://a16z.com/lead-bullets/"
        }
      ],
      "ideas": [
        {
          "title": "Train for the work you expect",
          "text": "Horowitz argues that managers should teach job-specific skills and expectations. Count fully productive employees when assessing hiring, and include the work needed to train them."
        },
        {
          "title": "Help founders build their networks",
          "text": "Horowitz saw experienced CEOs’ contacts as an advantage founders could acquire. A venture firm could introduce recruits, customers, and advisers while the founder learned to lead."
        }
      ],
      "motivation": "Horowitz recalled being told that founders were routinely replaced as companies grew. He and Andreessen wanted a firm that helped founders develop the skills and relationships needed to keep running the companies they had created.",
      "quote": {
        "text": "There are no silver bullets for this, only lead bullets.",
        "context": "In Lead Bullets, Horowitz recalled telling his Opsware team to fix a product disadvantage when customers were buying competitors’ software.",
        "label": "Horowitz · Lead Bullets",
        "url": "https://a16z.com/lead-bullets/"
      },
      "ideaSources": [
        {
          "label": "Horowitz · Why Startups Should Train Their People",
          "url": "https://a16z.com/why-startups-should-train-their-people/"
        },
        {
          "label": "Horowitz · Why the firm was built to support founder CEOs",
          "url": "https://a16z.com/why-has-andreessen-horowitz-raised-2-7b-in-3-years/"
        }
      ],
      "funFact": "Horowitz once rapped under the name Tic Toc in a group called Blind and Def. Decades later, he posted their old mixtape online and annotated the lyrics.",
      "funFactSource": {
        "label": "Horowitz · The Legend of The Blind MC",
        "url": "https://a16z.com/the-legend-of-the-blind-mc/"
      },
      "id": 64
    },
    {
      "slug": "ben-thompson",
      "name": "Ben Thompson",
      "category": "media",
      "role": "Stratechery founder and technology analyst",
      "intro": "Ben Thompson explains technology companies through their business models, distribution and relationships with customers. He built Stratechery into an independent analysis publication, combining free essays with paid updates for readers who wanted more.",
      "milestones": [
        {
          "year": 2013,
          "text": "Launched Stratechery in March, publishing essays on technology and business strategy."
        },
        {
          "year": 2014,
          "text": "Introduced the paid Daily Update in April and made Stratechery his full-time work."
        },
        {
          "year": 2015,
          "text": "Published Aggregation Theory, connecting the strategies of businesses including Google, Netflix and Airbnb."
        }
      ],
      "impact": "Aggregation Theory offers a framework for examining how internet businesses gain power by attracting users and organizing abundant supply. Stratechery also provides a working example of specialized writing sold directly to readers, with free articles helping people discover the publication.",
      "tags": [
        "Business Models",
        "Distribution",
        "Independent Media",
        "Platforms"
      ],
      "sources": [
        {
          "label": "Thompson's biography and Stratechery ethics statement",
          "url": "https://stratechery.com/about/"
        },
        {
          "label": "Thompson's account of Stratechery's 2013 and 2014 launches",
          "url": "https://stratechery.com/2015/welcome-to-stratechery-3-0/"
        },
        {
          "label": "Aggregation Theory, July 2015",
          "url": "https://stratechery.com/2015/aggregation-theory/"
        }
      ],
      "ideas": [
        {
          "title": "Demand organizes supply",
          "text": "A service that wins users through a better experience can attract suppliers on its own terms, reinforcing its appeal and market power."
        },
        {
          "title": "Sell additional value",
          "text": "Keep free work useful for discovery, then charge for additional analysis. Thompson designed the Daily Update to make a subscription feel additive."
        }
      ],
      "motivation": "Thompson describes independence as a deliberate goal. His ethics statement says he wants subscription income to align his incentives with readers, and he declines consulting work and speaking engagements for companies he covers.",
      "quote": {
        "text": "My goal is to be a truly independent analyst",
        "context": "The opening clause of Thompson's published ethics statement, which describes his financial interests, disclosures and approach to editorial independence.",
        "label": "Stratechery ethics statement",
        "url": "https://stratechery.com/about/"
      },
      "ideaSources": [
        {
          "label": "Thompson's original explanation of Aggregation Theory",
          "url": "https://stratechery.com/2015/aggregation-theory/"
        },
        {
          "label": "Thompson on Stratechery's subscription design and origins, Acquired interview",
          "url": "https://www.acquired.fm/episodes/stratechery-with-ben-thompson"
        }
      ],
      "funFact": "Thompson told Acquired he initially pronounced Stratechery to echo the strategery comedy bit. He changed it after about a month to make the name's combination of strategy and tech clearer.",
      "funFactSource": {
        "label": "Thompson recalls naming and pronouncing Stratechery, Acquired interview",
        "url": "https://www.acquired.fm/episodes/stratechery-with-ben-thompson"
      },
      "id": 65
    },
    {
      "slug": "sam-hinkie",
      "name": "Sam Hinkie",
      "category": "performance",
      "role": "Former Philadelphia 76ers general manager",
      "intro": "Sam Hinkie made Philadelphia's rebuilding plan a visible test of long-term decision-making. As the 76ers' basketball chief, he accumulated draft assets and prospects while accepting severe losses in the present.",
      "milestones": [
        {
          "year": 2013,
          "text": "Became the 76ers' president of basketball operations and general manager."
        },
        {
          "year": 2014,
          "text": "Selected Joel Embiid third overall despite a recent foot operation and an uncertain recovery timetable."
        },
        {
          "year": 2016,
          "text": "Resigned in April, explaining his approach in a 13-page letter to the team's owners."
        }
      ],
      "impact": "The rebuilding strategy became known as the Process, turning draft assets, patience and the costs of losing into a public argument. Hinkie's farewell letter offered an unusually detailed account of applying investor-style reasoning to basketball, including the distinction between sound decisions and fortunate outcomes.",
      "tags": [
        "Decision Making",
        "Long Horizons",
        "Basketball",
        "Uncertainty"
      ],
      "sources": [
        {
          "label": "76ers team history records Hinkie's appointment",
          "url": "https://www.nba.com/sixers/history/76ers-team-history"
        },
        {
          "label": "ESPN report on Philadelphia drafting Embiid, June 2014",
          "url": "https://abcnews.com/amp/Sports/sixers-draft-joel-embiid/story?id=24326801"
        },
        {
          "label": "ESPN report on Hinkie's resignation and rebuilding strategy, April 2016",
          "url": "https://abcnews.com/Sports/sam-hinkie-steps-76ers-gm-head-basketball-operations/story?id=38208968"
        },
        {
          "label": "Hinkie's April 6, 2016 letter to Sixers owners, archived original document",
          "url": "https://sriramk.com/memos/hinkie.pdf"
        }
      ],
      "ideas": [
        {
          "title": "Record the decision first",
          "text": "Write down what you expect and why before acting. Revisit the record to distinguish sound reasoning from luck and hindsight."
        },
        {
          "title": "Compete on a longer timetable",
          "text": "Prepare years before a desirable opportunity arrives. Hinkie argued that fewer rivals plan that far ahead, creating an advantage for patient organizations."
        }
      ],
      "motivation": "In his letter, Hinkie described a goal of increasing the odds of acquiring star players and building a team suited to the league's future. Draft assets, financial flexibility and player development served that goal.",
      "quote": {
        "text": "You can be right for the wrong reasons.",
        "context": "From his April 6, 2016 letter to Sixers owners, reflecting on the decision to draft Joel Embiid.",
        "label": "Hinkie's 2016 letter, page 2, archived original document",
        "url": "https://sriramk.com/memos/hinkie.pdf"
      },
      "ideaSources": [
        {
          "label": "Hinkie's letter on decision journals, long horizons and rebuilding goals",
          "url": "https://sriramk.com/memos/hinkie.pdf"
        }
      ],
      "funFact": "Hinkie recalled hosting a gathering for players’ families in 2013. Only two mothers attended, making the roster’s youth vivid to him.",
      "funFactSource": {
        "label": "Hinkie's recollection of the family gathering, letter pages 9–10",
        "url": "https://sriramk.com/memos/hinkie.pdf"
      },
      "id": 66
    },
    {
      "slug": "travis-kalanick",
      "name": "Travis Kalanick",
      "category": "technology",
      "role": "Uber co-founder and former chief executive",
      "intro": "Travis Kalanick helped turn Uber from an app for summoning a private driver into a global transportation marketplace. Its expansion made ordering and paying for a ride easier while forcing cities to confront questions about licensing and drivers’ employment status.",
      "milestones": [
        {
          "year": 2007,
          "text": "Sold Red Swoosh, the networking software company he had founded, to Akamai Technologies."
        },
        {
          "year": 2010,
          "text": "Uber launched in San Francisco. Kalanick, who had helped develop the company with Garrett Camp, became its chief executive later that year."
        },
        {
          "year": 2017,
          "text": "Ended his tenure as Uber’s CEO. That June, the company also adopted board-approved recommendations to reform its workplace and accountability systems."
        }
      ],
      "impact": "Uber helped make smartphone dispatch and automatic payment familiar parts of urban transport. Its own IPO filing acknowledged that aggressive growth and a failure to prioritize compliance had brought regulatory scrutiny, alongside disputes about drivers’ legal status.",
      "tags": [
        "Marketplaces",
        "Transportation",
        "Distribution",
        "Network Effects"
      ],
      "sources": [
        {
          "label": "SEC · Uber’s 2019 IPO filing",
          "url": "https://www.sec.gov/Archives/edgar/data/1543151/000119312519103850/d647752ds1.htm"
        },
        {
          "label": "Kalanick · Uber’s Founding",
          "url": "https://www.uber.com/us/en/newsroom/ubers-founding/"
        },
        {
          "label": "Uber · 2017 workplace review recommendations",
          "url": "https://www.uber.com/us/en/newsroom/covington-recommendations/"
        }
      ],
      "ideas": [
        {
          "title": "Combine the steps around a ride",
          "text": "Uber connected a passenger’s request to a driver and handled payment through the app. The transaction removed several separate decisions from booking a car."
        },
        {
          "title": "Match the overlapping journey",
          "text": "Kalanick pitched pooled rides as a way to put passengers traveling similar routes in one car. The proposed savings depended on making shared journeys convenient."
        }
      ],
      "motivation": "Kalanick’s founding account describes Camp’s initial idea as a more convenient way to get around San Francisco. In his later TED talk, he presented carpooling as a way to reduce travel costs and congestion.",
      "quote": {
        "text": "we can turn every car into a shared car",
        "context": "An aspirational claim in Kalanick’s TED talk about extending Uber’s pooled-ride model to more journeys. TED quotes the passage in its description of the talk.",
        "label": "TED · Uber’s plan to get more people into fewer cars",
        "url": "https://www.ted.com/talks/travis_kalanick_uber_s_plan_to_get_more_people_into_fewer_cars"
      },
      "ideaSources": [
        {
          "label": "SEC · Uber’s description of its ride and payment experience",
          "url": "https://www.sec.gov/Archives/edgar/data/1543151/000119312519103850/d647752ds1.htm"
        },
        {
          "label": "TED · Kalanick on pooled rides",
          "url": "https://www.ted.com/talks/travis_kalanick_uber_s_plan_to_get_more_people_into_fewer_cars"
        }
      ],
      "funFact": "Kalanick recalled that Camp originally wanted to split the cost of a Mercedes S-Class, a driver, and a garage space so they could summon their shared car with an iPhone.",
      "funFactSource": {
        "label": "Kalanick · The first version of Uber’s idea",
        "url": "https://www.uber.com/us/en/newsroom/ubers-founding/"
      },
      "id": 67
    }
  ],
  "themes": [
    {
      "slug": "distribution-as-product",
      "title": "Distribution as a product",
      "kicker": "The route to the customer",
      "intro": "Price, Walton, Lauder, and Bezos all changed what customers could buy by redesigning how they bought it.",
      "sections": [
        {
          "title": "Where the cost went",
          "text": "Price Club made the buying experience sparse and asked shoppers to pay for access. Walmart built the infrastructure for low prices across a network of stores. Both relied on scale, but one captured value through membership while the other won repeat trips through the prices on the shelf."
        },
        {
          "title": "Where trust came from",
          "text": "Estée Lauder’s demonstrations and samples reduced the risk of trying an unfamiliar product. Amazon’s investment in fulfillment made buying at a distance more predictable. The mechanics differ, but in both cases the route to the customer solved a problem that a better product alone could leave intact."
        }
      ],
      "prompt": "Which part of buying your product is still more work than it should be, and could owning that step give you an advantage?",
      "people": [
        "sol-price",
        "sam-walton",
        "estee-lauder",
        "jeff-bezos",
        "ben-thompson",
        "travis-kalanick",
        "thomas-edison"
      ]
    },
    {
      "slug": "designing-for-participants",
      "title": "Designing for participants",
      "kicker": "The business around the product",
      "intro": "A platform starts to matter when independent participants can do more with it than the original team could do alone.",
      "sections": [
        {
          "title": "Participation has a price",
          "text": "Dee Hock’s card network gave banks common rules for transactions while leaving each bank room to serve its own customers. Microsoft’s software model gave PC manufacturers and developers a common target. Each system gave participants something valuable in exchange for accepting shared rules."
        },
        {
          "title": "The cost of switching",
          "text": "Nvidia’s CUDA gave developers a way to program GPUs for tasks beyond graphics. The more software and expertise developers accumulated, the more they could do with the platform and the more work it could take to move away. A good platform can make its participants more productive and more dependent at the same time."
        }
      ],
      "prompt": "What can an outsider build on your system, who sets the rules, and how costly is it for the outsider to leave?",
      "people": [
        "dee-hock",
        "bill-gates",
        "jensen-huang",
        "jim-clark",
        "ben-horowitz",
        "travis-kalanick"
      ]
    },
    {
      "slug": "how-an-edge-compounds",
      "title": "How an edge compounds",
      "kicker": "Price, time, and staying power",
      "intro": "Buffett, Munger, Thorp, and Jones put different kinds of judgment to work. The common question is whether you can keep applying an edge through a bad stretch.",
      "sections": [
        {
          "title": "Three different clocks",
          "text": "Buffett and Munger looked for businesses that could build value over long holding periods. Thorp built statistical and pricing advantages into repeated bets. Jones worked in macro markets, where the conditions behind a trade can change faster than the economics of an operating business."
        },
        {
          "title": "Match the financing to the bet",
          "text": "The time horizon changes which risks matter most. A favorable long-run expectation offers little protection if a margin call forces you out. A great company can still be a poor purchase at the wrong price. Each approach needs a way to stay solvent while its reasoning has time to play out."
        }
      ],
      "prompt": "What can force you to stop before the evidence settles, and can you change the size or terms of the bet?",
      "people": [
        "warren-buffett",
        "charlie-munger",
        "edward-thorp",
        "paul-tudor-jones",
        "sam-hinkie"
      ]
    },
    {
      "slug": "from-proof-to-use",
      "title": "From proof to use",
      "kicker": "How research travels",
      "intro": "Research reaches different audiences through a mission, an explanatory tool, or a piece of shared infrastructure.",
      "sections": [
        {
          "title": "Organizing the work",
          "text": "Oppenheimer brought theoretical and experimental work together at Los Alamos under a wartime deadline. Feynman worked on the project, then became known for methods that helped physicists calculate particle interactions. One contribution coordinated work toward a specific outcome. The other gave researchers a way to solve many future problems."
        },
        {
          "title": "Making results accessible",
          "text": "AlphaFold’s impact grew through both the prediction system and the public database developed with EMBL-EBI. A searchable collection made predictions usable by researchers who did not run the system themselves. Experimental validation still matters, especially when the question depends on conformations or interactions a prediction does not establish."
        }
      ],
      "prompt": "What is the smallest usable form of your research that someone else could apply without you in the room?",
      "people": [
        "robert-oppenheimer",
        "richard-feynman",
        "demis-hassabis",
        "claude-shannon",
        "alan-turing",
        "thomas-edison",
        "nikola-tesla",
        "alexander-graham-bell",
        "wright-brothers"
      ],
      "extraSources": [
        {
          "label": "EMBL-EBI on AlphaFold DB and prediction limits",
          "url": "https://www.ebi.ac.uk/about/news/perspectives/alphafold-potential-impacts/"
        }
      ]
    },
    {
      "slug": "the-cost-of-control",
      "title": "The cost of control",
      "kicker": "Efficiency and concentrated power",
      "intro": "Control can make a complex system work better. Where that control sits determines who shares the benefit and who absorbs the costs.",
      "sections": [
        {
          "title": "Different kinds of control",
          "text": "Standard Oil used integration and bargaining power to consolidate refining. Ford synchronized work around the moving assembly line. Rockefeller’s case is about market power and the terms available to competitors. Ford’s is also about how the pace and discretion of daily work changed for employees."
        },
        {
          "title": "Where coordination ends",
          "text": "A social network adds another version of the question. Centralized product decisions can make sharing easier for billions of participants, while data and attention become concentrated in the platform. The historical parallel is the tension between the utility of coordination and the accountability of whoever controls it."
        }
      ],
      "prompt": "Which decisions genuinely need central control, and who has recourse when those decisions impose a cost?",
      "people": [
        "john-d-rockefeller",
        "henry-ford",
        "mark-zuckerberg",
        "ben-thompson"
      ]
    },
    {
      "slug": "making-judgment-teachable",
      "title": "Making judgment teachable",
      "kicker": "What survives the retelling",
      "intro": "Reading biographies, watching film, and reviewing a mission all make an expert’s decisions available for inspection. Each also leaves out information the expert had at the time.",
      "sections": [
        {
          "title": "Make the work visible",
          "text": "David Senra turns biographies into stories about how founders made decisions. Kobe Bryant used game footage in Detail to show viewers how he read the game. Jocko Willink’s leadership writing translates military experiences into principles for civilian teams. Each format makes a different kind of experience inspectable."
        },
        {
          "title": "Find the missing case",
          "text": "A biography can make a lucky bet look inevitable. Film makes an option clearer after the defense has already committed. A military leadership rule may assume a hierarchy a startup does not have. The useful exercise is to recover what the decision-maker knew then, and look for cases where the same rule would have failed."
        }
      ],
      "prompt": "What did this person know when they acted, and can you find a case where the same move produced a worse outcome?",
      "people": [
        "david-senra",
        "kobe-bryant",
        "jocko-willink",
        "kevin-kelly",
        "ben-horowitz",
        "sam-hinkie",
        "wright-brothers"
      ],
      "extraSources": [
        {
          "label": "ESPN announcement of Kobe Bryant’s Detail",
          "url": "https://espnpressroom.com/press-release/espn-kobe-bryants-granity-studios-team-new-basketball-analysis-show-detail/"
        }
      ]
    },
    {
      "slug": "practice-and-character",
      "title": "Practice and character",
      "kicker": "What repetition is for",
      "intro": "Repeated action can change how a person responds. Aristotle, Marcus Aurelius, Goggins, and Willink describe different ways of making that change deliberate.",
      "sections": [
        {
          "title": "What practice builds",
          "text": "Aristotle connects moral character to the actions someone repeatedly chooses, guided by judgment about the situation. Goggins recalls earlier challenges to make another difficult effort feel possible. Both accounts give past action a role in shaping the next response, with different standards for what counts as improvement."
        },
        {
          "title": "What the practice serves",
          "text": "Marcus uses written reminders to rehearse patience, fair judgment, and obligations to other people. Willink’s account of a friendly-fire debrief connects responsibility to finding and correcting failures in a team. The comparison makes the intended outcome visible. Persistence can support a goal, while the goal itself still requires judgment."
        }
      ],
      "prompt": "What response are you practicing, and by which standard will you judge whether it has improved?",
      "people": [
        "aristotle",
        "marcus-aurelius",
        "david-goggins",
        "jocko-willink"
      ],
      "extraSources": [
        {
          "label": "Aristotle on habituation in Nicomachean Ethics II",
          "url": "https://classics.mit.edu/Aristotle/nicomachaen.2.ii.html"
        },
        {
          "label": "Stanford Encyclopedia of Philosophy on Marcus Aurelius’s practices",
          "url": "https://plato.stanford.edu/archives/sum2024/entries/marcus-aurelius/"
        }
      ]
    }
  ]
};
