import Route from "@ember/routing/route";
import fetch from "fetch";

export default class IndexRoute extends Route {
  queryParams = {
    page: {
      refreshModel: true,
    },
  };

  async model(params) {
    //set up api
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=4517228c3cc695f9dfa1dcb4c4979152&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=" +
        params.page
    );
    const data = await response.json();

    //return results portion of json
    console.log(data.results);
    return data.results;
  }
}
