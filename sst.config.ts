/// <reference path="./.sst/platform/config.d.ts" />



export default $config({
  app(input) {
    return {
      name: "aws-nextjs",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          profile:
            input.stage === "production"
              ? "dillon89-production"
              : "dillon89-dev",
        },
      },
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("S3Bucket", {
      access: "public",
    });
    new sst.aws.Nextjs("MyWeb", { 
      link: [bucket] 
    });
  },
});
