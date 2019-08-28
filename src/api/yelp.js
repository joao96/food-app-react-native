import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer vmoC10ZoXunJxCSRHKliepKixtBUrOr42NXKmQjNfaINpNwmaqzIKCHRnjk3hVhXG6wSUwT8AcdPtRHLY5QW7Dd_non50YQkymBjySQrqfem9wc7xT87qxRMRDdlXXYx"
  }
});
// when using this component in another js, we just need to type
// something like: yelp.get("/search")
// and it will automatically attach the baseURL to the given route
