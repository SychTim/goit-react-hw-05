import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export async function getTrandingList() {
  const data = await axios.get("trending/movie/day", {
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjdlNzM5N2YyNzg2OTg0ZmRkNzBlYmQ4NDM0MTFkOCIsIm5iZiI6MTcyNTk2OTIwOC4yMTc1ODgsInN1YiI6IjY2ZTAyZWNkYjhkY2Y3NzFkNDkyM2VlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95q3NBrKDnPRZpV8N8pb1tKoCQTkdQKroxSny5XBKQM",
    },
  });

  return data;
}

export async function getMovieByID(id) {
  const data = await axios.get(`movie/${id}`, {
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjdlNzM5N2YyNzg2OTg0ZmRkNzBlYmQ4NDM0MTFkOCIsIm5iZiI6MTcyNTk2OTIwOC4yMTc1ODgsInN1YiI6IjY2ZTAyZWNkYjhkY2Y3NzFkNDkyM2VlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95q3NBrKDnPRZpV8N8pb1tKoCQTkdQKroxSny5XBKQM",
    },
  });

  return data;
}

export async function getMovieByName(name) {
  const data = await axios.get(`search/movie`, {
    params: {
      include_adult: "false",
      language: "en-US",
      page: "1",
      query: name,
    },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjdlNzM5N2YyNzg2OTg0ZmRkNzBlYmQ4NDM0MTFkOCIsIm5iZiI6MTcyNTk2OTIwOC4yMTc1ODgsInN1YiI6IjY2ZTAyZWNkYjhkY2Y3NzFkNDkyM2VlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95q3NBrKDnPRZpV8N8pb1tKoCQTkdQKroxSny5XBKQM",
    },
  });

  return data;
}

export async function getCastByID(id) {
  const data = await axios.get(`movie/${id}/credits`, {
    params: { language: "en-US" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjdlNzM5N2YyNzg2OTg0ZmRkNzBlYmQ4NDM0MTFkOCIsIm5iZiI6MTcyNTk2OTIwOC4yMTc1ODgsInN1YiI6IjY2ZTAyZWNkYjhkY2Y3NzFkNDkyM2VlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95q3NBrKDnPRZpV8N8pb1tKoCQTkdQKroxSny5XBKQM",
    },
  });

  return data;
}

export async function getReviewsByID(id) {
  const data = await axios.get(`movie/${id}/reviews`, {
    params: { language: "en-US", page: "1" },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjdlNzM5N2YyNzg2OTg0ZmRkNzBlYmQ4NDM0MTFkOCIsIm5iZiI6MTcyNTk2OTIwOC4yMTc1ODgsInN1YiI6IjY2ZTAyZWNkYjhkY2Y3NzFkNDkyM2VlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.95q3NBrKDnPRZpV8N8pb1tKoCQTkdQKroxSny5XBKQM",
    },
  });

  return data;
}
