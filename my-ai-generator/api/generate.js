const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const { prompt } = req.body;
    
    // DeepSeek API 호출
    const response = await axios.post(
      'https://api.deepseek.com/v1/images/generate',
      {
        prompt: `웹툰 스타일의 ${prompt} 캐릭터`,
        size: "512x512"
      },
      { headers: { Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}` } }
    );

    res.json({ imageUrl: response.data.url });
  } catch (error) {
    res.status(500).json({ error: "캐릭터 생성 실패!" });
  }
};