async function generateCharacter() {
    const prompt = document.getElementById("prompt").value;
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    document.getElementById("result").innerHTML = `
      <img src="${data.imageUrl}" alt="생성된 캐릭터">
    `;
  }