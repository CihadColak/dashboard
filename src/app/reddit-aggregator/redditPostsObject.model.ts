export interface NewsObjectModel {
  url_overridden_by_dest: string;
  title: string;

}

export interface RedditPostsObjectModel {
  data: {
    children: [
      {
        data: NewsObjectModel
      }
    ]
  }

}
