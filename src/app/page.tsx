import { Resource } from "sst";
import Form from "@/components/form";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import styles from "./page.module.css";

export default async function Home() {
  const command = new PutObjectCommand({
    Key: crypto.randomUUID(),
    Bucket: Resource.S3Bucket.name,
  });
  const url = await getSignedUrl(new S3Client({}), command);
  return (
    <main className={styles.main}>
      <Form url={url} />
      Hello World
    </main>
  );
}