const gamesData = [
    {
        id: 1,
        title: "The Witcher 3",
        originalTitle: "The Witcher 3: Wild Hunt",
        author: "CD Projekt Red",
        genre: [
            { id: 1, name: "RPG" },
            { id: 2, name: "Open World" }
        ],
        cover: "/assets/covers/the-witcher-3.jpg",
        isThereASequel: false,
        plot: "Geralt di Rivia intraprende un viaggio per trovare la figlia adottiva Ciri mentre il mondo è minacciato dalla Caccia Selvaggia.",
        publishDate: "2015-05-19",
        publisher: "CD Projekt",
        tag: [
            { id: 1, name: "Fantasy" },
            { id: 2, name: "Story Rich" }
        ],
        platforms: ["PC", "PS4", "Xbox One", "Nintendo Switch"],
        rating: 9.8,
        playtimeHours: 120,
        multiplayer: false,
        ageRating: "PEGI 18"
    },
    {
        id: 2,
        title: "God of War",
        originalTitle: "God of War",
        author: "Santa Monica Studio",
        genre: [
            { id: 3, name: "Action" },
            { id: 4, name: "Adventure" }
        ],
        cover: "/assets/covers/god-of-war.jpg",
        isThereASequel: true,
        plot: "Kratos e suo figlio Atreus affrontano creature mitologiche nel mondo della mitologia norrena.",
        publishDate: "2018-04-20",
        publisher: "Sony Interactive Entertainment",
        tag: [
            { id: 3, name: "Mythology" },
            { id: 4, name: "Story Driven" }
        ],
        platforms: ["PS4", "PC"],
        rating: 9.6,
        playtimeHours: 25,
        multiplayer: false,
        ageRating: "PEGI 18"
    },
    {
        id: 3,
        title: "Red Dead Redemption 2",
        originalTitle: "Red Dead Redemption 2",
        author: "Rockstar Games",
        genre: [
            { id: 4, name: "Adventure" },
            { id: 2, name: "Open World" }
        ],
        cover: "/assets/covers/red-dead-redemption-2.jpg",
        isThereASequel: false,
        plot: "Arthur Morgan, fuorilegge della banda Van der Linde, cerca di sopravvivere nel tramonto del selvaggio West.",
        publishDate: "2018-10-26",
        publisher: "Rockstar Games",
        tag: [
            { id: 5, name: "Western" },
            { id: 6, name: "Narrative" }
        ],
        platforms: ["PS4", "Xbox One", "PC"],
        rating: 9.7,
        playtimeHours: 80,
        multiplayer: true,
        ageRating: "PEGI 18"
    },
    {
        id: 4,
        title: "The Last of Us",
        originalTitle: "The Last of Us",
        author: "Naughty Dog",
        genre: [
            { id: 3, name: "Action" },
            { id: 4, name: "Adventure" }
        ],
        cover: "/assets/covers/the-last-of-us.jpg",
        isThereASequel: true,
        plot: "Joel ed Ellie viaggiano in un'America devastata da una pandemia.",
        publishDate: "2013-06-14",
        publisher: "Sony Computer Entertainment",
        tag: [
            { id: 7, name: "Post Apocalyptic" },
            { id: 6, name: "Narrative" }
        ],
        platforms: ["PS3", "PS4", "PS5", "PC"],
        rating: 9.5,
        playtimeHours: 18,
        multiplayer: true,
        ageRating: "PEGI 18"
    },
    {
        id: 5,
        title: "Elden Ring",
        originalTitle: "Elden Ring",
        author: "FromSoftware",
        genre: [
            { id: 1, name: "RPG" },
            { id: 8, name: "Action RPG" }
        ],
        cover: "/assets/covers/elden-ring.jpg",
        isThereASequel: false,
        plot: "Un Senzaluce esplora le Terre dell'Interregno per diventare Elden Lord.",
        publishDate: "2022-02-25",
        publisher: "Bandai Namco Entertainment",
        tag: [
            { id: 9, name: "Soulslike" },
            { id: 2, name: "Open World" }
        ],
        platforms: ["PC", "PS4", "PS5", "Xbox One", "Xbox Series X"],
        rating: 9.4,
        playtimeHours: 90,
        multiplayer: true,
        ageRating: "PEGI 16"
    }
];

export default gamesDataconst games = [
    {
        id: 1,
        title: "The Witcher 3",
        originalTitle: "The Witcher 3: Wild Hunt",
        author: "CD Projekt Red",
        genre: [
            {
                id: 1,
                name: "RPG"
            },
            {
                id: 2,
                name: "Open World"
            }
        ],
        cover: "/assets/covers/the-witcher-3.jpg",
        isThereASequel: false,
        plot: "Geralt di Rivia intraprende un viaggio per trovare la figlia adottiva Ciri mentre il mondo è minacciato dalla Caccia Selvaggia.",
        publishDate: "2015-05-19",
        publisher: "CD Projekt",
        tag: [
            {
                id: 1,
                name: "Fantasy"
            },
            {
                id: 2,
                name: "Story Rich"
            }
        ],
        platforms: [
            "PC",
            "PS4",
            "Xbox One",
            "Nintendo Switch"
        ],
        rating: 9.8,
        playtimeHours: 120,
        multiplayer: false,
        ageRating: "PEGI 18"
    },
    {
        id: 2,
        title: "God of War",
        originalTitle: "God of War",
        author: "Santa Monica Studio",
        genre: [
            {
                id: 3,
                name: "Action"
            },
            {
                id: 4,
                name: "Adventure"
            }
        ],
        cover: "/assets/covers/god-of-war.jpg",
        isThereASequel: true,
        plot: "Kratos e suo figlio Atreus affrontano creature mitologiche nel mondo della mitologia norrena.",
        publishDate: "2018-04-20",
        publisher: "Sony Interactive Entertainment",
        tag: [
            {
                id: 3,
                "name": "Mythology"
            },
            {
                id: 4,
                name: "Story Driven"
            }
        ],
        platforms: [
            "PS4",
            "PC"
        ],
        rating: 9.6,
        playtimeHours: 25,
        multiplayer: false,
        ageRating: "PEGI 18"
    },
    {
        id: 3,
        title: "Red Dead Redemption 2",
        originalTitle: "Red Dead Redemption 2",
        author: "Rockstar Games",
        genre: [
            {
                id: 4,
                name: "Adventure"
            },
            {
                id: 2,
                name: "Open World"
            }
        ],
        cover: "/assets/covers/red-dead-redemption-2.jpg",
        isThereASequel: false,
        plot: "Arthur Morgan, fuorilegge della banda Van der Linde, cerca di sopravvivere nel tramonto del selvaggio West.",
        publishDate: "2018-10-26",
        publisher: "Rockstar Games",
        tag: [
            {
                id: 5,
                name: "Western"
            },
            {
                id: 6,
                name: "Narrative"
            }
        ],
        platforms: [
            "PS4",
            "Xbox One",
            "PC"
        ],
        rating: 9.7,
        playtimeHours: 80,
        multiplayer: true,
        ageRating: "PEGI 18"
    },
    {
        id: 4,
        title: "The Last of Us",
        originalTitle: "The Last of Us",
        author: "Naughty Dog",
        genre: [
            {
                id: 3,
                name: "Action"
            },
            {
                id: 4,
                name: "Adventure"
            }
        ],
        cover: "/assets/covers/the-last-of-us.jpg",
        isThereASequel: true,
        plot: "Joel ed Ellie viaggiano in un'America devastata da una pandemia.",
        publishDate: "2013-06-14",
        publisher: "Sony Computer Entertainment",
        tag: [
            {
                id: 7,
                name: "Post Apocalyptic"
            },
            {
                id: 6,
                name: "Narrative"
            }
        ],
        platforms: [
            "PS3",
            "PS4",
            "PS5",
            "PC"
        ],
        rating: 9.5,
        playtimeHours: 18,
        multiplayer: true,
        ageRating: "PEGI 18"
    },
    {
        id: 5,
        title: "Elden Ring",
        originalTitle: "Elden Ring",
        author: "FromSoftware",
        genre: [
            {
                id: 1,
                name: "RPG"
            },
            {
                id: 8,
                name: "Action RPG"
            }
        ],
        cover: "/assets/covers/elden-ring.jpg",
        isThereASequel: false,
        plot: "Un Senzaluce esplora le Terre dell'Interregno per diventare Elden Lord.",
        publishDate: "2022-02-25",
        publisher: "Bandai Namco Entertainment",
        tag: [
            {
                id: 9,
                name: "Soulslike"
            },
            {
                id: 2,
                name: "Open World"
            }
        ],
        platforms: [
            "PC",
            "PS4",
            "PS5",
            "Xbox One",
            "Xbox Series X"
        ],
        rating: 9.4,
        playtimeHours: 90,
        multiplayer: true,
        ageRating: "PEGI 16"
    }
]

export default games;