export const fetchFileUtil = async (
  filePath: string,
  fileType: string
): Promise<Response> => {
  try {
    const response = await fetch(filePath, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    switch (fileType.toUpperCase()) {
      case "JSON":
        return response.json();
      default:
        return response;
    }
  } catch (error: any) {
    return error;
  }
};
