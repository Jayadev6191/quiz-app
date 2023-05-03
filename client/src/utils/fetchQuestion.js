export const fetchQuestion = async (questionNumber) => {
  try {
    const apiBaseUrl = `http://${window.location.hostname}:5000`;
    const response = await fetch(`${apiBaseUrl}/questions/${questionNumber}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
