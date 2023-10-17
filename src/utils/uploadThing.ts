import { generateComponents } from "@uploadthing/react";
 
import type { OurFileRouter } from "~/server/uploadThing";
 
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();