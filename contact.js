app.post("/contact", (req, res) => {
  console.log(req.body);  // should print the form values
  res.json({ success: true });
});

document.getElementById("contact-form").addEventListener("submit", async function(event) {
  event.preventDefault(); // stop page reload

  const form = event.target;
  const formData = new FormData(form);

  // Transform keys if backend doesn’t like contact[name] format
  let plainData = {};
  formData.forEach((value, key) => {
    const cleanKey = key.replace(/^contact\[|\]$/g, "");
    plainData[cleanKey] = value;
  });

  try {
    const response = await fetch("/contact", {   // adjust endpoint!
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(plainData)
    });

    if (!response.ok) throw new Error("Failed");
    document.getElementById("alert_success").style.display = "block";
  } catch (err) {
    document.getElementById("alert_failed").style.display = "block";
  }
});
