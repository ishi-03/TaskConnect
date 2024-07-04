const controlRequest = async (url, option) => {
  try {
    const result = await fetch(url, option);
    if (!result.ok) {
      throw new Error(`HTTP error! Status: ${result.status}`);
    }
    const data = await result.json();
    return data;
  } catch (err) {
    console.error('Error:', err);
    throw err;
  }
};

export default controlRequest;