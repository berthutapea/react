const movies = [
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg',
        id: 338953,
        overview:
            "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
        posterPath: 'https://image.tmdb.org/t/p/w500/8ZbybiGYe8XM4WGmGlhF0ec5R7u.jpg',
        releaseDate: '2022-04-06',
        title: 'Fantastic Beasts: The Secrets of Dumbledore'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/gG9fTyDL03fiKnOpf2tr01sncnt.jpg',
        id: 526896,
        overview:
            'Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.',
        posterPath: 'https://image.tmdb.org/t/p/w500/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg',
        releaseDate: '2022-03-30',
        title: 'Morbius'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg',
        id: 675353,
        overview:
            'After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.',
        posterPath: 'https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg',
        releaseDate: '2022-03-30',
        title: 'Sonic the Hedgehog 2'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg',
        id: 639933,
        overview:
            "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
        posterPath: 'https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg',
        releaseDate: '2022-04-07',
        title: 'The Northman'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg',
        id: 507086,
        overview:
            'Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.',
        posterPath: 'https://image.tmdb.org/t/p/w500/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg',
        releaseDate: '2022-06-01',
        title: 'Jurassic World Dominion'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/gUNRlH66yNDH3NQblYMIwgZXJ2u.jpg',
        id: 453395,
        overview:
            'Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.',
        posterPath: 'https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg',
        releaseDate: '2022-05-04',
        title: 'Doctor Strange in the Multiverse of Madness'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/xHrp2pq73oi9D64xigPjWW1wcz1.jpg',
        id: 414906,
        overview:
            'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
        posterPath: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
        releaseDate: '2022-03-01',
        title: 'The Batman'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/figlwUsXXFehX3IebdjqNLV6vWk.jpg',
        id: 628900,
        overview:
            'After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran. Overseas on a covert mission, Harper must evade those trying to kill him while making his way back home.',
        posterPath: 'https://image.tmdb.org/t/p/w500/rJPGPZ5soaG27MK90oKpioSiJE2.jpg',
        releaseDate: '2022-03-10',
        title: 'The Contractor'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/fEe5fe82qHzjO4yej0o79etqsWV.jpg',
        id: 629542,
        overview:
            'When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.',
        posterPath: 'https://image.tmdb.org/t/p/w500/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg',
        releaseDate: '2022-03-17',
        title: 'The Bad Guys'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/i2tcQ9nDJpdJELPA82eCd7Irasd.jpg',
        id: 831946,
        overview:
            'A U.S. Army Captain uses her years of tactical training to save humanity from sixteen nuclear missiles launched at the U.S. as a violent attack threatens her remote missile interceptor station.',
        posterPath: 'https://image.tmdb.org/t/p/w500/cpWUtkcgRKeauhTyVMjYHxAutp4.jpg',
        releaseDate: '2022-05-26',
        title: 'Interceptor'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/9bbxqz1iPEfZN9Xi2ZjJhkp5JRo.jpg',
        id: 610150,
        overview:
            'The Red Ribbon Army, an evil organization that was once destroyed by Goku in the past, has been reformed by a group of people who have created new and mightier Androids, Gamma 1 and Gamma 2, and seek vengeance against Goku and his family.',
        posterPath: 'https://image.tmdb.org/t/p/w500/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg',
        releaseDate: '2022-06-11',
        title: 'Dragon Ball Super: Super Hero'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/dW3fQJrshh2wYDoW4HUA7ZabsN1.jpg',
        id: 763285,
        overview:
            "Decorated veteran Will Sharp, desperate for money to cover his wife's medical bills, asks for help from his adoptive brother Danny. A charismatic career criminal, Danny instead offers him a score: the biggest bank heist in Los Angeles history: $32 million.",
        posterPath: 'https://image.tmdb.org/t/p/w500/zT5ynZ0UR6HFfWQSRf2uKtqCyWD.jpg',
        releaseDate: '2022-03-16',
        title: 'Ambulance'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg',
        id: 361743,
        overview:
            'After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.',
        posterPath: 'https://image.tmdb.org/t/p/w500/wxP2Mzv9CdjOK6t4dNnFGqIQl0V.jpg',
        releaseDate: '2022-05-24',
        title: 'Top Gun: Maverick'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/jIdZmqElYgNwlCsUtCwmN1rDu7I.jpg',
        id: 799876,
        overview:
            'Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes for the only people around who can afford them: a family of vicious gangsters.',
        posterPath: 'https://image.tmdb.org/t/p/w500/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg',
        releaseDate: '2022-02-25',
        title: 'The Outfit'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/qNRkfXBdAuXk9Qs3BEDIfmbAK9w.jpg',
        id: 883502,
        overview:
            "Weeks after the deadly assault on Fortress Camp, Robert makes a daring rescue to save Sasha, the widow of his old nemesis Balzary. But back in the camp's command bunker, it appears Sasha may have devious plans of her own. As a new attack breaks out, Robert is confronted with a familiar face he thought he'd never see again…",
        posterPath: 'https://image.tmdb.org/t/p/w500/61J34xHVVdQHbJ4MSCWQo4e727v.jpg',
        releaseDate: '2022-04-29',
        title: "Fortress: Sniper's Eye"
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/kCmeY4hR5itudGnbFDPl3n4Inhx.jpg',
        id: 825808,
        overview:
            "When blind former skier Sophie cat-sits in a secluded mansion, three thieves invade for the hidden safe. Sophie's only defense is army veteran Kelly, who she meets on the See For Me app. Kelly helps Sophie defend herself against the invaders and survive.",
        posterPath: 'https://image.tmdb.org/t/p/w500/g2n1lFIFXC0lpG32ysUhFi0Uz61.jpg',
        releaseDate: '2021-12-30',
        title: 'See for Me'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/iDeWAGnmloZ5Oz3bocDp4rSbUXd.jpg',
        id: 823625,
        overview:
            'Travis Block is a shadowy Government agent who specializes in removing operatives whose covers have been exposed. He then has to uncover a deadly conspiracy within his own ranks that reaches the highest echelons of power.',
        posterPath: 'https://image.tmdb.org/t/p/w500/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg',
        releaseDate: '2022-02-10',
        title: 'Blacklight'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/pFwvHAFyPEqtvJEoutPuobLwrNj.jpg',
        id: 778810,
        overview:
            'The film explores the world of firefighters in 1920s New York City and tells the story of a 16-year-old girl who will have to become a hero in order to save her city.',
        posterPath: 'https://image.tmdb.org/t/p/w500/hepwOZWJNUmLzB68gKYEdEJAaD3.jpg',
        releaseDate: '2022-01-16',
        title: 'Fireheart'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg',
        id: 752623,
        overview:
            'A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.',
        posterPath: 'https://image.tmdb.org/t/p/w500/neMZH82Stu91d3iqvLdNQfqPPyl.jpg',
        releaseDate: '2022-03-24',
        title: 'The Lost City'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/kiH3KPWi7BaRMvdAigcwrUFViHl.jpg',
        id: 818397,
        overview:
            "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
        posterPath: 'https://image.tmdb.org/t/p/w500/QaNLpq3Wuu2yp5ESsXYcQCOpUk.jpg',
        releaseDate: '2022-04-28',
        title: 'Memory'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/hcNM0HjfPonIzOVy6LVTDBXSfMq.jpg',
        id: 864116,
        overview:
            "A disgraced parole officer is indebted to a local gang leader and forced to pull off a series of dangerous drug heists within twelve hours in order to pay the $2 million dollars he owes, rescue his kidnapped pregnant wife, and settle a score with the city's corrupt police chief, who is working with the gang leader and double-crossed him years ago.",
        posterPath: 'https://image.tmdb.org/t/p/w500/8Kce1utfytAG5m1PbtVoDzmDZJH.jpg',
        releaseDate: '2022-03-04',
        title: 'A Day to Die'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/cugmVwK0N4aAcLibelKN5jWDXSx.jpg',
        id: 768744,
        overview:
            'A mysterious group called Humarize strongly believes in the Quirk Singularity Doomsday theory which states that when quirks get mixed further in with future generations, that power will bring forth the end of humanity. In order to save everyone, the Pro-Heroes around the world ask UA Academy heroes-in-training to assist them and form a world-classic selected hero team. It is up to the heroes to save the world and the future of heroes in what is the most dangerous crisis to take place yet in My Hero Academia.',
        posterPath: 'https://image.tmdb.org/t/p/w500/4NUzcKtYPKkfTwKsLjwNt8nRIXV.jpg',
        releaseDate: '2021-08-06',
        title: "My Hero Academia: World Heroes' Mission"
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/m0YjB4VfghKey8Ppsmz8qCd0v1m.jpg',
        id: 648579,
        overview:
            'Creatively unfulfilled and facing financial ruin, Nick Cage must accept a $1 million offer to attend the birthday of a dangerous superfan. Things take a wildly unexpected turn when Cage is recruited by a CIA operative and forced to live up to his own legend, channeling his most iconic and beloved on-screen characters in order to save himself and his loved ones.',
        posterPath: 'https://image.tmdb.org/t/p/w500/bmxCAO0tz79xn40swJAEIJPRnC1.jpg',
        releaseDate: '2022-04-20',
        title: 'The Unbearable Weight of Massive Talent'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/bcpATvKQmSgCbwxONs9PPQrer3A.jpg',
        id: 616037,
        overview:
            'After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together, they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.',
        posterPath: 'https://image.tmdb.org/t/p/w500/4zLfBbGnuUBLbMVtagTZvzFwS8l.jpg',
        releaseDate: '2022-07-06',
        title: 'Thor: Love and Thunder'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/35nKk3idV96xVae6Bw26iyUfWbr.jpg',
        id: 718789,
        overview:
            'Legendary Space Ranger Buzz Lightyear embarks on an intergalactic adventure alongside a group of ambitious recruits and his robot companion Sox.',
        posterPath: 'https://image.tmdb.org/t/p/w500/tbUhPhir8TGDkD8RruiBAJE9Nd3.jpg',
        releaseDate: '2022-06-15',
        title: 'Lightyear'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/geYUecpFI2AonDLhjyK9zoVFcMv.jpg',
        id: 810693,
        overview:
            "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
        posterPath: 'https://image.tmdb.org/t/p/w500/3pTwMUEavTzVOh6yLN0aEwR7uSy.jpg',
        releaseDate: '2021-12-24',
        title: 'Jujutsu Kaisen 0'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/fIwiFha3WPu5nHkBeMQ4GzEk0Hv.jpg',
        id: 545611,
        overview:
            "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
        posterPath: 'https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg',
        releaseDate: '2022-03-24',
        title: 'Everything Everywhere All at Once'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/2gGVdr0BcKzma68SW2jpZfJtOlB.jpg',
        id: 438148,
        overview:
            'A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.',
        posterPath: 'https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg',
        releaseDate: '2022-06-16',
        title: 'Minions: The Rise of Gru'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/klioTuA8JepFgV0EC7IxqV6VbrM.jpg',
        id: 776797,
        overview:
            'A young couple is pushed to the limits of sanity as they attempt to be reunited amid the chaos of a pandemic outbreak. The streets erupt into violence and depravity, as those infected are driven to enact the most cruel and ghastly things imaginable.',
        posterPath: 'https://image.tmdb.org/t/p/w500/a7VHvhROWorsWrtNKQnLZTxpxuG.jpg',
        releaseDate: '2021-01-22',
        title: 'The Sadness'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/h9zyS1LrufwLI9FyhiPjPWsppEK.jpg',
        id: 756999,
        overview:
            'Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.',
        posterPath: 'https://image.tmdb.org/t/p/w500/bxHZpV02OOu9vq3sb3MsOudEnYc.jpg',
        releaseDate: '2022-05-29',
        title: 'The Black Phone'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/jCSpD2Sj67qOVnOu4b3JsXl8NO4.jpg',
        id: 661231,
        overview:
            'In 1943, two British intelligence officers concoct Operation Mincemeat, wherein their plan to drop a corpse with false papers off the coast of Spain would fool Nazi spies into believing the Allied forces were planning to attack by way of Greece rather than Sicily.',
        posterPath: 'https://image.tmdb.org/t/p/w500/tfdfh1mK24VujxT5z11732asxdR.jpg',
        releaseDate: '2022-04-01',
        title: 'Operation Mincemeat'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/nV905JQSBo0a6zW8UmmmhDj0fQj.jpg',
        id: 826749,
        overview:
            'The story revolves around a top-secret resort for retired U.S. intelligence officers. A group of criminals led by Balzary breach the compound, hellbent on revenge on Robert, forcing the retired officer and his son to save the day.',
        posterPath: 'https://image.tmdb.org/t/p/w500/vQxtoPJVfpHgL7DCg9hQFZKDWJa.jpg',
        releaseDate: '2021-12-17',
        title: 'Fortress'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/iuM006FCrVXqvwLg4R0hkST0HPy.jpg',
        id: 619803,
        overview:
            'Followed by Ma Seok-do, who heads to a foreign country to extradite a suspect. However, he discovers additional murder cases and learns about a killer who had committed crimes against tourists for many years.',
        posterPath: 'https://image.tmdb.org/t/p/w500/v6y1WI9XR9vnhhLhvFfS11mlmIA.jpg',
        releaseDate: '2022-05-18',
        title: 'The Roundup'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/lRm5dRcJKGQqOJ0ZpOekALbrc0k.jpg',
        id: 374205,
        overview:
            'The glittering Gran Tesoro, a city of entertainment beyond the laws of the government, is a sanctuary for the world’s most infamous pirates, Marines, and filthy rich millionaires. Drawn by dreams of hitting the jackpot, Captain Luffy and his crew sail straight for the gold. But behind the gilded curtains lies a powerful king whose deep pockets and deeper ambitions spell disaster for the Straw Hats and the New World alike.',
        posterPath: 'https://image.tmdb.org/t/p/w500/OAXCENRg0smntp0uPhTQMPxs0O.jpg',
        releaseDate: '2016-07-23',
        title: 'One Piece Film: GOLD'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/2oXQpm0wfOkIL0jBJABbL5AfMs6.jpg',
        id: 760104,
        overview:
            'In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.',
        posterPath: 'https://image.tmdb.org/t/p/w500/woTQx9Q4b8aO13jR9dsj8C9JESy.jpg',
        releaseDate: '2022-03-17',
        title: 'X'
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/ejkbJM697dNrtQvIiUpeUPGpoXX.jpg',
        id: 632617,
        overview:
            'Johnny and his young nephew forge a tenuous but transformational relationship when they embark on a cross-country trip to see life away from Los Angeles.',
        posterPath: 'https://image.tmdb.org/t/p/w500/1oOyJsdcJnnE7cl9bZdUQvBjKNH.jpg',
        releaseDate: '2021-11-19',
        title: "C'mon C'mon"
    },
    {
        backdropPath: 'https://image.tmdb.org/t/p/w500/1zgz0LAT3avelWe6whHSa9j7zfq.jpg',
        id: 614934,
        overview:
            'The life story of Elvis Presley as seen through the complicated relationship with his enigmatic manager, Colonel Tom Parker.',
        posterPath: 'https://image.tmdb.org/t/p/w500/rva3UhKaMeiB0Vej5A2pm1leX7K.jpg',
        releaseDate: '2022-06-22',
        title: 'Elvis'
    }
];

function isFuture(dateString) {
    const CURRENT_DATE_STRING = '2022-05-01';

    const currentDate = new Date(CURRENT_DATE_STRING);
    const targetDate = new Date(dateString);

    return targetDate > currentDate;
}

function getNowPlayingMovies() {
    return movies.filter(({ releaseDate }) => !isFuture(releaseDate));
}

function getUpcomingMovies() {
    return movies.filter(({ releaseDate }) => isFuture(releaseDate));
}

function getMovie(id) {
    if (!id) {
        return null;
    }

    const filteredMovies = movies.filter((movie) => movie.id === id);

    if (!filteredMovies.length) {
        return null;
    }

    return filteredMovies[0];
}

function searchMovies(keyword) {
    return movies.filter((movie) => movie.title.toLowerCase().includes(keyword.toLowerCase()));
}

export { getNowPlayingMovies, getUpcomingMovies, getMovie, searchMovies };
