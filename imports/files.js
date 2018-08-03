import { FilesCollection } from "meteor/ostrio:files";

const Audio = new FilesCollection({
  collectionName: "Audio",
  allowClientCode: false, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB
    if (file.size <= 10485760 && /mp4|wav|mp3/i.test(file.extension)) {
      return true;
    }
    return "Please upload audio file , with size equal or less than 10MB";
  }
});

export default Audio;
