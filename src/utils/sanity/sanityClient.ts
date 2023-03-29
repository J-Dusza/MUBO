import { createClient, type ClientConfig } from "@sanity/client";

// export const client = createClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   token: process.env.SANITY_TOKEN,
//   apiVersion: "2023-03-24",
//   useCdn: false,
// });
export const client = createClient({
  projectId: "a7a34ldq",
  dataset: "production",
  // token:
  //   "skofA4ijaGkrvXiHIe9cSzNLt71i3atpdd12SFfXbYyBWyzPVsrYcbzJTvZHUQkd3eekrgx2FqBfce0ZKZwXnHrk0ZefXpA7DZjXL9SI28rpTUHQ1JlQwMOVmObHOPSgWgRng2u1GsSKVjP7qikRCx3mOMX39qgCQfNUbCfMrLBjayM0PjXG",
  apiVersion: "2023-03-24",
  useCdn: false,
});
