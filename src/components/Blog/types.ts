

export interface BlogData {
    status: string;
    feed:   Feed;
    items:  Post[];
}

export interface Feed {
    url:         string;
    title:       string;
    link:        string;
    author:      string;
    description: string;
    image:       string;
}

export interface Post {
    title:       string;
    pubDate:     Date;
    link:        string;
    guid:        string;
    author:      string;
    thumbnail:   string;
    description: string;
    content:     string;
    enclosure:   Enclosure;
    categories:  any[];
}

export interface Enclosure {
    guid: string;
    link: string;
    pubDate: Date;
    thumbnail: string;
    title: string;
}


