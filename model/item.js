class Item {
    constructor(id, info) {
        this.id = id;
        this.itemType = info.itemType;

        this.title = info.title;
        this.author = info.author;
        this.format = info.format;
        this.pages = info.pages;
        this.publisher = info.publisher;
        this.language = info.language;
        this.isbn10 = info.isbn10;
        this.isbn13 = info.isbn13;

        this.director = info.director;
        this.producers = info.producers;
        this.actors = info.actors;
        this.subtitles = info.subtitles;
        this.dubbed = info.dubbed;
        this.releaseDate = info.releaseDate;
        this.runTime = info.runTime;

        this.type = info.type;
        this.artist = info.artist;
        this.label = info.label;
        this.asin = info.asin;
    }
}

module.exports = Item;