import { createClient, type ClientConfig } from "@sanity/client";


const config: ClientConfig = {
    projectId: "10hspbsv",
    dataset: "production",
    apiVersion: "2023-08-04",
    useCdn: false,
  };

  const client = createClient(config);

  export default client;