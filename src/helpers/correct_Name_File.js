export function correct_Name_File(content){
  const invalidChars = /[<>:"/\\|?*\x00-\x1F]/;
    if (invalidChars.test(content)) {
        return false;
    }
    return true;
}

