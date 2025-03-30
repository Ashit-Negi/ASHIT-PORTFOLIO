export const sendContactMessage = async ({ name, email, message, number }) => {
  try {
    console.log("Sending request...");

    const response = await fetch(
      "https://ashit-portfolio-1.onrender.com/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message, number }),
      }
    );

    const data = await response.json();

    console.log("Response received:", data);

    if (!response.ok) {
      console.error("Error response:", data);
      throw new Error(data.error || "Something went wrong");
    }

    console.log("Message sent successfully!");
    return data; // Success response
  } catch (error) {
    console.error("Error sending message:", error.message);
    throw error; // This error is handled in Redux
  }
};
