// In a real app, this would interact with a Python (Flask/FastAPI) backend

import { GoogleGenerativeAI } from '@google/generative-ai';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
}

const API_BASE_URL = '/api'; // This would point to your Flask/FastAPI backend

export const generateResume = async (resumeData: any, template: string): Promise<ApiResponse<string>> => {
  try {
    // In a real application, this would make an actual API request
    console.log('Generating resume with template:', template, 'and data:', resumeData);
    
    // Simulate API response delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return a mock PDF URL
    return { data: 'resume.pdf' };
  } catch (error) {
    console.error('Error generating resume:', error);
    return { error: 'Failed to generate resume. Please try again.' };
  }
};

export interface AiProvider {
  name: string;
  apiKey: string;
  model: string;
}

export const AI_PROVIDERS = {
  OPENAI: {
    name: 'OpenAI',
    model: 'gpt-3.5-turbo',
    endpoint: 'https://api.openai.com/v1/chat/completions'
  },
  ANTHROPIC: {
    name: 'Anthropic',
    model: 'claude-3-opus-20240229',
    endpoint: 'https://api.anthropic.com/v1/messages'
  }
} as const;

export const optimizeLinkedIn = async (text: string): Promise<ApiResponse<{
  bio: string;
  headlines: string[];
  skills: string[];
}>> => {
  try {
    console.log('Starting LinkedIn optimization...');

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim();
    console.log('API Key available:', !!apiKey);
    
    if (!apiKey) {
      throw new Error('Gemini API key is not configured');
    }

    try {
      console.log('Initializing Gemini...');
      const genAI = new GoogleGenerativeAI(apiKey);
      console.log('Getting model...');
      
      const model = genAI.getGenerativeModel({ 
        model: "gemini-pro",  // Using the standard model name
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 2048,
        },
      });

      console.log('Preparing prompt...');
      const prompt = `You are a professional LinkedIn profile optimizer. Your task is to enhance the given LinkedIn content to make it more impactful and professional. Focus on highlighting achievements, using industry-relevant keywords, and creating compelling headlines. Format your response exactly like this:

Bio:
[The optimized bio here]

Headlines:
1. [First headline]
2. [Second headline]
3. [Third headline]

Skills:
1. [First skill]
2. [Second skill]
3. [Third skill]
4. [Fourth skill]
5. [Fifth skill]

Please optimize this LinkedIn content: ${text}`;

      console.log('Generating content...');
      try {
        const result = await model.generateContent(prompt);
        console.log('Content generated, getting response...');
        const response = await result.response;
        console.log('Got response, extracting text...');
        const content = response.text();
        console.log('Raw content:', content);

        // Parse the AI response
        const sections = content.split('\n\n');
        let bio = '';
        let headlines: string[] = [];
        let skills: string[] = [];

        sections.forEach(section => {
          if (section.toLowerCase().includes('bio:')) {
            bio = section.replace(/bio:/i, '').trim();
          } else if (section.toLowerCase().includes('headlines:')) {
            headlines = section
              .replace(/headlines:/i, '')
              .trim()
              .split('\n')
              .map(h => h.replace(/^\d+\.\s*/, '').trim())
              .filter(h => h);
          } else if (section.toLowerCase().includes('skills:')) {
            skills = section
              .replace(/skills:/i, '')
              .trim()
              .split('\n')
              .map(s => s.replace(/^\d+\.\s*/, '').trim())
              .filter(s => s);
          }
        });

        // Validate the parsed content
        if (!bio && !headlines.length && !skills.length) {
          console.error('Failed to parse AI response:', content);
          throw new Error('Failed to parse AI response properly');
        }

        return {
          data: {
            bio,
            headlines,
            skills
          }
        };
      } catch (generateError) {
        console.error('Error during content generation:', generateError);
        throw new Error(`Failed to generate content: ${generateError.message}`);
      }
    } catch (initError) {
      console.error('Error initializing Gemini:', initError);
      throw new Error(`Failed to initialize Gemini: ${initError.message}`);
    }
  } catch (error) {
    console.error('Error optimizing LinkedIn:', error);
    return { error: error instanceof Error ? error.message : 'Failed to optimize LinkedIn content. Please try again.' };
  }
};

export const optimizeLinkedInWithLlama = async (text: string): Promise<ApiResponse<{
  bio: string;
  headlines: string[];
  skills: string[];
}>> => {
  try {
    const REPLICATE_API_TOKEN = import.meta.env.VITE_REPLICATE_API_KEY?.trim();
    
    if (!REPLICATE_API_TOKEN) {
      throw new Error('Replicate API token is not configured');
    }

    console.log('Starting Llama optimization...');
    
    // Using Meta's Llama 2 70B Chat model through proxy
    const response = await fetch("/api/replicate/predictions", {
      method: "POST",
      headers: {
        "Authorization": `Token ${REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: "f4e2de70d66816a838a89eeeb621910adffb0dd0baba3976c96980970978018d",
        input: {
          prompt: `Please help optimize this LinkedIn profile content. Make it professional and impactful:

${text}

Format your response exactly as follows:

Bio:
[write an optimized professional bio]

Headlines:
1. [write first headline option]
2. [write second headline option]
3. [write third headline option]

Skills:
1. [first key skill]
2. [second key skill]
3. [third key skill]
4. [fourth key skill]
5. [fifth key skill]`,
          max_length: 2000,
          temperature: 0.7,
          top_p: 0.9,
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Response:', errorText);
      throw new Error('Failed to start optimization: ' + errorText);
    }

    const prediction = await response.json();
    console.log('Prediction started:', prediction);

    // Poll for results through proxy
    let result = null;
    let attempts = 0;
    const maxAttempts = 30;

    while (attempts < maxAttempts) {
      const pollResponse = await fetch(`/api/replicate/predictions/${prediction.id}`, {
        headers: {
          "Authorization": `Token ${REPLICATE_API_TOKEN}`,
        }
      });

      if (!pollResponse.ok) {
        throw new Error('Failed to check prediction status');
      }

      result = await pollResponse.json();
      console.log('Poll status:', result.status);

      if (result.status === 'succeeded') {
        break;
      } else if (result.status === 'failed') {
        throw new Error('Optimization failed: ' + (result.error || 'Unknown error'));
      }

      await new Promise(resolve => setTimeout(resolve, 2000));
      attempts++;
    }

    if (!result || result.status !== 'succeeded') {
      throw new Error('Optimization timed out');
    }

    const output = result.output;
    console.log('Raw output:', output);

    // Parse the response
    const content = Array.isArray(output) ? output.join('') : output;
    const sections = content.split('\n\n');
    
    let bio = '';
    let headlines: string[] = [];
    let skills: string[] = [];

    for (const section of sections) {
      const lower = section.toLowerCase();
      if (lower.includes('bio:')) {
        bio = section.replace(/bio:/i, '').trim();
      } else if (lower.includes('headlines:')) {
        headlines = section
          .replace(/headlines:/i, '')
          .trim()
          .split('\n')
          .filter(line => line.trim())
          .map(line => line.replace(/^\d+\.\s*/, '').trim());
      } else if (lower.includes('skills:')) {
        skills = section
          .replace(/skills:/i, '')
          .trim()
          .split('\n')
          .filter(line => line.trim())
          .map(line => line.replace(/^\d+\.\s*/, '').trim());
      }
    }

    return {
      data: { bio, headlines, skills }
    };
  } catch (error) {
    console.error('LinkedIn optimization error:', error);
    return {
      error: error instanceof Error ? error.message : 'Failed to optimize LinkedIn content'
    };
  }
};

export const optimizeLinkedInWithMistral = async (text: string): Promise<ApiResponse<{
  bio: string;
  headlines: string[];
  skills: string[];
}>> => {
  try {
    const TOGETHER_API_KEY = import.meta.env.VITE_TOGETHER_API_KEY?.trim();
    
    if (!TOGETHER_API_KEY) {
      throw new Error('Together AI API key is not configured');
    }

    console.log('Starting Mistral optimization...');
    
    const response = await fetch("https://api.together.xyz/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${TOGETHER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "mistralai/Mistral-7B-Instruct-v0.2",
        messages: [
          {
            role: "system",
            content: "You are a professional LinkedIn profile optimizer. Your task is to enhance LinkedIn content to make it more impactful and professional. Focus on highlighting achievements, using industry-relevant keywords, and creating compelling headlines."
          },
          {
            role: "user",
            content: `Please optimize this LinkedIn profile content and format your response exactly as follows:

Bio:
[write an optimized professional bio]

Headlines:
1. [write first headline option]
2. [write second headline option]
3. [write third headline option]

Skills:
1. [first key skill]
2. [second key skill]
3. [third key skill]
4. [fourth key skill]
5. [fifth key skill]

Content to optimize: ${text}`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 0.9
      })
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      console.error('Together AI API error:', errorData);
      throw new Error(errorData?.error?.message || 'Failed to generate optimization');
    }

    const result = await response.json();
    console.log('Raw response:', result);

    if (!result.choices?.[0]?.message?.content) {
      throw new Error('No content generated');
    }

    const content = result.choices[0].message.content;
    console.log('Generated content:', content);

    // Parse the response
    const sections = content.split('\n\n');
    let bio = '';
    let headlines: string[] = [];
    let skills: string[] = [];

    for (const section of sections) {
      const lower = section.toLowerCase();
      if (lower.includes('bio:')) {
        bio = section.replace(/bio:/i, '').trim();
      } else if (lower.includes('headlines:')) {
        headlines = section
          .replace(/headlines:/i, '')
          .trim()
          .split('\n')
          .filter(line => line.trim())
          .map(line => line.replace(/^\d+\.\s*/, '').trim());
      } else if (lower.includes('skills:')) {
        skills = section
          .replace(/skills:/i, '')
          .trim()
          .split('\n')
          .filter(line => line.trim())
          .map(line => line.replace(/^\d+\.\s*/, '').trim());
      }
    }

    return {
      data: { bio, headlines, skills }
    };
  } catch (error) {
    console.error('LinkedIn optimization error:', error);
    return {
      error: error instanceof Error ? error.message : 'Failed to optimize LinkedIn content'
    };
  }
};

// Function to list available models
export const listAvailableModels = async (): Promise<ApiResponse<string[]>> => {
  try {
    console.log('Fetching available models...');
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY?.trim();
    
    if (!apiKey) {
      throw new Error('Gemini API key is not configured');
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // List available models
    const models = await genAI.listModels();
    console.log('Available models:', models);
    
    return {
      data: models.map(model => `${model.name} (${model.description})`)
    };
  } catch (error) {
    console.error('Error listing models:', error);
    return { error: error instanceof Error ? error.message : 'Failed to list models' };
  }
};
