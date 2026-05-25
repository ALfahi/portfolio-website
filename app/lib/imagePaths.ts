// funtions relating to paths

// function that takes in a folder path, and some file names, returns an array of the full relative filepath for all images
export function buildImagePaths(folder: string, files: string[]) {
    const normalisedFolder = folder.replace(/\/+$/, ""); // remove trailing slashes
  
    return files
      .filter(Boolean)
      .map((file) => {
        const cleanFile = file.replace(/^\/+/, ""); // remove leading slashes
        return `${normalisedFolder}/${cleanFile}`;
      });
  }