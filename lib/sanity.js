import SanityClient from "@sanity/client";

export const client = SanityClient({
 projectId: "cyybr873",
 dataset: "production",
 apiversion: "2021-03-25",
 token:
  "skbRFanOY0MATWVffAMO7GN1pd45ww8wA9hknZHJmRGTgdFPI8Pv0TVH2omkhEgPygHrluzWL9h4vveQ1kijZF7bSiUf31uSvLKKZNF38dOTcEmkVJhNeH8To2yMESX7Q0GYNhmGe1Yt5tgAFvJG1rh8lCVHnYvj9Eu3GQU7mv0EI5k26n8D",
 useCdn: false, // get fresh data always
});
