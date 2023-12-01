  // get ID from URL config of item
  export const getId = (url: string) => {
    const matchResult = url.match(/\/(\d+)\/$/);

    if (matchResult && matchResult[1]) {
      const number = matchResult[1];
      return number;
    } else {
      console.error("Matching pattern not found in URL");
      return null; // Or handle the situation accordingly
    }
  };