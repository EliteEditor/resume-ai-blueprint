export const optimizeLinkedInWithMistral = async (content: string): Promise<OptimizationResponse> => {
  try {
    const response = await fetch('https://api.together.xyz/inference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_TOGETHER_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'mistralai/Mistral-7B-Instruct-v0.2',
        prompt: `You are an expert LinkedIn profile optimizer and career coach. Analyze the following LinkedIn content and provide detailed, professional recommendations for improvement. Focus on creating a compelling narrative that highlights achievements, skills, and professional value.

Current Content:
${content}

Please provide specific, actionable recommendations for:
1. Bio/About Section:
   - Create a compelling professional summary (2-3 paragraphs)
   - Highlight key achievements with quantifiable results
   - Emphasize unique value proposition
   - Include relevant industry keywords
   - Maintain a professional yet engaging tone
   - Structure with clear sections for experience, skills, and goals

2. Headline:
   - Create 3 professional headline options
   - Include current role and key expertise
   - Add industry-specific keywords
   - Make it attention-grabbing yet professional

3. Skills:
   - List 10-15 most relevant technical and soft skills
   - Prioritize industry-specific skills
   - Include emerging technologies if relevant
   - Balance between hard and soft skills

Format the response as a JSON object with the following structure:
{
  "bio": "Detailed bio recommendations...",
  "headlines": ["Headline 1", "Headline 2", "Headline 3"],
  "skills": ["Skill 1", "Skill 2", ...]
}`,
        max_tokens: 2000,
        temperature: 0.7,
        top_p: 0.9,
        top_k: 50,
        repetition_penalty: 1.1,
        stop: ['</s>', '```']
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    const optimizationText = data.output.choices[0].text;
    
    // Parse the JSON response
    const optimizationData = JSON.parse(optimizationText);
    
    return {
      bio: optimizationData.bio,
      headlines: optimizationData.headlines,
      skills: optimizationData.skills
    };
  } catch (error) {
    console.error('Error optimizing LinkedIn content:', error);
    throw error;
  }
}; 