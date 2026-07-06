const editorNotes = [
    {
        slug: "david-lynch",
        director: "David Lynch",
        directorJa: "デイヴィッド・リンチ",
        featuredFilm: {
            title: "Eraserhead",
            titleJa: "イレイザーヘッド",
            year: 1977
        },
        heading: "この監督のこの一本",
        excerpt: "『イレイザーヘッド』はモノクロ作品で、内容的にも決して万人向けではありません。しかし、リンチという映画監督の原点を知る一本として、この作品を紹介しました。"
    },
    {
        slug: "wes-craven",
        director: "Wes Craven",
        directorJa: "ウェス・クレイヴン",
        featuredFilm: {
            title: "A Nightmare on Elm Street",
            titleJa: "エルム街の悪夢",
            year: 1984
        },
        featuredFilms: [
            {
                title: "A Nightmare on Elm Street",
                titleJa: "エルム街の悪夢",
                year: 1984
            },
            {
                title: "Scream",
                titleJa: "スクリーム",
                year: 1996
            }
        ],
        heading: "この監督のこの一本",
        excerpt: "『エルム街の悪夢』と『スクリーム』。ホラー映画史に残るこの二つのシリーズを生み出しただけでも、ウェス・クレイヴンという映画監督の存在は特別です。"
    }
];

window.editorNotes = editorNotes;
