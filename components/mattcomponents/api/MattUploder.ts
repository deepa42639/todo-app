import { NextRequest } from "next/server";
import fs from "fs";
import path from "path";

export async function MattUploader(fileKey:string,formData: FormData, uploadPath: string = "MattUploads", fileName?: string): Promise<{ message?: string, error?: string, filePath?: string }> {
  try {
    const data = formData
    const file = data.get(fileKey) as File;

    if (!file) {
      return { error: "No file uploaded" };
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Determine the file type based on the file's MIME type
    const mimeType = file.type.split('/')[0];
    const fileExtension = path.extname(file.name).toLowerCase();
    
    // Define the folder name based on file type
    let folderName: string;
    switch (mimeType) {
      case 'image':
        folderName = 'Images';
        break;
      case 'video':
        folderName = 'Videos';
        break;
      case 'audio':
        folderName = 'Sounds';
        break;
      case 'application':
        if (['.pdf', '.doc', '.docx', '.xls', '.xlsx'].includes(fileExtension)) {
          folderName = 'Documents';
        } else {
          folderName = 'Others';
        }
        break;
      default:
        folderName = 'Others';
        break;
    }

    // Handle file name and extension
    let finalFileName = fileName ? fileName : file.name;
    if (!path.extname(finalFileName)) {
      finalFileName += fileExtension; // Append the extension if not already present
    }

    // Define the path to save the file
    const savePath = path.join(process.cwd(), uploadPath, folderName, finalFileName);

    // Ensure the directory exists
    fs.mkdirSync(path.dirname(savePath), { recursive: true });
    
    // Write the file to the directory
    fs.writeFileSync(savePath, buffer);
    
    return { filePath: `/${folderName}/${finalFileName}` };
  } catch (error) {
    console.error("Error saving file:", error);
    return { error: "Failed to save file" };
  }
}
