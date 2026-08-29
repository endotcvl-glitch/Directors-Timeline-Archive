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
    },
    {
        slug: "edgar-wright",
        director: "Edgar Wright",
        directorJa: "エドガー・ライト",
        featuredFilm: {
            title: "The World's End",
            titleJa: "ワールズ・エンド 酔っぱらいが世界を救う！",
            year: 2013
        },
        heading: "この監督のこの一本",
        excerpt: "『ワールズ・エンド』は、スピーディーなアクションとユーモア、緻密な伏線、そして大胆なジャンル転換にエドガー・ライトらしさが詰まった一本です。"
    },
    {
        slug: "john-carpenter",
        director: "John Carpenter",
        directorJa: "ジョン・カーペンター",
        featuredFilm: {
            title: "Escape from New York",
            titleJa: "ニューヨーク1997",
            year: 1981
        },
        heading: "この監督のこの一本",
        excerpt: "『ニューヨーク1997』は、閉ざされた空間、シンセサイザーによる音楽、反権威的な主人公に、ジョン・カーペンターの揺るがないスタイルが表れた一本です。"
    }
];

window.editorNotes = editorNotes;
